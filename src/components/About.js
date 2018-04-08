import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Img = styled.img`
width:200px;
border-radius: 50%;

`






class About extends Component {



    render() {
        return (
            <div >
                <div className='infoSlideEnter' id='about'>
                    <Img id='image' className='' src={require("../img/headshot.jpg")} alt='A headshot of yours truly' />
                    <p>My name is Murphy and I am a creator.  Creativity and building things have always been my passions, from artwork, to cooking, to full stack web applications.  I take delight in my projects and I love the satisfaction of polishing pieces and putting them together, and learning something new along the way.  </p>
                </div>
            </div>
        );
    }
}

export default About;