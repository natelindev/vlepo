import { Button } from 'src/components/Button';

import styled from '@emotion/styled';

export const OauthButtonSection = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

export const OauthButton = styled(Button)`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme.colors.backgroundMuted};
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) => props.theme.shadows.Card};
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.theme.zIndices.GradientButton};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.OauthButton};
  }
`;
