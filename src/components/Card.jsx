import styled from 'styled-components';
import classnames from 'classnames';
import { MEDIA_QUERIES } from '../Vars';

const SingleCard = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  transition: 0.3s;
  transform-style: preserve-3d;
  border: 2px solid;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 1);
  background-image: linear-gradient(
    45deg,
    #ff0000 0%,
    rgba(255, 82, 82, 1) 33%,
    rgba(251, 129, 131, 1) 66%,
    rgba(255, 171, 172, 1) 100%
  );
  box-shadow: 4px 4px 10px 4px #a7a7a7;
  cursor: pointer;
  @media ${MEDIA_QUERIES.MOBILE} {
    height: 100px;
  }
  .card-back-face {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    img {
      width: 100%;
      height: 150px;
      @media ${MEDIA_QUERIES.MOBILE} {
        height: 100px;
      }
    }
  }
  &.is-flipped {
    transform: rotateY(180deg);
  }
  &.is-inactive {
    opacity: 0;
  }
`;

const Card = ({
  onClick,
  card,
  index,
  isInactive,
  isFilpped,
  isDisabled,
}) => {
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
