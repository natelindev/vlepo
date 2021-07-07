import { addDays, compareAsc, parseISO } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import { useFragment } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { PaperCard_paper$key } from 'src/__generated__/PaperCard_paper.graphql';
import { AnimatedExternalLink } from 'src/components/Link';
import mdxComponents from 'src/components/MDXComponents';
import Tag from 'src/components/Tag';
import { useTilt } from 'src/hooks/useTilt';

import styled from '@emotion/styled';

import Badge from '../Badge';
import { Button } from '../Button';
import Card from '../Card';
import { CardBody } from '../Card/style';
import Image from '../Image';
import { Row } from '../Layout/style';
import PlaceHolder from '../PlaceHolder';
import { H3 } from '../Typography';

const PaperFragment = graphql`
  fragment PaperCard_paper on Paper {
    id
    name
    url
    renderedContent
    headerImageUrl
    createdAt
    tags {
      id
      name
      mainColor
      secondaryColor
    }
  }
`;

export const BasePaperCard = styled(Card)`
  position: relative;
  flex-direction: column;
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const PaperCardFooter = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const PaperName = styled(H3)``;

export type PaperCardProps = { paper: PaperCard_paper$key | null } & React.ComponentProps<
  typeof BasePaperCard
>;
const PaperCard = (props: PaperCardProps) => {
  const { paper: fullPaper, ...rest } = props;
  const paper = useFragment(PaperFragment, fullPaper);

  const [ref, styles] = useTilt<HTMLDivElement>({
    scale: 400,
    mass: 10,
    tension: 200,
  });

  if (!paper) {
    return <PlaceHolder />;
  }

  const { name, headerImageUrl, createdAt, renderedContent, tags, url } = paper ?? {};
  const createDate = parseISO(createdAt);

  return (
    <BasePaperCard ref={ref} {...styles} {...rest}>
      {compareAsc(new Date(), addDays(createDate, 1)) === -1 && (
        <Row height="0">
          <Badge height="1.2rem" variant="accent" mt="-0.5rem" ml="auto" mr="-0.5rem">
            new
          </Badge>
        </Row>
      )}
      {headerImageUrl && (
        <>
          <Image
            variant="top"
            height="15rem"
            width="100%"
            objectFit="cover"
            src={headerImageUrl}
            alt={name}
          />
        </>
      )}
      <CardBody>
        {name && (
          <>
            <Row>
              <PaperName mr="0.5rem">{name}</PaperName>
            </Row>
            <MDXRemote {...JSON.parse(renderedContent)} components={mdxComponents} />
          </>
        )}
      </CardBody>
      <PaperCardFooter>
        {tags &&
          tags.length > 0 &&
          tags.map((t) => (
            <Tag
              mainColor={t.mainColor}
              secondaryColor={t.secondaryColor}
              name={t.name}
              key={t.id}
              href={`/tags/${t.name}`}
            />
          ))}
        {url && (
          <AnimatedExternalLink ml="auto" href={url}>
            <Button ml="auto" mb="-1rem" p="0">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                <path
                  fill="#fff"
                  d="M27.599 20.536l-2.525-6.619h1.885l1.848 4.776 1.839-4.776h1.281l-2.557 6.619zM21.729 12.803v-1.496h1.787v1.496zM21.729 20.541v-6.624h1.787v6.619zM12.443 20.541l2.864-4.401-2.733-4.531h2.172l1.817 3.005 1.968-3.005h1.496l-2.729 4.208 2.839 4.713h-2.167l-1.933-3.197-2.072 3.197h-1.521zM7.984 20.541v-6.624h1.781v1.249c0.459-0.932 1.167-1.401 2.115-1.401 0.109 0 0.224 0.011 0.328 0.032v1.593c-0.224-0.084-0.463-0.131-0.703-0.136-0.719 0-1.292 0.355-1.74 1.068v4.219zM3.948 19.823c-0.593 0.579-1.229 0.871-1.917 0.871-0.525 0.015-1.031-0.172-1.416-0.532-0.364-0.359-0.557-0.859-0.541-1.375-0.027-0.677 0.307-1.323 0.88-1.693 0.583-0.396 1.421-0.599 2.511-0.599h0.473v-0.604c0-0.683-0.391-1.027-1.172-1.027-0.744 0.016-1.473 0.219-2.115 0.589v-1.229c0.765-0.303 1.584-0.459 2.412-0.459 1.735 0 2.599 0.688 2.599 2.063v2.943c0 0.521 0.161 0.776 0.5 0.776 0.079 0 0.156-0.011 0.235-0.025l0.041 1c-0.323 0.104-0.661 0.161-1 0.172-0.74 0-1.203-0.287-1.416-0.865h-0.068zM3.948 18.864v-1.343h-0.427c-1.157 0-1.729 0.364-1.729 1.083-0.011 0.479 0.375 0.865 0.848 0.865 0.443 0.004 0.865-0.199 1.308-0.605z"
                />
              </svg>
            </Button>
          </AnimatedExternalLink>
        )}
      </PaperCardFooter>
    </BasePaperCard>
  );
};

export default PaperCard;
