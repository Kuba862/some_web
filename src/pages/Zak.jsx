import styled from 'styled-components';
import Spiderman from '../images/svg/spiderman.svg';
import { useNavigate } from 'react-router-dom';
import { MEDIA_QUERIES } from '../Vars';

const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
  img {
    width: 250px;
    height: auto;
  }
  button {
    width: 20%;
    padding: 12px 8px;
    border: 2px solid;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    cursor: pointer;
    @media ${MEDIA_QUERIES.MOBILE} {
      width: 50%;
    }
  }
  button:nth-child(even) {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, #ff0000 50%);
  }
  button:nth-child(odd) {
    background: linear-gradient(180deg, rgba(244,6,6,1) 50%, rgba(0,0,0,1) 100%);
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
