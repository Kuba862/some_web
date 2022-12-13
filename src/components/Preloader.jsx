import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../Variables';
import Space from '../images/space.jpg';

const PageLoader = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${Space});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 5;
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-color: transparent transparent ${COLORS.teal} transparent;
    border-style: solid;
    border-radius: 0px 5px 5px 0;
  }
  .big_square {
    position: absolute;
    top: calc(50% - 55px);
    left: calc(50% - 80px);
    width: 160px;
    height: 160px;
    animation: bigSquare 3s 2s 1 both;
  }
  .big_circle {
    position: absolute;
    top: calc(50% + 25px);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    animation: pulsating 1s 3s 3 both;
  }
  .left {
    left: 0;
    animation: preloaderAfter 2s 1 both;
  }
  .right {
    right: 0;
    animation: preloaderBefore 2s 1 both;
  }
  @keyframes preloaderAfter {
    100% {
      left: calc(50% - 25px);
      transform: rotateZ(135deg);
      border-color: transparent ${COLORS.teal} ${COLORS.teal} transparent;
      border-radius: 50%;
    }
  }
  @keyframes preloaderBefore {
    100% {
      right: calc(50% - 25px);
      transform: rotateZ(-45deg);
      border-color: transparent ${COLORS.teal} ${COLORS.teal} transparent;
      border-radius: 50%;
    }
  }
  @keyframes pulsating {
    50% {
      box-shadow: 0 0 20px 6px ${COLORS.teal};
    }
    100% {
        box-shadow: none;
    }
  }
  @keyframes bigSquare {
    100% {
        border: 1px solid ${COLORS.yellow};
    }
  }
`;

class Preloader extends Component {
  componentDidMount() {
    setTimeout(() => {
      localStorage.setItem('loader', 1);
    }, 3000);
  }
  render() {
    return (
      <>
        <PageLoader>
            <div className="big_square"></div>
          <div className='big_circle' ></div>
            <span className="left"></span>
            <span className="right"></span>
        </PageLoader>
      </>
    );
  }
}

export default Preloader;
