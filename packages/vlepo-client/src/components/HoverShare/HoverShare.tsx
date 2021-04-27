import easing from 'bezier-easing';
import { useState } from 'react';
import {
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { a, useSpring, useTransition } from 'react-spring';
import { useScrollPosition } from 'src/hooks/useScrollPosition';

import { useTheme } from '@emotion/react';

import { ShareContainer, ShareToggler } from './style';

type HoverShareProps = {
  title: string;
  url: string;
  tags: string[];
};
const HoverShare = (props: HoverShareProps) => {
  const { title, url, tags } = props;
  const [scrollPosition, speed] = useScrollPosition();
  const up = speed < 0;
  const show = scrollPosition > 100;
  const [showContainer, setShowContainer] = useState(false);
  const theme = useTheme();

  const { x } = useSpring({ config: { duration: 300 }, x: showContainer ? 1 : 0 });

  const shareTransition = useTransition(showContainer, {
    from: {
      transform: 'translateX(2.2rem)',
    },
    enter: {
      transform: 'translateX(0rem)',
    },
    leave: {
      transform: 'translateX(2.2rem)',
    },
    config: {
      duration: 1000,
      easing: easing(0.77, 0, 0.175, 1),
    },
  });

  if (scrollPosition < 100 && showContainer) {
    setShowContainer(false);
  }

  return (
    <>
      <ShareToggler
        show={show}
        up={up}
        onClick={() => {
          setShowContainer(!showContainer);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill={theme.colors.whiteText}
        >
          <a.path
            d={x.to({
              range: [0, 1],
              output: [
                'M 15.09 5.7 L 8.04 9.81 C 7.5 9.31 6.79 9 6 9 C 4.34 9 3 10.34 3 12 C 3 13.66 4.34 15 6 15 C 6.79 15 7.5 14.69 8.04 14.19 L 15.16 18.35 C 15.11 18.56 15.08 18.78 15.08 19 C 15.08 20.61 16.39 21.92 18 21.92 C 19.61 21.92 20.92 20.61 20.92 19 C 20.92 17.39 19.61 16.08 18 16.08 L 18 16.08 C 17.24 16.08 16.56 16.38 16.04 16.85 L 8.91 12.7 C 8.96 12.47 9 12.24 9 12 C 9 11.76 8.96 11.53 8.91 11.3 L 15.96 7.19 C 16.5 7.69 17.21 8 18 8 C 19.66 8 21 6.66 21 5 C 21 3.34 19.66 2 18 2 C 16.34 2 15 3.34 15 5 C 15 5.24 15.04 5.47 15.09 5.7 M 18 4 C 17.45 4 17 4.45 17 5 C 17 5.55 17.45 6 18 6 C 18.55 6 19 5.55 19 5 C 19 4.45 18.55 4 18 4 L 18 4 M 6 13 C 6.55 13 7 12.55 7 12 C 7 11.45 6.55 11 6 11 C 5.45 11 5 11.45 5 12 C 5 12.55 5.45 13 6 13 L 6 13 M 18 20.02 C 18.55 20.02 19 19.57 19 19.02 C 19 18.47 18.55 18.02 18 18.02 C 17.45 18.02 17 18.47 17 19.02 C 17 19.57 17.45 20.02 18 20.02 L 18 20.02',
                'M 19 6.41 L 19 6.41 C 18.068 7.342 17.137 8.273 16.205 9.205 C 15.273 10.137 14.342 11.068 13.41 12 C 14.031 12.621 14.652 13.242 15.273 13.863 C 15.894 14.484 16.516 15.106 17.137 15.727 L 19 17.59 C 18.883 17.707 18.765 17.825 18.648 17.942 C 18.53 18.06 18.413 18.177 18.295 18.295 C 18.177 18.413 18.06 18.53 17.942 18.648 C 17.825 18.765 17.707 18.883 17.59 19 L 12 13.41 C 10.137 15.273 8.273 17.137 6.41 19 L 5 17.59 C 6.863 15.727 8.727 13.863 10.59 12 C 8.727 10.137 6.863 8.273 5 6.41 L 6.41 5 C 8.273 6.863 10.137 8.727 12 10.59 C 13.863 8.727 15.727 6.863 17.59 5 C 17.747 5.157 17.903 5.313 18.06 5.47 C 18.217 5.627 18.373 5.783 18.53 5.94 C 18.687 6.097 18.843 6.253 19 6.41 M 18 5 C 18 5 18 5 18 5 C 18 5 18 5 18 5 C 18 5 18 5 18 5 C 18 5 18 5 18 5 L 18 5 M 6 12 C 6 12 6 12 6 12 C 6 12 6 12 6 12 C 6 12 6 12 6 12 C 6 12 6 12 6 12 L 6 12 M 18 19.02 C 18 19.02 18 19.02 18 19.02 C 18 19.02 18 19.02 18 19.02 C 18 19.02 18 19.02 18 19.02 C 18 19.02 18 19.02 18 19.02 L 18 19.02',
              ],
            })}
          />
        </svg>
      </ShareToggler>
      {shareTransition(
        (style, item) =>
          item && (
            <ShareContainer style={style}>
              <TelegramShareButton title={title} url={url}>
                <TelegramIcon size="2.2rem" />
              </TelegramShareButton>
              <RedditShareButton title={title} url={url}>
                <RedditIcon size="2.2rem" />
              </RedditShareButton>
              <TwitterShareButton title={title} hashtags={tags} url={url}>
                <TwitterIcon size="2.2rem" />
              </TwitterShareButton>
            </ShareContainer>
          ),
      )}
    </>
  );
};

export default HoverShare;
