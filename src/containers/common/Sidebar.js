import React, { Component } from 'react';
import Sidebar from 'react-sidebar';


const items = [
    {
        label: "Home",
        value: "/"
    },
    {
        label: "Products",
        value: "/products"
    },
    {
        label: "My Orders",
        value: ""
    },
    {
        label: "Cart",
        value: ""
    },
    {
        label: "User Detail",
        value: "/userdetail"
    }
]

class SideBar extends Component {
    state = {
        open: false
    }

    toggle = (open) => {
        this.setState({ open: open });
    }

    goTo = (path = {}) => {
        if (path && path.value) {
            return <li className="valid-link" key={path.label} onClick={() => this.props.history.push(path.value)}>{path.label}</li>;
        }
        return <li className="invalid-link" key={path.label}>{path.label}</li>;
    }

    render() {
        return (
            <Sidebar
                sidebar={<div>
                    {items && items.length ?
                        <ul style={{ listStyleType: 'none', fontSize: "20px" }}>
                            {items.map(i => this.goTo(i))}
                        </ul>
                        : <p>Coming Soon...</p>}
                </div>}
                open={this.state.open}
                docked="false"
                onSetOpen={() => this.toggle("true")}
                styles={{ sidebar: { background: "#343a40", color: "white", width: "15%", marginTop: "55px" } }}
            >

                {this.props.children}
            </Sidebar>
        );
    }
}

export default SideBar;

