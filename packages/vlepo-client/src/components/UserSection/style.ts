import { PersonOutline } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

import Avatar from '../Avatar';

export const LoginButton = styled(PersonOutline)`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 1rem;
  cursor: pointer;
`;

export const NavbarAvatar = styled(Avatar)`
  & > div {
    border-radius: 50%;
  }
  margin-top: -0.15rem;
  margin-bottom: auto;
  margin-right: 1rem;
`;

export const GreyText = styled.h5`
  color: ${(props) => props.theme.colors.muted};
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
