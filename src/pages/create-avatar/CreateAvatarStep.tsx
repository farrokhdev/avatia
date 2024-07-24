import React, { ReactElement, useEffect } from "react";
import { Page } from "../../components/structure";
import styled from "styled-components";
import { ReactComponent as CheckCircle } from "../../assets/svgs/check-circle.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { Link } from "react-router-dom";
import { CButton } from "../../components/mui";
import Textra from "react-textra";
import { Box } from "../../components/syledComponents/create.page.style";
import { ButtonSixStyled } from "../../components/syledComponents/Buttons.styled";

type Props = {
  nextStep: (e: any) => void;
};

export function CreateAvatarStep({ nextStep }: Props): ReactElement {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box width={"100%"}>
      <div className={"create-container"}>
        <div className="image-part">
          <img src={require("../../assets/images/avatar2.png")} />
        </div>
        <div className={"right"}>
          <h1 className="capitalize">
            create your 3d avatar twin{" "}
            <Textra
              effect="downTop"
              className={"text-color"}
              data={["super fast", "realistic", " morphable"]}
            />
          </h1>

          <div className={"check-list"}>
            <ul>
              <li>
                <CheckCircle />{" "}
                <span className="heading4">no payment required</span>
              </li>
              <li>
                <CheckCircle />{" "}
                <span className="heading4">no data collection</span>
              </li>
              <li>
                <CheckCircle />{" "}
                <span className="heading4">complete customization</span>
              </li>
            </ul>
          </div>

          {/* <Link to={"/create-avatar/generate"} className={"p-right"}>
              <CButton
                startIconSvg={<ArrowRight />}
                background={"blue90"}
                size={"l"}
              >
                <span className={"b-span"}>Get Started</span>
              </CButton>
            </Link> */}
          <ButtonSixStyled className="start-button">
            <Link
              to={"/create-avatar"}
              className={"p-right"}
              onClick={nextStep}
            >
              <p>Get Started</p>
              <div className={"icon"}>
                <ArrowRight />
              </div>
            </Link>
          </ButtonSixStyled>
        </div>
      </div>
    </Box>
  );
}
