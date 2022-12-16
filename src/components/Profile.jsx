import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MEDIA_QUERIES } from '../Vars';

const ProfileCart = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    @media ${MEDIA_QUERIES.MOBILE} {
      margin-top: 0;
    }
    span {
        align-self: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 25px 0;
        text-transform: uppercase;
    }
    img {
        align-self: center;
        width: 150px;
        height: auto;
    }
`;

const Profile = ({ userName, showInput, profileImage }) => {

    return (
        <>
        <Link to={userName} username={userName} >
      <ProfileCart onClick={showInput} >
        <span className="name" >{userName}</span>
        <img src={profileImage} alt="user image" />
      </ProfileCart>
      </Link>
      </>
    );
}

export default Profile;
