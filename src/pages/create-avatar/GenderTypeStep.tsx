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

type Props = {
  nextStep: (e: any) => void;
};

export function GenderTypeStep({ nextStep }: Props): ReactElement {
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

  const [activeGender, setActiveGender] = useState(""); // Initial active button
  useEffect(() => {
    setGender(activeGender);
  }, [activeGender]);

  useEffect(() => {
    if (gender) {
      nextStep("");
    }
  }, [gender]);

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
            <h2>before start, please choose a</h2>
            <h1>gender type</h1>
            <p className="para">
              The information helps improve faicial similarity
            </p>
            <div className="bottom-line mt-8"></div>
          </div>
          <div className="gender-types">
            <GenderButtonStyled
              beforeOpacity={`
              ${activeGender === "male" ? "1" : "0"}
            `}
              width="408px"
              height="87px"
              onClick={() => setActiveGender("male")}
            >
              <img
                className="w-[22px] h-[34px] object-contain sm:block"
                src={Male}
                alt=""
              />
              Male
            </GenderButtonStyled>
            <GenderButtonStyled
              beforeOpacity={`
              ${activeGender === "female" ? "1" : "0"}
            `}
              width="408px"
              height="87px"
              onClick={() => setActiveGender("female")}
            >
              <img
                className="w-[22px] h-[34px] object-contain hidden sm:block"
                src={Female}
                alt=""
              />
              Female
            </GenderButtonStyled>
            <GenderButtonStyled
              beforeOpacity={`
    ${activeGender === "other" ? "1" : "0"}
  `}
              width="408px"
              height="87px"
              onClick={() => setActiveGender("other")}
            >
              <img
                className="w-[22px] h-[34px] object-contain sm:block"
                src={Others}
                alt=""
              />
              Others
            </GenderButtonStyled>
          </div>
        </div>
      </div>
    </GenderTypeBox>
  );
}
