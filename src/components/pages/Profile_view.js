import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Header_lucc_2';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Client from '../layouts/Client';
import Content from '../sections/Profile_View/Content';

class Service extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Lucc| Services</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content />
                {/* <section className="client-section">
                    <div className="container">
                        <div className="client-slider section-gap line-top">
                            <Client />
                        </div>
                    </div>
                </section> */}
                {/* <Footer /> */}
            </Fragment>
        );
    }
}

export default Service;