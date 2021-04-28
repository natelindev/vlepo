import { AnimatedLink } from 'src/components/Link';

import CodeBlock from '../CodeBlock';
import PlaceHolder from '../PlaceHolder';
import { H1, H2, H3, H4, H5, H6 } from '../Typography';
import { inlineCode } from './style';

export default {
  PlaceHolder,
  code: CodeBlock,
  a: AnimatedLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode,
};

export const remarkComponents = {
  a: AnimatedLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode,
};
