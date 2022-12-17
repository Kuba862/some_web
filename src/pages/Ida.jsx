import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Url = styled(Link)`
    border: 2px solid #000;
    text-decoration: none;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    width: 15%;
    margin: 15px 0 0 15px;
    border-radius: 5px;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.2px;
    font-size: 1.2rem;
    box-shadow: 6px 6px 5px -2px #000;
`;

class Ida extends Component {
    render() {
        return (
            <>
                <Url to="math-race" >Math race</Url>
            </>
        );
    }
}

export default Ida;
