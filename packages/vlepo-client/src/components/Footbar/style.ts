import styled from '@emotion/styled';

export const FootbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const CenteredText = styled.div`
  color: ${(props) => props.theme.colors.muted};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const LoveIcon = styled.div`
  margin-left: 0.2rem;
`;

export const BottomText = styled.div`
  color: ${(props) => props.theme.colors.muted};
`;