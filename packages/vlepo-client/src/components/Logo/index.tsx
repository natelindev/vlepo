import React from 'react';
import {
  display,
  DisplayProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  size,
  SizeProps,
} from 'styled-system';

import styled from '@emotion/styled';

type LogoProps = React.ComponentProps<typeof BaseLogo>;
const BaseLogo = styled.img<SizeProps & MarginProps & PaddingProps & DisplayProps>`
  ${size}
  ${margin}
  ${padding}
  ${display}
`;

const Logo = (props: LogoProps) => {
  const { size = 32, ...rest } = props;
  return <BaseLogo src="/logo.svg" alt="logo" size={size} {...rest} />;
};

export default Logo;
