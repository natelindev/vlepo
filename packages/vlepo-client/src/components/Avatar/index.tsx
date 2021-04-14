import Image from 'next/image';
import React from 'react';
import {
  borderRadius,
  BorderRadiusProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system';

import styled from '@emotion/styled';

type BaseAvatarProps = {
  size?: number;
};

const BaseAvatar = styled.div<BaseAvatarProps & MarginProps & PaddingProps & BorderRadiusProps>`
  display: flex;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => props.theme.radii.default};
  ${margin}
  ${padding}
  ${borderRadius}
`;

type AvatarProps = React.ComponentProps<typeof BaseAvatar> & { src: string; size?: number };

const Avatar = (props: AvatarProps) => {
  const { src, size = 24, ...rest } = props;

  return (
    <BaseAvatar size={size} {...rest}>
      <Image src={src} layout="fixed" height={size} width={size} />
    </BaseAvatar>
  );
};

export default Avatar;
