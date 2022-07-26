import React, { useState, useEffect, useContext } from "react";
import classes from "../BuyNow/BuyNow.module.scss";
import { MainButton } from "../../../UI/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../Home/WindowDimensions";
import CartContext from "../../../ContextAPI/Context";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Select from "react-select";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import { Thumbs } from "swiper";

import chestoBlue from "../../../assets/Chesto_Blue.png";
import chestoGrey from "../../../assets/Chesto_Gray.png";
import chestoWhite from "../../../assets/Chesto_White.png";

const BuyNow = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const cart = useContext(CartContext);

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [selectedOption, setSelectedOption] = useState();
  const [addToCart, setAddToCart] = useState(false);

  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    if (counter < 100) {
      setCounter((counte) => counte + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((counte) => counte - 1);
    }
  };

  const colorStyles = {
    option: (styles, state) => {
      return {
        ...styles,
        borderBottom: "1px solid gray",
        color: state.isSelected ? "black" : "blue",
        backgroundColor: state.data.color,
      };
    },
  };

  console.log(selectedOption);
  console.log(cart);

  const handleAddToCart = () => {
    if (!selectedOption === false) {
      const cartData = { selectedOption, counter };
      cart.AddToCart(cartData);
      // console.log(cart);
      navigate("/chestoBuy/BuyNow/addtocart");
      console.log(cartData);
    } else {
      setAddToCart(true);
    }
  };

  const menu = [
    {
      id: 1,
      label: "Azure Blue",
      image: chestoBlue,
      slug: "Chesto (Azure-Blue)",
      color: "#fff",
      actualPrice: 14999,
      discountPrice: 9999,
    },
    {
      id: 2,
      label: "Deep Spay Gray",
      image: chestoGrey,
      slug: "Chesto (Deep-Spay-Gray)",
      color: "#fff",
      actualPrice: 14999,
      discountPrice: 10499,
    },
    {
      id: 3,
      label: "Elegent White",
      image: chestoWhite,
      slug: "Chesto (Elegent-White)",
      color: "#fff",
      actualPrice: 14999,
      discountPrice: 11499,
    },
  ];

  return (
    <div className={classes.BuyNowContainer}>
      <div className={classes.chestoBuyContainer}>
        {width < 700 ? (
          ""
        ) : (
          <div className={classes.chestoImgSwiper}>
            <Swiper
              loop={true}
              cssMode={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={10}
              navigation={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              grabCursor={true}
              className={classes.myswiper}
              style={{
                "--swiper-navigation-color": "#4D4E51",
                "--swiper-navigation-size": "25px",
                "--swiper-pagination-color": "#5FDAD5",
              }}
              // thumbs={{ swiper: thumbsSwiper }}
            >
              {!selectedOption ? (
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
                    src={selectedOption.image}
                    alt="chestoImage"
                    width="500px"
                    height="300px"
                  />
                </SwiperSlide>
              )}
            </Swiper>

            {/* <Swiper
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
            </Swiper> */}
          </div>
        )}
        <div className={classes.contentContainer}>
          <div className={classes.buyHeaderContainer}>
            <h1 style={{ color: "#ffe500" }}>Chesto</h1>
            <h4>Price : &#x20b9; 9,999 - &#x20b9; 14,999</h4>
            {width > 700 ? (
              ""
            ) : (
              <div className={classes.chestoImgSwiper}>
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  modules={[Navigation]}
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

                {/* <Swiper
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
                </Swiper> */}
              </div>
            )}
            <p>
              Replace your outdated traditional stethoscope with India’s own
              Truly Tubeless Digital Smart Stethoscope with world of extra
              features.
            </p>

            <h4 style={{ margin: "10px 0px" }}>Quntity :</h4>
            <div className={classes.counterContainer}>
              <MainButton style={{ marginTop: 0 }} onClick={handleDecrement}>
                -
              </MainButton>
              <p>{counter}</p>
              <MainButton style={{ marginTop: 0 }} onClick={handleIncrement}>
                +
              </MainButton>
            </div>

            <form className={classes.colorCartContainer}>
              <h4>Colors :</h4>
              <div className={classes.selectDiv}>
                <div style={{ width: "50%" }}>
                  <Select
                    placeholder="Select Colors...."
                    options={menu}
                    styles={colorStyles}
                    onChange={setSelectedOption}
                    name="select"
                    id="select"
                    required
                  />
                </div>
                {/* <MainButton
                  style={{
                    margin: 0,
                    padding: "2px 15px",
                    borderRadius: "15px",
                    fontSize: "17px",
                  }}
                >
                  Add Cart
                </MainButton> */}
              </div>
              {addToCart === true && !selectedOption === true && (
                <div>
                  <span style={{ color: "red", marginTop: "10px" }}>
                    Please Select Chesto Color
                  </span>
                </div>
              )}

              {selectedOption && (
                <h4 style={{ margin: "25px 0px" }}>
                  Discount Price:- &nbsp;
                  <del style={{ marginRight: "10px", opacity: 0.5 }}>
                    &#x20b9; 14,999
                  </del>
                  &#x20b9; {selectedOption.discountPrice}
                </h4>
              )}
              <MainButton
                style={{
                  padding: "5px 15px",
                  borderRadius: "15px",
                  fontSize: "17px",
                }}
                onClick={handleAddToCart}
                type={"button"}
              >
                Add To Cart
              </MainButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
