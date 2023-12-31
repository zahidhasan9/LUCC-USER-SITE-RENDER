import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

// import videobg from '../../../assets/img/video-bg/video-2.jpg';
import videobg from '../../../assets/img/leading2.jpg';
import line1 from '../../../assets/img/lines/12.png';
import line2 from '../../../assets/img/lines/11.png';

class Video extends Component {
    componentDidMount() {
        $('.popup-video').magnificPopup({
            type: 'iframe',
        });
    }
    render() {
        return (
            <section className="video-section-two bg-img-c" style={{ backgroundImage: "url(" + videobg + ")" }}>
                <div className="container">
                    <div className="row align-content-center justify-content-center">
                        <div className="col-lg-10">
                            <div className="video-cont text-center">
                                <Link to="https://www.youtube.com/watch?v=u75XW6RlSJU" className="play-btn popup-video wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="400ms"><i className="fas fa-play" /></Link>
                                <h2>Watch Our Latest Videos </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-shape-one">
                    <img src={line1} alt="" />
                </div>
                <div className="line-shape-two">
                    <img src={line2} alt="" />
                </div>
            </section>
        );
    }
}

export default Video;