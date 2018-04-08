import React, { Component } from 'react';

class Projects extends Component {
    // toggleProjects = () => {
    //     const element = document.getElementById('projects')
    //     console.log(element)
    //     element.classList.toggle('infoSlideEnter')
    //     element.classList.toggle('infoHidden')
    // }
    render() {
        return (
            <div>
                {/* <h3 onClick={() => this.toggleProjects()}>Projects</h3> */}
                <div className='infoHidden' id='projects'>

                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                        <li>Project 4</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects;