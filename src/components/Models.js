import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const models = [
  { id: 1, name: 'Ferrari 488', image: '/images/Ferrari_488.jpg' },
  { id: 2, name: 'Ferrari F8', image: '/images/ferrari f8.avif' },
  { id: 3, name: 'Daytona', image: '/images/Daytona.jpg' },
  { id: 4, name: 'Roma', image: '/images/Roma.jpg' },
  { id: 5, name: 'Roma Spider', image: '/images/RomaSpider.png' },
  { id: 6, name: 'MonzaSP1', image: '/images/MonzaSP1.jpg ' },
  { id: 7, name: 'MonzaSP2', image: '/images/MonzaSP2.jpg' },
 
];

const ModelsWrapper = styled.div`
  padding: 80px;
  text-align: center;
  background-color:black;
  color:white;
`;

const ModelList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ModelCard = styled.div`
  margin: 20px;
  text-align: center;
  
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease; /* Smooth transition for the hover effect */
  }

  img:hover {
    transform: scale(1.05); /* Scale the image up slightly */
  }

  h3 {
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: red;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;
    transition: color 0.3s ease;

    &:hover {
      color: darkred;
    }
  }
`;

const Models = () => {
  return (
    <ModelsWrapper>
      <h2>Our Models</h2>
      <ModelList>
        {models.map(model => (
          <ModelCard key={model.id}>
            <img src={model.image} alt={model.name} />
            <h3>{model.name}</h3>
            <Link to={`/models/${model.id}`}>View Details</Link>
          </ModelCard>
        ))}
      </ModelList>
    </ModelsWrapper>
  );
};

export default Models;
