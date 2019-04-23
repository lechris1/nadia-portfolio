import React, { Component } from 'react';
// import '../css/resume.css';
import { resumeStrings} from '../res/strings';

class Resume extends Component {
    render() {
        return (
            <div>
                <p>{resumeStrings.intro.body}</p>
            </div>
        );
    }
}

export default Resume;