import { useRouter } from 'next/router';
import React from 'react';
import { animated, useTransition } from 'react-spring';
import { useRecoilState } from 'recoil';
import { themeState } from 'src/atoms/theme';
import { currentUserState } from 'src/atoms/user';
import Dropdown from 'src/components/Dropdown';
import { NavItem } from 'src/components/Navbar/style';
import NavLink from 'src/components/NavLink';
import { darkTheme, lightTheme } from 'src/shared/theme';

import { DarkMode, Dashboard, LightMode, Logout, Settings } from '@emotion-icons/material-outlined';
import { css } from '@emotion/react';
import { OAuthConsts } from '@vlepo/shared';

import { deleteCookie } from '../../hooks/useCookie';
import { GreyText, LoginButton, NavbarAvatar, Text } from './style';

type UserSectionProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserSection = (props: UserSectionProps) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [theme, setTheme] = useRecoilState(themeState);
  const { setShowLoginModal } = props;
  const router = useRouter();

  const transitions = useTransition(theme.name === 'dark', null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
          <NavLink
            active={router.pathname.split('/').slice(-1)[0] === 'profile'}
            href={`/user/${currentUser.id}/profile`}
          >
            <NavItem>
              {currentUser.name}
              <GreyText>{currentUser.roles}</GreyText>
            </NavItem>
          </NavLink>
          <NavLink
            active={router.pathname.split('/').slice(-1)[0] === 'settings'}
            href={`/user/${currentUser.id}/settings`}
          >
            <NavItem>
              <Settings size={24} /> Settings
            </NavItem>
          </NavLink>
          {currentUser.roles.includes(OAuthConsts.roles.admin.value) && (
            <NavLink active={router.pathname.split('/')[1] === 'dashboard'} href="/dashboard/blog">
              <NavItem>
                <Dashboard size={24} /> Dashboard
              </NavItem>
            </NavLink>
          )}
          <NavLink>
            <NavItem onClick={() => setTheme(theme.name === 'dark' ? lightTheme : darkTheme)}>
              {transitions.map(({ item, props }) =>
                item ? (
                  <animated.div style={props}>
                    <LightMode size={24} />
                  </animated.div>
                ) : (
                  <animated.div style={props}>
                    <DarkMode size={24} />
                  </animated.div>
                ),
              )}
              <Text>Theme</Text>
            </NavItem>
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
            <NavItem>
              <Logout size={24} /> Logout
            </NavItem>
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
