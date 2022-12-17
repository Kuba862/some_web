import React, { Component } from 'react';
import styled from 'styled-components';

const Flag = styled.div`
display: flex;
flex-wrap: wrap;
border: 1px solid;
position: absolute;
top: 50px;
right: 0;
width: 60px;
height: 100px;
transform: rotateX(55deg);
span {
    width: 33.33%;
    height: 14px;
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
      <Flag>
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
