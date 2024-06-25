import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ModelDetailWrapper = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #121212;
  color: #f5f5f5;
  font-family: 'Arial', sans-serif;
`;

const HeroSection = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  img {
    width: 80%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

const Description = styled.p`
  font-size: 1.0em;
  line-height: 1.2;
  margin-bottom: 30px;
`;

const SpecsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  list-style-type: none;
  padding: 0;
  text-align: left;

  li {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  strong {
    display: block;
    margin-bottom: 5px;
    font-size: 1 em;
  }
`;


const models = [
  {
    id: 1,
    name: 'Ferrari 488',
    image: '/images/Ferrari_488.jpg',
    description: 'The Ferrari 488 is a mid-engine sports car that exemplifies the brands commitment to performance and design. Introduced in 2015, it features a 3.9-liter twin-turbocharged V8 engine producing 661 horsepower, allowing it to accelerate from 0 to 60 mph in just 3 seconds. With its aerodynamic styling, advanced electronics, and luxurious interior, the Ferrari 488 offers an exhilarating driving experience that combines speed, agility, and elegance.',
    specs: [
      { key: 'Engine', value: '3.9-liter twin-turbocharged V8' },
      { key: 'Power', value: '661 horsepower at 8,000 rpm' },
      { key: 'Torque', value: '561 lb-ft at 3,000 rpm' },
      { key: '0-60 mph', value: '3.0 seconds' },
      { key: 'Top Speed', value: '205 mph (330 km/h)' },
      { key: 'Transmission', value: '7-speed dual-clutch automatic' },
      { key: 'Drivetrain', value: 'Rear-wheel drive (RWD)' },
      { key: 'Curb Weight', value: 'Approximately 3,252 lbs (1,476 kg)' },
      { key: 'Dimensions (L x W x H)', value: '179.8 in x 76.9 in x 47.8 in (4,568 mm x 1,953 mm x 1,214 mm)' },
      { key: 'Fuel Economy', value: '15 mpg city / 22 mpg highway' },
      { key: 'Brakes', value: 'Carbon-ceramic' },
      { key: 'Suspension', value: 'Double wishbone (front), Multi-link (rear)' },
      { key: 'Tires', value: '245/35 ZR20 (front), 305/30 ZR20 (rear)' },
      { key: 'Interior', value: 'Leather upholstery, advanced infotainment system, and customizable options' },
      { key: 'Price', value: 'Starting around $262,647 (base model)' }
    ],
  },
  {
    id: 2,
    name: 'Ferrari F8',
    image: '/images/ferrari f8.avif',
    description: 'The Ferrari F8 Tributo is the successor to the 488, unveiled in 2019. It boasts a 3.9-liter twin-turbocharged V8 engine, generating an impressive 710 horsepower. This powerhouse enables the F8 to sprint from 0 to 60 mph in a mere 2.9 seconds. The F8 Tributo incorporates cutting-edge aerodynamics, refined styling, and state-of-the-art technology, offering unparalleled performance and driving pleasure. It stands as a tribute to Ferrari\'s engineering excellence and racing heritage.',
    specs: [
      { key: 'Engine', value: '3.9-liter twin-turbocharged V8' },
      { key: 'Power', value: '710 horsepower' },
      { key: '0-60 mph', value: '2.9 seconds' },
      { key: 'Top Speed', value: '211 mph' },
      { key: 'Price', value: '$300,000' }
    ],
  },
  {
    id: 3,
    name: 'Ferrari Daytona SP3',
    image: '/images/Daytona.jpg',
    description: 'The Ferrari Daytona SP3 is a limited-edition supercar that draws inspiration from the classic Ferrari racing cars of the 1960s. It features a naturally aspirated 6.5-liter V12 engine that produces 828 horsepower, enabling it to reach 0-60 mph in just 2.85 seconds. The Daytona SP3 combines retro styling cues with modern performance and technology, making it a highly coveted collector’s item.',
    specs: [
      { key: 'Engine', value: '6.5-liter naturally aspirated V12' },
      { key: 'Power', value: '828 horsepower' },
      { key: '0-60 mph', value: '2.85 seconds' },
      { key: 'Top Speed', value: '211 mph (340 km/h)' },
      { key: 'Transmission', value: '7-speed dual-clutch automatic' },
      { key: 'Drivetrain', value: 'Rear-wheel drive (RWD)' },
      { key: 'Price', value: 'Approximately $2.25 million' }
    ],
  },
  {
    id: 4,
    name: 'Ferrari Roma',
    image: '/images/Roma.jpg',
    description: 'The Ferrari Roma is a sleek, front-engine coupe that embodies the elegance and performance of the grand touring tradition. It is powered by a 3.9-liter twin-turbocharged V8 engine delivering 612 horsepower, allowing it to accelerate from 0 to 60 mph in 3.4 seconds. The Roma combines contemporary design with cutting-edge technology, offering a refined yet exhilarating driving experience.',
    specs: [
      { key: 'Engine', value: '3.9-liter twin-turbocharged V8' },
      { key: 'Power', value: '612 horsepower' },
      { key: '0-60 mph', value: '3.4 seconds' },
      { key: 'Top Speed', value: '199 mph (320 km/h)' },
      { key: 'Transmission', value: '8-speed dual-clutch automatic' },
      { key: 'Drivetrain', value: 'Rear-wheel drive (RWD)' },
      { key: 'Price', value: 'Starting around $222,620' }
    ],
  },
  {
    id: 5,
    name: 'Ferrari Roma Spider',
    image: '/images/RomaSpider.png',
    description: 'The Ferrari Roma Spider is the convertible variant of the Roma coupe, offering the same elegant design and performance with the added thrill of open-top driving. It is equipped with a 3.9-liter twin-turbocharged V8 engine producing 612 horsepower, enabling it to go from 0 to 60 mph in 3.5 seconds. The Roma Spider combines luxurious comfort with Ferrari’s signature performance.',
    specs: [
      { key: 'Engine', value: '3.9-liter twin-turbocharged V8' },
      { key: 'Power', value: '612 horsepower' },
      { key: '0-60 mph', value: '3.5 seconds' },
      { key: 'Top Speed', value: '199 mph (320 km/h)' },
      { key: 'Transmission', value: '8-speed dual-clutch automatic' },
      { key: 'Drivetrain', value: 'Rear-wheel drive (RWD)' },
      { key: 'Price', value: 'Starting around $250,000' }
    ],
  },
  {
    id: 6,
    name: 'Ferrari Monza SP1',
    image: '/images/MonzaSP1.jpg',
    description: 'The Ferrari Monza SP1 is a single-seater barchetta inspired by the racing cars of the 1950s. It features a 6.5-liter naturally aspirated V12 engine delivering 810 horsepower, allowing it to accelerate from 0 to 60 mph in 2.9 seconds. With its minimalist design and open cockpit, the Monza SP1 offers a pure, unfiltered driving experience.',
    specs: [
      { key: 'Engine', value: '6.5-liter naturally aspirated V12' },
      { key: 'Power', value: '810 horsepower' },
      { key: '0-60 mph', value: '2.9 seconds' },
      { key: 'Top Speed', value: '186 mph (299 km/h)' },
      { key: 'Transmission', value: '7-speed dual-clutch automatic' },
      { key: 'Drivetrain', value: 'Rear-wheel drive (RWD)' },
      { key: 'Price', value: 'Approximately $1.8 million' }
    ],
  },
  {
    id: 7,
    name: 'Ferrari Monza SP2',
    image: '/images/MonzaSP2.jpg',
    description: 'The Ferrari Monza SP2 is a two-seater variant of the SP1, offering the same performance and design with the ability to share the driving experience. It features a 6.5-liter naturally aspirated V12 engine producing 810 horsepower, enabling it to reach 0-60 mph in 2.9 seconds. The Monza SP2 combines vintage aesthetics with modern engineering for a unique driving experience.',
    specs: [
      { key: 'Engine', value: '6.5-liter naturally aspirated V12' },
      { key: 'Power', value: '810 horsepower' },
      { key: '0-60 mph', value: '2.9 seconds' },
      { key: 'Top Speed', value: '186 mph (299 km/h)' },
      { key: 'Transmission', value: '7-speed dual-clutch automatic' },
      { key: 'Drivetrain', value: 'Rear-wheel drive (RWD)' },
      { key: 'Price', value: 'Approximately $1.8 million' }
    ],
  },
];



const ModelDetail = () => {
  const { id } = useParams();
  const model = models.find(model => model.id === parseInt(id));

  if (!model) return <div>Model not found</div>;

  return (
    <ModelDetailWrapper>
      <HeroSection>
        <h2>{model.name}</h2>
      </HeroSection>
      <ImageWrapper>
        <img src={model.image} alt={model.name} />
      </ImageWrapper>
      <Description>{model.description}</Description>
      <h3>Specifications:</h3>
      <SpecsList>
        {model.specs.map((spec, index) => (
          <li key={index}>
            <strong>{spec.key}:</strong> {spec.value}
          </li>
        ))}
      </SpecsList>
    </ModelDetailWrapper>
  );
};

export default ModelDetail;