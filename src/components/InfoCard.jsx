import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../Variables';

const Box = styled.div`
margin-top: 50px;
p {
    color: ${COLORS.white};
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height: 1.4;
    width: 50%;
    margin: 0 auto;
    text-align: center;
}
`;

class InfoCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9 } = this.props;
    return (
      <>
        <Box>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <p>{p5}</p>
          <p>{p6}</p>
          <p>{p7}</p>
          <p>{p8}</p>
          <p>{p9}</p>
        </Box>
      </>
    );
  }
}

export default InfoCard;
