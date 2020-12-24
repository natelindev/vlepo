import React from 'react';

import { css } from '@emotion/react';

import { CardImg as BasicCardImg, CardImgOverlay } from './basic';

export interface CardImgProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  src?: string;
  alt?: string;
}

const CardImg: React.FC<CardImgProps> = (props: CardImgProps) => {
  const { children, className, left, right, ...rest } = props;
  return (
    <>
      <BasicCardImg css={css``} src="hello.jpg" layout="fill" {...rest} />
      {children ? <CardImgOverlay>{children}</CardImgOverlay> : null}
    </>
  );
};

export default CardImg;
