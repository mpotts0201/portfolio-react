import React, { Component } from 'react';
import styled from 'styled-components'

const Foot = styled.div`

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


`


class Footer extends Component {
    render() {
        return (
            <Foot>
                <ul>
                    <li><a href='https://www.facebook.com/murphy.potts'>Facebook</a></li>
                    <li><a href='https://www.linkedin.com/in/murphy-potts-52394314b/'>LinkedIn</a></li>
                    <li><a href='https://github.com/mpotts0201?tab=repositories'>GitHub</a></li>
                    <li><a href=''></a></li>
                </ul>
            </Foot>
        );
    }
}

export default Footer;