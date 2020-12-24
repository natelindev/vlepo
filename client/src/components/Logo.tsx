import * as React from 'react';

export interface LogoProps {
  size?: string;
  height?: string;
  width?: string;
}

export default function Logo(props: LogoProps): React.ReactElement {
  const { size, height, width } = props;
  return (
    <img
      className="logo"
      style={{
        maxHeight: size ?? height ?? '2rem',
        maxWidth: size ?? width ?? '2rem',
        margin: '0.3rem',
      }}
      src="logo.svg"
      alt="logo"
    />
  );
}
