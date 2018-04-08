import React, { Component } from 'react';
import About from './About'
import Projects from './Projects'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`


class NavBar extends Component {


    render() {
        return (
            <Menu className='menuSlide'>
                <Link className='link' to='/about'>About Me</Link>
                <Link className='link' to='/projects'>Projects</Link>

            </Menu>
        );
    }
}

export default NavBar;