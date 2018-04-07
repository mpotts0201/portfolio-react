import React, { Component } from 'react';
import styled from 'styled-components'


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

state = {
    aboutShow: false
}

toggleAbout = () => {
    this.setState({ aboutShow: !this.state.aboutShow })
}

    render() {
        return (
            <div>
                <H3 onClick={()=> this.toggleAbout()}>About Me</H3>
                {this.state.aboutShow
                ? <Img src={require("../img/headshot.jpg")} alt='A headshot of yours truly'/>

                :null}
            </div>
        );
    }
}

export default About;