import React, { useEffect } from 'react';
import classes from './Contact.module.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import fonderimg from '../../assets/svgviewer-output (22).svg'
import quats from '../../assets/svgviewer-output (27).svg'
import whatsappImg from '../../assets/svgviewer-output (26).svg'
import callImg from '../../assets/svgviewer-output (25).svg'
import emailImg from '../../assets/svgviewer-output (24).svg'
import copyImg from '../../assets/svgviewer-output (23).svg'

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1200 });
      }, []);

    return (
        <>
            <div className={classes.contactContainer}>
                <div data-aos="fade-down" className={classes.contactUsHeader}>
                    <h1>Contact Us</h1>
                    <h4>We always love to hear from you.</h4>
                </div>
                <div className={classes.contactBodyContainer}>
                    <div data-aos="fade-right" className={classes.contactUsContainer}>
                        <div>
                            <img src={fonderimg} alt="fonder" width="60px" height="60px" />
                        </div>
                        <div className={classes.contactUsHeader}>
                            <img src={quats} alt="fonder" width="30px" height="30px" />
                            <p>We belive that understanding the user is the
                                first step towards true success.</p>
                        </div>
                        <div className={classes.contactUsContant}>
                            <div className={classes.contactUsContantRow}>
                                <div className={classes.alignLeftDiv}>
                                    <img src={whatsappImg} alt="whatsappImg" width="30px" height="30px" />
                                    <p>+91 0011225544</p>
                                </div>
                                <div>
                                    <img src={copyImg} alt="copyImg" width="30px" height="30px" />
                                </div>
                            </div>

                            <div className={classes.contactUsContantRow}>
                                <div className={classes.alignLeftDiv}>
                                    <img src={callImg} alt="whatsappImg" width="30px" height="30px" />
                                    <p>+91 0011225544</p>
                                </div>
                                <div>
                                    <img src={copyImg} alt="copyImg" width="30px" height="30px" />
                                </div>
                            </div>

                            <div className={classes.contactUsContantRow}>
                                <div className={classes.alignLeftDiv}>
                                    <img src={emailImg} alt="whatsappImg" width="30px" height="30px" />
                                    <p>abcde@abchedf.com</p>
                                </div>
                                <div>
                                    <img src={copyImg} alt="copyImg" width="30px" height="30px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={classes.msgtUsContainer}>
                        <div className={classes.msgtUsHeader}>
                            <h1>Send Us a Message!</h1>
                        </div>
                        <div className={classes.msgUsContent}>
                            <input type="text" placeholder='Name' className={classes.nameInput} />
                            <input type="text" placeholder='Email' className={classes.emailInput} />
                            <textarea name="message" id="message" cols="30" rows="4" placeholder='Message'></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.locateUsContainer}>
                <div className={classes.locateUsHeader}>
                    <h1>Locate Us</h1>
                    <h4>Coz Why Not.</h4>
                </div>
                <div className={classes.locateUsContant}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6707148385976!2d73.13146521487394!3d22.328289847520878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc94f22570a01%3A0xf36639f2fc6d950b!2sXcitech%20Technologies!5e0!3m2!1sen!2sin!4v1655794426027!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" title='locateUs'></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact
