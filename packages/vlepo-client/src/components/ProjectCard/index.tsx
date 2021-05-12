import { addDays, compareAsc, parseISO } from 'date-fns';
import { useState } from 'react';
import GitHubButton from 'react-github-btn';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { ProjectCard_project$key } from 'src/__generated__/ProjectCard_project.graphql';
import Tag from 'src/components/Tag';
import { width, WidthProps } from 'styled-system';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Badge from '../Badge';
import { CardBody, CardImage } from '../Card/style';
import { ImageOverlay } from '../Image/style';
import { Column, Row } from '../Layout/style';
import PlaceHolder from '../PlaceHolder';
import { H3 } from '../Typography';

export type ProjectCardProps = { project: ProjectCard_project$key } & WidthProps;

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

const BaseProjectCard = styled.div<WidthProps>`
  ${width}
`;

const ProjectCardFooter = styled.div``;

const ProjectName = styled(H3)``;

const ProjectCard = (props: ProjectCardProps) => {
  const theme = useTheme();
  const { project: fullProject, width } = props;
  const post = useFragment(ProjectFragment, fullProject);
  const { name, headerImageUrl, createdAt, content, tags, url } = post;
  const createDate = parseISO(createdAt);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <BaseProjectCard width={width}>
      {compareAsc(new Date(), addDays(createDate, 1)) === -1 && (
        <Row height="0">
          <Badge height="1.2rem" variant="accent" mt="-0.5rem" ml="auto" mr="-0.5rem">
            new
          </Badge>
        </Row>
      )}
      {headerImageUrl && (
        <>
          <CardImage
            onLoad={() => setImageLoaded(true)}
            layout="responsive"
            height={100}
            width={200}
            objectFit="cover"
            src={headerImageUrl}
            alt={name}
            top
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
        <GitHubButton
          href={url ?? ''}
          data-color-scheme={`no-preference: ${theme.name}; light: ${theme.name}; dark: ${theme.name};`}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label={`Star ${name} on GitHub`}
        >
          Star
        </GitHubButton>
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
