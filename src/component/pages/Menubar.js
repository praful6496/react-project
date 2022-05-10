import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaStream } from "react-icons/fa";

const Menubar = () => {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <>

            <div id='topbar' className='back'>
                <div className="App">
                    <header>
                        <Navbar expand={true}>
                            <Container>
                                <Navbar.Brand className='main-logo'><span>L</span>OGO</Navbar.Brand>
                                <div className='abc'>
                                    <Nav className="me-auto">
                                        <Nav.Link href="#about">About</Nav.Link>
                                        <Nav.Link href="#service">Services</Nav.Link>
                                        <Nav.Link href="#team">Teams</Nav.Link>
                                        <Nav.Link href="#contact">Contact</Nav.Link>
                                    </Nav>
                                </div>
                                <div className='togel-btn'>
                                    <span><FaStream onClick={myFunction} className="dropbtn" /></span>
                                    <div className="dropdown">
                                        <div id="myDropdown" className="dropdown-content">
                                            <Nav.Link href="#about">About</Nav.Link>
                                            <Nav.Link href="#service">Services</Nav.Link>
                                            <Nav.Link href="#team">Teams</Nav.Link>
                                            <Nav.Link href="#contact">Contact</Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Navbar>
                    </header>
                    <div className='hero-content'>
                        <Container>
                            <h5>WE ARE CREATIVE</h5>
                            <h1>THE BEST <span>DIGITAL</span>AGENCY</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <a className='btn btn-primary' href='#'>Get Started</a>
                            <i><a href='https://www.youtube.com/watch?v=uiqrngFTX5k&ab_channel=BajewalaRecordsHaryanvi' target="_blank"><IoPlayCircleOutline />Watch Now</a></i>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menubar
