import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderElement = styled.header`
height: 100px;
display: flex;
justify-content: center;
background-color: #ccc;
a {
    align-self: center;
    font-size: 2rem;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    border: 2px solid;
    padding: 12px 8px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #000;
    background-color: #fff;
    &:active {
        box-shadow: none;
    }
}
`;

class Header extends Component {
  render() {
    return (
      <>
        <HeaderElement>
          <Link to="/">Strona Główna</Link>
        </HeaderElement>
      </>
    );
  }
}

export default Header;
