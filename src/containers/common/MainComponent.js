import React, { Component } from 'react';
import CustomNav from './CustomNav';
import SideBar from './Sidebar';
import { Homepage } from '..';

class MainComponent extends Component {
    state = {}
    render() {
        return (<div>
            <CustomNav />
            <SideBar />
        </div>);
    }
}

export default MainComponent;