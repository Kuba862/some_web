import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { COLORS } from '../Variables';
import { useNavigate } from 'react-router-dom';

const Card = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgb(0, 0, 0) 91%, rgb(85, 254, 237) 100%);
  box-shadow: -1px 0 20px 12px #000;
  filter: invert(10%);
  .card {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 50%;
    justify-content: space-around;
    border-radius: 5px;
    margin: 100px 15px 0;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    background-color: ${COLORS.teal};
    p {
      align-self: center;
      color: ${COLORS.black};
      font-weight: 700;
      font-size: 1.4rem;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 3px 3px 11px 0 ${COLORS.white};
      background-color: ${COLORS.lightBlue};
    }
  }
`;

const Theory = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('./data/theory.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const card = data.map((cardData) => {
    return (
      <>
        <div
          className="card"
          key={cardData.id}
          onClick={() => navigate(`/docker-theory/${cardData.id}`)}
        >
          <p>{cardData.title}</p>
        </div>
      </>
    );
  });
  return (
    <>
      <Card>{card}
      </Card>
    </>
  );
};

export default Theory;
