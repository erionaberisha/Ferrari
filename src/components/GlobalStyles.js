import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');

  body {
    font-family: 'EB Garamond', serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header, footer {
    background-color: #000;
    color: #fff;
    padding: 10px;
    text-align: center;
  }

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin: 0 15px;
  }

  nav ul li a {
    color: #fff;
    text-decoration: none;
  }

  .hero {
    background: url('/images/hero.jpg') no-repeat center center/cover;
    height: 400px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .hero p {
    font-size: 1.5rem;
  }

  .cta {
    background-color: red;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
  }
`;

export default GlobalStyles;
