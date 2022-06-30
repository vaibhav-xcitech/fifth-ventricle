import React from 'react';
import classes from "./AboutUs.module.scss";
import { MainButton } from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import TeamCard from '../../UI/TeamCard/TeamCard';
import useWindowDimensions from '../Home/WindowDimensions';
import FounderImage from "../../assets/Hirak Bhai.png";
import DesignerImage from "../../assets/svgviewer-output (11).svg";
import MLEngineerImg from "../../assets/svgviewer-output (10).svg";
import MobileEngineerImg from "../../assets/svgviewer-output (20).svg";
import EmbaddedSystem from "../../assets/svgviewer-output (14).svg";
import SalesManager from "../../assets/svgviewer-output (13).svg";
import GeneralSurgeonImg from "../../assets/svgviewer-output (17).svg";
import MBBS1Img from "../../assets/svgviewer-output (16).svg";
import MBBS2Img from "../../assets/svgviewer-output (15).svg";
import ToddlerImg from "../../assets/svgviewer-output (21).svg";

import HeroContainer from './HeroContainer/HeroContainer';
import OurStoryContainer from './OurStoryContainer/OurStoryContainer';


const AboutUs = () => {

    const { width } = useWindowDimensions();
    return (
        <div>
            <HeroContainer />
            <OurStoryContainer />

            



            <div className={classes.homeThirdContainer}>
                <div className={classes.MidleContainer}>

                    <div className={classes.LeftMidleContainer}>
                        <div className={classes.LeftTopHeader}>
                            <h4>THE BRAIN BEHIND</h4>
                            <h1 style={{ color: '#5fdad5' }}>THE FOUNDER</h1>
                        </div>

                        {width >= 700 ? "" :
                            <div className={classes.homeRightContainer}>
                                <div className={classes.imgWrapper}>
                                    <img src={FounderImage} alt="homeImage1" className={classes.image} />
                                </div>
                            </div>}

                        <div className={classes.HomeCardsContainer}>
                            <div className={classes.homeUpperCards}>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque necessitatibus debitis voluptatum qui obcaecati facilis et tempore nesciunt blanditiis, adipisci ratione. Iste aliquid quam illo suscipit laudantium quia odio error iure dolor architecto, eius consequatur laboriosam ullam modi possimus ex tempore corporis voluptatum adipisci eligendi! Omnis provident in ratione temporibus?</p>
                            </div>
                            <div className={classes.homeLowerCards}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatibus sapiente cum quidem? Quis magnam magni mollitia, aliquid ab rerum, deserunt facilis minima alias sint sapiente amet ipsa beatae, necessitatibus fugit dolores nesciunt tenetur repellendus tempora ipsum sed? Accusamus, laboriosam praesentium. Molestias recusandae dolor perspiciatis incidunt nemo, enim suscipit consectetur?</p>
                            </div>
                        </div>
                        <div className={classes.homeBottomContainer}>
                            <MainButton type='button'><b>Know More</b></MainButton>
                        </div>
                    </div>

                    {width <= 700 ? "" :
                        <div className={classes.homeRightContainer}>
                            <div className={classes.imgWrapper}>
                                <img src={FounderImage} alt="homeImage1" className={classes.image} />
                            </div>
                        </div>}
                </div>
            </div>

            <div className={classes.teamContainer}>
                <div className={classes.teamHeaderContainer}>
                    <h4>THE SQUAD</h4>
                    <h1 style={{ color: '#5fdad5' }}>THE CORE TEAM</h1>
                </div>
                {width <= 700 ? "" :
                    <div className={classes.teamCardsContainer}>

                        <div className={classes.teamCardRow1}>
                            <Card image={DesignerImage} description={
                                <>
                                    <h3>Dhruvil Panchal</h3>
                                    <h4>-3D Generalist and product Designer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />


                            <Card image={MobileEngineerImg} description={
                                <>
                                    <h3>Jemis Goti</h3>
                                    <h4>-Mobile App And Machine Learning</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />


                            {width <= 950 ? "" :
                                <Card image={MLEngineerImg} description={
                                    <>
                                        <h3>Rinkesh Panwar</h3>
                                        <h4>-Machine Learning Engineer</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                        <br />
                                    </>
                                }
                                />
                            }
                        </div>


                        {width >= 950 ? "" :
                            <Card image={MLEngineerImg} description={
                                <>
                                    <h3>Rinkesh Panwar</h3>
                                    <h4>-Machine Learning Engineer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />
                        }

                        {width <= 700 ? "" :
                            <div className={classes.teamCardRow2}>

                                <Card image={EmbaddedSystem} description={
                                    <>
                                        <h3>Karun Dobariya</h3>
                                        <h4>-Embadded Systems</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                        <br />
                                    </>
                                }
                                />


                                <Card image={SalesManager} description={
                                    <>
                                        <h3>Mrunal Gayakwad</h3>
                                        <h4>-Area Sales Manager</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                        <br />
                                    </>
                                }
                                />

                            </div>
                        }
                    </div>
                }

                {width > 700 ? "" :
                    <div className={classes.teamResponsiveCard}>

                        <div className={classes.teamResponsiveRow1}>
                            <Card image={DesignerImage} description={
                                <>
                                    <h3>Dhruvil Panchal</h3>
                                    <h4>-3D Generalist and product Designer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />
                        </div>

                        <div className={classes.teamResponsiveRow2}>
                            <Card image={MobileEngineerImg} description={
                                <>
                                    <h3>Jemis Goti</h3>
                                    <h4>-Mobile App And Machine Learning</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />
                        </div>

                        <div className={classes.teamResponsiveRow3}>
                            <Card image={MLEngineerImg} description={
                                <>
                                    <h3>Rinkesh Panwar</h3>
                                    <h4>-Machine Learning Engineer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />
                        </div>

                        <div className={classes.teamResponsiveRow4}>
                            <Card image={EmbaddedSystem} description={
                                <>
                                    <h3>Karun Dobariya</h3>
                                    <h4>-Embadded Systems</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />
                        </div>

                        <div className={classes.teamResponsiveRow4}>
                            <Card image={SalesManager} description={
                                <>
                                    <h3>Mrunal Gayakwad</h3>
                                    <h4>-Area Sales Manager</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                    <br />
                                </>
                            }
                            />
                        </div>

                    </div>
                }
            </div>

            <div className={classes.ExtraTeamContainer}>
                <div className={classes.teamHeaderContainer}>
                    <h4>THE SQUAD</h4>
                    <h1 style={{ color: '#5fdad5' }}>THE ADVISORY TEAM</h1>
                </div>
                <div className={classes.teamCardsContainer}>
                    <div className={classes.ExtraTeamRow}>
                        <TeamCard image={GeneralSurgeonImg} description={
                            <>
                                <h3>Dr. Hasmukh Chhatbar</h3>
                                <h4>-Ganeral Surgeon</h4>
                                <br />
                                <p style={{ textAlign: "left" }}>Dr. Chhatbar is a General Surgeon bringing massive experience of 30 years at the table. His advice on audio reception has been invaluable.</p>
                            </>
                        } />

                        <TeamCard image={MBBS1Img} description={
                            <>
                                <h3>Dr. Rajeshri Desai</h3>
                                <h4>-MBBS</h4>
                                <br />
                                <p style={{ textAlign: "left" }}>Popularly known as Doctor with a Difference, Dr. Rajeshree’s insights on application of smart diagnostics in rural areas has been game changer for us.</p>
                            </>
                        } />
                    </div>
                    <div className={classes.ExtraTeamRow}>
                        <TeamCard image={MBBS2Img} description={
                            <>
                                <h3>Dr. Vishrant Amin</h3>
                                <h4>-MBBS</h4>
                                <br />
                                <p style={{ textAlign: "left" }}>A fellow doctor and USMLE aspirant, Dr. Vishrant has always been spot on with his inputs on practical application and usability of digital diagnostic devices.</p>
                            </>
                        } />
                        <TeamCard image={ToddlerImg} description={
                            <>
                                <h3>Kiaan Shah</h3>
                                <h4>-TODDLER</h4>
                                <br />
                                <p style={{ textAlign: "left" }}>Just like him, we too are learning to walk through the start-up ecosystem. His ability to get back up every time after falling has been our inspiration.</p>
                            </>
                        } />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs
