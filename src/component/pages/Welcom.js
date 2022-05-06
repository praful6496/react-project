import React from 'react'
import { AiOutlineCustomerService, AiOutlineMan, AiOutlineAntDesign } from "react-icons/ai";
import { Container } from 'react-bootstrap';

const Welcom = () => {
    return (
        <>
            <section className='welcome-area ptb-100'>
                <Container>
                    <div className='section-titel'>
                        <h2>Welcome to <b>Exolot</b></h2>
                        <hr className='about-horizontal'></hr>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-md-sm-12'>
                            <div className='single-box'>
                                <i><AiOutlineAntDesign /></i>
                                <h3>Creative Design</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-sm-12'>
                            <div className='single-box'>
                                <i><AiOutlineCustomerService /></i>
                                <h3>Friendly Codes</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-sm-12'>
                            <div className='single-box'>
                                <i><AiOutlineMan /></i>
                                <h3> Fast Support</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Welcom
