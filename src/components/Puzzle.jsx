import React, { Component } from 'react';
import styled from 'styled-components';

const Dragable = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border: 1px solid;
`;

class Puzzle extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <Dragable>
                text
            </Dragable>
        );
    }
}

export default Puzzle;
