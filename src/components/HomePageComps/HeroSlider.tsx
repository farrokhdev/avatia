import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundImage from "../../assets/images/image.png";
import TextBackGround from "../../assets/images/text-background.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ButtonThreeStyled } from "../syledComponents/Buttons.styled";
import HeroBack from "../../assets/images/hero-back.jpg";
import HeroBack2 from "../../assets/images/hero-back2.png";
import HeroBack3 from "../../assets/images/hero-back3.png";

export interface IAppProps {}

export function HeroSlider(props: IAppProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination, EffectFade, Autoplay]}
      className="mySwiper"
      effect={"fade"}
      autoplay={true}
    >
      <SwiperSlide>
        <div className={"slide"}>
          <div className="hero-back">
            <img className="w-full h-full object-cover" src={HeroBack} alt="" />
          </div>
          <img
            className={"avatar"}
            src={require("../../assets/images/avatar.png")}
            alt="avatia"
          />
          <div
            className={"text"}
            // style={{ backgroundImage: `url(${TextBackGround})` }}
          >
            <h1>Your Personal 3D Avatar, As A Digital Health Twin</h1>
            <p>
              Avatia’s mission is to qualify individuals to take control of
              their health and well-being by providing a comprehensive,
              personalized digital health twin.
            </p>

            <ButtonThreeStyled>
              <Link to={"create-avatar"}>
                <div className="icon-back"></div>
                <p>Get Started</p>
                <div className={"icon"}>
                  <ArrowRight />
                </div>
              </Link>
            </ButtonThreeStyled>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"slide"}>
          <div className="hero-back">
            <img
              className="w-full h-full object-cover"
              src={HeroBack2}
              alt=""
            />
          </div>
          <img
            className={"avatar"}
            src={require("../../assets/images/hero-front2.png")}
            alt="avatia"
          />
          <div
            className={"text"}
            // style={{ backgroundImage: `url(${TextBackGround})` }}
          >
            <h1>Apply your Digital Twin in TeleMedicine as Medical Records</h1>
            <p>
              Send your personal digital twin to your doctor in telemedicine
              sessions instead of meeting the doctor in person.
            </p>

            <ButtonThreeStyled>
              <Link to={"create-avatar"}>
                <div className="icon-back"></div>
                <p>Get Started</p>
                <div className={"icon"}>
                  <ArrowRight />
                </div>
              </Link>
            </ButtonThreeStyled>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"slide"}>
          <div className="hero-back">
            <img
              className="w-full h-full object-cover"
              src={HeroBack3}
              alt=""
            />
          </div>
          <img
            className={"avatar"}
            src={require("../../assets/images/hero-front3.png")}
            alt="avatia"
          />
          <div
            className={"text"}
            // style={{ backgroundImage: `url(${TextBackGround})` }}
          >
            <h1>Earn Token by Sharing Your 3D Digital Twin Anonymously</h1>
            <p>
              Share your digital twin with startups and research projects in the
              field of precision medicine without compromising your privacy and
              earn tokens.
            </p>

            <ButtonThreeStyled>
              <Link to={"create-avatar"}>
                <div className="icon-back"></div>
                <p>Get Started</p>
                <div className={"icon"}>
                  <ArrowRight />
                </div>
              </Link>
            </ButtonThreeStyled>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
