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
const mql = window.matchMedia(`(min-width: 800px)`);

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        return (
            <div class="sidenav">
                {items.map(i => <a href={i.value}>{i.label}</a>)}
            </div>
        );
    }
}

export default SideBar;

