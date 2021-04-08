import React from 'react';
import { a } from 'react-spring';
import StyledModal from 'styled-modal';
import { width, WidthProps } from 'styled-system';

import { Close } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

export const BaseBaseModal = styled(StyledModal)<
  React.ComponentProps<typeof BaseAnimatedContainer>
>`
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const BaseAnimatedContainer = styled(a.div, {
  shouldForwardProp: (propName) => propName !== 'isToggled' && propName !== 'isClientSide',
})<WidthProps>`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: inherit;
  backdrop-filter: saturate(180%) blur(5px);
  margin-top: auto;
  margin-bottom: auto;
  overflow-y: scroll;
  ${width}
`;

export const CloseIcon = styled(Close)`
  margin-top: -2rem;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: -2rem;
`;
