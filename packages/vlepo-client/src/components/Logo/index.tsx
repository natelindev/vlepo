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

type BaseLogoProps = { src?: string; href?: string } & SizeProps &
  MarginProps &
  PaddingProps &
  DisplayProps;

export const BaseLogo = styled.img<BaseLogoProps>`
  ${size}
  ${margin}
  ${padding}
  ${display}
  fill: ${(props) => props.theme.colors.text};
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  min-width: ${(props) => props.size};
  min-height: ${(props) => props.size};
  flex-grow: 0;
`;

type LogoProps = React.ComponentProps<typeof BaseLogo>;
const Logo = (props: LogoProps) => {
  const { size = 32, src = '/logo.svg', ...rest } = props;
  return <BaseLogo src={src} alt="logo" size={size} {...rest} />;
};

export default Logo;
