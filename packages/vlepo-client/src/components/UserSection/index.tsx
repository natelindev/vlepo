import React from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from 'src/atoms/user';
import Dropdown from 'src/components/Dropdown';
import { NavItem } from 'src/components/Navbar/style';
import NavLink from 'src/components/NavLink';

import { css } from '@emotion/react';
import { OAuthConsts } from '@vlepo/shared';

import { deleteCookie } from '../../hooks/useCookie';
import { GreyText, LoginButton, NavbarAvatar } from './style';

type UserSectionProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserSection = (props: UserSectionProps) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const { setShowLoginModal } = props;
  return (
    <>
      {currentUser ? (
        <Dropdown
          position="right"
          css={css`
            margin-top: 12px;
          `}
        >
          <NavbarAvatar
            size={32}
            imageUrl={currentUser.profileImageUrl ?? '/images/avatar/bot.svg'}
          />
          <NavLink href={`/user/${currentUser.id}/profile`}>
            <NavItem>
              {currentUser.name}
              <GreyText>{currentUser.roles}</GreyText>
            </NavItem>
          </NavLink>
          <NavLink href={`/user/${currentUser.id}/settings`}>
            <NavItem>Settings</NavItem>
          </NavLink>
          {currentUser.roles.includes(OAuthConsts.roles.admin.value) && (
            <NavLink href="/dashboard">
              <NavItem>Dashboard</NavItem>
            </NavLink>
          )}
          <NavLink>
            <NavItem>Theme</NavItem>
          </NavLink>
          <NavLink
            onClick={() => {
              deleteCookie('idToken');
              deleteCookie('accessToken');
              deleteCookie('idToken.sig');
              deleteCookie('accessToken.sig');
              setCurrentUser(undefined);
            }}
          >
            <NavItem>Logout</NavItem>
          </NavLink>
        </Dropdown>
      ) : (
        <LoginButton onClick={() => setShowLoginModal(true)} colorA="#5CC6EE" colorB="#3232FF">
          Login
        </LoginButton>
      )}
    </>
  );
};

export default UserSection;
