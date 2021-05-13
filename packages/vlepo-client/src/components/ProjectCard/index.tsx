import { addDays, compareAsc, parseISO } from 'date-fns';
import { useState } from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { ProjectCard_project$key } from 'src/__generated__/ProjectCard_project.graphql';
import Tag from 'src/components/Tag';

import styled from '@emotion/styled';

import Badge from '../Badge';
import Card from '../Card';
import { CardBody } from '../Card/style';
import Image from '../Image';
import { ImageOverlay } from '../Image/style';
import { Row } from '../Layout/style';
import PlaceHolder from '../PlaceHolder';
import { H3 } from '../Typography';

const ProjectFragment = graphql`
  fragment ProjectCard_project on Project {
    id
    name
    url
    content
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

export const BaseProjectCard = styled(Card)`
  position: relative;
  flex-direction: column;
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  box-shadow: ${(props) => props.theme.shadows.Card};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const ProjectCardFooter = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const ProjectName = styled(H3)``;

export type ProjectCardProps = { project: ProjectCard_project$key | null };
const ProjectCard = (props: ProjectCardProps) => {
  const { project: fullProject } = props;
  const post = useFragment(ProjectFragment, fullProject);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!post) {
    return <PlaceHolder />;
  }

  const { name, headerImageUrl, createdAt, content, tags, url } = post ?? {};
  const createDate = parseISO(createdAt);

  return (
    <BaseProjectCard href={url} external>
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
            onLoad={() => setImageLoaded(true)}
            height="15rem"
            width="100%"
            objectFit="cover"
            src={headerImageUrl}
            alt={name}
          />
          {!imageLoaded && (
            <ImageOverlay>
              <PlaceHolder />
            </ImageOverlay>
          )}
        </>
      )}
      <CardBody>
        {name && (
          <>
            <Row>
              <ProjectName mr="0.5rem">{name}</ProjectName>
            </Row>
            <Row>{content}</Row>
          </>
        )}
      </CardBody>
      <ProjectCardFooter>
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
      </ProjectCardFooter>
    </BaseProjectCard>
  );
};

export default ProjectCard;
