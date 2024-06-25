import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: fixed;
  flex-direction: column;
  align-items: center;
  
`;

const SocialMedia = styled.div`
  margin-top: 5px;
  a {
    margin: 0 5px;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 10px; 
    transition: background-color 0.3s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1); 
    }
  } 
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Ferrari. All rights reserved.</p>
      <SocialMedia>
        <a href="https://facebook.com/ferrari" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/ferrari" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com/ferrari" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialMedia>
    </FooterWrapper>
  );
};

export default Footer;
