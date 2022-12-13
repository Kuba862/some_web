import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../Variables';
import { Link } from 'react-router-dom';
import Space2 from '../images/space-art.jpg';

const Menu = styled.section`
  /* background-image: url(${Space2});
  background-size: cover;
  background-position: 0 0;
  filter: invert(10%); */
  /* background-color: #000; */
  background-color: rgba(168, 168, 168, 1);
background-image: linear-gradient(0deg, rgba(168, 168, 168, 1) 0%, rgba(0, 0, 0, 1) 10%);
filter: invert(10%);
  ul {
    display: flex;
    width: 75%;
    justify-content: end;
    padding: 12px 0;
    list-style: none;
    gap: 25px;
    a {
      position: relative;
      z-index: 1;
      color: ${COLORS.teal};
      text-decoration: none;
      li {
        position: relative;
        color: ${COLORS.lightBlue};
        padding: 8px 12px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
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
          border-color: ${COLORS.yellow};
        }
      }
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { first, second, third, home } = this.props;
    return (
      <>
        <Menu>
          <ul>
            <Link to="/">
              <li>{home}</li>
            </Link>
            <Link to="/docker-theory">
              <li>{first}</li>
            </Link>
            <Link to="/docker-compose-theory">
              <li>{second}</li>
            </Link>

            <Link to="/docker-containers">
              <li>{third}</li>
            </Link>
          </ul>
        </Menu>
      </>
    );
  }
}

export default Header;
