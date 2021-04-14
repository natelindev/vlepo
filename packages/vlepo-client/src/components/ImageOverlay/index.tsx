import { flexbox, FlexboxProps, margin, MarginProps, padding, PaddingProps } from 'styled-system';

import styled from '@emotion/styled';

const ImageOverLay = styled.div<PaddingProps & MarginProps & FlexboxProps>`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  color: ${(props) => props.color};
  text-decoration: none;
  ${padding}
  ${margin}
  ${flexbox}
`;

export default ImageOverLay;
