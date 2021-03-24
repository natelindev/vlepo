import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';
import Dropdown from 'src/components/Dropdown';

import { css } from '@emotion/react';

import LoginModal from '../Modals/LoginModal';
import NavLink from '../NavLink';
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

const UserSection = dynamic(() => import('src/components/UserSection'), {
  ssr: false,
});

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

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
          <UserSection setShowLoginModal={setShowLoginModal} />
        </NavbarNav>
      </RightNavCollapse>
      {/* <NavbarToggler className="animated--toggler" /> */}
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </BaseNavbar>
  );
};

export default Navbar;
