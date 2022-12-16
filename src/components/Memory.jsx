import Card from './Card';
import { getImagesData, MEDIA_QUERIES } from '../Vars';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  max-width: 1024px;
  margin: 50px auto;
  gap: 25px;
@media ${MEDIA_QUERIES.MOBILE} {
    max-width: 420px;
    grid-template-columns: repeat(2, 45%);
}
`;

const Restart = styled.button`
position: relative;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 25%;
padding: 12px 8px;
font-size: 1.4rem;
border: 2px solid;
border-radius: 5px;
font-weight: 700;
margin-bottom: 10px;
background-color: #fff;
`;

function shuffleCards(array) {
    const length = array.length;
    for(let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
    }
    return array;
}

const Memory = () => {
  const [cardData, setCardData] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [disableAllCards, setDisableAllCards] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    getImagesData()
      .then((response) => {
        setCardData(shuffleCards.bind(null, response.data.concat(response.data)))
      })
      .catch((error) => console.log(error.message));
  }, []);

  const disable = () => {
    setDisableAllCards(true);
  }

  const enable = () => {
    setDisableAllCards(false);
  }

  const evaluate = () => {
    const [first, second] = openCards;
    if (cardData[first].id === cardData[second].id) {
      setClearedCards((prev) => ({ ...prev, [cardData[first].id]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if(openCards.length === 2) {
        timeout = setTimeout(evaluate, 300)
    }
  }, [openCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.id]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setDisableAllCards(false);
    setCardData(cardData);
  }

  return (
    <>
      <CardsContainer>
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              onClick={handleCardClick}
              isInactive={checkIsInactive(card)}
              isFilpped={checkIsFlipped(index)}
              isDisabled={disableAllCards}
            />
          );
        })}
      </CardsContainer>
      <Restart onClick={handleRestart} >Restart</Restart>
    </>
  );
};
export default Memory;
