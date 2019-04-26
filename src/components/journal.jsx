import React, { Component } from 'react';
// import '../css/journal.css';
import { journalStrings } from '../res/strings';

function MonthlyProgress(props) {
    return (
        <div>
            <h2>{props.month}</h2>
            <p>{props.body}</p>
        </div>
    );
}

class Journal extends Component {
    render() {
        const months = journalStrings.months.map((month) => {
            return (
                <MonthlyProgress
                    month={month.month}
                    body={month.body}
                />
            );
        });

        return (
            <div className="animated fadeIn">
                {months}
            </div>
        );
    }
}

export default Journal;