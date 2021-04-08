import { useEffect, useRef } from 'react';
import { a, useSpring } from 'react-spring';
import { margin, MarginProps } from 'styled-system';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type BaseProgressBarProps = {
  colorA: string;
  colorB: string;
};

type ProgressBarContainerProps = {
  top: string;
};

const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  background: transparent;
  position: fixed;
  width: 100%;
  top: ${(props) => props.top};
  left: 0;
  z-index: ${(props) => props.theme.zIndices.ProgressBar};
`;

const BaseProgressBar = styled(a.div, { shouldForwardProp: (propName) => propName === 'style' })<
  BaseProgressBarProps & MarginProps
>`
  ${margin}
  height: 0.2rem;
  background-image: ${(props) =>
    `linear-gradient(315deg, ${props.colorA} 0%, ${props.colorB} 75%)`};
`;

export type ProgressBarProps = {
  width: number;
  colorA?: string;
  colorB?: string;
  top?: string;
};

const ProgressBar = (props: ProgressBarProps) => {
  const theme = useTheme();
  const {
    colorA = theme.colors.primary,
    colorB = theme.colors.secondary,
    width = 0,
    top = '0',
  } = props;

  const prevWidthRef = useRef(width);

  useEffect(() => {
    prevWidthRef.current = width;
  });

  const style = useSpring({
    from: { width: `${prevWidthRef.current}%` },
    to: {
      width: `${width}%`,
    },
  });
  return (
    <ProgressBarContainer top={top}>
      <BaseProgressBar colorA={colorA} colorB={colorB} style={style} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
