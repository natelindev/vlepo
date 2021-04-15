import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { a, useTransition } from 'react-spring';
import Dropdown from 'src/components/Dropdown';
import Logo from 'src/components/Logo';
import { ThemeContext } from 'src/pages/_app';
import { darkTheme, lightTheme } from 'src/shared/theme';

import { DarkMode, LightMode } from '@emotion-icons/material-outlined';

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
  NavSearchBar,
  RightNavCollapse,
} from './style';

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const transition = useTransition(theme?.name === 'dark', {
    from: { position: 'absolute' as const, opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <BaseNavbar>
      <Logo size="32px" ml="1rem" my="auto" />
      <Link href="/" passHref>
        <NavBrand href="/">Nathaniel&#39;s Blog</NavBrand>
      </Link>
      <LeftNavCollapse>
        <NavbarNav>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/papers">Papers</NavLink>
          <NavLink href="/about">About</NavLink>
          <Dropdown mt="4px">
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
            onClick={() => setTheme?.(theme.name === 'dark' ? lightTheme : darkTheme)}
          >
            {transition((style, item) =>
              item ? (
                <a.div style={style}>
                  <DarkMode size={24} />
                </a.div>
              ) : (
                <a.div style={style}>
                  <LightMode size={24} />
                </a.div>
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
