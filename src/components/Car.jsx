import React, { Component } from 'react';
import Car from '../images/svg/car.svg';
import styled from 'styled-components';
import FinishFlag from './math_race/Finish_flag';

const Road = styled.div`
  position: relative;
  display: inline-block;
  top: 100%;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid;
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
        <Road>
          <CarElement
            move={this.props.move}
            style={{ left: this.props.move }}
            src={Car}
            alt=""
          />
          <FinishFlag />
        </Road>
      </>
    );
  }
}

export default CarComponent;
