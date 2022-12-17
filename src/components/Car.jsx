import React, { Component } from 'react';
import Car from '../images/svg/car.svg';
import styled from 'styled-components';
import FinishFlag from './math_race/Finish_flag';

const Road = styled.div`
  position: relative;
  display: inline-block;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100px;
  border: 1px solid;
  border-radius: 5px;
  margin-top: 50px;
`;

const CarElement = styled.img`
  position: absolute;
  width: 150px;
`;

class CarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Road className='road' style={{backgroundColor: this.props.goodWay}} >
          <CarElement
            move={this.props.move}
            style={{ left: this.props.move}}
            src={Car}
            alt=""
            className='car'
          />
          <FinishFlag />
        </Road>
      </>
    );
  }
}

export default CarComponent;
