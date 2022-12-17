import React, { Component } from 'react';
import styled from 'styled-components';

const Flag = styled.div`
display: flex;
flex-wrap: wrap;
border: 1px solid;
position: absolute;
top: -37px;
right: 50px;
width: 60px;
height: 172px;
transform: rotateX(55deg);
span {
    width: 33.33%;
    height: 24px;
    &:nth-child(even) {
        background-color: #fff;
    }
    &:nth-child(odd) {
        background-color: #000;
    }
}
`;

class FinishFlag extends Component {
  render() {
    return (
      <Flag className='flag'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Flag>
    );
  }
}

export default FinishFlag;
