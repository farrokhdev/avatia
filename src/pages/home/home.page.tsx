import React, { ReactElement, useEffect } from "react";
import { Page } from "../../components/structure";

import BackgroundImage from "../../assets/images/image.png";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Footer } from "../../components/structure/footer";
import {
  Problems,
  Ready,
  Technologies,
  TopSection,
  TopSectionMobile,
  WhatIsAvatia,
} from "./Home.page.style";
import { HeroSlider } from "../../components/HomePageComps/HeroSlider";
import { MobileHeroSlider } from "../../components/HomePageComps/MobileHeroSlider";
import {
  ButtonFourStyled,
  ButtonTwoStyled,
} from "../../components/syledComponents/Buttons.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ThreeDModel from "../../components/custom/ThreeModel";
import ThreeDAvatarModel from "../../components/custom/ThreeDAvatarModel";
import ModelViewer from "../../components/generate-avatar/model-viewer";
import { ProblemsSwiper } from "../../components/HomePageComps/ProblemsSwiper";
// import { SampleAvatarCanvas } from "../../components/SampleAvatarCanvas";
// Import Swiper styles

const PrevArrow: React.FC<{ onClick?: undefined }> = ({ onClick }) => {
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      {/* Your custom Previous arrow icon or text here */}
      <svg /* Your SVG or icon for previous arrow */ />
    </button>
  );
};

const NextArrow: React.FC<{ onClick?: undefined }> = ({ onClick }) => {
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      {/* Your custom Next arrow icon or text here */}
      <svg /* Your SVG or icon for next arrow */ />
    </button>
  );
};

export function HomePage(): ReactElement {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Page title="Avatia">
      <TopSection>
        <HeroSlider />
      </TopSection>
      <TopSectionMobile>
        <MobileHeroSlider />
      </TopSectionMobile>

      <WhatIsAvatia>
        <h2>What Is Avatia?</h2>

        <p className="para2">
          Avatia is a cutting-edge platform for precision medicine that uses a
          person's customized avatar as a digital twin to provide a thorough and
          unique view of their current health status and past medical history.
          Avatia's digital health twins are virtual representations of a
          person's health that are created by combining data from many sources
          and applying sophisticated algorithms to provide a real-time
          simulation of a person's health state. Avatia seeks to provide clients
          with valuable information, personalized treatment regimens, and the
          ability to track illness progression, aging, and overall health.
        </p>

        <video src="./Avatia.mp4" controls />

        <ButtonTwoStyled>
          <Link to={"create-avatar"}>
            <div className="back-overlay"></div>
            <div className="text">
              <p className="para3">Get Started</p>
              <div className={"icon"}>
                <ArrowRight />
              </div>
            </div>
          </Link>
        </ButtonTwoStyled>
      </WhatIsAvatia>

      <Technologies>
        <h2>Avatia’s Technologies</h2>

        <div className="box">
          <div className="info">
            <h5>01</h5>
            <h3>3D Avatar</h3>
            <p className="para2">
              It is a realistic portrayal of the user's appearance, including
              bone structure, muscular system, and nerve system, as well as
              facial emotions, movements, and postures.{" "}
            </p>
          </div>

          <div className="img-box">
            <img
              src={require("../../assets/images/box-1.png")}
              alt="Avatia 3D Avatar"
            />
          </div>
        </div>

        <div className="box">
          <div className="info">
            <h5>02</h5>
            <h3>Personal Biodata​</h3>
            <p>
              Biodata can be collected using wearable devices and clinical
              equipment. Wearables measure biodata in real-world contexts using
              technologies including electrophysiology, microfluidics, and
              spectroscopy.
            </p>
          </div>
          <div className="img-box">
            <img
              src={require("../../assets/images/box-2.png")}
              alt="Avatia Personal Biodata​"
            />
          </div>
        </div>

        <div className="box" style={{ marginBottom: 0 }}>
          <div className="info">
            <h5>03</h5>
            <h3>Biodata Security</h3>
            <p>
              Standard frameworks for storing biodata on a decentralized
              security platform are critical to improving precision medicine and
              facilitating research efforts.
            </p>
          </div>
          <div className="img-box">
            <img
              src={require("../../assets/images/box-3.png")}
              alt="Avatia Biodata Security"
            />
          </div>
        </div>
      </Technologies>

      <Ready>
        <h2>Ready To Get Started?</h2>

        <p className="para">
          Avatia is a cutting-edge platform for precision medicine that uses a
          person’s customized avatar as a digital twin
        </p>
        <ButtonTwoStyled>
          <Link to={"create-avatar"}>
            <div className="back-overlay"></div>
            <div className="text">
              <p className="para3">Create Avatar</p>
              <div className={"icon"}>
                <ArrowRight />
              </div>
            </div>
          </Link>
        </ButtonTwoStyled>
      </Ready>

      <Problems>
        <h2>Problems Solved By Avatia</h2>

        {/* <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 2.2,
            gap: "30px",
            arrows: false,
            autoHeight: true,
            breakpoints: {
              1200: {
                perPage: 1.8,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="box">
              <img
                src={require("../../assets/images/card-2.png")}
                alt="Avatia Lack of Personalization in Healthcare"
              />

              <h4>Lack of Personalization in Healthcare</h4>

              <p className="para3">
                {` The lack of personalization in healthcare can result in
                suboptimal outcomes for patients. Avatia’s platform offers
                personalized healthcare solutions by utilizing machine learning
                algorithms to analyze health data and create tailored treatment
                plans based on a patient’s unique needs and preferences. Wearia
                wearables with advanced bio-sensing capabilities are used to
                collect biometric data and provide tailored stimulations,
                leading to better health outcomes and increased satisfaction for
                patients.`.slice(0, 200)}
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="box">
              <img
                src={require("../../assets/images/card-1.png")}
                alt="Avatia Lack of Patient Engagement and Empowerment"
              />

              <h4>Lack of Patient Engagement and Empowerment</h4>

              <p className="para3">
                {`Avatia addresses the issue of low patient engagement in
                healthcare by empowering patients and giving them access to
                their health data. The platform provides real-time updates on
                health metrics and personalized recommendations, allowing
                patients to track their progress and take an active role in
                their health and wellness. This can result in improved health
                outcomes, increased patient engagement, and reduced healthcare
                costs.`.slice(0, 200)}
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="box">
              <img
                src={require("../../assets/images/card-3.png")}
                alt="Avatia Inefficient and Fragmented Health Data Collection and sharing"
              />

              <h4>
                Inefficient and Fragmented Health Data Collection and sharing
              </h4>

              <p className="para3">
                {` Health data collection is frequently dispersed across various
                sources and systems, making it difficult for healthcare
                practitioners to get a patient's comprehensive medical history.
                Avatia provides a uniform platform for collecting, storing, and
                sharing patient data in real time. The platform is compatible
                with various EHR systems, enabling smooth data interchange and
                cooperation among healthcare practitioners, resulting in more
                informed treatment decisions.`.slice(0, 200)}
              </p>
            </div>
          </SplideSlide>
        </Splide> */}

        <ProblemsSwiper />
      </Problems>

      <Footer />
    </Page>
  );
}
