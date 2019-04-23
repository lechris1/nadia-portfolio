import React, { Component } from 'react';
import Sidebar from './sidebar'
import Content from './content'

class MainWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapsed: false,
        };
        this.contentRef = React.createRef();
    }

    collapseSidebar() {
        this.setState({
            sidebarCollapsed: !this.state.sidebarCollapsed,
        });
    }

    setComponent(component) {
        this.contentRef.current.setComponent(component);
    }

    render() {
        return (
            <div className="wrapper">
                {/* Sidebar content */}
                <Sidebar
                    sidebarCollapsed={this.state.sidebarCollapsed}
                    setComponent={(component) => this.setComponent(component)}
                />
                {/* Actual Content */}
                <Content
                    ref={this.contentRef}
                    collapseSidebar={() => this.collapseSidebar()}
                    sidebarCollapsed={this.state.sidebarCollapsed}
                />
            </div>
        )
    }
}

export default MainWrapper;