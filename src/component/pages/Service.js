import React from 'react'
import { FaChessQueen, FaPhotoVideo, FaGlideG, FaMapMarkerAlt } from "react-icons/fa";
import { IoTelescopeSharp } from "react-icons/io5";
import { ImCheckmark, ImDeviantart, ImPen } from "react-icons/im";
import { Container } from 'react-bootstrap';

const Service = () => {
    return (
        <>
            <section id='service' className='service-area ptb-100 w-100'>
                <Container>
                    <div className='section-titel'>
                        <h2>Our <b>Services</b></h2>
                        <hr className='about-horizontal'></hr>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><FaChessQueen /></div>
                                <h3>Branding</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">1</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><FaGlideG /></div>
                                <h3>UX/UI Design</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">2</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><FaPhotoVideo /></div>
                                <h3>Photography</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">3</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><FaMapMarkerAlt /></div>
                                <h3>Marketing</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">4</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><ImCheckmark /></div>
                                <h3>Web Design</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">5</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><ImDeviantart /></div>
                                <h3>Development</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">6</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><ImPen /></div>
                                <h3>Content Writer</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">7</div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-services'>
                                <div className='icon-service'><IoTelescopeSharp /></div>
                                <h3>SEO & SMM</h3>
                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="bg-number">8</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Service
