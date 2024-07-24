import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type Props = {};

interface NavigationButtonProps {
  onClick: () => void;
}

const CustomPrevButton = ({ onClick }: NavigationButtonProps) => (
  <button className="custom-prev-button" onClick={onClick}>
    {/* Your custom prev button icon or text */}
    <i className="fas fa-chevron-left"></i>
  </button>
);

const CustomNextButton = ({ onClick }: NavigationButtonProps) => (
  <button className="custom-next-button" onClick={onClick}>
    {/* Your custom next button icon or text */}
    <i className="fas fa-chevron-right"></i>
  </button>
);

export const ProblemsSwiper = (props: Props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="problems-swiper w-full"
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        // Responsive behavior for mobile devices
        1200: {
          slidesPerView: 2.5, // Show only one slide on screens smaller than 640px
        },
        640: {
          slidesPerView: 2, // Show only one slide on screens smaller than 640px
        },
      }}
    >
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="box">
          <img
            src={require("../../assets/images/card-3.png")}
            alt="Avatia Inefficient and Fragmented Health Data Collection and sharing"
          />

          <h4>Inefficient and Fragmented Health Data Collection and sharing</h4>

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
      </SwiperSlide>
    </Swiper>
  );
};
