import { Button } from 'src/components/Button';
import { isBright } from 'src/shared/colorUtil';

import styled from '@emotion/styled';

type BaseGradientButtonProps = {
  colorA: string;
  colorB: string;
};

export const BaseGradientButton = styled(Button)<BaseGradientButtonProps>`
  position: relative;
  border: none;
  transition: opacity linear 0.3s;
  z-index: ${(props) => props.theme.zIndices.GradientButton};

  &::before {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    transition: opacity linear 0.3s;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active:focus {
    outline: none;
    box-shadow: none;
  }

  background-image: ${(props) =>
    `linear-gradient(45deg, ${props.colorA} 10%, ${props.colorB} 90%)`};
  color: ${(props) =>
    `${
      isBright(props.colorA) && isBright(props.colorB)
        ? props.theme.colors.blackText
        : props.theme.colors.whiteText
    }`};
  &::before {
    background-image: ${(props) =>
      `linear-gradient(45deg, ${props.colorA} 35%, ${props.colorB} 75%)`};
  }
`;

export const GradientButtonContent = styled.div`
  position: relative;
  z-index: ${(props) => props.theme.zIndices.GradientButton};
  a {
    color: inherit;
    text-decoration: none;
  }
`;
