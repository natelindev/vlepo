import Link from 'next/link';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from 'src/atoms/user';

import { css } from '@emotion/react';
import { OAuthConsts } from '@vlepo/shared';

import { deleteCookie } from '../../hooks/useCookie';
import Dropdown from '../Dropdown';
import LoginModal from '../Modals/LoginModal';
import NavLink from '../NavLink';
import {
  BaseNavbar,
  GreyText,
  LeftNavCollapse,
  LoginButton,
  NavbarAvatar,
  NavbarNav,
  NavBrand,
  NavItem,
  NavLogo,
  NavSearchBar,
  RightNavCollapse,
} from './style';

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  return (
    <BaseNavbar>
      <NavLogo size="50px" />
      <Link href="/" passHref>
        <NavBrand href="/">Nathaniel&#39;s Blog</NavBrand>
      </Link>
      <LeftNavCollapse>
        <NavbarNav>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/papers">Papers</NavLink>
          <NavLink href="/about">About</NavLink>
          <Dropdown
            css={css`
              margin-top: 4px;
            `}
          >
            <NavLink href="">More</NavLink>
            <NavLink href="/thoughts">
              <NavItem>Thoughts</NavItem>
            </NavLink>
            <NavLink href="/friends">
              <NavItem>Friends</NavItem>
            </NavLink>
            <NavLink href="/tags">
              <NavItem>Tags</NavItem>
            </NavLink>
          </Dropdown>
        </NavbarNav>
      </LeftNavCollapse>
      <RightNavCollapse>
        <NavbarNav>
          <NavSearchBar />
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
        </NavbarNav>
      </RightNavCollapse>
      {/* <NavbarToggler className="animated--toggler" /> */}
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </BaseNavbar>
  );
};

export default Navbar;
