import styled from '@emotion/styled';

import { Card as BaseCard } from '../base';
import { ZIndex } from '../ZIndex';

export const ConstrainedCard = styled(BaseCard)<{ width?: string; height?: string }>`
  max-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;

export const OverlayLink = styled.a`
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${ZIndex.CardLink};
`;
