import SocialIcon from './SocialIcon';
import { SocialLinkWrapper } from './style';

const Social = (props: React.ComponentProps<typeof SocialLinkWrapper>) => (
  <SocialLinkWrapper {...props}>
    <SocialIcon name="github" href="https://github.com/llldar" />
    <SocialIcon name="telegram" href="https://t.me/llldar" />
  </SocialLinkWrapper>
);

export default Social;
