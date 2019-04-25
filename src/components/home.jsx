import React, { Component } from 'react';
import '../css/home.css';
import { homeStrings } from '../res/strings';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
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
                    <div className="creditImg col-md-4">
                        <img src={require("../images/nadia-home.jpg")} />
                        <p>Photo: Terry Johnston</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;