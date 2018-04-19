import React, { Component } from 'react';
import styled from 'styled-components'
import facebook from '../img/white-facebook-512.png'
import linkedin from '../img/linkedin-icon.png'
import github from '../img/github_icon.png'

const Foot = styled.div`
margin-top: 0;
ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;


}

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
    width: 30px;
}


`


class Footer extends Component {
    render() {
        return (
            <Foot>
                <ul>
                    <li><a href='https://www.facebook.com/murphy.potts'><img src={facebook} alt='Facebook'/></a></li>
                    <li><a href='https://www.linkedin.com/in/murphy-potts-52394314b/'><img src={linkedin} alt='LinkedIn'/></a></li>
                    <li><a href='https://github.com/mpotts0201?tab=repositories'><img src={github} alt='GitHub' /></a></li>
                    <li><a href=''></a></li>
                </ul>
            </Foot>
        );
    }
}

export default Footer;