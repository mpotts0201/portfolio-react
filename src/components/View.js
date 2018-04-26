import React, { Component } from 'react';
import video from '../videos/portfolio.mp4'
import {Link} from 'react-router-dom'





class View extends Component {

    state = {
        showBeautiful: false,
        showWow: false,
        showLink: false,
    }

    componentDidMount(){
        // setTimeout(this.beautifulIn, 5000)
        setTimeout(this.showLink, 5000)    
    }


    // beautifulIn = () => {
    //     this.setState({ showBeautiful: !this.state.showBeautiful })
    //     setTimeout(this.beautifulOut, 3000)
    // }

    // beautifulOut = () => {
    //     this.setState({ showBeautiful: !this.state.showBeautiful })
    //     setTimeout(this.wowIn, 5000)    
    // }

    // wowIn = () => {
    //     this.setState({ showWow: !this.state.showWow })
    //     setTimeout(this.wowOut, 3000)    
    // }

    // wowOut = () => {
    //     this.setState({ showWow: !this.state.showWow })
    //     setTimeout(this.beautifulIn, 10000)  
    // }

    showLink = () => {
        this.setState({ showLink: !this.state.showLink })
    }



    render() {
        return (
            <div>
                <video autoPlay loop id="myVideo">
                    <source src={video} type="video/mp4" />
                </video>

                {/* {this.state.showBeautiful
                ? <h1 className='message supFade'>Beautiful...</h1>

                :null}
                
                {this.state.showWow
                ? <h1 className='message supFade'>...wow...</h1>

                :null} */}

                {this.state.showLink
                ? <div id='back'><Link className='supFade message back' to='/about'>Click to go back...</Link></div>

                :null}


            </div>
        );
    }
}

export default View;