import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <section id='about' className='about-area ptb-100 bg-f9f9f9 w-100'>
                <Container>
                    <div className="container">
                        <div className='section-titel2'>
                            <h2>About <b>Us</b></h2>
                            <hr className='about-horizontal'></hr>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-md-12">
                                <img className='about-img' src='img/1.png' alt='about' ></img>
                            </div>
                            <div className="col-lg-6 col-sm-md-12">
                                <div className='about-titel'>
                                    <div className='about-main'>
                                        <h3>ABout <b>Exolot</b></h3>
                                        <h5>We Are Digital <span>Marketing &amp; Branding</span></h5>
                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                    <div className='about'>
                                        <div className='single-progress'>
                                            <h3 className='progress-titel'>Branding</h3>
                                            <div className='progress'>
                                                <div className='progress-bar' style={{ width: '95%' }}>
                                                    <div className='progree-value'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='single-progress'>
                                            <h3 className='progress-titel'>Marketing</h3>
                                            <div className='progress'>
                                                <div className='progress-bar' style={{ width: '95%' }}>
                                                    <div className='progree-value'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='single-progress'>
                                            <h3 className='progress-titel'>Web Design</h3>
                                            <div className='progress'>
                                                <div className='progress-bar' style={{ width: '95%' }}>
                                                    <div className='progree-value'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='single-progress'>
                                            <h3 className='progress-titel'>Web Development</h3>
                                            <div className='progress'>
                                                <div className='progress-bar' style={{ width: '95%' }}>
                                                    <div className='progree-value'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About
