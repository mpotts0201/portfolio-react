import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'


const Img = styled.img`
width:200px;
border-radius: 50%;

`
const H1 = styled.h1`
color: white;
span{
    font-weight: 100;
}
`

const P = styled.p`
width: 50vw;
font-size: 20px;
`



class About extends Component {



    render() {
        return (
            <div className='info'>
                <div className='infoSlideEnter' id='about'>
                <H1>About<span>Me</span></H1>
                    <Img id='image' className='' src={require("../img/headshot.jpg")} alt='A headshot of yours truly' />
                    <P>My name is Murphy and I am a creator. <br /><br/>
                        
                        Creativity and building things have always been my passions, from artwork, to cooking, to full stack web applications. 
                        I am a very visual person, and have an eye for detail.  

                        <br/>
                        <br/>
                        Sometimes I can be a bit of a perfectionist, but nothing beats the feeling of creating something beautiful for myself and others to enjoy.  It is my passion.
                        <br/>
                        <br/>
                        Thank you for visiting my page!  I genuinely hope you enjoy the things I have built here.  
                        <br/>
                        <br/>
                        <Link className='view' to='/view'>Or... just enjoy the view.</Link>
                        <br/>
                        <br/>
                        Feel free to reach out to me and get to know me!  I am looking to join creative teams that love to create as much as I do. 


                    </P>
                </div>
            </div>
        );
    }
}

export default About;