import styled from '@emotion/styled';

export const BaseTag = styled.a`
  color: ${(props) => props.theme.colors.muted};

  font-size: ${(props) => `${props.theme.fontSizes[1]}px`};
  margin-bottom: auto;

  margin-left: 0.3rem;
  margin-right: 0.3rem;

  text-decoration: none;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  border: 1px solid ${(props) => props.theme.colors.muted};
  border-radius: 0.2rem;

  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.textTransparent};
    border-color: ${(props) => props.theme.colors.text};
    backdrop-filter: saturate(180%) blur(5px);
  }

  &:focus,
  &.focus {
    box-shadow: ${(props) => props.theme.shadows.Card};
  }

  &.disabled,
  &:disabled {
    color: ${(props) => props.theme.colors.text};
    background-color: transparent;
  }

  &:not(:disabled):not(.disabled):active {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.text};
  }

  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: ${(props) => props.theme.shadows.Card};
  }

  z-index: ${(props) => props.theme.zIndices.Tags};
`;
