import React, { useState, useRef } from 'react'
import StartUpIndia from '../../assets/svgviewer-output (3).svg'
import HealthcareImg from '../../assets/svgviewer-output (28).svg'
import AIimg from '../../assets/svgviewer-output (29).svg'
import TelemedicineImg from '../../assets/svgviewer-output (30).svg'
import heroImage from '../../assets/Comp 1.mp4'
import MakeInIndia from '../../assets/svgviewer-output (4).svg'
import GreenRight from '../../assets/svgviewer-output (5).svg'
import OfficeImage1 from '../../assets/svgviewer-output (7).svg'
import OfficeImage2 from '../../assets/svgviewer-output (8).svg'
import chestoImage from '../../assets/svgviewer-output (12).svg'
import NormalBulb from '../../assets/normalbulb.png'
import lightUpBulb from '../../assets/lightbulb.svg'
import lightupshade1 from '../../assets/lightbulbshade1.svg'
import lightupshade2 from '../../assets/lightbulbshade2.svg'
import Typewriter from "typewriter-effect";
import classes from './Home.module.scss'
import { MainButton } from '../../UI/Button/Button';
import Card from '../../UI/Card/Card'
import useWindowDimensions from './WindowDimensions';
import { useEffect } from 'react'

const Home = () => {

    const vidref = useRef();

    useEffect(() => {
        vidref.current.play();
    }, []);

    const [mainBulb, setMainBulb] = useState(true);
    const [lightUpbulb, setLightUpbulb] = useState(false);
    const [lightUpShad1, setLightUpShad1] = useState(false);
    const [lightUpShad2, setLightUpShad2] = useState(false);

    const { width } = useWindowDimensions();

    const bulbLightUp = () => {
        if (window.scrollY >= 1200) {
            setMainBulb(false)
            setLightUpbulb(true)
            if (window.scrollY >= 1400) {
                setMainBulb(false)
                setLightUpbulb(false)
                setLightUpShad1(true)
                if (window.scrollY >= 1700) {
                    setMainBulb(false)
                    setLightUpbulb(false)
                    setLightUpShad1(false)
                    setLightUpShad2(true)
                } else {
                    setLightUpShad2(false)
                    setMainBulb(false)
                    setLightUpbulb(false)
                    setLightUpShad1(true)
                }
            }
            else {
                setLightUpShad1(false)
                setMainBulb(false)
                setLightUpbulb(true)
            }
        }
        else {
            setLightUpbulb(false)
            setMainBulb(true)
        }

        console.log(window.scrollY);
    }

    window.addEventListener('scroll', bulbLightUp)

    return (
        <div className={classes.homeMainContainer}>
            <div className={classes.homeHeroContainer}>
                <div className={classes.heroTextImgContainer}>
                    <video width={"100%"} ref={vidref} muted autoPlay loop>
                        <source src={heroImage} type="video/mp4" />
                    </video>
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

            <div className={classes.qualityAssuredContainer}>
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

            {/* <div className={classes.homeStoryContainer}>
                <div className={classes.storyMainContainer}>

                    <div className={classes.MidleContainer}>
                        <div className={classes.storyMidleContainer}>
                            <h4>THE BRAIN BEHIND</h4>
                            <h1 style={{ color: '#5fdad5' }}>THE FOUNDER</h1>
                        </div>

                        {width >= 700 ? "" :
                            <div className={classes.homeRightContainer}>
                                <div className={classes.imgWrapper}>
                                    <img src={OfficeImage1} alt="homeImage1" className={classes.image} />
                                </div>
                            </div>}

                        <div className={classes.storyMidleContainer}>
                            <div className={classes.storyUpperCards}>
                                <div className={classes.storyCards}>
                                    <h2>OUR STORY</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                                <div className={classes.storyCards}>
                                    <h2>OUR VISION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                            </div>
                            <div className={classes.storyLowerCards}>
                                <div className={classes.storyCards}>
                                    <h2>OUR MISSION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                                <div className={classes.storyCards}>
                                    <h2>OUR GOALS</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.homeBottomContainer}>
                            <MainButton type='button'><b>Know More</b></MainButton>
                        </div>
                    </div>

                    {width <= 700 ? "" :
                        <div className={classes.homeRightContainer}>
                            <div className={classes.imgWrapper}>
                                <img src={OfficeImage1} alt="homeImage1" className={classes.image} />
                            </div>
                        </div>}
                </div>
            </div> */}













            {/* 
            <div className={classes.homeStoryContainer}>
                <div className={classes.storyMainContainer}>

                    <div className={classes.MidleContainer}>
                        <div className={classes.storyTopHeader}>
                            <h4>THE STORY</h4>
                            <h1 style={{ color: '#5fdad5' }}>WHO WE ARE?</h1>
                        </div>

                        {width >= 700 ? "" :
                            <div className={classes.homeRightContainer}>
                                <div className={classes.imgWrapper}>
                                    <img src={OfficeImage1} alt="homeImage1" className={classes.image} style={{ minHeight: "450px" }} />
                                </div>
                            </div>
                        }

                        <div className={classes.storyMidleContainer}>
                            <div className={classes.storyUpperCards}>
                                <div className={classes.storyCards}>
                                    <h2>OUR STORY</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                                <div className={classes.storyCards}>
                                    <h2>OUR VISION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                            </div>
                            <div className={classes.storyLowerCards}>
                                <div className={classes.storyCards}>
                                    <h2>OUR MISSION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                                <div className={classes.storyCards}>
                                    <h2>OUR GOALS</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam repudiandae impedit odio placeat repellat, velit eaque quae illum ab!</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.storyBottomContainer}>
                            <MainButton type='button'><b>Know More</b></MainButton>
                        </div>
                    </div>

                    {width <= 700 ? "" :
                        <div className={classes.homeRightContainer}>
                            <div className={classes.imgWrapper}>
                                <img src={OfficeImage1} alt="homeImage1" className={classes.image} />
                            </div>
                        </div>
                    }
                </div>
            </div> */}

            <div className={classes.homeJourneyContainer}>
                <div className={classes.journeyMainContainer}>

                    {width <= 700 ? "" :
                        <div className={classes.homeRightContainer}>
                            <div className={classes.imgWrapper}>
                                <img src={OfficeImage2} alt="homeImage1" className={classes.image} />
                            </div>
                        </div>}

                    <div className={classes.journeyContentContainer}>
                        <div className={classes.journeyHeaderContainer}>
                            <h4>THE JOURNEY</h4>
                            <h1 style={{ color: '#5fdad5', marginTop: 0 }}>PROJECT RESEARCH</h1>
                            <h4
                            >MAKING SURE THAT NOTHING GOES PAST YOUR EAR. THE FUTURE OF</h4>
                            <h2>STETHOSCOPE.</h2>
                        </div>

                        {width >= 700 ? "" :
                            <div className={classes.homeRightContainer}>
                                <div className={classes.imgWrapper}>
                                    <img src={OfficeImage2} alt="homeImage3" className={classes.image} />
                                </div>
                            </div>
                        }

                        <div className={classes.journeyCardsContainer}>
                            <div className={classes.journeyUpperContainer}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam reprehenderit necessitatibus rerum labore animi quas iure a natus voluptatibus voluptate rem aliquid, nesciunt qui, dolores consectetur, soluta odio ad doloremque et quia.
                            </div>
                            <div className={classes.journeyLowerContainer}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt magni praesentium ullam ipsum ratione maiores quos, eos error quod soluta cupiditate autem suscipit et veniam possimus pariatur voluptatum atque ut rerum molestiae vel.asperiores!
                            </div>
                        </div>
                        <div className={classes.journeyBottomContainer}>
                            <MainButton type='button'><b>Know More</b></MainButton>
                        </div>
                    </div>
                </div>
            </div>


            <div className={classes.homeQuestionContainer}>
                <div className={classes.QuestionTextImgContainer}>
                    <h4>THE QUESTION</h4>
                    <h1 style={{ color: '#5fdad5', marginTop: 0 }}>WHY FIFTHVENTRICLE</h1>
                </div>
                <div className={classes.bulbImgContainer}>
                    {mainBulb && (<img src={NormalBulb} alt="BulbLightupImg" className={classes.mainBulb} width="250px" height="450px" />)}
                    {lightUpbulb && (<img src={lightUpBulb} alt="BulbLightupImg" className={classes.BulbLightupImg} width="250px" height="450px" />)}
                    {lightUpShad1 && (<img src={lightupshade1} alt="BulbLightupImg" className={classes.lightUpshad1} width="250px" height="650px" />)}
                    {lightUpShad2 && (<img src={lightupshade2} alt="BulbLightupImg" className={classes.lightUpshad2} width="250px" height="450px" />)}
                </div>
                {width < 1150 ? "" :
                    <div className={classes.infoCards}>
                        <div className={classes.cardsRow1}>
                            <Card image={HealthcareImg} description={
                                <>
                                    <h3>Accessible Healthcare</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum unde maxime sapiente officia debitis officiis voluptate modi temporibus molestiae. Quae incidunt culpa accusamus enim id voluptate perferendis sed voluptatem.</p>
                                </>
                            } />
                        </div>
                        <div className={classes.cardsRow2}>
                            <Card image={AIimg} description={
                                <>
                                    <h3>Artificial interlligence</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum unde maxime sapiente officia debitis officiis voluptate modi temporibus molestiae. Quae incidunt culpa accusamus enim id voluptate perferendis sed voluptatem.</p>
                                </>
                            } />
                        </div>
                        <div className={classes.cardsRow3}>
                            <Card image={TelemedicineImg} description={
                                <>
                                    <h3>Telemedicine</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum unde maxime sapiente officia debitis officiis voluptate modi temporibus molestiae. Quae incidunt culpa accusamus enim id voluptate perferendis sed voluptatem.</p>
                                </>
                            } />
                        </div>
                    </div>
                }

                {width > 1150 ? "" :
                    <div className={classes.responsiveInfoCards}>
                        <div className={classes.cardsRow1}>
                            <Card image={HealthcareImg} description={
                                <>
                                    <h3>Accessible Healthcare</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum unde maxime sapiente officia debitis officiis voluptate modi temporibus molestiae. Quae incidunt culpa accusamus enim id voluptate perferendis sed voluptatem.</p>
                                </>
                            } />
                            <Card image={AIimg} description={
                                <>
                                    <h3>Artificial interlligence</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum unde maxime sapiente officia debitis officiis voluptate modi temporibus molestiae. Quae incidunt culpa accusamus enim id voluptate perferendis sed voluptatem.</p>
                                </>
                            } />
                        </div>
                        <div className={classes.cardsRow2}>
                            <Card image={TelemedicineImg} description={
                                <>
                                    <h3>Telemedicine</h3>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum unde maxime sapiente officia debitis officiis voluptate modi temporibus molestiae. Quae incidunt culpa accusamus enim id voluptate perferendis sed voluptatem.</p>
                                </>
                            } />
                        </div>
                    </div>

                }
            </div>

            <div className={classes.homeChestoContainer}>
                <div className={classes.chestoDesc}>
                    <div className={classes.descHeader}>
                        <h4>THE RESULT</h4>
                        <h2 style={{ color: '#5fdad5', marginTop: 0 }}>OUR PRODUCT LINE</h2>
                    </div>
                    {width >= 950 ? "" :
                        <div className={classes.chestoImg}>
                            <img src={chestoImage} alt="Chesto" width="300px" height="250px" />
                        </div>
                    }
                    <div className={classes.ChestoContent}>
                        <h3>INTRODUCING THE REVOLUTIONARY</h3>
                        <h3>DIGITAL STETHOSCOPE</h3>
                        <h2 style={{ color: '#5fdad5', marginTop: 0 }}>CHESTO</h2>
                        <br />
                        <p style={{ textAlign: "left" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate eligendi necessitatibus doloremque minima incidunt voluptatibus id nesciunt cumque iste minus dolores dignissimos, quidem praesentium veniam placeat, magni, modi tenetur.</p>
                    </div>
                    <div className={classes.chestobottom}>
                        <div className={classes.chestoCountTop}>
                            <div className={classes.chestoBox}>
                                <h2 style={{ color: "#fae92a", textAlign: "left" }}>92%</h2>
                                <h4>AI and ML</h4>
                                <h4>ACCURACY</h4>
                            </div>
                            <div className={classes.chestoBox}>
                                <h2 style={{ color: "#fae92a", textAlign: "left" }}>14+</h2>
                                <h4>MONTHS INTO</h4>
                                <h4>DEVELOPMENT</h4>
                            </div>
                        </div>

                        <div className={classes.chestoCountBottom}>
                            <div className={classes.chestoBox}>
                                <h2 style={{ color: "#fae92a", textAlign: "left" }}>200+</h2>
                                <h4>SAMPLES</h4>
                                <h4>COLLECTED</h4>
                            </div>
                            <div className={classes.chestoBox}>
                                <h2 style={{ color: "#fae92a", textAlign: "left" }}>92+</h2>
                                <h4>YEARS OF</h4>
                                <h4>INDUSTRY EXPERIENCE</h4>
                            </div>
                        </div>


                    </div>
                    <div className={classes.chestoboxbutton}>
                        <MainButton style={{ padding: "10px 20px" }}>BUY NOW</MainButton>
                        <MainButton style={{ padding: "10px 20px" }}>FULL CATALOGUE</MainButton>
                    </div>
                </div>
                {width <= 950 ? "" :
                    <div className={classes.chestoImg}>
                        <img src={chestoImage} alt="Chesto" width="300px" height="250px" />
                    </div>
                }
            </div>
        </div >
    )
}

export default Home

