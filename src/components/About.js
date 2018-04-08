import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../App.css'

const Img = styled.img`
width:200px;
border-radius: 50%;

`

const H3 = styled.h3`
font-family: 'Lato', sans-serif;
color: white;
:hover{
    cursor: pointer;
}
`




class About extends Component {


toggleAbout = () => {
    const element = document.getElementById('about')
    console.log(element)
    element.classList.toggle('infoSlideEnter')
    element.classList.toggle('infoHidden')
}

    render() {
        return (
            <div >
                <h3 onClick={()=> this.toggleAbout()}>About Me</h3>
                <div className='infoHidden' id='about'>
                {/* {this.state.aboutShow
                ? <Img id='image' src={require("../img/headshot.jpg")} alt='A headshot of yours truly'/>

                :null} */}
                <Img id='image' className='' src={require("../img/headshot.jpg")} alt='A headshot of yours truly'/>
                <p>My name is Murphy and I am a creator.  Creativity and building things have always been my passions, from artwork, to cooking, to full stack web applications.  I take delight in my projects and I love the satisfaction of polishing pieces and putting them together, and learning something new along the way.  </p>
                </div>
            </div>
        );
    }
}

export default About;