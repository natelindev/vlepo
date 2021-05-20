import { postViewComponent } from 'src/shared/postView';
import { postViewSSR } from 'src/shared/postViewSSR';

export const getServerSideProps = postViewSSR('friends');
const Friends = postViewComponent('friends');

export default Friends;
