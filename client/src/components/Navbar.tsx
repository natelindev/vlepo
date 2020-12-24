import './Navbar.scoped.scss';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar as BsNavBar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

import GradientButton from './GradientButton';
import Logo from './Logo';
import NavLink from './Navlink';
import SearchBar from './SearchBar';

const Navbar: React.SFC = () => {
  const [open, setOpen] = useState(false);
  return (
    <BsNavBar color="light" light expand="md">
      <Logo />
      <NavbarBrand tag={Link} to="/">
        Nathaniel&#39;s Dev Area
      </NavbarBrand>
      <Collapse isOpen={false} className="flex-grow-0" navbar>
        <Nav>
          <NavItem>
            <NavLink to="/portfolio">作品集</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/papers">论文</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">关于</NavLink>
          </NavItem>
          <Dropdown nav inNavbar isOpen={open} toggle={() => setOpen(!open)}>
            <DropdownToggle nav caret>
              更多
            </DropdownToggle>
            <DropdownMenu right>
              <Link
                className="dropdown-item"
                to="/notes"
                onClick={() => {
                  setOpen(false);
                }}
              >
                动态
              </Link>
              <Link
                className="dropdown-item"
                to="/friends"
                onClick={() => {
                  setOpen(false);
                }}
              >
                友链
              </Link>
              <Link
                className="dropdown-item"
                to="/messageBoard"
                onClick={() => {
                  setOpen(false);
                }}
              >
                留言板
              </Link>
              <Link
                className="dropdown-item"
                to="/timeline"
                onClick={() => {
                  setOpen(false);
                }}
              >
                时间线
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
      <Collapse isOpen={false} navbar className="ml-auto mr-0 justify-content-end flex-grow-1">
        <Nav className="flex-grow-1 justify-content-end">
          <NavItem className="searchBar">
            <SearchBar />
          </NavItem>
          <NavItem>
            <GradientButton className="ml-2" link="/login" colorA="#5CC6EE" colorB="#3232FF">
              登录
            </GradientButton>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarToggler className="animated--toggler" />
    </BsNavBar>
  );
};

export default Navbar;
