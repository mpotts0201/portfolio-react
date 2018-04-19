import React, { Component } from 'react';
import resumePNG from '../img/murphy-potts-resume.png'
import styled from 'styled-components'
import resumePDF from '../img/murphy-potts-resume.pdf'
 
const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
a{
    color: white;
    font-family: 'Roboto', sans-serif;
}
a:hover{
    color: #8497ec;

}
h1,h3{
font-family: 'Lato', sans-serif;
color: white;
span {
font-weight: 100;
}
}

img{
    width: 250px;
    margin: 0 auto;
}

p{
color: white;
font-family: 'Roboto', sans-serif;
}


`



class Contact extends Component {
    render() {
        return (
            <Div className='infoSlideEnter info'>

                <h1>Contact<span>Me</span></h1>
                <h3>mpotts0201@gmail.com</h3>
                <a href={resumePDF} download>Download Resume</a>
                <br/>
                <img src={resumePNG} alt='My Resume' />
            </Div>
        );
    }
}

export default Contact;