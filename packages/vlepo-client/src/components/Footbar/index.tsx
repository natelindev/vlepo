import Logo from '../Logo';
import Social from '../Social';
import { BaseFootbar, BottomText, CenteredText, LoveIcon } from './style';

const Footbar = () => {
  return (
    <BaseFootbar flexDirection={['column', 'column', 'row']}>
      <Logo display={['none', 'none', 'flex']} size="42px" />
      <BottomText>
        <CenteredText mx="auto">
          © 2016-
          {new Date().getFullYear()}
          {'  '}
          {process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME}. CC-BY 4.0
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
};

export default Footbar;
