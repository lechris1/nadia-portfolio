import React, { Component } from 'react';
import '../css/content.css';
import Home from './home';
import Resume from './resume';
import Project from './project';
import Journal from './journal';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: "Home"
        }
    }

    setComponent(component) {
        this.setState({
            currentComponent: component,
        });
    }

    getComponent() {
        let component;
        switch (this.state.currentComponent) {
            case "Home":
                component = <Home
                    onClick={(nextComponent) => this.setComponent(nextComponent)}
                />
                break;
            case "Resume":
                component = <Resume />
                break;
            case "IB MYP Personal Project":
                component = <Project
                    onClick={(nextComponent) => this.setComponent(nextComponent)}
                />
                break;
            case "Process Journal":
                component = <Journal />
                break;
            // case "Report":
            //     component = <Report />
            //     break;
            // case "Bibliography":
            //     component = <Biblio />
            //     break;
        }
        return component;
    }

    render() {
        return (
            <div id="content"
                className={this.props.sidebarCollapsed ? "active" : null}
            >
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button type="button" class="btn btn-outline-dark" onClick={this.props.collapseSidebar}>
                            <i class="fa fa-align-left"></i>
                            <span>Toggle Sidebar</span>
                        </button>
                    </nav>
                </div>
                <div>
                    {this.getComponent()}
                </div>
            </div>
        );
    }
}

export default Content;