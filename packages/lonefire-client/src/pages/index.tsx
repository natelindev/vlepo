import React from 'react';
import { Button, CardBody, CardImg } from 'src/components/base';
import Card from 'src/components/Card';
import Masonry from 'src/components/Masonry';

import { css } from '@emotion/react';

export default function Home(): React.ReactElement {
  return (
    <>
      <Card
        className="border-draw-within mx-auto my-3"
        width="20rem"
        css={css`
          font-family: 'Economica', sans-serif;
          backdrop-filter: saturate(180%) blur(5px);
        `}
        href="/"
      >
        <h1 className="mx-auto my-4">Nathaniel&#39;s Dev Area</h1>
      </Card>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <Masonry
          packed="packed"
          sizes={[
            { columns: 1, gutter: 20 },
            { mq: '768px', columns: 2, gutter: 20 },
            { mq: '1024px', columns: 3, gutter: 20 },
          ]}
          position
          css={css`
            width: 100%;
            align-self: center;
            margin: 0 0;
          `}
        >
          {Array(10)
            .fill(0)
            .map((i) => (
              <Card
                key={rng(RngOption.integer, 100)}
                css={css`
                  max-width: 300px;
                `}
              >
                <CardImg
                  css={css`
                    max-width: 300px;
                  `}
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
              </Card>
            ))}
        </Masonry>
      </div>
    </>
  );
}
