import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  opacity: 0.9;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index:10;
  padding: 5px 15px; 
  background-color: rgba(0, 0, 0, 0.8); 
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); 
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 7px; 
  }

  a {
    text-decoration: none;
    color: white;
     text-transform:uppercase;
    padding: 6px 10px; 
    border-radius: 10px; 
    transition: color 0.3s ease, background-color 0.3s ease; 
   
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="/images/ferrari-logo.png" alt="Ferrari Logo" />
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/models">Models</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
