import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const items = [
    {
        label: "Home",
        value: "/",
        icon: <i className="fas fa-home"></i>
    },
    {
        label: "Show Products",
        value: "/showproducts",
        icon: <i className="fab fa-product-hunt"></i>
    },
    {
        label: "Add Products",
        value: "/products",
        icon: <i className="fas fa-plus"></i>
    },
    {
        label: "About",
        value: "/about",
        icon: <i className="fas fa-address-card"></i>
    },
    {
        label: "Account Settings",
        value: "/accountsettings",
        icon: <i className="fas fa-cogs"></i>
    }
]

class SideBar extends Component {

    ddddd = (path = {}) => {
        if (path && path.value) {
            const isActive = this.props.location.pathname === path.value;
            return <p key={path.label} className={isActive ? 'active' : ''} onClick={() => this.props.history.push(path.value)} > {path.icon} &nbsp;{path.label}</p>
        }
    }
    render() {
        const { location, history } = this.props
        return (
             <div className="sidenav">
                 {items.map(i => this.ddddd(i))}
             </div>
           /*  <SideNav style={{ background: "grey" }}
             onSelect={(selected) => {
                 const to = '/' + selected;
                 if (location.pathname !== to) {
                     history.push(to);
                 }
             }} 
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home" onClick={() => this.props.history.push("/")}>
                        <NavIcon>
                            <i className="fas fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>
                    <NavItem eventKey="charts" onClick={() => this.props.history.push("/showproducts")}>
                        <NavIcon>
                            <i className="fab fa-product-hunt" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
            </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav> */
        );
    }
}

export default SideBar;

