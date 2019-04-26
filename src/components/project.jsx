import React, { Component } from 'react';
import '../css/project.css';

class Project extends Component {
    render() {
        return (
            <div className="row animated fadeIn" id="project">
                <div className="col-md-6">
                    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/194123007&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
                <div className="col-md-6">
                    <p>By Nadia J. Schrum<br />Hour: 10-8<br />Year Completed: 2014-2015<br /></p>
                    <div id="projectNavigation">
                        <div className="row">
                            <button type="button"
                                className="col-xl-3 btn btn-outline-dark"
                                onClick={() => this.props.onClick("Process Journal")}
                            >
                                Process Journal
                            </button>
                            <p className="col-xl-9">See my monthly progress during the school year.</p>
                        </div>
                        <div className="row">
                            <button type="button"
                                className="col-xl-3 btn btn-outline-dark"
                                onClick={() => this.props.onClick("Report")}
                            >
                                The Report
                            </button>
                            <p className="col-xl-9">See the history behind my project and work to compose it.</p>
                        </div>
                        <div className="row">
                            <button type="button"
                                className="col-xl-3 btn btn-outline-dark"
                                onClick={() => this.props.onClick("Bibliography")}
                            >
                                Bibliography
                            </button>
                            <p className="col-xl-9">See the sources I used to work on my project.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;