import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { SignUpModal } from "../syledComponents/SignUpModal.style";
import { useGlobalMainContext } from "../../contexts/globalMainContext";
import SignUpBg from "../../assets/images/sign-up.jpg";
import PersoniaLogo from "../../assets/images/personia-logo.svg";
import { CustomTextField } from "./TextField";
import { GenderButtonStyled } from "../syledComponents/Buttons.styled";
import WalletIcon from "../../assets/images/icons/wallet-connection.svg";
import TrustIcon from "../../assets/images/icons/trustwallet.svg";
import MetamaskIcon from "../../assets/images/icons/metamask.svg";
import { createPortal } from "react-dom";

type Props = {
  opacity: boolean;
  visible: boolean;
  pointer: boolean;
};

export const SignUp = ({ opacity, visible, pointer }: Props) => {
  const { signupTrigger, setSignupTrigger } = useGlobalMainContext();

  const modalRef: React.Ref<HTMLDivElement> = useRef(null); // Ref for the modal component

  const handleClickOutside = () => {
    // if (modalRef.current && !modalRef.current?.contains(event.target)) {
    // Close modal if clicked outside the wrapper
    setSignupTrigger(!signupTrigger);
    // }
  };

  return createPortal(
    <SignUpModal
      opacity={opacity}
      visible={visible}
      pointer={pointer}
      // onClick={handleClickOutside}
      ref={modalRef}
    >
      <div
        className="w-full h-full  absolute bg-black opacity-[0.3]"
        onClick={handleClickOutside}
      ></div>
      <div className="wrapper relative z-40">
        <div className="inside-wrapper relative z-50">
          <div className="text-part">
            <h2 className="heading4 text-center">
              To download your genareted 3d avavtar you can:
            </h2>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="sign-box active">
                  <span className="para2">1</span>
                </div>
                <div className="h-[61px] w-[2px] bg-white"></div>
                <span className="para2">Or</span>
                <div className="h-[61px] w-[2px] bg-white"></div>
                <div className="sign-box">
                  <span className="para2">2</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="para capitalize">
                    create your personia account
                  </p>
                  <p className="para4">
                    Unlimited avatar genrating & animated files
                  </p>
                </div>
                <div className="flex flex-col gap-1 translate-y-[27px]">
                  <p className="para capitalize">continue as a guest</p>
                  <p className="para4">Only 3 avatar and no animated files</p>
                </div>
              </div>
            </div>
            <p className="para2">Already have an account? login here</p>
          </div>
          <div className="sign-part">
            <Link to={"www.personia.io"}>
              <img src={PersoniaLogo} alt="" />
            </Link>
            <div className="flex flex-col gap-8 items-center">
              <CustomTextField
                // value=""
                placeholder="Enter your email address"
              />
              <div className="flex items-center justify-center gap-2">
                {/* line  */}
                <div className="w-[170px] h-[1px] bg-gray-100"></div>
                <span className="para2 text-gray-400">Or</span>
                <div className="w-[170px] h-[1px] bg-gray-100"></div>
              </div>
              <div className="flex flex-col gap-2">
                <GenderButtonStyled
                  width="328px"
                  height="75px"
                  beforeOpacity="0"
                >
                  <div className="icon">
                    <img src={WalletIcon} alt="" />
                  </div>
                  use sample photos
                </GenderButtonStyled>
                <GenderButtonStyled
                  width="328px"
                  height="75px"
                  beforeOpacity="0"
                >
                  <div className="icon">
                    <img src={MetamaskIcon} alt="" />
                  </div>
                  use sample photos
                </GenderButtonStyled>
                <GenderButtonStyled
                  width="328px"
                  height="75px"
                  beforeOpacity="0"
                >
                  <div className="icon">
                    <img src={TrustIcon} alt="" />
                  </div>
                  use sample photos
                </GenderButtonStyled>
              </div>
            </div>
            <p className="para4 text-gray-400">All Wallets</p>
          </div>
        </div>
      </div>
    </SignUpModal>,
    document.getElementById("modals") as HTMLElement
  );
};
