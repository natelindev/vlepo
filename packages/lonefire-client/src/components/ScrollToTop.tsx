/* eslint-disable no-nested-ternary */
import React from 'react';

import { KeyboardArrowUp } from '@emotion-icons/material-outlined';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useScrollPosition } from '../hooks/scrollPosition';
import { ZIndex } from './ZIndex';

const animation = css`
  @keyframes fadeOutRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

interface ScrollTopProps {
  scrollPosition: number;
  speed: number;
}

const BaseScrollToTop = styled.div<ScrollTopProps>`
  ${animation}

  position: fixed;
  right: 0;
  bottom: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  text-align: center;
  color: #fff;
  background: rgba(90, 92, 105, 0.3);
  border-radius: 0.5rem;
  z-index: ${ZIndex.ScrollToTop};

  opacity: ${(props) => (props.scrollPosition > 100 ? 1 : 0)};
  animation: ${(props) =>
      props.scrollPosition > 100 ? 'fadeInRight' : props.speed < 0 ? 'fadeOutRight' : 'none'}
    1s 1 cubic-bezier(0.77, 0, 0.175, 1);

  &:focus,
  &:hover {
    color: white;
  }

  &:hover {
    background: rgba(90, 92, 105, 0.8);
  }

  & i {
    font-weight: 800;
  }
`;

const ScrollToTop = () => {
  const [scrollPosition, speed] = useScrollPosition();
  return (
    <BaseScrollToTop
      speed={speed}
      scrollPosition={scrollPosition}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <KeyboardArrowUp />
    </BaseScrollToTop>
  );
};

export default ScrollToTop;
