import Image from 'next/image';
import React from 'react';

export interface LogoProps {
  size?: string;
  height?: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { size = '100px', height, width } = props;
  return <Image height={height ?? size} width={width ?? size} src="/logo.svg" alt="logo" />;
};

export default Logo;
