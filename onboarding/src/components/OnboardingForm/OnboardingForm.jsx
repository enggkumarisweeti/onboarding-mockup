import React, { Fragment, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './OnboardingForm.css';
import '../../../src/style.css'
import Alert from 'react-bootstrap/Alert';

const OnboardingForm = (props) => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const paswordInputRef = useRef();
    const checkRef = useRef();

    const [isFormValid, setFormValidity] = useState(true);
    const [isFormSubmitted, setFormSubmit] = useState(false);
    const [isPasswordValid, checkPassword] = useState(true);
    const [userName, setUserName] = useState("");

    const onboardingHandler = () => {
        if (nameInputRef.current.value &&
            emailInputRef.current.value &&
            paswordInputRef.current.value &&
            checkRef.current.checked) {
            if (paswordInputRef.current.value.length < 8) {
                checkPassword(false);
                return;
            }
            setFormValidity(true);
            setFormSubmit(true);
            setUserName(nameInputRef.current.value);
            nameInputRef.current.value = "";
            emailInputRef.current.value = "";
            paswordInputRef.current.value = "";
            checkRef.current.checked = false;
            return
        }
        setFormValidity(false);
        setFormSubmit(false);
    }
    return (
        <Fragment>
            <div className="form-heading">
                <h2>{props.formHeading}</h2>
                <span>{props.formSubHeading}</span>
            </div>
            <Form className={`form-container ${isFormValid ? "" : "form-dirty"}`}>
                <Form.Group className="mb-3 onboarding-form" controlId="name" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameInputRef} type="text" placeholder="Steve Jobs" />
                </Form.Group>

                <Form.Group className="mb-3 onboarding-form" controlId="email" >
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control ref={emailInputRef} type="email" placeholder="name@email.com" />
                </Form.Group>

                <Form.Group className="mb-3 onboarding-form" controlId="password">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control ref={paswordInputRef} type="password" placeholder="at least 8 characters" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button
                        className="eden-theme"
                        variant="primary"
                        size="lg"
                        onClick={onboardingHandler}
                    >
                        Get Started
                    </Button>
                </div>

                <Form.Group className="mb-3 onboarding-form term-check" controlId="formBasicCheckbox">
                    <Form.Check ref={checkRef} className="eden-check" type="checkbox" label="" />
                    <span>I agree to the <span className="eden-text">Terms & Conditions</span></span>
                </Form.Group>

                {!isFormValid &&
                    <Alert key="danger" variant="danger">
                        {isPasswordValid ? "Please Fill In All Details" : "Password Must Be of 8 Characters"}
                    </Alert>
                }
                {isFormSubmitted && <Alert key="success" variant="success">
                    Welcome Onboard {userName} !
                </Alert>}
                
                <h5>Are you already a member ?</h5>
            </Form>
        </Fragment>
    )
}

export default OnboardingForm