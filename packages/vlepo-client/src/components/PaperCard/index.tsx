import { addDays, compareAsc, parseISO } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import { useFragment } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { PaperCard_paper$key } from 'src/__generated__/PaperCard_paper.graphql';
import mdxComponents from 'src/components/MDXComponents';
import Tag from 'src/components/Tag';

import styled from '@emotion/styled';

import Badge from '../Badge';
import Card from '../Card';
import { CardBody } from '../Card/style';
import Image from '../Image';
import { Row } from '../Layout/style';
import PlaceHolder from '../PlaceHolder';
import SocialButton from '../Social/SocialButton';
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

  if (!paper) {
    return <PlaceHolder />;
  }

  const { name, headerImageUrl, createdAt, renderedContent, tags, url } = paper ?? {};
  const createDate = parseISO(createdAt);

  return (
    <BasePaperCard {...rest}>
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
        {url && <SocialButton ml="auto" variant="github" href={url} />}
      </PaperCardFooter>
    </BasePaperCard>
  );
};

export default PaperCard;
