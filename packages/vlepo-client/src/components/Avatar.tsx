import Image from 'next/image';
import React from 'react';

import styled from '@emotion/styled';

type AvatarProps = {
  size: number;
};

const BaseAvatar = styled.div<AvatarProps>`
  display: flex;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`;

const Avatar = (props: { imageUrl: string; size: number }) => {
  const { imageUrl, size = 24, ...rest } = props;

  return (
    <BaseAvatar size={size} {...rest}>
      <Image src={imageUrl} layout="fixed" height={size} width={size} />
    </BaseAvatar>
  );
};

export default Avatar;
