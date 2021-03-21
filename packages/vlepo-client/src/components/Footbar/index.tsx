import * as React from 'react';

import Logo from '../Logo';
import Social from '../Social';
import { BottomText, CenteredText, FootbarContainer, LoveIcon } from './style';

const Footbar: React.FC = () => (
  <FootbarContainer>
    <Logo size="42px" />
    <BottomText>
      <CenteredText>
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
  </FootbarContainer>
);

export default Footbar;
