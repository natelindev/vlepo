import { animated, AnimatedValue, ForwardedProps } from 'react-spring';
import { Button } from 'src/components/Button';
import GradientButton from 'src/components/GradientButton';
import StyledModal, { StyledModalProps } from 'styled-modal';

import styled from '@emotion/styled';

export const BaseModal = styled(StyledModal)<{
  style: AnimatedValue<ForwardedProps<ForwardedProps<React.CSSProperties>>>;
}>`
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const BaseAnimatedContainer = styled(animated.div)<StyledModalProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: inherit;
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
  color: ${(props) => props.theme.colors.muted};
  background-color: ${(props) => props.theme.colors.backgroundMuted};
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.colors.muted};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 1rem;

  transition: all 0.3s ease-in-out;

  &:focus {
    box-shadow: ${(props) => props.theme.shadows.Input};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

export const ErrorText = styled.span`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.error};
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
  background-color: ${(props) => props.theme.colors.backgroundMuted};
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) => props.theme.shadows.Card};
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.theme.zIndices.GradientButton};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.OauthButton};
  }
`;
