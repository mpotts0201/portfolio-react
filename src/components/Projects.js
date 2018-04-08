import React, { Component } from 'react';
import styled from 'styled-components'


const ProjectList = styled.div`



ul{
    display: flex;
    flex-direction: column;
}

ul>li{
    list-style: none;
    display:flex;
    flex-direction: column;
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
class Projects extends Component {

    render() {
        return (
            <div>
                <ProjectList className='infoSlideEnter' id='projects'>

                    <ul>
                        <li>
                            <a href='http://wonderful-sammet-f7bff9.bitballoon.com/'>Black Jack</a>
                            <img src='' alt='A screenshot of my Black Jack game'/>

                        </li>
                        <li>
                            <a href='https://secret-crag-94679.herokuapp.com/'>Rackstar</a>
                            <img src='' alt='A screenshot of my Fitness app'/>

                        </li>
                        <li>
                            <a href='https://gentle-citadel-68532.herokuapp.com/'>dadd.io</a>
                            <img src='' alt='A screenshot of my Dad Joke app'/>

                        </li>
                        <li>
                            <a href=''>newgrinds</a>
                            <img src='' alt='A screenshot of my Coffee Shop Locater app'/>

                        </li>
                    </ul>
                </ProjectList>
            </div>
        );
    }
}

export default Projects;