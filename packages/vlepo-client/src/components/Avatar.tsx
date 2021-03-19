import Image from 'next/image';
import React from 'react';

import styled from '@emotion/styled';

type AvatarProps = {
  size: number;
};

const BaseAvatar = styled.div<AvatarProps>`
  display: flex;
  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

const Avatar = (props: { imageUrl: string; size: number }) => {
  const { imageUrl, size } = props;

  return (
    <BaseAvatar size={size}>
      <Image src={imageUrl} layout="fixed" height={size} width={size} />
    </BaseAvatar>
  );
};

export default Avatar;
