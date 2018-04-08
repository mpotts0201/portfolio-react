import React, { Component } from 'react';
import About from './About'
import Projects from './Projects'
import styled from 'styled-components'


const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`


class NavBar extends Component {

    state = {
        aboutShow: false,
        projectsShow: false
    }

    toggleProjects = async() => {
        if(this.state.aboutShow){
            this.setState({ aboutShow: !this.state.aboutShow })
            await this.toggleAbout()
        }   
        this.setState({ projectShow: !this.state.projectsShow })
        const element = document.getElementById('projects')
        console.log(element)
        element.classList.toggle('infoSlideEnter')
        element.classList.toggle('infoHidden')

 
    }

    toggleAbout = async() => {
        if(this.state.projectShow){
            this.setState({ projectShow: !this.state.projectsShow })
            await this.toggleProjects()
        }
        this.setState({ aboutShow: !this.state.aboutShow })
        const element = document.getElementById('about')
        console.log(element)
        element.classList.toggle('infoSlideEnter')
        element.classList.toggle('infoHidden')

    }


    render() {
        return (
            <Menu className='menuSlide'>
                <h3 onClick={()=> this.toggleAbout()}>About Me</h3>

                <About />
                <h3 onClick={() => this.toggleProjects()}>Projects</h3>

                <Projects/>
            </Menu>
        );
    }
}

export default NavBar;