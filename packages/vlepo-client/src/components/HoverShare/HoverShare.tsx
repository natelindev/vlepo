import {
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { useScrollPosition } from 'src/hooks/useScrollPosition';

import { ShareContainer } from './style';

type HoverShareProps = {
  title: string;
  url: string;
  tags: string[];
};
const HoverShare = (props: HoverShareProps) => {
  const { title, url, tags } = props;
  const [scrollPosition] = useScrollPosition();
  return (
    <>
      {scrollPosition > 5 && (
        <ShareContainer scrollPosition={scrollPosition}>
          <TelegramShareButton title={title} url={url}>
            <TelegramIcon size="2.25rem" />
          </TelegramShareButton>
          <RedditShareButton title={title} url={url}>
            <RedditIcon size="2.25rem" />
          </RedditShareButton>
          <TwitterShareButton title={title} hashtags={tags} url={url}>
            <TwitterIcon size="2.25rem" />
          </TwitterShareButton>
        </ShareContainer>
      )}
    </>
  );
};

export default HoverShare;
