import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Onboarding.css';
import '../../../src/style.css';
import OnboardingForm from '../OnboardingForm/OnboardingForm';
import Banner from '../Banner/Banner';
import logo from '../../images/eden-logo.png';
import bannerImg from '../../images/banner.png';

const Onboarding = () => {
    return (
        <Fragment>
            <Container className='main-container'>
                <Row>
                    <Col className='text-left main-form-container' xs={12} md={5} lg={{ span: 4, offset: 1 }}>
                        <img className='logo' src={logo} alt="logo" />
                        <OnboardingForm
                            formHeading={"Hi , Welcome to Eden!"}
                            formSubHeading={"Start your 7-day free trial"}
                        />
                    </Col>
                    <Col xs={12} md={1} lg={1}></Col>
                    <Col className='eden-theme banner-container' xs={12} md={6} lg={5}>
                        <Banner
                            bannerHeading="Detailed Reports"
                            bannerSubHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            src={bannerImg} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Onboarding;