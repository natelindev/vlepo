import './Wave.scoped.scss';

import React from 'react';

import styled from '@emotion/styled';

const WaveContainer = styled.div<{
  background?: string;
  color?: string;
}>`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.background ?? '#5cc6ee'};
  color: ${(props) => props.color ?? '#fff'};
`;

const BaseWave = styled.svg`
  display: block;
  transform-origin: bottom;
  animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;

  @keyframes animateWave {
    0% {
      transform: scale(1, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

export interface WaveProps {
  children?: React.ReactNode;
  className?: string;
  background?: string;
  color?: string;
}

const Wave: React.FC<WaveProps> = (props: WaveProps) => {
  const { background, color, children, className } = props;
  return (
    <WaveContainer background={background} color={color} className={className}>
      {children}
      <BaseWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={color ?? '#fff'}
          fillOpacity="1"
          d="M0,32L48,32C96,32,192,32,288,64C384,96,480,160,576,154.7C672,149,768,75,864,64C960,53,1056,107,1152,117.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </BaseWave>
    </WaveContainer>
  );
};

export default Wave;
