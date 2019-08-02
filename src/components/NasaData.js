import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  height: 100%;
  padding-bottom: 400px;


  h1{
    font-size: 40px;
  }

  h3{
    font-size: 25px;
  }

  div{
    display: flex;
    justify-content: center;

    img{
      width: 300px;
      height: 300px;
      border-radius: 40%;
      padding-right: 30px;
    }

    p{
      width: 500px;
      text-align: center;

    }
  }
`;

export default function NasaData(props) {

  const { copyright, title, date, img, par } = props;

  return (
    <Container>
      <h1>NASA Photo of the Day</h1>
      <h1>{copyright}</h1>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <div>
        <img src={img}></img>
        <p>{par}</p>
      </div>
    </Container>
  )
}