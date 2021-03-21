import { animated, AnimatedValue, ForwardedProps } from 'react-spring';
import { Button } from 'src/components/base';
import GradientButton from 'src/components/GradientButton';
import { ZIndex } from 'src/components/ZIndex';
import { Modal, StyledModalProps } from 'styled-modal';

import styled from '@emotion/styled';

export const BaseModal = styled(Modal)<{
  style: AnimatedValue<ForwardedProps<ForwardedProps<React.CSSProperties>>>;
}>`
  border-radius: 0.5rem;
`;

export const BaseAnimatedContainer = styled(animated.div)<StyledModalProps>`
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(5px);
`;

export const LoginForm = styled.form`
  display: flex;
  padding: 3rem;
  width: 20rem;
  flex-direction: column;
`;

export const LoginInput = styled.input`
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

  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 7px rgba(50, 50, 255, 0.3);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #000;
`;

export const ErrorText = styled.span`
  margin-left: 1rem;
  color: #ff4602;
`;

export const LoginButton = styled(GradientButton)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const OauthButtonSection = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

export const OauthButton = styled(Button)`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 1px rgba(51, 51, 51, 0.3);
  align-items: center;
  justify-content: center;
  z-index: ${ZIndex.GradientButton};

  &:hover {
    box-shadow: 0 0 7px rgba(51, 51, 51, 0.3);
  }
`;
