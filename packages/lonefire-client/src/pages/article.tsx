import Image from 'next/image';
import React from 'react';
import HoverShare from 'src/components/HoverShare';
import Layout from 'src/components/Layout';

import styled from '@emotion/styled';

const Header = styled.div`
  max-height: 30rem;
  width: 100%;
`;

const FullWidthImage = styled(Image)`
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2.75rem;
`;

const ArticleBody = styled.article`
  margin-left: 10rem;
  margin-right: 10rem;
`;

const Body = styled.div`
  display: flex;
`;

type ArticleProps = {
  title: string;
  headerImg: string;
  author: string;
};

const Article = (props: ArticleProps) => {
  const { title = 'test', headerImg = '/images/red-panda.jpg', author = 'nate' } = props;
  return (
    <Layout>
      {headerImg && (
        <Header>
          <FullWidthImage layout="responsive" src={headerImg} width="16" height="5" />
        </Header>
      )}
      <HoverShare />
      <Body>
        <ArticleBody>
          <Title>{title}</Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices. Proin
          fermentum leo vel orci porta non pulvinar neque laoreet. Eu non diam phasellus vestibulum
          lorem sed. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Nulla
          porttitor massa id neque aliquam vestibulum. Pharetra convallis posuere morbi leo urna
          molestie at elementum. Cras sed felis eget velit. Massa tincidunt dui ut ornare lectus sit
          amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nulla
          facilisi cras fermentum odio eu feugiat pretium nibh. Massa tempor nec feugiat nisl
          pretium fusce id. Felis imperdiet proin fermentum leo. Feugiat nisl pretium fusce id.
          Pharetra massa massa ultricies mi quis hendrerit dolor magna. Urna cursus eget nunc
          scelerisque. Tortor aliquam nulla facilisi cras. Mi sit amet mauris commodo quis
          imperdiet. Urna nunc id cursus metus aliquam eleifend mi. Tortor at risus viverra
          adipiscing at in tellus integer. Leo integer malesuada nunc vel. Orci phasellus egestas
          tellus rutrum. Sed elementum tempus egestas sed sed risus pretium quam. Amet consectetur
          adipiscing elit duis tristique sollicitudin nibh. Felis bibendum ut tristique et egestas
          quis. Sed velit dignissim sodales ut eu sem integer. Ullamcorper a lacus vestibulum sed
          arcu non. Convallis tellus id interdum velit laoreet. Adipiscing vitae proin sagittis nisl
          rhoncus mattis rhoncus urna. Pellentesque habitant morbi tristique senectus et. Vitae
          purus faucibus ornare suspendisse sed nisi lacus sed. Convallis convallis tellus id
          interdum velit laoreet id donec ultrices. In tellus integer feugiat scelerisque varius
          morbi enim nunc faucibus. Fringilla urna porttitor rhoncus dolor purus non enim.
          Ullamcorper sit amet risus nullam eget felis. Massa tempor nec feugiat nisl pretium.
          Turpis cursus in hac habitasse platea dictumst quisque sagittis. Tellus molestie nunc non
          blandit massa enim nec dui. Nulla aliquet enim tortor at. Amet commodo nulla facilisi
          nullam vehicula ipsum a. Nisi vitae suscipit tellus mauris a diam maecenas sed. Faucibus a
          pellentesque sit amet porttitor eget dolor. Rhoncus est pellentesque elit ullamcorper.
          Facilisis gravida neque convallis a cras semper auctor. Ultricies mi eget mauris pharetra
          et ultrices neque. Cursus mattis molestie a iaculis at erat. Neque volutpat ac tincidunt
          vitae semper quis. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.
          Etiam tempor orci eu lobortis elementum nibh tellus molestie. Congue eu consequat ac felis
          donec et odio pellentesque. Iaculis nunc sed augue lacus viverra vitae congue eu. Cum
          sociis natoque penatibus et magnis dis. Malesuada nunc vel risus commodo viverra maecenas
          accumsan. Semper quis lectus nulla at volutpat diam ut venenatis. Sit amet mauris commodo
          quis imperdiet massa tincidunt nunc pulvinar. Ut sem nulla pharetra diam sit. Sit amet
          consectetur adipiscing elit. Facilisis gravida neque convallis a cras semper auctor.
          Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Sapien
          pellentesque habitant morbi tristique senectus et netus et malesuada. Vitae semper quis
          lectus nulla. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.
          Turpis massa tincidunt dui ut ornare lectus sit amet est. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a scelerisque purus. Justo laoreet sit amet cursus sit amet
          dictum sit amet. Tortor posuere ac ut consequat semper viverra nam libero justo. Est
          ultricies integer quis auctor. Imperdiet sed euismod nisi porta lorem mollis aliquam ut
          porttitor. Lectus nulla at volutpat diam ut venenatis. Ac tortor vitae purus faucibus
          ornare suspendisse sed nisi lacus. Orci porta non pulvinar neque. Arcu risus quis varius
          quam. In dictum non consectetur a erat nam at lectus urna. Sed sed risus pretium quam
          vulputate dignissim suspendisse in. Quisque id diam vel quam elementum pulvinar etiam non
          quam. Ac auctor augue mauris augue neque gravida. Orci ac auctor augue mauris.
        </ArticleBody>
      </Body>
    </Layout>
  );
};

export default Article;
