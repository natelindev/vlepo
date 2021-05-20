import { postViewComponent } from 'src/shared/postView';
import { postViewSSR } from 'src/shared/postViewSSR';

export const getServerSideProps = postViewSSR('about');
const About = postViewComponent('about');

export default About;
