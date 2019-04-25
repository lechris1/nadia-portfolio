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
                    <p>Yeet</p>
                    <li>
                        <a onClick={() => this.props.setComponent("Home")}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => this.props.setComponent("Resume")}>Resume</a>
                    </li>
                    <li class="active">
                        <a href="#projectSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">IB MYP Personal</a>
                        <ul class="collapse list-unstyled" id="projectSubmenu">
                            <li>
                                <a onClick={() => this.props.setComponent("IB MYP Personal Project")}>IB MYP Personal Project</a>
                            </li>
                            <li>
                                <a href="#">Process Journal</a>
                            </li>
                            <li>
                                <a href="#">Report</a>
                            </li>
                            <li>
                                <a href="#">Bibliography</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;