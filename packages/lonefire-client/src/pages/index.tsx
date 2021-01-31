import { rng, RngOption } from 'lonefire-shared';
import React from 'react';
import { Button, CardBody, CardImg } from 'src/components/base';
import Card from 'src/components/Card';
import Layout from 'src/components/Layout';
import Masonry from 'src/components/Masonry';

import styled from '@emotion/styled';

const IndexMasonry = styled(Masonry)`
  width: 100%;
  align-self: center;
  margin: 0 0;
`;

const IndexCard = styled(Card)`
  font-family: 'Economica', sans-serif;
  backdrop-filter: saturate(180%) blur(5px);
`;

const MasonryCard = styled(Card)`
  max-width: 300px;
`;

const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const CardSubtitle = styled.h4`
  margin: 0;
  padding: 0;
`;

const CardText = styled.p`
  margin: 0;
  padding: 0;
`;

export default function Home(): React.ReactElement {
  return (
    <>
      <Layout>
        <IndexCard className="border-draw-within mx-auto my-3" width="20rem" href="/">
          <h1 className="mx-auto my-4">Nathaniel&#39;s Dev Area</h1>
        </IndexCard>
        <div className="d-flex justify-content-center mt-5 mb-3">
          <IndexMasonry
            packed="packed"
            sizes={[
              { columns: 1, gutter: 20 },
              { mq: '768px', columns: 2, gutter: 20 },
              { mq: '1024px', columns: 3, gutter: 20 },
            ]}
            position
          >
            {Array(10)
              .fill(0)
              .map((i: number) => (
                <MasonryCard key={rng(RngOption.integer, 100)}>
                  <CardImg
                    layout="fill"
                    src="https://placeholder.pics/svg/300"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&#39;s content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </MasonryCard>
              ))}
          </IndexMasonry>
        </div>
      </Layout>
    </>
  );
}
