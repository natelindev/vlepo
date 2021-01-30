import Image from 'next/image';
import React from 'react';

import styled from '@emotion/styled';

export interface LogoProps {
  size?: string;
  height?: string;
  width?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { size = '100px', height, width, className } = props;
  return (
    <div className={className}>
      <Image
        height={height ?? size}
        width={width ?? size}
        src="/logo.svg"
        alt="logo"
        className={className}
      />
    </div>
  );
};

export default Logo;
