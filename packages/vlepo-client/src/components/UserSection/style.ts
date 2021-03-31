import styled from '@emotion/styled';

import Avatar from '../Avatar';
import GradientButton from '../GradientButton';

export const LoginButton = styled(GradientButton)`
  border-radius: ${(props) => props.theme.radii.default};
  margin-right: 1rem;
  height: 100%;
`;

export const NavbarAvatar = styled(Avatar)`
  & > div {
    border-radius: 50%;
  }
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1.25rem;
  margin-right: 1.75rem;
`;

export const GreyText = styled.h5`
  color: ${(props) => props.theme.colors.muted};
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
