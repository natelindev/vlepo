import { postViewComponent } from 'src/shared/postView';
import { postViewSSR } from 'src/shared/postViewSSR';

export const getServerSideProps = postViewSSR();
const Post = postViewComponent();

export default Post;
