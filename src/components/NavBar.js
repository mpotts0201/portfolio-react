import React, { Component } from 'react';
import About from './About'
class NavBar extends Component {
    render() {
        return (
            <div>
                <About isShowing={this.props.formShowing}
                    handleForm={this.props.handleForm}
                />
            </div>
        );
    }
}

export default NavBar;