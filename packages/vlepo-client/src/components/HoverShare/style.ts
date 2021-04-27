import styled from '@emotion/styled';

export const ShareContainer = styled.div<{ scrollPosition: number }>`
  @media only screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    display: none;
  }

  opacity: ${(props) => (props.scrollPosition > 300 ? 1 : 0)};
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  margin-top: 2rem;
  position: fixed;
  display: 'flex';
  max-width: 2rem;

  flex-direction: column;
  margin-left: 1.75rem;
  margin-right: auto;

  *:focus {
    border: none;
    outline: none;
  }

  svg {
    border-radius: ${(props) => `${props.theme.radii.default}px`};
  }
`;
