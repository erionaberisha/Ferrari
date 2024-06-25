import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  overflow: hidden; 
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; 
  top: 0;
  left: 0;
  z-index: -1; /* Ensure the video is behind the text */
  opacity: 0.8;
`;

const CTAButton = styled.a`
  background-color: red;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  z-index: 1; /* Ensure the button is above the video */

  &:hover {
    background-color: darkred;
  }
`;

const Home = () => {
  return (
    <Hero>
      <HeroVideo autoPlay muted loop>
        <source src="/images/Ferrari.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </HeroVideo>
      <h1 style={{ zIndex: 1 }}>Welcome to Scuderia Ferrari</h1>
      <p style={{ zIndex: 1 }}>Experience the thrill of driving.</p>
      <CTAButton href="/models">Explore Models</CTAButton>
    </Hero>
  );
};

export default Home;
