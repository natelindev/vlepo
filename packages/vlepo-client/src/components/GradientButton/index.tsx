import Link from 'next/link';
import React from 'react';

import { BaseGradientButton, GradientButtonContent } from './style';

export type GradientButtonProps = {
  link?: string;
  colorA: `#${string}`;
  colorB: `#${string}`;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const GradientButton: React.FC<GradientButtonProps> = (props: GradientButtonProps) => {
  const { colorA, colorB, children, link, ...rest } = props;
  return (
    <BaseGradientButton colorA={colorA} colorB={colorB} {...rest}>
      <GradientButtonContent>
        {link ? <Link href={link}>{children}</Link> : children}
      </GradientButtonContent>
    </BaseGradientButton>
  );
};

export default GradientButton;
