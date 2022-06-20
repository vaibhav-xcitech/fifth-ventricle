import React from 'react';
import classes from "./AboutUs.module.scss";
import { MainButton } from '../../UI/Button/Button';
import heroImage from "../../assets/svgviewer-output (19).svg";
import OfficeImage from "../../assets/svgviewer-output (18).svg";
import FounderImage from "../../assets/svgviewer-output (9).svg";
import DesignerImage from "../../assets/svgviewer-output (11).svg";
import Card from '../../UI/Card/Card';
import useWindowDimensions from '../Home/WindowDimensions';

const AboutUs = () => {

    const { width } = useWindowDimensions();
    return (
        <div className={classes.aboutUsContainer}>
            <div className={classes.heroContainer}>
                <div className={classes.heroTextContainer}>
                    <span className={classes.neomorphismText}>Fifth Ventricle</span>
                </div>
                <div className={classes.heroImageContainer}>
                    <img src={heroImage} alt="HeroImage" />
                </div>
            </div>


            {/* <Card image={DhruvilImage} alter={"dhruvil"} description={
                <>
                    <h3>Dhruvil Panchal</h3>
                    <h4>-3D Generalist and product Designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                    <br />

                </>
            } /> */}

            <div className={classes.homeThirdContainer}>
                <div className={classes.MidleContainer}>

                    {width <= 700 ? "" :
                        <div className={classes.homeRightContainer}>
                            <div className={classes.imgWrapper}>
                                <img src={OfficeImage} alt="homeImage1" className={classes.image} />
                            </div>
                        </div>}

                    <div className={classes.LeftMidleContainer}>
                        <div className={classes.LeftTopHeader}>
                            <h4>THE BRIEF</h4>
                            <h1 style={{ color: '#5fdad5' }}>OUR STORY</h1>
                        </div>

                        {width >= 700 ? "" :
                            <div className={classes.homeRightContainer}>
                                <div className={classes.imgWrapper}>
                                    <img src={OfficeImage} alt="homeImage1" className={classes.image} style={{ maxHeight: "450px" }} />
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
                </div>
            </div>



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
                                    <img src={FounderImage} alt="homeImage1" className={classes.image} style={{ maxHeight: "450px" }} />
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


                        <Card image={DesignerImage} description={
                            <>
                                <h3>Jemis Goti</h3>
                                <h4>-Mobile App And Machine Learning</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                <br />
                            </>
                        }
                        />


                        <Card image={DesignerImage} description={
                            <>
                                <h3>Rinkesh Panwar</h3>
                                <h4>-Machine Learning Engineer</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                <br />
                            </>
                        }
                        />
                    </div>

                    <div className={classes.teamCardRow2}>

                        <Card image={DesignerImage} description={
                            <>
                                <h3>Karun Dobariya</h3>
                                <h4>-Embadded Systems</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo aliquid molestiae vero odit, quisquam iusto est quia laudantium omnis fuga. Quo soluta eligendi iure dolore totam voluptatem libero repellendus?</p>
                                <br />
                            </>
                        }
                        />


                        <Card image={DesignerImage} description={
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
            </div>



        </div>
    )
}

export default AboutUs
