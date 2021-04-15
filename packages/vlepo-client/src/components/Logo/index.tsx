import React from 'react';
import Image from 'src/components/Image';

type LogoProps = Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>;

const Logo = (props: LogoProps) => {
  return <Image src="/logo.svg" alt="logo" {...props} />;
};

export default Logo;
