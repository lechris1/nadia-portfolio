import React, { Component } from 'react';
import '../css/report.css';
import { reportStrings } from '../res/strings';

function Carousel(props) {
    return (
        <div id="carouselContainer" className="row justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide col-lg-6" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={5} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={6} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require("../images/carousel1.jpg")} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../images/carousel2.jpg")} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../images/carousel3.jpg")} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../images/carousel4.jpg")} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../images/carousel5.png")} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../images/carousel6.png")} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("../images/carousel7.png")} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <p>poggers</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

class Report extends Component {
    render() {
        const paragraphLength = reportStrings.paragraphs.length;
        const halfParagraphs1 = reportStrings.paragraphs.slice(0, paragraphLength / 2);
        const halfParagraphs2 = reportStrings.paragraphs.slice(paragraphLength / 2, paragraphLength);

        const topParagraphs = halfParagraphs1.map((paragraph) => {
            if (paragraph.image == null) {
                return (
                    <div className="row">
                        <p className="col-md-12">
                            {paragraph.text}
                        </p>
                    </div>
                );
            }
            else {
                return (
                    <div className="row">
                        <p className="col-md-8">
                            {paragraph.text}
                        </p>
                        <div className="creditImg col-md-4">
                            <img src={require("../images/" + paragraph.image.url)} />
                            <p>{paragraph.image.caption ? paragraph.image.caption : ""}</p>
                        </div>
                    </div>
                );
            }
        });

        const bottomParagraphs = halfParagraphs2.map((paragraph) => {
            if (paragraph.image == null) {
                return (
                    <div className="row">
                        <p className="col-md-12">
                            {paragraph.text}
                        </p>
                    </div>
                );
            }
            else {
                return (
                    <div className="row">
                        <p className="col-md-8">
                            {paragraph.text}
                        </p>
                        <div className="creditImg col-md-4">
                            <img src={require("../images/" + paragraph.image.url)} />
                            <p>{paragraph.image.caption ? paragraph.image.caption : ""}</p>
                        </div>
                    </div>
                );
            }
        });

        return (
            <div className="animated fadeIn">
                {topParagraphs}
                <Carousel />
                {bottomParagraphs}
            </div>
        );
    }
}

export default Report;