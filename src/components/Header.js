import React, { Component } from 'react';
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderText = styled.div`
    display: flex;
    justify-content: center;
    color: white;

.link{
    text-decoration: none;
}

.link:hover{
    color: lightgrey;
}


    span{
        font-weight: 100;
    }

    #first-name{
        font-weight: 700;

    }

    h1{
        font-family: 'Lato', sans-serif;
        font-size: 70px;
    }

    sup{
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
`



class Header extends Component {



    render() {
        return (
            <div>

                <HeaderText>
                    <Link className='link' to='/'>
                    <div className='first-name'>
                        <h1 id="first-name" className="nameSlide name">Murphy<span>Potts</span></h1>
                        <sup className="supFade">Full Stack Web Developer</sup>
                    </div>
                    </Link>
                </HeaderText>
            
            </div>
        );
    }
}

export default Header;