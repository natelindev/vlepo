import Image from 'next/image';
import React from 'react';

import styled from '@emotion/styled';

type BaseAvatarProps = {
  size: number;
};

const BaseAvatar = styled.div<BaseAvatarProps>`
  display: flex;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`;

type AvatarProps = { imageUrl: string; size: number } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Avatar = (props: AvatarProps) => {
  const { imageUrl, size = 24, ...rest } = props;

  return (
    <BaseAvatar size={size} {...rest}>
      <Image src={imageUrl} layout="fixed" height={size} width={size} />
    </BaseAvatar>
  );
};

export default Avatar;
