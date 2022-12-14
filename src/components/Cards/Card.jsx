import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
    animation: 2s hideCard linear;
    background-color: #db4141;
    img {
        max-width: 80%;
        max-height: 80%;
        animation: 1s hideImg linear both;
    }
    @keyframes hideCard {
        70% {
            transform: rotateY(0);
        }
        100% {
            transform: rotateY(180deg);
        }
    }
    @keyframes hideImg {
        70% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    &.active {
        background-color: #ccc;
    }
    &.active.wrong {
        img {
            animation: none;
            transform: scale(1);
        }
    }
    &.active.correct {
        background-color: #26b326;
        img {
            animation: none;
        }
    }
`;

const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? 'active ' + item.stat : '';
  return (
    <>
      <Item className={itemClass} onClick={() => handleClick(id)}>
        <img src={item.img} alt="" />
      </Item>
    </>
  );
};

export default Card;
