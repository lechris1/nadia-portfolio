import React, { Component } from 'react';
import '../css/sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar"
                className={this.props.sidebarCollapsed ? "active" : null}
            >
                <div className="sidebar-header">
                    <h3>Nadia<br />Jean</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a onClick={() => this.props.setComponent("Home")}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => this.props.setComponent("Resume")}>Resume</a>
                    </li>
                    <li className="active">
                        <a href="#projectSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">IB MYP Personal</a>
                        <ul className="collapse list-unstyled" id="projectSubmenu">
                            <li>
                                <a onClick={() => this.props.setComponent("IB MYP Personal Project")}>IB MYP Personal Project</a>
                            </li>
                            <li>
                                <a onClick={() => this.props.setComponent("Process Journal")}>Process Journal</a>
                            </li>
                            <li>
                                <a onClick={() => this.props.setComponent("Report")}>Report</a>
                            </li>
                            <li>
                                <a onClick={() => this.props.setComponent("Bibliography")}>Bibliography</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a onClick={() => this.props.setComponent("Contact")}>Contact</a>
                    </li>
                </ul>
                <p>The wise musicians are those who play what they can master.</p>
                <p>-Duke Ellington</p>
            </nav>
        );
    }
}

export default Sidebar;