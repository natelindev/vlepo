import React from 'react';
import {
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { useScrollPosition } from 'src/hooks/scrollPosition';

import styled from '@emotion/styled';

const ShareContainer = styled.div<{ scrollPosition: number }>`
  opacity: ${(props) => (props.scrollPosition > 300 ? 1 : 0)};
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  margin-top: 2rem;
  position: fixed;
  display: 'flex';
  max-width: 2rem;

  flex-direction: column;
  margin-left: 1.75rem;
  margin-right: auto;

  *:focus {
    border: none;
    outline: none;
  }
`;

const HoverShare = () => {
  const [scrollPosition] = useScrollPosition();
  return (
    <ShareContainer scrollPosition={scrollPosition}>
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
};

export default HoverShare;