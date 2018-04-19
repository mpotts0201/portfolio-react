import React, { Component } from 'react';
import About from './About'
import Projects from './Projects'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.div`
display: flex;
flex-direction: row;

justify-content: center space-around;
width: 800px;
margin-left: 62px;

`


class NavBar extends Component {


    render() {
        return (
            <Menu className='menuSlide'>
                <Link className='link' to='/about'>About Me</Link>
                <Link className='link' to='/projects'>Projects</Link>
                <Link className='link' to='/contact' >Contact Me</Link>
            </Menu>
        );
    }
}

export default NavBar;