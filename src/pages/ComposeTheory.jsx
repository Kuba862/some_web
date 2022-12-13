import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 99%,
    rgba(85, 254, 237, 1) 100%
  );
  box-shadow: -1px 0 20px 12px #000;
  filter: invert(10%);
`;

class ComposeTheory extends Component {
  render() {
    return (
      <>
        <Page />
      </>
    );
  }
}

export default ComposeTheory;
