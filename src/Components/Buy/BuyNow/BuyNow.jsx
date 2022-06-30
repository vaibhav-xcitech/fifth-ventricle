import React, { useState } from "react";
import classes from "../BuyNow/BuyNow.module.scss";
import { MainButton } from "../../../UI/Button/Button";
import menu from "../../../assets/db"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import chestoBlue from "../../../assets/Chesto_Blue.png";
import chestoGrey from "../../../assets/Chesto_Gray.png";
import chestoWhite from "../../../assets/Chesto_White.png";

const BuyNow = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(1);

  // Function is called everytime increment button is clicked
  const handleIncrement = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleDecrement = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

//   const menu = ['Slide 1', 'Slide 2', 'Slide 3']

  return (
    <div className={classes.BuyNowContainer}>
      <div className={classes.chestoBuyContainer}>
        <div className={classes.chestoImgSwiper}>
          <Swiper
            cssMode={true}
            pagination={{
              clickable: true,
              renderBullet: function (index) {
                console.log(menu[index].image);
                return menu[index].name
              },
            }}
            navigation={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={classes.myswiper}
          >
            <SwiperSlide>
              <img
                src={  `${process.env.PUBLIC_URL}/src/assets/${menu[0].image}` }
                alt="chesto_blue"
                width="250px"
                height="250px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={chestoGrey}
                alt="chesto_Grey"
                width="250px"
                height="250px"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={chestoWhite}
                alt="chesto_white"
                width="250px"
                height="250px"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.buyHeaderContainer}>
            <h1>Chesto</h1>
            <h4>Price : &#x20b9; 9,999 - &#x20b9; 11,490</h4>
            <p>
              Replace your outdated traditional stethoscope with India’s own
              Truly Tubeless Digital Smart Stethoscope with world of extra
              features.
            </p>

            <div className={classes.counterContainer}>
              <MainButton style={{ marginTop: 0 }} onClick={handleDecrement}>
                -
              </MainButton>
              <p>{counter}</p>
              <MainButton style={{ marginTop: 0 }} onClick={handleIncrement}>
                +
              </MainButton>
            </div>

            <div className={classes.colorCartContainer}>
              <h4>Colors :</h4>
              <Dropdown
                placeholder="Choose an Option"
                options={["Azure Blue", "Deep Spay Gray", "Elegent White"]}
              />
              <MainButton Style={{ padding: "5px 10px" }}>
                Add To Cart
              </MainButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
