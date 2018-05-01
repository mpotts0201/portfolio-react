import React, { Component } from 'react';
import About from './About'
import Projects from './Projects'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import facebook from '../img/white-facebook-512.png'
import linkedin from '../img/linkedin-icon.png'
import github from '../img/github_icon.png'


const Foot = styled.div`
position: fixed;
bottom: 0;
left: 0;
/* ul{
    display: flex;
    flex-direction: row;
    justify-content: center;


} */

ul>li{
    list-style: none;
}
ul>li>a{
    margin: 10px;
    color: white;
    text-decoration:none;
    :hover{
        cursor: pointer;
        color: #8497ec;    
    }
}
ul>li>a>img{
    width: 50px;
    margin: 20px;
}

@media(max-width: 1000px){
    position: static;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: ;
        

    }

    /* top: 0;
    right: 0; */
}
`


const Menu = styled.div`

display: flex;
flex-direction: column;
/* justify-content: flex-start; */
position: fixed;
top: 0;
margin-top: 40px;
margin-left: 50px;

.link{
    margin: 20px;
}
font-size: 25px;

@media(max-width: 650px){
    position: static;
    flex-direction: row;
}


`


class NavBar extends Component {


    render() {
        return (
            <Menu className='menuSlide'>
                <Link className='link' to='/about'>About Me</Link>
                <Link className='link' to='/projects'>Projects</Link>
                <Link className='link' to='/contact' >Contact Me</Link>
                {/* <Foot>
                    <ul>
                        <li><a href='https://www.facebook.com/murphy.potts' title='Facebook'><img src={facebook} alt='Facebook' /></a></li>
                        <li><a href='https://www.linkedin.com/in/murphy-potts-52394314b/' title='LinkedIn'><img src={linkedin} alt='LinkedIn' /></a></li>
                        <li><a href='https://github.com/mpotts0201?tab=repositories' title='GitHub'><img src={github} alt='GitHub' /></a></li>
                        <li><a href=''></a></li>
                    </ul>
                </Foot> */}
            </Menu>
        );
    }
}

export default NavBar;