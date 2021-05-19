import { genPostViewComponent, genPostViewGetServerSideProps } from 'src/shared/postViewUtil';

export const getServerSideProps = genPostViewGetServerSideProps();
const Post = genPostViewComponent();

export default Post;
