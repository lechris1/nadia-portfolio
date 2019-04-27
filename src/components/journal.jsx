import React, { Component } from 'react';
import { journalStrings } from '../res/strings';

class MonthlyProgress extends Component {
    render() {
        const body = this.props.body.map((paragraph) => {
            return (
                <p>{paragraph}</p>
            );
        });

        if (this.props.audio == null) {
            return (
                <div className="row">
                    <h2 className="col-xl-2">{this.props.month}</h2>
                    <div className="col-xl-10">
                        {body}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <h2 className="col-xl-2">{this.props.month}</h2>
                    <div className="col-xl-6">
                        {body}
                    </div>
                    <div className="col-xl-4">
                        <iframe width="300" height="250" scrolling="no" frameborder="no"
                            src={this.props.audio}>
                        </iframe>
                    </div>
                </div>
            );
        }
    }
}

class Journal extends Component {
    render() {
        const months = journalStrings.months.map((month) => {
            return (
                <div>
                    <MonthlyProgress
                        month={month.month}
                        body={month.body}
                        audio={month.audio}
                    />
                    <hr/>
                </div>
            );
        });

        return (
            <div className="animated fadeIn">
                {months}
                <div className="row">
                    <h2 className="col-xl-2">The Finished Product</h2>
                    <div className="col-xl-6">
                        <p>
                            I have finally created my final product for this project. After making the final
                            touches to each track, I mixed the four parts together and added dynamics. It is
                            much easier to play each part at the same dynamic and then electronically change
                            the dynamic levels, because this method allows me to play with my best tone throughout
                            the entire recording. Finally, I played it for my parents and then posted it onto
                            SoundCloud. I am proud of what I have created, and I hope that it will be heard by many.
                        </p>
                    </div>
                    <div className="col-xl-4">
                        <iframe width="300" height="250" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/194123007&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
                        </iframe>
                    </div>
                </div>


            </div>
        );
    }
}

export default Journal;