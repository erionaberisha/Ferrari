import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const photos = [
  { id: 1, src: '/images/1934.jpg', description: 'Three Scuderia Ferrari cars in 1934' },
  { id: 2, src: '/images/1952.jpg', description: 'Ascari and Villoresi at the 1952 Italian Grand Prix, both driving Ferrari Tipo 500s.' },
  { id: 3, src: '/images/1960.jpg', description: 'In the early 1960s: everything in its production line was handmade by machinists, who followed technical drawings with extreme precision' },
  { id: 4, src: '/images/1967.jpg', description: 'The Dino 206 GT, first produced for the 1967 model year, was Ferrari'},
  { id: 5, src: '/images/1996.jfif', description: '1996 – champion Schumacher to Scuderia Ferrari' },
  { id: 6, src: '/images/schumacher.jpg', description: '2000–2004 – Schumacher dominates Formula One' },
  { id: 7, src: '/images/70th.jpg', description: '2017 – Ferrari 70th anniversary' },
  { id: 8, src: '/images/90th.jpg', description: '2019 – Scuderia Ferrari-s 90th anniversary' },
  { id: 9, src: '/images/2024.jpg', description: 'Fromula 1 -2024' },
];

const AboutWrapper = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Helvetica Neue', sans-serif;
`;

const Heading = styled.h2`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
`;

const Subheading = styled.p`
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto 30px auto;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const PhotoImage = styled.img`
  width: 100%;
  height: auto;
  animation: ${fadeIn} 0.9s ease;
`;

const PhotoDescription = styled.p`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 0.9em;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 10px;
  background-color: #e31b23;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s ease;

  &:hover {
    background-color: #b01619;
    transform: scale(1.05);
  }
`;

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <AboutWrapper>
      <Heading>About Ferrari</Heading>
      <Subheading>Our History: Celebrating Passion and Excellence</Subheading>
      <Description>
        Founded by Enzo Ferrari in 1929, Scuderia Ferrari initially served as a racing team under Alfa Romeo. By 1947, Ferrari emerged as an independent automobile manufacturer with the launch of the iconic Ferrari 125 S.
        In recent years, Ferrari has embraced hybrid technology and sustainability with models like the LaFerrari and SF90 Stradale. These cars blend performance with eco-consciousness, showcasing Ferrari's continued pursuit of excellence in automotive engineering.
        Ferrari's journey is not just about cars; it's a celebration of passion, craftsmanship, and Italian heritage. With a legacy rooted in racing success, innovation, and timeless design, Ferrari remains an enduring symbol of automotive excellence and luxury.
      </Description>
      <PhotoContainer>
        <PhotoImage
          src={photos[currentPhotoIndex].src}
          alt={`Photo ${currentPhotoIndex + 1}`}
        />
        <PhotoDescription>{photos[currentPhotoIndex].description}</PhotoDescription>
      </PhotoContainer>
      <ButtonContainer>
        <Button onClick={handlePrevious}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </ButtonContainer>
      <p><strong>Join us as we continue to drive forward with a relentless pursuit of perfection and a commitment to delivering unparalleled driving experiences.</strong></p>
    </AboutWrapper>
  );
};

export default About;
