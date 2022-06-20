import React from 'react'
import StartUpIndia from '../../assets/svgviewer-output (3).svg'
import MakeInIndia from '../../assets/svgviewer-output (4).svg'
import GreenRight from '../../assets/svgviewer-output (5).svg'
import OfficeImage1 from '../../assets/svgviewer-output (7).svg'
import OfficeImage2 from '../../assets/svgviewer-output (8).svg'
import Typewriter from "typewriter-effect";
import classes from './Home.module.scss'
import { MainButton } from '../../UI/Button/Button';
import useWindowDimensions from './WindowDimensions';

const Home = () => {

    const { width } = useWindowDimensions();
    return (
        <div className={classes.homeMainContainer}>
            <div className={classes.homeFirstContainer}>
                <div className={classes.videoTextContainer}>
                    <div className={classes.homeTypewriterContainer}>
                        India's first Truly&nbsp;
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("TUBELESS")
                                    .pauseFor(2000)
                                    .deleteAll(50)
                                    .start();
                            }}
                            options={{ loop: true }}
                        />
                    </div>
                    <h4 style={{ margin: 15 }}>Smart Digital Stethoscope Making Company</h4>
                    <MainButton type='button'><b>Enquire now</b></MainButton>
                </div>
            </div>

            <div className={classes.homeSecondContainer}>
                <div className={classes.imagesContainer}>
                    <img src={StartUpIndia} alt="homeImage1" width="200" height="100" />
                </div>
                <div className={classes.imagesContainer}>
                    <img src={MakeInIndia} alt="homeImage2" width="200" height="100" />
                </div>
                <div className={classes.imagesContainer}>
                    <img src={GreenRight} alt="homeImage3" width="110" height="100" />
                    <b style={{ color: "black", fontWeight: "700", fontSize: "20px" }}>QUALITY ASSURED</b>
                </div>
            </div>

            <div className={classes.homeThirdContainer}>
                <div className={classes.MidleContainer}>
                    <div className={classes.LeftMidleContainer}>
                        <div className={classes.LeftTopHeader}>
                            <h4>THE STORY</h4>
                            <h1 style={{ color: '#5fdad5' }}>WHO WE ARE ?</h1>
                        </div>
                        {width >= 960 ? "" :
                            <div className={classes.homeRightContainer}>
                                <div className={classes.imgWrapper}>
                                    <img src={OfficeImage1} alt="homeImage1" className={classes.image} />
                                </div>
                            </div>
                        }
                        <div className={classes.HomeCardsContainer}>
                            <div className={classes.homeUpperCards}>
                                <div className={classes.homeCards}>
                                    <h2>OUR STORY</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                                <div className={classes.homeCards}>
                                    <h2>OUR VISION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                            </div>
                            <div className={classes.homeLowerCards}>
                                <div className={classes.homeCards}>
                                    <h2>OUR MISSION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                                <div className={classes.homeCards}>
                                    <h2>OUR GOALS</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.homeBottomContainer}>
                            <MainButton type='button'><b>Know More</b></MainButton>
                        </div>
                    </div>
                    {width <= 960 ? "" :
                        <div className={classes.homeRightContainer}>
                            <div className={classes.imgWrapper}>
                                <img src={OfficeImage1} alt="homeImage1" className={classes.image} />
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className={classes.homeFourthContainer}>
                <div className={classes.MidleContainer}>
                    <div className={classes.homeRightContainer}>
                        <div className={classes.imgWrapper}>
                            <img src={OfficeImage2} alt="homeImage1" className={classes.image} />
                        </div>
                    </div>
                    <div className={classes.homeRightContainer2}>
                        <div className={classes.journeyTopContainer}>
                            <div className={classes.journeyHeader}>
                                <h4>THE JOURNEY</h4>
                                <h1 style={{ color: '#5fdad5' }}>PROJECT RESEARCH</h1>
                                <h3>MAKING SURE THAT NOTHING GOES PAST YOUR EAR. THE FUTURE OF</h3>
                                <h2>STETHOSCOPE.</h2>
                            </div>
                            <div className={classes.LeftMidleContainer2}>
                                <div className={classes.midleTextContainers}>
                                    <div className={classes.midletextContainer}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam reprehenderit necessitatibus rerum labore animi quas iure a natus voluptatibus voluptate rem aliquid, nesciunt qui, dolores consectetur, soluta odio ad doloremque et quia.
                                    </div>
                                    <div className={classes.midletextContainer}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt magni praesentium ullam ipsum ratione maiores quos, eos error quod soluta cupiditate autem suscipit et veniam possimus pariatur voluptatum atque ut rerum molestiae vel.asperiores!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.homeBottomContainer}>
                            <MainButton><b>Read More</b></MainButton>
                        </div>
                    </div>
                </div>
            </div>



            <div className={classes.homeFifthContainer}>

            </div>


        </div>
    )
}

export default Home

