import React from "react";
import classes from "../FuturePlanContainer/FuturePlanContainer.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import chestoBlue from "../../../assets/Chesto_Blue.png";
import chestoGrey from "../../../assets/Chesto_Gray.png";
import chestoWhite from "../../../assets/Chesto_White.png";

const FuturePlanContainer = () => {
  return (
    <>
      <div className={classes.homeFuturePlanContainer}>
        <div className={classes.futurePlanContainer}>
          <div className={classes.futurePlanHeader}>
            <h4>THE FUTURE</h4>
            <h2 style={{ color: "#5fdad5", marginTop: 0 }}>
              UPCOMMING PRODUCTS
            </h2>
          </div>

          <div className={classes.futureProducts}>
            <Swiper
              cssMode={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className={classes.myswiper}
              style={{
                "--swiper-navigation-color": "#4D4E51",
                "--swiper-navigation-size": "25px",
                "--swiper-pagination-color": "#5FDAD5",
              }}
            >
              <SwiperSlide>
                <img
                  src={chestoBlue}
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
        </div>
      </div>
    </>
  );
};

export default FuturePlanContainer;
