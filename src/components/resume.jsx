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
        let fadeDirection = this.props.fadeLeft ? 'fadeInLeft' : 'fadeInRight';
        let load = this.state.load ? "animated " + fadeDirection : "animate-box";
        return (
            <div >
                <Waypoint
                    onEnter={() => this.loadMusical()}
                />
                <div className={load + " musical"} data-animate-effect={fadeDirection}>
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

        let fadeLeft = true;
        const musicals = resumeStrings.musicals.map((musical) => {
            fadeLeft = !fadeLeft;
            return (
                <Musical
                    fadeLeft={fadeLeft}
                    musical={musical}
                />
            );
        });

        return (
            <div>
                <p>{resumeStrings.intro.body}</p>
                <h2>{resumeStrings.instruments.title}</h2>
                <ul>
                    <li>{resumeStrings.instruments.saxes}</li>
                    <li>{resumeStrings.instruments.ewi.title}</li>
                    <ul>{ewiSettings}</ul>
                </ul>
                <div>{musicals}</div>
            </div>
        );
    }
}

export default Resume;