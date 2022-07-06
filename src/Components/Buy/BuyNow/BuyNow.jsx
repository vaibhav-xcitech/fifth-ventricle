import React, { useState } from "react";
import classes from "../BuyNow/BuyNow.module.scss";
import { MainButton } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../Home/WindowDimensions";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Select from "react-select";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation, Thumbs } from "swiper";

import chestoBlue from "../../../assets/Chesto_Blue.png";
import chestoGrey from "../../../assets/Chesto_Gray.png";
import chestoWhite from "../../../assets/Chesto_White.png";

const BuyNow = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const [thumbsSwiper, setThumbsSwiper] = useState();

  const [selectedOption, setSelectedOption] = useState();

  const [counter, setCounter] = useState(1);

  const selectedObject = selectedOption;

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const colorStyles = {
    option: (styles, state) => {
      return {
        ...styles,
        borderBottom: "1px solid gray",
        color: state.isSelected ? "black" : "blue",
        backgroundColor: state.data.color
      };
    },
  };

  const menu = [
    {
      id: 1,
      label: "Azure Blue",
      image: chestoBlue,
      slug: "azure-blue",
      color: "#fff"
    },
    {
      id: 2,
      label: "Deep Spay Gray",
      image: chestoGrey,
      color: "#fff"
    },
    {
      id: 3,
      label: "Elegent White",
      image: chestoWhite,
      slug: "elegent-white",
      color: "#fff"
    },
  ];

  // const selectedOptionTemp = [...selectedOption];
  // console.log(selectedOption);
  // console.log(!Array.isArray(selectedOption));
  // console.log(selectedOptionTemp);

  return (
    <div className={classes.BuyNowContainer}>
      <div className={classes.chestoBuyContainer}>
        {width < 700 ? (
          ""
        ) : (
          <div className={classes.chestoImgSwiper}>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation, Thumbs]}
              grabCursor={true}
              className={classes.myswiper}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {!selectedObject ? (
                <SwiperSlide>
                  <img
                    src="https://www.fifthventricle.in/wp-content/uploads/2022/06/Chesto-Colors.png"
                    alt="hello"
                    width="500px"
                    height="300px"
                  />
                </SwiperSlide>
              ) : (
                <SwiperSlide>
                  <img
                    src={selectedObject.image}
                    alt="chestoImage"
                    width="300px"
                    height="300px"
                  />
                </SwiperSlide>
              )}
            </Swiper>

            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              modules={[Navigation, Thumbs]}
              className={classes.myswiperThumbs}
              onSwiper={setThumbsSwiper}
            >
              {menu.map((item, index) => (
                <SwiperSlide>
                  <div className={classes.myswiperThumbsImg}>
                    <img
                      src={item.image}
                      alt="chestoImage"
                      width="50px"
                      height="50px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <div className={classes.contentContainer}>
          <div className={classes.buyHeaderContainer}>
            <h1 style={{ color: "#ffe500" }}>Chesto</h1>
            <h4>Price : &#x20b9; 9,999 - &#x20b9; 11,490</h4>
            {width > 700 ? (
              ""
            ) : (
              <div className={classes.chestoImgSwiper}>
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  modules={[Navigation, Thumbs]}
                  grabCursor={true}
                  className={classes.myswiper}
                  // thumbs={{ swiper: thumbsSwiper }}
                >
                  {menu.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={item.image}
                        alt="chestoImage"
                        width="300px"
                        height="300px"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={3}
                  modules={[Navigation, Thumbs]}
                  className={classes.myswiperThumbs}
                  // thumbs={{
                  //   swiper:
                  //     thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                  // }}
                >
                  {menu.map((item, index) => (
                    <SwiperSlide>
                      <div key={index} className={classes.myswiperThumbsImg}>
                        <img
                          src={item.image}
                          alt="chestoImage"
                          width="50px"
                          height="50px"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
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
              <Select
                options={menu}
                styles={colorStyles}
                onChange={setSelectedOption}
              />
              <MainButton
                style={{ padding: "5px 15px", borderRadius: "15px" }}
                onClick={() => navigate("/chestoBuy/BuyNow/addtocart")}
              >
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
