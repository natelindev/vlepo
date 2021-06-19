import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { OauthButton, OauthButtonSection } from 'src/components/Button';
import GradientButton from 'src/components/GradientButton';
import { ErrorText, Form, Input, InputGroup, Label } from 'src/components/Input';
import Loading from 'src/components/Loading';
import { usePopupWindow } from 'src/hooks/usePopupWindow';

import { Check } from '@emotion-icons/material-outlined';

import {
  LoginInput as LoginInputType,
  LoginModal_Mutation,
  LoginModal_MutationResponse,
} from '../../../__generated__/LoginModal_Mutation.graphql';
import BaseModal, { BaseModalProps } from '../BaseModal';

type LoginModalProps = BaseModalProps;
const LoginModal = (props: LoginModalProps) => {
  const { open, onClose } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputType>();
  const router = useRouter();

  const onSubmit = (data: LoginInputType) =>
    mutate({
      variables: {
        input: data,
      },
    });

  const onModalClose = () => {
    onClose?.();
    reset();
  };

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
          setTimeout(() => router.reload(), 1000);
          onModalClose();
        } else if (LoginMutation?.error) {
          addToast(`Login failed, ${LoginMutation?.error}`, {
            appearance: 'error',
          });
        }
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
    <BaseModal width={[0.9, 0.5, 0.25]} open={open} onClose={onModalClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Email</Label>
          <Input autoComplete="email" {...register('email')} />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input autoComplete="current-password" type="password" {...register('password')} />
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
        <GradientButton my="0.5rem" type="submit">
          {loading ? <Loading size={24} /> : <Check size={24} />}
        </GradientButton>
      </Form>
    </BaseModal>
  );
};

export default LoginModal;
