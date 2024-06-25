import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  padding: 80px;
  text-align: center;
  background-color: black;
  color: white;
`;

const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const GalleryItem = styled.div`
  position: relative;
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); }
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 100%;
  border-radius: 0 0 15px 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  // this syntax ensures that the Overlay component becomes visible when its parent GalleryItem is hovered over//
  
  ${GalleryItem}:hover & {
    transform: translateY(0);
  }

  p {
    margin: 10px;
  }
`;

const Gallery = () => {
  const images = [
    { src: '/images/296GTS.jpg', name: '296 GTS' },
    { src: '/images/Daytona.jpg', name: 'Daytona' },
    { src: '/images/MonzaSP1.jpg', name: 'Monza SP1' },
    { src: '/images/MonzaSP2.jpg', name: 'Monza SP2' },
    { src: '/images/Roma.jpg', name: 'Roma' },
    { src: '/images/RomaSpider.png', name: 'Roma Spider' },
    { src: '/images/SF90.jpg', name: 'SF90' },
  ];

  return (
    <GalleryWrapper>
      <h2>Gallery</h2>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <img src={image.src} alt={image.name} />
            <Overlay>
              <p>{image.name}</p>
            </Overlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryWrapper>
  );
};

export default Gallery;
