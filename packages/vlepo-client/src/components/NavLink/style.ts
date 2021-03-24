import styled from '@emotion/styled';

type BaseNavLinkProps = {
  active?: boolean;
};

export const BaseNavLink = styled.a<BaseNavLinkProps>`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  color: ${(props) => (props.active ? props.theme.colors.link : props.theme.colors.muted)};
  background-color: transparent;
  border-radius: ${(props) => (props.active ? '0px' : '0.4rem')};
  transition: 0.1s background-color ease-in;
  cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  ${(props) =>
    props.active
      ? ''
      : `&:hover {
    background-color: ${props.theme.colors.backgroundMuted};
  }`}
  box-shadow: ${(props) => (props.active ? `0 2px 0 0 ${props.theme.colors.link}` : 'none')};
`;
