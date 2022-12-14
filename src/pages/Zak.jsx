import styled from 'styled-components';
import Spiderman from '../images/svg/spiderman.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = styled.section`
  width: 100vw;
  height: 100vh;
  img {
    width: 250px;
    height: auto;
  }
`;

const Zak = () => {

  const navigate = useNavigate();

  return (
    <>
      <Page >
        <img src={Spiderman} alt="" />
        <button onClick={() => navigate(`/memory`)}>memory</button>
        <button onClick={() => navigate(`/puzzle`)}>puzzle</button>
      </Page>
    </>
  );
};

export default Zak;
