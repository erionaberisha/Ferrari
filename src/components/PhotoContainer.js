const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  overflow: hidden;

  .photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease; /* Add transition for transform */
  }

  .slide-left {
    transform: translateX(-100%);
  }

  .slide-right {
    transform: translateX(100%);
  }
`;
