import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const Banner = (props) => {
    return (
        <Fragment>
            <img src={props.src} />
            <h5>{props.bannerHeading}</h5>
            <span>{props.bannerSubHeading}</span>
        </Fragment>
    )
}

export default Banner;