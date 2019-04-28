import React, { Component } from 'react';
import '../css/biblio.css';
import { biblioStrings } from '../res/strings';

class Biblio extends Component {
    render() {
        const sources = biblioStrings.sources.map((source) => {
            return (
                <div className="col-md-6">
                    <p className="source">
                        {source.author}<i>{source.text}</i>{source.everythingElse}
                    </p>
                    <hr/>
                </div>
            );
        });

        return (
            <div className="animated fadeIn">
                <div className="row">
                    {sources}
                </div>
            </div>
        );
    }
}

export default Biblio;