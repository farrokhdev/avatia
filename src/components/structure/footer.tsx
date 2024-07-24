import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { FooterBox, Join } from "./Footer.style";
import { ButtonThreeStyled } from "../syledComponents/Buttons.styled";

export function Footer(): ReactElement {
  return (
    <>
      <Join>
        <h2>Join Community</h2>

        <p className="para">
          Join the Allostasis DAO foundation and be a part of a movement that
          promotes sustainable living and personal well-being. Whether you are
          an entrepreneur, researcher, healthcare professional, or simply
          interested in promoting good change, there is a place for you in the
          community.
        </p>
        <ButtonThreeStyled>
          <Link to={"create-avatar"}>
            <div className="icon-back"></div>
            <p>Join Community</p>
            <div className={"icon"}>
              <ArrowRight />
            </div>
          </Link>
        </ButtonThreeStyled>
      </Join>

      <FooterBox>
        <div className="logo-part">
          <div className="logo">
            <img
              src={require("../../assets/images/avatia-logo.png")}
              alt="Avatia Logo"
            />
          </div>
        </div>

        <div className="bottom-part">
          <div className="bottom-top">
            <div className="menu">
              <Link className="para3" to={"/"}>
                Home
              </Link>
              <Link className="para3" to={"litepaper"}>
                Litepaper
              </Link>
              <Link className="para3" to={"create-avatar"}>
                Join Community
              </Link>
            </div>
            <div className="socials">
              <Link to={"create-avatar"}>
                <img
                  src={require("../../assets/images/share-github.png")}
                  alt="Avatia Github"
                />
              </Link>

              <Link to={"create-avatar"}>
                <img
                  src={require("../../assets/images/share-youtube.png")}
                  alt="Avatia YouTube"
                />
              </Link>

              <Link to={"create-avatar"}>
                <img
                  src={require("../../assets/images/share-twitter.png")}
                  alt="Avatia X (Twitter)"
                />
              </Link>

              <Link to={"create-avatar"}>
                <img
                  src={require("../../assets/images/share-instagram.png")}
                  alt="Avatia Instagram"
                />
              </Link>

              <Link to={"create-avatar"}>
                <img
                  src={require("../../assets/images/share-facebook.png")}
                  alt="Avatia Facebook"
                />
              </Link>
            </div>
          </div>
          <div className="border-line"></div>
          <div className="bottom-bottom">
            <p className="copyright para3">
              Avatia Company 2022 © All Rights Reserved.
              <br />
              <a
                href="https://allostasis.io/"
                className="text-white underline"
                target="_blank"
              >
                {" "}
                Powered by Allostasis.io
              </a>
            </p>
          </div>
        </div>
      </FooterBox>
    </>
  );
}
