import React from 'react';
import { useForm } from 'react-hook-form';
import { graphql } from 'react-relay';
import { animated, AnimatedValue, ForwardedProps, useTransition } from 'react-spring';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import Modal, { StyledModalProps } from 'styled-modal';

import styled from '@emotion/styled';

import {
  LoginInput as LoginInputType,
  LoginModal_Mutation,
  LoginModal_MutationResponse,
} from '../../__generated__/LoginModal_Mutation.graphql';
import GradientButton from '../GradientButton';

const BaseModal = styled(Modal)<{
  style: AnimatedValue<ForwardedProps<ForwardedProps<React.CSSProperties>>>;
}>`
  border-radius: 0.5rem;
`;

const BaseAnimatedContainer = styled(animated.div)<StyledModalProps>`
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(5px);
`;

const LoginForm = styled.form`
  display: flex;
  padding: 3rem;
  width: 20rem;
  flex-direction: column;
`;

const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.25rem;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #000;
`;

const ErrorText = styled.span`
  color: #ff4602;
`;

const LoginButton = styled(GradientButton)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const LoginModal = (props: StyledModalProps): React.ReactElement => {
  const { open, onClose } = props;
  const { register, handleSubmit, errors } = useForm<LoginInputType>();

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
          loggedInUserName
          error
        }
      }
    `,
    {
      onCompleted: ({ LoginMutation }: LoginModal_MutationResponse) => {
        if (LoginMutation?.ok && LoginMutation.loggedInUserName) {
          addToast(`Login succeed, ${LoginMutation?.loggedInUserName}`, {
            appearance: 'success',
          });
          onClose?.();
        } else if (LoginMutation?.error) {
          addToast(`Login failed, ${LoginMutation?.error}`, {
            appearance: 'error',
          });
          onClose?.();
        }
      },
      onError: (error) => {
        addToast(`Login failed, ${error}`, {
          appearance: 'error',
        });
        onClose?.();
      },
    },
  );

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
                  <Label>Username</Label>
                  <LoginInput
                    autoComplete="username"
                    name="username"
                    ref={register({ required: true })}
                  />
                  {errors.username && <ErrorText>This field is required</ErrorText>}
                </InputGroup>

                <InputGroup>
                  <Label>Password</Label>
                  <LoginInput
                    autoComplete="current-password"
                    type="password"
                    name="password"
                    ref={register({ required: true })}
                  />
                </InputGroup>
                {errors.password && <ErrorText>This field is required</ErrorText>}

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
