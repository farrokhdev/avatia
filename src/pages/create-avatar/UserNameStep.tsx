import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Page } from "../../components/structure";
import styled from "styled-components";
import { ReactComponent as CheckCircle } from "../../assets/svgs/check-circle.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrow-left.svg";
import Male from "../../assets/svgs/male.svg";
import Female from "../../assets/svgs/female.svg";
import Others from "../../assets/svgs/others.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ButtonSixStyled,
  GenderButtonStyled,
} from "../../components/syledComponents/Buttons.styled";
import { GenderTypeBox } from "../../components/syledComponents/gender-type.style";
import TopBg from "../../assets/images/gender-right-light-top.svg";
import BottomBg from "../../assets/images/gender-right-light-bottom.svg";
import {
  GlobalMainContext,
  useGlobalMainContext,
} from "../../contexts/globalMainContext";
import { useGlobalGenerateContext } from "../../contexts/generateContext";
import GenerateForm from "../../components/custom/GenerateForm";
import { generateRandomUsername } from "../../utils/generateUsername";

type Props = {
  nextStep: (e: any) => void;
};

export function UserNameStep({ nextStep }: Props): ReactElement {
  //   const { client, setClient } = useContext(GlobalMainContext); // Assuming your context is named 'GlobalContext'

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const {
    username,
    setUsername,
    usernameError,
    setUsernameError,
    gender,
    setGender,
    genderError,
    setGenderError,
  } = useGlobalGenerateContext();

  useEffect(() => {
    if (username) {
      nextStep("");
    }
  }, [username]);

  return (
    <GenderTypeBox>
      <div className={"gender-container"}>
        <div className="image-part">
          <img src={require("../../assets/images/gender-type.png")} />
        </div>
        <div className={"right"}>
          {/*absolute backgrounds  */}
          <div className="top-bg">
            <img src={TopBg} alt="" />
          </div>
          <div className="bottom-bg">
            <img src={BottomBg} alt="" />
          </div>
          <div className="w-full max-w-[576px] mx-auto flex flex-col items-center capitalize">
            <h2>now, please create an</h2>
            <h1>avatar name</h1>
            <p className="para">
              A name helps us to establish a unique identity for you
            </p>
            <div className="bottom-line mt-8"></div>
          </div>
          {/* form  */}
          <GenerateForm
            username={username}
            setUsername={setUsername}
            usernameError={usernameError}
            setUsernameError={setUsernameError}
          />
        </div>
      </div>
    </GenderTypeBox>
  );
}
