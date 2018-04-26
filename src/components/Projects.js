import React, { Component } from 'react';
import styled from 'styled-components'
import blackJack from '../img/blackjack.png'
import daddio from '../img/daddio.png'
import newgrinds from '../img/newgrinds.png'

const ProjectList = styled.div`

/* display: flex;
justify-content: center;


ul{
    display: flex;
    flex-direction: row;
} */

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

ul>li>a>img{
    width: 40vw;
    border-radius: 20px;
    list-style: none;

}

ul>li>a>img:hover{
    cursor: pointer;
    color: #8497ec; 

}

.description{
    color: red;
    top: 0;

}


.description{
    width: 40vw;
    color: white;
    font-size: 20px;        
}  



`


const H1 = styled.h1`
color: white;
span{
    font-weight: 100;
}
`


class Projects extends Component {

    render() {
        return (
            <div className='info infoSlideEnter'>
                <ProjectList id='projects'>
                    <H1>My<span>Projects</span></H1>

                    <ul id='capstone'>
                        <li>
                            <a href='https://newgrinds.herokuapp.com/'>
                                <H1>newgrinds</H1>
                                <p className='description'>newgrinds will find the 5 nearest coffee shops using geolocation and the Foursquare Places API, and will fetch basic navigation data from Google to let you know how far and how long it will take. Don't forget to leave a review of the shop you visit.</p>
                                    <img src={newgrinds} alt='A screenshot of my Coffee Shop Locater app' />
                            </a>

                        </li>
                            <li>
                                <a href='http://wonderful-sammet-f7bff9.bitballoon.com/'>
                                    <H1>Black Jack</H1>
                                    <p className='description'>My first real project!  This is my version of Black Jack with some fun animations, try to beat the dealer!</p>
                                    <img src={blackJack} alt='A screenshot of my Black Jack game' />
                                </a>

                            </li>
                            <li>
                                <a href='https://gentle-citadel-68532.herokuapp.com/'>
                                    <H1>dadd.io</H1>
                                    <p className='description'>The world's first dad joke app.  A dad joke is usually a very corny or very dry piece of witicism.  Enter at your own risk.  It pulls from a dad joke API so there's no shortage of lame jokes here.  Save your favorites and leave comments!</p>
                                    <img src={daddio} alt='A screenshot of my Dad Joke app' />
                                </a>

                            </li>
                    </ul>
                </ProjectList>
            </div>
        );
    }
}

export default Projects;