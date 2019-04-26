import React, { Component } from 'react';
import '../css/resume.css';
import { resumeStrings } from '../res/strings';
import { Waypoint } from 'react-waypoint';

class Musical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        };
    }

    loadMusical() {
        this.setState({
            load: true
        });
    }

    render() {
        let load = this.state.load ? "animated fadeInRight" : "animate-box";
        return (
            <div className="col-md-6">
                <Waypoint
                    onEnter={() => this.loadMusical()}
                />
                <div className={load + " musical row"}>
                    <div className="col-xl-3">
                        <img className="center-cropped" src={require("../images/" + this.props.image)} />
                    </div>
                    <div className="col-xl-9">
                        <p>{this.props.yearlocation}<br />
                            {this.props.title}<br />
                            {this.props.instruments}</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Resume extends Component {
    render() {
        const ewiSettings = resumeStrings.instruments.ewi.settings.map((setting) => {
            return (
                <li>{setting}</li>
            );
        });

        const musicals = resumeStrings.musicals.map((musical) => {
            return (
                <Musical
                    yearlocation={musical.yearlocation}
                    title={musical.title}
                    instruments={musical.instruments}
                    image={musical.image}
                />
            );
        });

        return (
            <div id="resume" className="animated fadeIn">
                <div className="row">
                    <div className="col-md-8">
                        <p>{resumeStrings.intro.body}</p>
                        <h2>{resumeStrings.instruments.title}</h2>
                        <ul>
                            <li>{resumeStrings.instruments.saxes}</li>
                            <li>{resumeStrings.instruments.ewi.title}</li>
                            <ul>{ewiSettings}</ul>
                        </ul>
                    </div>
                    <div className="creditImg col-md-4">
                        <img src={require("../images/nadia-resume.jpeg")} />
                        <p>Photo: Benjamin DeYoung</p>
                    </div>
                </div>

                <div className="row">{musicals}</div>
            </div>
        );
    }
}

export default Resume;