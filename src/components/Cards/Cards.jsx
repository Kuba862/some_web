import React from 'react';
import { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
  height: 700px;
  width: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;
`;

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: '/images/memory/spider1.jpeg', stat: '' },
      { id: 1, img: '/images/memory/spider1.jpeg', stat: '' },
      { id: 2, img: '/images/memory/spider2.jpeg', stat: '' },
      { id: 2, img: '/images/memory/spider2.jpeg', stat: '' },
      { id: 3, img: '/images/memory/spider3.jpeg', stat: '' },
      { id: 3, img: '/images/memory/spider3.jpeg', stat: '' },
      { id: 4, img: '/images/memory/spider4.jpeg', stat: '' },
      { id: 4, img: '/images/memory/spider4.jpeg', stat: '' },
      { id: 5, img: '/images/memory/spider5.jpeg', stat: '' },
      { id: 5, img: '/images/memory/spider5.jpeg', stat: '' },
      { id: 6, img: '/images/memory/spider6.jpeg', stat: '' },
      { id: 6, img: '/images/memory/spider6.jpeg', stat: '' },
      { id: 7, img: '/images/memory/spider7.jpeg', stat: '' },
      { id: 7, img: '/images/memory/spider7.jpeg', stat: '' },
      { id: 8, img: '/images/memory/spider8.png', stat: '' },
      { id: 8, img: '/images/memory/spider8.png', stat: '' },
      { id: 9, img: '/images/memory/spider9.jpeg', stat: '' },
      { id: 9, img: '/images/memory/spider9.jpeg', stat: '' },
      { id: 10, img: '/images/memory/spider10.jpeg', stat: '' },
      { id: 10, img: '/images/memory/spider10.jpeg', stat: '' },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setPrev(-1);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <>
      <Container className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </Container>
    </>
  );
};

export default Cards;
