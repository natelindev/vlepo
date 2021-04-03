import { margin, MarginProps, width, WidthProps } from 'styled-system';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type BaseProgressBarProps = {
  colorA: string;
  colorB: string;
};

const ProgressBarContainer = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  top: 3.5rem;
  left: 0;
  z-index: ${(props) => props.theme.zIndices.ProgressBar};
`;

const BaseProgressBar = styled.div<BaseProgressBarProps & WidthProps & MarginProps>`
  ${width}
  ${margin}
  height: 0.2rem;
  background-image: ${(props) =>
    `linear-gradient(315deg, ${props.colorA} 0%, ${props.colorB} 75%)`};
`;

export type ProgressBarProps = {
  width: WidthProps['width'];
  colorA?: string;
  colorB?: string;
};

const ProgressBar = (props: ProgressBarProps) => {
  const theme = useTheme();
  const { colorA = theme.colors.primary, colorB = theme.colors.secondary, width } = props;
  return (
    <ProgressBarContainer>
      <BaseProgressBar colorA={colorA} colorB={colorB} width={width} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
