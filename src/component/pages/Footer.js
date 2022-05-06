import React from 'react'
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section>
                <footer className='footer-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <p>Copyright &copy; 2022 Praful Ayar.</p>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <ul>
                                    <li><a href='https://www.facebook.com/login/' target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                                        <a href='https://web.whatsapp.com/' target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                                        <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target="_blank" rel="noreferrer"><FaTwitter /></a>
                                        <a href='https://www.instagram.com/accounts/login/?hl=en' target="_blank" rel="noreferrer"><FaInstagram /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer
