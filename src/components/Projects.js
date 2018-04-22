import React, { Component } from 'react';
import styled from 'styled-components'
import blackJack from '../img/blackjack.png'
import daddio from '../img/daddio.png'
import newgrinds from '../img/newgrinds.png'

const ProjectList = styled.div`

display: flex;
justify-content: center;


ul{
    display: flex;
    flex-direction: row;
}

ul>li{
    list-style: none;    
}

#capstone{
    display: flex;
    flex-direction: column;
}
#otherProjects{
    display:flex;
    flex-direction: row;
    list-style: none;
}

ul>div>li>a, ul>li>a{
    margin: 10px;
    color: white;
    text-decoration:none;
    :hover{
        cursor: pointer;
        color: #8497ec;    
    }
}

ul>div>li>a>img{
    width: 20vw;
    border-radius: 20px;
    margin: 15px;
    
}

ul>li:first-child>a>img{
    width: 40vw;
    border-radius: 20px;
    list-style: none;

}

ul>li>a>p:hover, ul>li>a>img:hover{
    cursor: pointer;
    color: #8497ec; 

}

.description{
    color: red;
    top: 0;

}

ul>li>a>:hover{
    .description{
        color: green;    
    }  
}


`
class Projects extends Component {

    render() {
        return (
            <div>
                <ProjectList className='infoSlideEnter' id='projects'>

                    <ul id='capstone'>
                        <li>
                            <a href='https://newgrinds.herokuapp.com/'>
                                <p>newgrinds</p>
                                <img src={newgrinds} alt='A screenshot of my Coffee Shop Locater app' />
                            </a>

                        </li>
                        <div id='otherProjects'>
                        <li>
                            <a href='http://wonderful-sammet-f7bff9.bitballoon.com/'>
                                <p>Black Jack</p>
                                <img src={blackJack} alt='A screenshot of my Black Jack game' />
                            </a>

                        </li>
                        <li>
                            <a href='https://gentle-citadel-68532.herokuapp.com/'>
                                <p>dadd.io</p>
                                <img src={daddio} alt='A screenshot of my Dad Joke app' />
                            </a>

                        </li>
                        </div>
                    </ul>
                </ProjectList>
            </div>
        );
    }
}

export default Projects;