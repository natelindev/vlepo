import Image from 'next/image';
import React from 'react';
import {
  borderRadius,
  BorderRadiusProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  variant,
} from 'styled-system';

import styled from '@emotion/styled';

type BaseAvatarProps = {
  size?: number;
  variant?: 'default' | 'round';
} & MarginProps &
  PaddingProps &
  BorderRadiusProps;

const BaseAvatar = styled.div<BaseAvatarProps>`
  display: flex;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};

  > div {
    border-radius: ${(props) => `${props.theme.radii.default}px`};
    ${variant({
      variants: {
        default: {
          borderRadius: 'default',
        },
        round: {
          borderRadius: '50%',
        },
      },
    })};
  }
  ${margin}
  ${padding}
  ${borderRadius}
`;

type AvatarProps = React.ComponentProps<typeof BaseAvatar> & {
  src?: string | null;
  size?: number;
  variant?: 'default' | 'round';
};

const Avatar = (props: AvatarProps) => {
  const { src, size = 24, ...rest } = props;

  return (
    <BaseAvatar size={size} {...rest}>
      <Image src={src ?? '/images/avatar/bot.svg'} layout="fixed" height={size} width={size} />
    </BaseAvatar>
  );
};

export default Avatar;
