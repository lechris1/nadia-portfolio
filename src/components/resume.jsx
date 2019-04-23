import React, { Component } from 'react';
// import '../css/resume.css';
import { resumeStrings } from '../res/strings';

class Musical extends Component {
    render() {
        let fadeLeft = this.props.fadeLeft ? 'fadeInLeft' : 'fadeInRight';
        return (
            <div className={"animated " + fadeLeft + " delay-1s"}>
                <p>{this.props.musical.yearlocation}<br/>
                {this.props.musical.title}<br/>
                {this.props.musical.instruments}</p>
            </div>
        );
    }
}

// var contentWayPoint = function() {
//     var i = 0;
//     $('.animate-box').waypoint( function( direction ) {

//         if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            
//             i++;

//             $(this.element).addClass('item-animate');
//             setTimeout(function(){

//                 $('body .animate-box.item-animate').each(function(k){
//                     var el = $(this);
//                     setTimeout( function () {
//                         var effect = el.data('animate-effect');
//                         if ( effect === 'fadeIn') {
//                             el.addClass('fadeIn animated');
//                         } else if ( effect === 'fadeInLeft') {
//                             el.addClass('fadeInLeft animated');
//                         } else if ( effect === 'fadeInRight') {
//                             el.addClass('fadeInRight animated');
//                         } else {
//                             el.addClass('fadeInUp animated');
//                         }

//                         el.removeClass('item-animate');
//                     },  k * 200, 'easeInOutExpo' );
//                 });
                
//             }, 100);
            
//         }

//     } , { offset: '85%' } );
// };

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