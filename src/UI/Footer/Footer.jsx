import React from 'react'
import { NavbarInnerContainer, CenterDiv, RightContainer, LeftContainer, Logo, RightDivOne, RightDivTwo, RightDivThree } from './Footer.style';
import { Fab } from 'ui-neumorphism';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <NavbarInnerContainer>
            <CenterDiv>
                <LeftContainer>
                    <Logo src='https://www.fifthventricle.in/wp-content/uploads/elementor/thumbs/cropped-fifth-ventricle-full-paqadr3fkgfpd5gl63o14tejvzngica2atitjsjj7k.png'></Logo>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus ea veniam quaerat? Optio architecto fuga consequuntur, expedita debitis animi cumque aspernatur atque accusamus temporibus qui eos quod corrupti sed minima beatae dolorem vero. Ipsa enim mollitia laudantium vero quae repudiandae, sapiente facere possimus ea.
                </LeftContainer>
                <RightContainer>
                    <RightDivOne>
                        CONTACT
                    </RightDivOne>
                    <RightDivTwo>
                        FIFTH VENTRICLE
                    </RightDivTwo>
                    <RightDivThree>
                        SOCIALS
                        <Fab style={{ margin: 10 }} dark color='var(--primary)'>
                            <span style={{ color: "#fff" }}><FaFacebookF /></span>
                        </Fab>
                        <Fab style={{ margin: 10 }} dark color='var(--primary)'>
                            <span style={{ color: "#fff" }}><FaTwitter /></span>
                        </Fab>
                        <Fab style={{ margin: 10 }} dark color='var(--primary)'>
                            <span style={{ color: "#fff" }}><FaLinkedinIn /></span>
                        </Fab>
                    </RightDivThree>
                </RightContainer>
            </CenterDiv>
        </NavbarInnerContainer>
    )
}

export default Footer
