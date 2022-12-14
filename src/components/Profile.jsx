import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileCart = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    span {
        align-self: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 25px 0;
    }
    img {
        align-self: center;
        width: 150px;
        height: auto;
    }
`;

class Profile extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <>
        <Link to={this.props.userName} >
      <ProfileCart onClick={this.showInput} >
        <span className="name" >{this.props.userName}</span>
        <img src={this.props.profileImage} alt="user image" />
      </ProfileCart>
      </Link>
      </>
    );
  }
}

export default Profile;
