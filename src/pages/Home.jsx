import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import Sonic from '../images/Sonic.jpeg';
import Doll from '../images/svg/doll.svg';
import Spiderman from '../images/svg/spiderman.svg';
import axios from 'axios';

const Page = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  background-color: #000;
  div {
    border: 1px solid;
    flex-basis: 33%;
    flex-wrap: wrap;
    a {
        text-decoration: none;
        color: #000;
    }
  }
  div:nth-child(1) {
    background-color: red;
  }
  div:nth-child(2) {
    background-color: pink;
  }
  div:nth-child(3) {
    background-color: blue;
  }
`;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get(`${window.location.origin}/data/users.json`)
        .then((response) => {
            this.setState({
                user: response.data
            })
        })
    }

  render() {
    return (
      <>
        <Page>
          <div className="userName">
            <Profile userName="ZAKI" profileImage={Spiderman} />
          </div>
          <div className="userName">
            <Profile userName="HELA" profileImage={Doll} bg="pink" />
          </div>
          <div className="userName">
            <Profile userName="IDA" profileImage={Sonic} bg="blue" />
          </div>
        </Page>
      </>
    );
  }
}

export default Home;