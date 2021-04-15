import * as React from 'react';

import Logo from '../Logo';
import Social from '../Social';
import { BaseFootbar, BottomText, CenteredText, LoveIcon } from './style';

const Footbar: React.FC = () => (
  <BaseFootbar flexDirection={['column', 'column', 'row']}>
    <Logo size="42px" />
    <BottomText>
      <CenteredText mx="auto">
        © 2019-
        {new Date().getFullYear()}
        {'  '}
        Nathaniel&#39;s Blog. CC-BY 4.0
      </CenteredText>
      <CenteredText>
        Made by Nathaniel with
        <LoveIcon>❤️</LoveIcon>
        and effort
      </CenteredText>
    </BottomText>

    <Social />
  </BaseFootbar>
);

export default Footbar;
