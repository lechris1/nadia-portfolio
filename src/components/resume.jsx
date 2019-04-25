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
            <div >
                <Waypoint
                    onEnter={() => this.loadMusical()}
                />
                <div className={load + " musical"}>
                    <div>
                        <img className="center-cropped" src={require("../images/" + this.props.musical.image)} />
                    </div>
                    <div>
                        <p>{this.props.musical.yearlocation}<br />
                            {this.props.musical.title}<br />
                            {this.props.musical.instruments}</p>
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
                    musical={musical}
                />
            );
        });

        return (
            <div id="resume">
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

                <div>{musicals}</div>
            </div>
        );
    }
}

export default Resume;