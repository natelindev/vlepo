import React from 'react';
import {
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import styled from '@emotion/styled';

const ShareContainer = styled.div`
  position: sticky;
  top: 10rem;
  margin-bottom: 20rem;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: auto;

  *:focus {
    border: none;
    outline: none;
  }
`;

const HoverShare = () => (
  <ShareContainer>
    <TelegramShareButton title="test" url="https://test.com">
      <TelegramIcon size="2.25rem" />
    </TelegramShareButton>
    <RedditShareButton title="test" url="https://test.com">
      <RedditIcon size="2.25rem" />
    </RedditShareButton>
    <TwitterShareButton title="test" hashtags={['tags']} url="https://test.com">
      <TwitterIcon size="2.25rem" />
    </TwitterShareButton>
  </ShareContainer>
);

export default HoverShare;
