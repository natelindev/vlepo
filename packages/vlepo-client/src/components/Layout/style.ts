import styled from '@emotion/styled';

export const Header = styled.header`
  flex: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  flex: 1 0 auto;
  width: 100%;
  overflow-y: hidden;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Footer = styled.footer`
  flex: none;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
