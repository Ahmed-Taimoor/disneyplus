import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import New from './New';
import Originals from './Originals';
import Trending from './Trending';
import Viewers from './Viewers';



const Home = () => {






  return (

    <Container>
      <ImgSlider />
      <Viewers />
      <New />
      <Movies />
      <Trending />
      <Originals />

    </Container>
  );
};


const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 4% calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://drive.google.com/uc?id=1KGsWMXJz6S2Bj_tj3scTKvDMsO5i-wcJ") center center / cover 
    no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default Home;