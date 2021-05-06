import styled from '@emotion/styled';

import Avatar from '../Avatar';
import GradientButton from '../GradientButton';

export const LoginButton = styled(GradientButton)`
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  margin-right: 1rem;
  height: 100%;
  padding: 0.5rem 0.6rem;
`;

export const NavbarAvatar = styled(Avatar)`
  & > div {
    border-radius: 50%;
  }
  margin-top: -0.15rem;
  margin-bottom: auto;
  margin-left: 0.3rem;
  margin-right: 1.25rem;
`;

export const GreyText = styled.h5`
  color: ${(props) => props.theme.colors.muted};
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
