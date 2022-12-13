import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../Variables';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
  border: 1px solid ${COLORS.yellow};
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 12px;
  color: ${COLORS.yellow};
  font-weight: 700;
  font-size: 1.4rem;
  transition: 0.35s linear;
  text-decoration: none;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    transition: 0.35s;
    background: transparent;
  }
  &::before {
    bottom: 0;
    left: 0;
    border-left: 1px solid ${COLORS.white};
    border-bottom: 1px solid ${COLORS.white};
  }
  &::after {
    top: 0;
    right: 0;
    border-right: 1px solid ${COLORS.white};
    border-top: 1px solid ${COLORS.white};
  }
  &:hover::before,
  &:hover::after {
    width: 99%;
    height: 99%;
    border-color: ${COLORS.lightBlue};
  }
  &:hover {
    background-color: ${COLORS.yellow};
    color: ${COLORS.black};
  }
`;

class StartButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { startLink, start } = this.props;
    return <Button to={startLink} >{start}</Button>;
  }
}

export default StartButton;
