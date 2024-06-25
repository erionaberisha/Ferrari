import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative; /* To position the text over the video */
  overflow: hidden; /* Hide overflow to prevent video from going outside bounds */
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; /* Position video behind the text */
  top: 0;
  left: 0;
  z-index: -1; /* Ensure the video is behind the text */
  opacity: 0.8; /* Optional: Make the video semi-transparent */
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin: 0;
  z-index: 1; /* Ensure the text is above the video */
`;

const Subheadline = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
  z-index: 1; /* Ensure the text is above the video */
`;

const CTAButton = styled.a`
  background-color: red;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  z-index: 1; /* Ensure the button is above the video */

  &:hover {
    background-color: darkred;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroVideo autoPlay muted loop>
        <source src="/images/Ferrari.mp4" type="video/mp4" />
      </HeroVideo>
      <Headline>Experience the Thrill of Ferrari</Headline>
      <Subheadline>Discover our latest models and their stunning performance</Subheadline>
      <CTAButton href="/models">Explore Models</CTAButton>
    </HeroWrapper>
  );
};

export default Hero;
