import Link from 'next/link';
import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { useRecoilState } from 'recoil';
import { themeState } from 'src/atoms/theme';
import Dropdown from 'src/components/Dropdown';
import { darkTheme, lightTheme } from 'src/shared/theme';

import { DarkMode, LightMode } from '@emotion-icons/material-outlined';
import { css } from '@emotion/react';

import ClientOnly from '../ClientOnly';
import LoginModal from '../Modals/LoginModal';
import NavLink from '../NavLink';
import UserSection from '../UserSection';
import {
  BaseNavbar,
  LeftNavCollapse,
  NavbarNav,
  NavBrand,
  NavItem,
  NavLogo,
  NavSearchBar,
  RightNavCollapse,
} from './style';

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);

  const transitions = useTransition(theme.name === 'dark', null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
          <NavItem
            width="1.5rem"
            mt="7px"
            mx="1.2rem"
            onClick={() => setTheme(theme.name === 'dark' ? lightTheme : darkTheme)}
          >
            {transitions.map(({ item, props }) =>
              item ? (
                <animated.div style={props}>
                  <DarkMode size={24} />
                </animated.div>
              ) : (
                <animated.div style={props}>
                  <LightMode size={24} />
                </animated.div>
              ),
            )}
          </NavItem>
          <ClientOnly>
            <UserSection setShowLoginModal={setShowLoginModal} />
          </ClientOnly>
        </NavbarNav>
      </RightNavCollapse>
      {/* <NavbarToggler className="animated--toggler" /> */}
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </BaseNavbar>
  );
};

export default Navbar;
