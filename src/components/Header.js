import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderText = styled.div`
    display: flex;
    justify-content: center;
    /* background-color: #73a9ff66; */
    color: white;

    #last-name{
        font-weight: 100;

    }
    #first-name{
        font-weight: 700;

    }
    h1{
        font-family: 'Lato', sans-serif;
        font-size: 70px;
    }
    sup{
        font-family: 'Roboto', sans-serif;

    }
`


class Header extends Component {
    render() {
        return (
            <div>
                <HeaderText>
                    <div className='first-name'>
                        <h1 id="first-name">Murphy </h1>
                        <sup>Full Stack Web Developer</sup>
                    </div>
                    <h1 id="last-name"> Potts</h1>
                </HeaderText>
            </div>
        );
    }
}

export default Header;