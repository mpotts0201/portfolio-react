import React, { Component } from 'react';
import resumePNG from '../img/murphy-potts-resume.png'
import styled from 'styled-components'
import resumePDF from '../img/murphy-potts-resume.pdf'
import { Document } from 'react-pdf'
 
const Div = styled.div`
display: flex;
flex-direction: column;
a{
    color: white;
    font-family: 'Roboto', sans-serif;
}
a:hover{
    color: #8497ec;

}
`

const H1 = styled.h1`
font-family: 'Lato', sans-serif;
color: white;
span {
font-weight: 100;
}
`

const Img = styled.img`
width: 250px;
`

const P = styled.p`
color: white;
font-family: 'Roboto', sans-serif;

`


class Resume extends Component {
    render() {
        return (
            <Div className='infoSlideEnter info'>

                <H1>Kick<span>Off</span></H1>
                <P>My name is Murphy and I am a creator.  Creativity and building things have always been my passions, from artwork, to cooking, to full stack web applications.  Entertaining, energetic, and possessed with a passion to learn, I am looking to join creative teams that love to create as much as I do.  </P>
                <a href={resumePDF} download>Download Resume</a>

                <Document file='../img/murphy-potts-resume.pdf' />
            </Div>
        );
    }
}

export default Resume;