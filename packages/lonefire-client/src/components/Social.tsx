import React from 'react';

import styled from '@emotion/styled';

import SocialIcon from './SocialIcon';

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.4s ease-out;
`;

const Social: React.FC = () => (
  <SocialLinkWrapper>
    <SocialIcon name="github" href="https://github.com/llldar" />
    <SocialIcon name="telegram" href="https://t.me/llldar" />
  </SocialLinkWrapper>
);

export default Social;
