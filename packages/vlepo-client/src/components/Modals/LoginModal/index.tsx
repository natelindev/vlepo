import { decode } from 'base-64';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { graphql } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'relay-hooks';
import { currentUserState } from 'src/atoms/user';
import { LoginButton } from 'src/components/UserSection/style';
import { usePopupWindow } from 'src/hooks/usePopupWindow';

import { IdToken } from '@vlepo/shared';

import {
  LoginInput as LoginInputType,
  LoginModal_Mutation,
  LoginModal_MutationResponse,
} from '../../../__generated__/LoginModal_Mutation.graphql';
import { getCookie } from '../../../hooks/useCookie';
import BaseModal, { BaseModalProps } from '../BaseModal';
import {
  ErrorText,
  InputGroup,
  Label,
  LoginForm,
  LoginInput,
  OauthButton,
  OauthButtonSection,
} from './style';

type LoginModalProps = BaseModalProps;
const LoginModal = (props: LoginModalProps) => {
  const { open, onClose } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputType>();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const onSubmit = (data: LoginInputType) =>
    mutate({
      variables: {
        input: data,
      },
    });

  const { addToast } = useToasts();

  const [mutate, { loading }] = useMutation<LoginModal_Mutation>(
    graphql`
      mutation LoginModal_Mutation($input: LoginInput!) {
        LoginMutation(LoginInput: $input) {
          ok
          error
        }
      }
    `,
    {
      onCompleted: ({ LoginMutation }: LoginModal_MutationResponse) => {
        if (LoginMutation?.ok) {
          addToast(`Login succeed`, {
            appearance: 'success',
          });
          onClose?.();
          setCurrentUser(
            getCookie<IdToken>('idToken', {
              decode: (v: string) => JSON.parse(decode(v)),
            }),
          );
        } else if (LoginMutation?.error) {
          addToast(`Login failed, ${LoginMutation?.error}`, {
            appearance: 'error',
          });
          onClose?.();
        }
        reset();
      },
      onError: (error) => {
        addToast(`Login failed, ${error}`, {
          appearance: 'error',
        });
        onClose?.();
        reset();
      },
    },
  );

  const { createWindow: openOauthWindow } = usePopupWindow();
  return (
    <BaseModal open={open} onClose={onClose}>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Email</Label>
          <LoginInput autoComplete="email" {...register('email')} />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <LoginInput autoComplete="current-password" type="password" {...register('password')} />
        </InputGroup>
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        <OauthButtonSection>
          {process.env.NEXT_PUBLIC_SUPPORTED_OAUTH_PROVIDERS &&
            process.env.NEXT_PUBLIC_SUPPORTED_OAUTH_PROVIDERS.split(',').map((provider) => (
              <OauthButton
                key={provider}
                type="button"
                onClick={() =>
                  openOauthWindow(
                    `/api/connect/${provider}`,
                    `User Oauth`,
                    provider === 'reddit' ? 1000 : 400,
                    600,
                  )
                }
              >
                <Image src={`/images/logo/${provider}.svg`} height={24} width={24} layout="fixed" />
              </OauthButton>
            ))}
        </OauthButtonSection>
        <LoginButton type="submit">{loading ? 'Login...' : 'Login'}</LoginButton>
      </LoginForm>
    </BaseModal>
  );
};

export default LoginModal;
