import React from "react";
import AvatarMobile from "../../assets/images/avatar-mobile.png";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { ButtonThreeStyled } from "../syledComponents/Buttons.styled";

type Props = {};

export const MobileHeroSlider = (props: Props) => {
  return (
    <div className="slide">
      <img src={AvatarMobile} alt="" />
      <div className="text-content">
        <h1>Your Personal 3D Avatar, As A Digital Health Twin</h1>
        <p>
          Avatia’s mission is to qualify individuals to take control of their
          health and well-being by providing a comprehensive, personalized
          digital health twin.
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
  );
};
