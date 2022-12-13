import React, { Component } from 'react';
import Space2 from '../images/space-art.jpg';
import styled from 'styled-components';
import { COLORS } from '../Variables';
import StartButton from './StartButton';

const Page = styled.section`
  position: absolute;
  background-image: url(${Space2});
  background-size: cover;
  filter: invert(10%);
  height: 100%;
  width: 100%;
`;
const Hello = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  h1 {
    color: ${COLORS.lightBlue};
    font-size: 10rem;
    letter-spacing: 10px;
  }
  p {
    width: 50%;
    text-align: center;
    color: ${COLORS.white};
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: 1px;
    margin-top: 25px;
  }
`;

class Home extends Component {
  render() {
    return (
      <>
        <Page>
          <Hello>
            <h1>Hello</h1>
            <p>
              This app is docker basics knowledge in a nutshell. Instead of
              looking in the documentation, look into the appropriate sections
              and maybe you will find the answer
            </p>
          </Hello>
          <StartButton start="Let's start" startLink="docker-theory" />
        </Page>
      </>
    );
  }
}

export default Home;
