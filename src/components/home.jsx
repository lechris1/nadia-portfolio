import React, { Component } from 'react';
import '../css/home.css';
import { homeStrings } from '../res/strings';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>{homeStrings.intro.title}</h2>
                    <p>{homeStrings.intro.body}</p>
                </div>
                <div>
                    <h2>{homeStrings.background.title}</h2>
                    <p>
                        {homeStrings.background.body1}
                        <span className="link" onClick={() => this.props.onClick("Project")}>{homeStrings.background.linkedProject}</span>
                        {homeStrings.background.body2}
                        <span className="link" onClick={() => this.props.onClick("Resume")}>{homeStrings.background.linkedResume}</span>
                        {homeStrings.background.body3}
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;