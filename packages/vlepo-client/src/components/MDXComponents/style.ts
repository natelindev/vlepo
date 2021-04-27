// import { isBright } from 'src/shared/colorUtil';

import styled from '@emotion/styled';

export const inlineCode = styled.code`
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  background-color: ${(props) => props.theme.colors.highlight};
`;
