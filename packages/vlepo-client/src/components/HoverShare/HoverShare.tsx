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
import { shapes } from 'src/shared/shapes';

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
              output: [shapes.share, shapes.close],
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
