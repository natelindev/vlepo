import React from 'react';
import { a } from 'react-spring';
import StyledModal, { StyledModalProps } from 'styled-modal';

import styled from '@emotion/styled';

export const BaseBaseModal = styled(StyledModal)<React.ComponentProps<typeof a.div>>`
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const BaseAnimatedContainer = styled(a.div)<StyledModalProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: inherit;
  backdrop-filter: saturate(180%) blur(5px);
`;
