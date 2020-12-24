import * as React from 'react';

import { css } from '@emotion/core';

import Logo from './Logo';
import Social from './Social';

const Footbar: React.SFC = () => (
  <div className="d-flex bg-smoke justify-content-around align-items-center flex-wrap flex-sm-nowrap py-4">
    <Logo size="3rem" />

    <div className="text-muted text-titillium">
      <div className="d-flex mx-auto justify-content-center">
        <div className="d-flex">
          © 2019-{new Date().getFullYear()} Nathaniel&#39;s Dev Area. MIT
          licensed
        </div>
      </div>
      <div className="d-flex mx-auto justify-content-center">
        Made by Nathaniel with
        <span
          role="img"
          aria-label="love"
          css={css`
            margin: 0 0.3rem;
          `}
        >
          ❤️
        </span>{' '}
        and effort
      </div>
    </div>

    <div className="mt-2 mt-sm-auto">
      <Social />
    </div>
  </div>
);

export default Footbar;
