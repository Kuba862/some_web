import axios from 'axios';
import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import SpaceArt from '../images/space-art.jpg';
import { COLORS } from '../Variables';
import InfoCard from './InfoCard';

const Page = styled.section`
  background-image: url(${SpaceArt});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200vh;
  width: 100vw;
  filter: invert(10%);
`;

const CardMenu = styled.ul`
  list-style: none;
  padding: 12px 8px;
  margin: 0 auto;
  li {
    position: relative;
    top: 25px;
    padding: 12px 8px;
    width: 25%;
    margin: 15px auto 0; 
    text-align: center;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${COLORS.white};
    transition: .2s ease-in-out;
    &:hover {
      color: ${COLORS.yellow};
    }
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.openHandler1 = this.openHandler1.bind(this);
    this.openHandler2 = this.openHandler2.bind(this);
    this.openHandler3 = this.openHandler3.bind(this);
  }
  state = {
    theory: [],
    id: parseInt(window.location.pathname.split('/').slice(2, 3)),
    open1: false,
    open2: false,
    open3: false,
    hidden: false
  };

  componentDidMount() {
    axios
      .get(`${window.location.origin}/data/theory.json`)
      .then((response) => {
        this.setState({
          theory: response.data.find((data) => data.id === this.state.id),
        });
      })
      .catch((error) => console.log(error.message));
  }

  openHandler1() {
    this.setState({
      open1: !this.state.open1,
      open2: false,
      open3: false
    });
  }
  openHandler2() {
    this.setState({
        open2: !this.state.open2,
        open1: false,
        open3: false
    })
  }
  openHandler3() {
    this.setState({
        open3: !this.state.open3,
        open1: false,
        open2: false
    })
  }

  render() {
    const { theory, open1, open2, open3, id } = this.state;
    const pages = () => { 
        if(id === 1) {
        return (
            <>
              <Page>
                <CardMenu>
                  <span>
                    <li onClick={this.openHandler1}>{theory.menu1}</li>
                    {open1 ? (
                      <InfoCard
                        p1={theory.description_menu1.p1}
                        p2={theory.description_menu1.p2}
                        p3={theory.description_menu1.p3}
                      />
                    ) : null}
                  </span>
                  <span>
                    <li onClick={this.openHandler2}>{theory.menu2}</li>
                    {open2 ? (
                      <InfoCard p1={theory.description_menu2.p1} p2={theory.description_menu2.p2} p3={theory.description_menu2.p3} p4={theory.description_menu2.p4} p5={theory.description_menu2.p5} />
                    ) : null}
                  </span>
                  <span>
                    <li onClick={this.openHandler3}>{theory.menu3}</li>
                    {open3 ? (
                      <InfoCard p1={theory.description_menu3.p1} p2={theory.description_menu3.p2} p3={theory.description_menu3.p3} p4={theory.description_menu3.p4} p5={theory.description_menu3.p5} p6={theory.description_menu3.p6} p7={theory.description_menu3.p7} p8={theory.description_menu3.p8} p9={theory.description_menu3.p9} />
                    ) : null}
                  </span>
                </CardMenu>
              </Page>
            </>
          );
                    }
        if(id === 2) {
            return (
                <>
                    <Page >
                        {/* <p>{theory.what_is_container.p1}</p> */}
                    </Page>
                </>
            )
        }
}
    return (
      <>
      {pages()}
      </>
    );
  }
}

export default Card;
