import SocialButton from './SocialButton';
import { SocialLinkWrapper } from './style';

const Social = (props: React.ComponentProps<typeof SocialLinkWrapper>) => (
  <SocialLinkWrapper {...props}>
    <SocialButton variant="github" href="https://github.com/natelindev" />
    <SocialButton variant="telegram" href="https://t.me/llldar" />
  </SocialLinkWrapper>
);

export default Social;
