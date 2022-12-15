import styled from 'styled-components';
import classnames from 'classnames';

const SingleCard = styled.div`
position: relative;
width: 100%;
height: 150px;
transition: .3s;
transform-style: preserve-3d;
border: 2px solid;
cursor: pointer;
  .card-back-face {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    img {
        width: 100%;
        height: 150px;
    }
  }
  &.is-flipped {
    transform: rotateY(180deg);
  }
  &.is-inactive {
    opacity: 0;
  }
`;

const Card = ({ onClick, card, index, isInactive, isFilpped, isDisabled }) => {
  const handleClick = () => {
    !isFilpped && !isDisabled && onClick(index);
  };
  return (
    <>
      <SingleCard
        className={classnames('card', {
          'is-flipped': isFilpped,
          'is-inactive': isInactive,
        })}
        onClick={handleClick}
      >
        <div className="card-back-face">
        <img src={card.url} alt="" />
        </div>
      </SingleCard>
    </>
  );
};

export default Card;
