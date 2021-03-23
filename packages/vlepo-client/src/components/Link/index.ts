import styled from '@emotion/styled';

export const AnimatedLink = styled.a`
  position: relative;
  color: ${(props) => props.theme.colors.link};
  text-decoration: none !important;

  &:hover {
    color: ${(props) => props.theme.colors.link};
    &:before {
      visibility: visible;
      text-decoration: none;
      transform: scaleX(1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${(props) => props.theme.colors.link};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;
