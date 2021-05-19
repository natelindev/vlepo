import { genPostViewComponent, genPostViewGetServerSideProps } from 'src/shared/postViewUtil';

export const getServerSideProps = genPostViewGetServerSideProps('about');
const About = genPostViewComponent('about');

export default About;
