import * as React from 'react';

import Logo from '../Logo';
import Social from '../Social';
import { BaseFootbar, BottomText, CenteredText, LoveIcon } from './style';

const Footbar: React.FC = () => (
  <BaseFootbar flexDirection={['column', 'column', 'row']}>
    <Logo display={['none', 'none', 'flex']} size="42px" />
    <BottomText>
      <CenteredText mx="auto">
        © 2019-
        {new Date().getFullYear()}
        {'  '}
        Nathaniel&#39;s Blog. CC-BY 4.0
      </CenteredText>
      <CenteredText>
        Made by Nathaniel with
        <LoveIcon size={18} />
        and effort
      </CenteredText>
    </BottomText>

    <Social mt={['1rem', '1rem', '0']} mx={['auto', 'auto', '0']} />
  </BaseFootbar>
);

export default Footbar;
