/* eslint-disable no-nested-ternary */
import React from 'react';

import { KeyboardArrowUp } from '@emotion-icons/material-outlined';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useScrollPosition } from '../hooks/useScrollPosition';
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
  show: boolean;
  up: boolean;
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
  background-color: rgba(90, 92, 105, 0.3);
  backdrop-filter: saturate(180%) blur(5px);

  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;

  z-index: ${ZIndex.ScrollToTop};
  transition: background-color 0.3s ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${(props) => (props.show ? 'fadeInRight' : props.up ? 'fadeOutRight' : 'none')} 1s 1
    cubic-bezier(0.77, 0, 0.175, 1);

  &:focus,
  &:hover {
    color: white;
  }

  &:hover {
    background: rgba(90, 92, 105, 0.5);
  }

  & i {
    font-weight: 800;
  }
`;

const ScrollToTop = () => {
  const [scrollPosition, speed] = useScrollPosition();
  const up = speed < 0;
  const show = scrollPosition > 100;
  return (
    <BaseScrollToTop
      up={up}
      show={show}
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
