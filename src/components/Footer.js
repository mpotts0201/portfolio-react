import React, { Component } from 'react';
import styled from 'styled-components'
import facebook from '../img/white-facebook-512.png'
import linkedin from '../img/linkedin-icon.png'
import github from '../img/github_icon.png'

const Foot = styled.div`
position: fixed;
bottom: 0;
display: flex;
justify-content: center;

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


`


class Footer extends Component {
    render() {
        return (
            <Foot className='menuSlide'>
                <ul>
                    <li><a href='https://www.facebook.com/murphy.potts' title='Facebook'><img src={facebook} alt='Facebook'/></a></li>
                    <li><a href='https://www.linkedin.com/in/murphy-potts-52394314b/' title='LinkedIn'><img src={linkedin} alt='LinkedIn'/></a></li>
                    <li><a href='https://github.com/mpotts0201?tab=repositories' title='GitHub'><img src={github} alt='GitHub' /></a></li>
                    <li><a href=''></a></li>
                </ul>
            </Foot>
        );
    }
}

export default Footer;