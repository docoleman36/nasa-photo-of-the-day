import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import NasaData from './components/NasaData';


const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;

`;

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=hkcG8e1aPSbF5lPiZWqd8qSGPuTOaYhbjKwO9auP')
      .then(response => {
        const photo = response.data;
        console.log(response);
        setData(photo);
      });
  }, []);

  return (
    <WrapperDiv>
      <NasaData
        copyright={data.copyright}
        title={data.title}
        date={data.date}
        img={data.url}
        par={data.explanation}
      />
    </WrapperDiv>
  );
}

