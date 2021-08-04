import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState, useRef } from 'react';
import { validateEmail } from '../utils.js';
import axios from 'axios';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [content, setContent] = useState('');
    const [contentError, setContentError] = useState('');

    const [mailSent, setMailSent] = useState();

    const formSubmitAttempted = useRef(false);

    const nameErrorDisplay = nameError ? <p className='error-msg'>{nameError}</p> : null;
    const emailErrorDisplay = emailError.length > 0 ? <p className='error-msg'>{emailError}</p> : null;
    const contentErrorDisplay = contentError.length > 0 ? <p className='error-msg'>{contentError}</p> : null;

    const mailSentDisplay = 
        mailSent ?
        <p className='mail-outcome mail-success'>Your message has been sent!</p>
        : mailSent === false ?
        <p className='mail-outcome mail-failure'>Whoops, there was a problem sending your message! Please try sending me an email directly from the link above</p>
        : null;

    function handleNameChange(event) {
        setName(event.target.value);
        setMailSent();
    };
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
        setMailSent();
    };

    function handleContentChange(event) {
        setContent(event.target.value);
        setMailSent();
    };

    function clearForm() {
        setName('');
        setEmail('');
        setContent('');
    };

    function setErrors() {
        if (!name) setNameError('A Name must be provided');
        else setNameError('');

        if (!email) setEmailError('An Email address must be provided');
        else if (!validateEmail(email)) setEmailError('The Email address provided is not valid');
        else setEmailError('');
        
        if (!content) setContentError('A Message must be provided');
        else setContentError('');
    };

    async function sendEmail() {
        axios({
            method: 'post',
            url: '/api/contact',
            headers: {'content-type': 'application/json'},
            data: {
                    'name': name,
                    'email': email,
                    'content': content,
                    'mailSent': mailSent,
                }
        })
        .then(result => {
            setMailSent(result.data >= 200 && result.data < 300);
            clearForm();
        })
        .catch(() => {
            setMailSent(false);
        });
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        setMailSent();

        if (!name || !email || !validateEmail(email) || !content) {
            setErrors();
            formSubmitAttempted.current = true;
        }
        else {
            sendEmail();
            formSubmitAttempted.current = false;
        };
    };

    //Update errors if failing first attempt
    useEffect(() => {
        if (formSubmitAttempted.current) setErrors();
    });

    return (
        <Form id="ContactForm">
            <Form.Group controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Sam Jones" value={name} onChange={e => handleNameChange(e)} required />
                {nameErrorDisplay}
            </Form.Group>

            <Form.Group controlId="contactEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="email@example.com" value={email} onChange={e => handleEmailChange(e)} required />
                {emailErrorDisplay}
            </Form.Group>

            <Form.Group controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="What's your message?" value={content} rows={12} onChange={e => handleContentChange(e)} required />
                {contentErrorDisplay}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={e => handleFormSubmit(e)}>
                Send Email
            </Button>
            
            {mailSentDisplay}
        </Form>
    );
};