import styled from '@emotion/styled';

const PlaceHolder = styled.div<{ width?: string; height?: string }>`
  @keyframes placeHolderShimmer {
    0% {
      background-position: 0 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  animation: placeHolderShimmer 1.5s ease infinite;
  background: linear-gradient(90deg, #f6f7f8, #d4d6d8, #f6f7f8);
  background-size: 200%;
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '100%'};
  position: relative;
  overflow: hidden;
`;

export default PlaceHolder;
