import { graphql } from 'react-relay';

const indexFragmentSpec = graphql`
  fragment projects_Projects on Blog
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "ProjectRefetchQuery") {
    projectsConnection(first: $count, after: $cursor)
      @connection(key: "projects_projectsConnection") {
      edges {
        node {
          ...ProjectCard_project
        }
      }
    }
  }
`;

const blogQuery = graphql`
  query projects_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      ...projects_Projects
    }
  }
`;

const Projects = () => <></>;
export default Projects;
