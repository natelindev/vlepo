import React from 'react';
import { a } from 'react-spring';
import StyledModal from 'styled-modal';
import { width, WidthProps } from 'styled-system';

import { Close } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

export const BaseStyledModal = styled(StyledModal)<React.ComponentProps<typeof BaseAnimatedModal>>`
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden auto;
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalOverScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BaseAnimatedModal = styled(a.div, {
  shouldForwardProp: (propName) =>
    propName !== 'isToggled' && propName !== 'isClientSide' && propName !== 'theme',
})<WidthProps>`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: inherit;
  margin-top: auto;
  margin-bottom: auto;
  ${width}
`;

export const CloseIcon = styled(Close)`
  margin-top: -2rem;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: -2rem;
`;
