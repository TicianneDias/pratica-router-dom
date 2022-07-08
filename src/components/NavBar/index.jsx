import React, { useState } from 'react';
import { Nav, Hamburger, MenuLink, Menu, Logo } from './styles';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        <img src="https://img.icons8.com/bubbles/50/000000/rocket.png" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">HOME</MenuLink>
        <MenuLink href="/PageOne">PAGE ONE</MenuLink>
        <MenuLink href="PageTwo">PAGE TWO</MenuLink>
      </Menu>
    </Nav>
  );
};

export default NavBar;
