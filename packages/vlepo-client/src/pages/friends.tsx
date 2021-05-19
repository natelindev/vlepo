import { genPostViewComponent, genPostViewGetServerSideProps } from 'src/shared/postViewUtil';

export const getServerSideProps = genPostViewGetServerSideProps('friends');
const Friends = genPostViewComponent('friends');

export default Friends;
