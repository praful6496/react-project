import React from 'react'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram} from "react-icons/fa";


const Team = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('http://localhost:3001/api/get');
        setUsers(await response.json());
    }
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <section id='team' className='team-area ptd-100'>
                <Container>
                    <div className='section-titel1'>
                        <h2>Expert <b>Team</b></h2>
                        <hr className='about-horizontal'></hr>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className='row' >
                        {
                            users.map((curElem) => {
                                return (
                                    <div className='col-lg-3 col-md-6 col-sm-6' key={curElem.id}>
                                        <div className='single-services'>
                                            <img src={curElem.img} alt='about' />
                                            <div className='about-post'>
                                            <ul>
                                                <li><a href='https://www.facebook.com/login/' target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                                                    <a href='https://web.whatsapp.com/' target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                                                    <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target="_blank" rel="noreferrer"><FaTwitter /></a>
                                                    <a href='https://www.instagram.com/accounts/login/?hl=en' target="_blank" rel="noreferrer"><FaInstagram /></a>
                                                </li>
                                            </ul>
                                            </div>
                                            <h3>{curElem.name}</h3>
                                            <span>{curElem.post}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Team
