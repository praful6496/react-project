import React from 'react'
import { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from 'axios';
import { ImLocation, ImMail2, ImPhone } from "react-icons/im";
import { Container } from 'react-bootstrap';

const Contact = () => {
    const [inputList, setInputList] = useState([{ name: "", email: "", message: "" }]);
    const handleInputValue = (e) => {
        setInputList({
            ...inputList,
            [e.target.name]: e.target.value
        })
    }
    const addItem = (e) => {
            axios.post(`http://localhost:3001/api/insert`, {
                name: inputList.name,
                email: inputList.email,
                message: inputList.message
            }).then(res => {
                setInputList({name: "", email: "", message: ""});
                alert("data inserted successfully");
            });
        // }
    }
    return (
        <>
            <section id='contact' className='contact'>
                <Container>
                    <div className='section-titel'>
                        <h2>Contact <b>Us</b></h2>
                        <hr className='about-horizontal'></hr>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='contact-box'>
                                <div className='icon'><a href='https://www.google.com/maps' target="_blank" rel="noreferrer"><ImLocation /></a></div>
                                <h4>Address</h4>
                                <p><a href='#'>Ahmedabad</a></p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='contact-box'>
                                <div className='icon'><a target="_blank" rel="noreferrer" href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'><ImMail2 /></a></div>
                                <h4>Email</h4>
                                <p><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target="_blank" rel="noreferrer">prafulayar2000@gmail.com</a></p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='contact-box'>
                                <div className='icon'><a target="_blank" rel="noreferrer" href='https://support.microsoft.com/en-us/topic/make-and-receive-phone-calls-from-your-pc-21564230-abf6-f2bb-c7b7-1b15570662f5'><ImPhone /></a></div>
                                <h4>Phone</h4>
                                <p><a href='https://support.microsoft.com/en-us/topic/make-and-receive-phone-calls-from-your-pc-21564230-abf6-f2bb-c7b7-1b15570662f5' target="_blank" rel="noreferrer">+91 9723403578</a></p>
                                
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='get-in-touch'>
                                    <h3>Get in Touch</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li><a href='https://www.facebook.com/login/' target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                                            <a href='https://web.whatsapp.com/' target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                                            <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target="_blank" rel="noreferrer"><FaTwitter /></a>
                                            <a href='https://www.instagram.com/accounts/login/?hl=en' target="_blank" rel="noreferrer"><FaInstagram /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                <form className='needs-validation' onSubmit={addItem} id='contactForm'>
                                    <div className="col-lg-12 col-md-12 col-sm-12">

                                        <div className="form-group">
                                            <input className="form-control" type="text" name="name" id="name" value={inputList.name} placeholder="Name" autoComplete="off" onChange={handleInputValue} required></input>
                                            <div className="help-block with-errors">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input className="form-control" name="email" id="email" type="email" placeholder="Email" autoComplete="off" value={inputList.email} onChange={handleInputValue} required></input>
                                            <div className="help-block with-errors">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="description" placeholder="Your message" required="" rows="5" value={inputList.message} autoComplete="off" onChange={handleInputValue}>
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden">
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </section>
                </Container>
            </section>
        </>
    )
}

export default Contact
