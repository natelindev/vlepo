import * as React from 'react';

import styled from '@emotion/styled';

import Logo from './Logo';
import Social from './Social';

const FootbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const CenteredText = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

const LoveIcon = styled.div`
  margin-left: 0.2rem;
`;

const BottomText = styled.div`
  color: #6c757d;
`;

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
