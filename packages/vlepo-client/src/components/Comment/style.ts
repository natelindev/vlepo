import styled from '@emotion/styled';

export const BaseProfileComment = styled.div`
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundMuted};
  }
`;

export const BaseCommentSection = styled.div`
  display: flex;
  flex-direction: column;
`;
