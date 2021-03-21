import { decode } from 'base-64';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { graphql } from 'react-relay';
import { useTransition } from 'react-spring';
import { useToasts } from 'react-toast-notifications';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'relay-hooks';
import { currentUserState } from 'src/atoms/user';
import { LoginButton } from 'src/components/Navbar/style';
import { InputGroup } from 'src/components/SearchBar/style';
import { usePopupWindow } from 'src/hooks/usePopupWindow';
import { StyledModalProps } from 'styled-modal';

import { IdToken } from '@vlepo/shared';

import {
  LoginInput as LoginInputType,
  LoginModal_Mutation,
  LoginModal_MutationResponse,
} from '../../../__generated__/LoginModal_Mutation.graphql';
import { getCookie } from '../../../hooks/useCookie';
import {
  BaseAnimatedContainer,
  BaseModal,
  ErrorText,
  Label,
  LoginForm,
  LoginInput,
  OauthButton,
  OauthButtonSection,
} from './style';

const LoginModal = (props: StyledModalProps): React.ReactElement => {
  const { open, onClose } = props;
  const { register, handleSubmit, errors, reset } = useForm<LoginInputType>();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const onSubmit = (data: LoginInputType) =>
    mutate({
      variables: {
        input: data,
      },
    });

  const transitions = useTransition(open, null, {
    from: { position: 'absolute', transform: 'translate3d(0,-30px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-30px,0)', opacity: 0 },
    config: {
      duration: 200,
      tension: 300,
      mass: 0.5,
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
            getCookie<IdToken>('idToken', { decode: (v: string) => JSON.parse(decode(v)) }),
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
    <>
      {transitions.map(
        ({ item, key, props: styles }) =>
          item && (
            <BaseModal
              modalComponent={BaseAnimatedContainer}
              key={key}
              style={styles}
              onClose={onClose}
            >
              <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                  <Label>Email</Label>
                  <LoginInput
                    autoComplete="email"
                    name="email"
                    ref={register({
                      required: 'email is required',
                      pattern: /.+@.+/,
                    })}
                  />
                  {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </InputGroup>
                <InputGroup>
                  <Label>Password</Label>
                  <LoginInput
                    autoComplete="current-password"
                    type="password"
                    name="password"
                    ref={register({ required: 'password is required' })}
                  />
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
                        <Image
                          src={`/images/logo/${provider}.svg`}
                          height={24}
                          width={24}
                          layout="fixed"
                        />
                      </OauthButton>
                    ))}
                </OauthButtonSection>
                <LoginButton colorA="#5CC6EE" colorB="#3232FF" type="submit">
                  {loading ? 'Login...' : 'Login'}
                </LoginButton>
              </LoginForm>
            </BaseModal>
          ),
      )}
    </>
  );
};

export default LoginModal;
