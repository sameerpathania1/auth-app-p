import React, { Component } from 'react';


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
        console.log(this.props, 'props in sidebar')
        return (
            <div className="sidenav">
                {items.map(i => this.ddddd(i))}
            </div>
        );
    }
}

export default SideBar;

