import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='main' >
                <br />
                <br />
                <h1 className='f-heading' >Curious how it works? Learn More.</h1>
                <button className='f-btn' >Request a Demo</button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='f-inner' >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }} >
                        <h1 className='f-icons' ><FaYoutube /></h1>
                        <h1 className='f-icons' ><FaLinkedin /></h1>
                        <h1 className='f-icons' ><FaFacebookSquare /></h1>

                    </div>

                    <ul className='f-list' >

                        <li className='f-text' >Elixir</li>
                        <li className='f-text' >Product</li>
                        <li className='f-text' >Industries</li>
                        <li className='f-text' >Resources</li>
                        <li className='f-text' >About</li>
                        <li className='f-text' >Customer Support</li>
                    </ul>
                    <ul className='f-list' >

                        <li className='f-text'>Elixir</li>
                        <li className='f-text'>Product</li>
                        <li className='f-text'>Industries</li>
                        <li className='f-text'>Resources</li>
                        <li className='f-text'>About</li>
                        <li className='f-text'>Customer Support</li>
                    </ul>
                    <ul className='f-list' >

                        <li className='f-text'>Elixir</li>
                        <li className='f-text'>Product</li>
                        <li className='f-text'>Industries</li>
                        <li className='f-text'>Resources</li>
                        <li className='f-text'>About</li>
                        <li className='f-text'>Customer Support</li>
                    </ul>


                </div>
                <br />
                <br />
                <hr color='grey' width="1300px" />
                <p className='f-last' >© 2024 Elixir <sup> ®</sup> Technologies. All Rights Reserved.</p>
            </div>


        </>
    )
}

export default Footer
