import './ScrollToTop.scoped.scss';

import React from 'react';

import { useScrollPosition } from '../hooks/scrollPosition';

const ScrollToTop = (): React.ReactElement => {
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={`scroll-to-top rounded z-1 ${
        scrollPosition > 100 ? 'show' : 'hidden'
      }`}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <i className="fas fa-angle-up" />
    </div>
  );
};

export default ScrollToTop;
