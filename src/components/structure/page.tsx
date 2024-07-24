import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../../assets/svgs/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { MobileNav, PageStyle } from "../syledComponents/Header.styled";
import {
  ButtonOneStyled,
  ButtonTwoStyled,
} from "../syledComponents/Buttons.styled";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import MenuIcon from "../../assets/images/icons/menu.svg";
import path from "path";
import { useGlobalMainContext } from "../../contexts/globalMainContext";
import { SignUp } from "../custom/SignUp";
import ThreeDModel from "../custom/ThreeModel";
import { useGlobalGenerateContext } from "../../contexts/generateContext";
import { CustomTilt } from "../custom/CustomTilt";

interface Props {
  title: string;
  children: ReactNode;
}

export function Page(props: Props): ReactElement {
  const { title, children } = props;
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "";
    };
  }, [title]);

  const {
    menuTrigger,
    triggerMobileNavbar,
    signupTrigger,
    setSignupTrigger,
  } = useGlobalMainContext();
  const { setActiveStep, emptyAll } = useGlobalGenerateContext();

  const { pathname } = useLocation();
  const pathList = pathname.split("/").filter((notEmpty) => notEmpty);

  const selectStep = (
    active: "step-1" | "step-2" | "step-3" | "step-4" | "step-5" | "step-6"
  ) => {
    setActiveStep(active);
  };

  return (
    <PageStyle>
      {/* google sign in and sign up  component */}
      <SignUp
        opacity={signupTrigger && true}
        visible={signupTrigger && true}
        pointer={signupTrigger && true}
      />
      {/* mobile nav menu  */}
      <MobileNav
        display={menuTrigger ? "translateY(0)" : "translateY(-100%)"}
        opacity={menuTrigger ? "1" : "0"}
      >
        <div className="wrapp py-10 px-8">
          {/* close  */}
          <div className="close-but" onClick={triggerMobileNavbar}>
            <IconButton sx={{ color: "#000" }}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className={"links mt-8"}>
            <ButtonOneStyled>
              <Link to={"/"} className={"para3"} onClick={triggerMobileNavbar}>
                Home
              </Link>
            </ButtonOneStyled>
            <ButtonOneStyled className="type-one">
              {pathList[0] === "create-avatar" ? (
                <Link
                  to={"/generated-avatar"}
                  className={"para3"}
                  onClick={triggerMobileNavbar}
                  // onClick={() => setSignupTrigger(!signupTrigger)}
                >
                  View my genrated avatar
                </Link>
              ) : (
                <Link
                  to={"/litepaper"}
                  className={"para3"}
                  onClick={triggerMobileNavbar}
                >
                  Litepaper
                </Link>
              )}
            </ButtonOneStyled>
            {pathList[0] === "create-avatar" ? (
              <ButtonOneStyled>
                <Link
                  to={"/create-avatar"}
                  className={"para3"}
                  // onClick={triggerMobileNavbar}
                  onClick={() => setSignupTrigger(!signupTrigger)}
                >
                  Sign Up
                </Link>
              </ButtonOneStyled>
            ) : (
              <ButtonOneStyled>
                <Link
                  to={"/create-avatar"}
                  className={"para3"}
                  onClick={triggerMobileNavbar}
                >
                  Create Avatar
                </Link>
              </ButtonOneStyled>
            )}
          </div>
        </div>
      </MobileNav>

      <nav className={`menu padding-main `}>
        <div className={"wrapper "}>
          {/* menu icon  */}
          <div
            className="menu-icon cursor-pointer"
            onClick={triggerMobileNavbar}
          >
            <img src={MenuIcon} alt="" />
          </div>
          <Link to={"/"} className={"logo"} onClick={() => emptyAll()}>
            <img src={Logo} alt="" />
          </Link>

          <div className={"links"}>
            <ButtonOneStyled className="type-one" onClick={() => emptyAll()}>
              {pathList[0] === "create-avatar" ? (
                <Link to={"/litepaper"} className={"para3"}>
                  Litepaper
                </Link>
              ) : (
                // <div
                //   // to={"/generated-avatar"}
                //   className={"para3"}
                //   onClick={() => setSignupTrigger(!signupTrigger)}
                // >
                //   View my genrated avatar
                // </div>
                <Link to={"/litepaper"} className={"para3"}>
                  Litepaper
                </Link>
              )}
            </ButtonOneStyled>
            {pathList[0] === "create-avatar" ? (
              <ButtonTwoStyled onClick={() => emptyAll()}>
                <Link
                  to={"/create-avatar"}
                  className={"para3"}
                  // onClick={triggerMobileNavbar}
                  onClick={() => setSignupTrigger(!signupTrigger)}
                >
                  Sign Up
                </Link>
              </ButtonTwoStyled>
            ) : (
              <ButtonTwoStyled onClick={() => emptyAll()}>
                <Link to={"/create-avatar"} className={"para3"}>
                  <div className="back-overlay"></div>
                  <div className="text">Create Avatar</div>
                </Link>
              </ButtonTwoStyled>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`content sec-margin-top ${
          pathList[0] === "create-avatar" ? " " : "padding-main"
        }`}
      >
        {children}
      </div>
    </PageStyle>
  );
}
