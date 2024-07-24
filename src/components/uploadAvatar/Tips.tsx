import React, { useState } from "react";
import UploadSampOne from "../../assets/images/uploadsamp1.png";
import UploadSampTwo from "../../assets/images/uploadsamp2.png";
import UploadSampThree from "../../assets/images/uploadsamp3.png";
import UploadSampFour from "../../assets/images/uploadsamp4.png";
import UploadCheck from "../../assets/images/icons/upload-check.svg";
import UploadClose from "../../assets/images/icons/upload-close.svg";
import HelpIcon from "../../assets/svgs/help-circle.svg";
import { GuidModal } from "../syledComponents/CreateStepsLayout.style";
import AlertIcon from "../../assets/svgs/alert-circle.svg";
import { ButtonSixStyled } from "../syledComponents/Buttons.styled";
import MImgOne from "../../assets/images/modal-img1.png";
import MImgTwo from "../../assets/images/modal-img2.png";
import GuidBg from "../../assets/images/guid-itm-bg.png";
import MImgButtomOne from "../../assets/images/modal-bottom-img1.png";
import MImgButtomTwo from "../../assets/images/modal-bottom-img2.png";
import MImgButtomThree from "../../assets/images/modal-bottom-img3.png";
import MImgButtomFour from "../../assets/images/modal-bottom-img4.png";
import MImgButtomFive from "../../assets/images/modal-bottom-img5.png";
import CheckIconBlue from "../../assets/images/icons/check-circle-blue.svg";
import CloseModal from "../../assets/images/icons/close-modal.svg";

import { Link } from "react-router-dom";

type Props = {};

const Tips = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <GuidModal
        visiblity={modalOpen ? "visible" : "hidden"}
        opacity={modalOpen ? "1" : "0"}
        pointer={modalOpen ? "auto" : "none"}
      >
        <div className={`upload-guid-modal`}>
          <div className="modal-header">
            <div className="flex items-center gap-2">
              <img src={AlertIcon} alt="" />
              <h4 className="para">upload guide</h4>
            </div>

            {/* close button  */}
            <img
              className="cursor-pointer"
              src={CloseModal}
              alt=""
              onClick={() => setModalOpen(!modalOpen)}
            />
          </div>
          <div className="modal-content">
            <div className="top-content">
              <h4 className="top-title capitalize para">
                examples for qualified photos
              </h4>
              <div className="top-box">
                <div className="image-part">
                  <div className="image-content">
                    <div className="check-icon">
                      <img src={UploadCheck} alt="" />
                    </div>
                    <img
                      className="w-full h-full object-contain"
                      src={MImgOne}
                      alt=""
                    />
                  </div>
                  <div className="image-content">
                    <div className="check-icon">
                      <img src={UploadCheck} alt="" />
                    </div>
                    <img
                      className="w-full h-full object-contain"
                      src={MImgTwo}
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-sec">
                  <div className="flex items-center gap-2">
                    <img src={CheckIconBlue} alt="" />
                    <p className="Capitalize para3">
                      one frontal half length photo
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={CheckIconBlue} alt="" />
                    <p className="Capitalize para3">clear features</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={CheckIconBlue} alt="" />
                    <p className="Capitalize para3">natural expressions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={CheckIconBlue} alt="" />
                    <p className="Capitalize">no coverage for face and neck</p>
                  </div>
                </div>
              </div>
              <div className="bottom-line"></div>
            </div>
            <div className="bottom-content">
              <h4 className="top-title capitalize para">
                examples for unqualified photos
              </h4>
              <div className="bottom-box">
                <div className="bottom-item">
                  <img className="guid-item-bg" src={GuidBg} />
                  <div className="content-box">
                    <img
                      className="w-full h-full object-cover"
                      src={MImgButtomOne}
                      alt=""
                    />
                    <div className="btn">
                      <img src={UploadClose} alt="" />
                      <span>exaggeratted experission</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <img className="guid-item-bg" src={GuidBg} />
                  <div className="content-box">
                    <img
                      className="w-full h-full object-cover"
                      src={MImgButtomTwo}
                      alt=""
                    />
                    <div className="btn">
                      <img src={UploadClose} alt="" />
                      <span>face covered</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <img className="guid-item-bg" src={GuidBg} />
                  <div className="content-box">
                    <img
                      className="w-full h-full object-cover"
                      src={MImgButtomThree}
                      alt=""
                    />
                    <div className="btn">
                      <img src={UploadClose} alt="" />
                      <span>too far or too close</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-box2">
                <div className="bottom-item">
                  <img className="guid-item-bg" src={GuidBg} />
                  <div className="content-box">
                    <img
                      className="w-full h-full object-cover"
                      src={MImgButtomFour}
                      alt=""
                    />
                    <div className="btn">
                      <img src={UploadClose} alt="" />
                      <span>different angels.</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <img className="guid-item-bg" src={GuidBg} />
                  <div className="content-box">
                    <img
                      className="w-full h-full object-cover"
                      src={MImgButtomFive}
                      alt=""
                    />
                    <div className="btn">
                      <img src={UploadClose} alt="" />
                      <span>low quality & fuzzy photos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-bottom">
            <ButtonSixStyled onClick={() => setModalOpen(!modalOpen)}>
              <Link to={""}>Ok I Got It</Link>
            </ButtonSixStyled>
          </div>
        </div>
      </GuidModal>
      <div
        className="text-part cursor-pointer"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <div className="guid-head capitalize">
          <h4 className="para ">Tips :</h4>
          <div className="guid-button">
            <p className="">View guidelines</p>
            <img src={HelpIcon} alt="" />
          </div>
        </div>
        <div className="guid-contents">
          <div className="guid-item">
            <img className="guid-img" src={UploadSampTwo} alt="" />
            <div className="content-bottom">
              <img src={UploadCheck} alt="" />
              <p className="para3">front & clear</p>
            </div>
          </div>
          <div className="guid-item">
            <img className="guid-img" src={UploadSampThree} alt="" />
            <div className="content-bottom">
              <img src={UploadCheck} alt="" />
              <p className="">natural expressions</p>
            </div>
          </div>
          <div className="guid-item">
            <img className="guid-img" src={UploadSampFour} alt="" />
            <div className="content-bottom">
              <img src={UploadClose} alt="" />
              <p className="">sheltered face</p>
            </div>
          </div>
          <div className="guid-item">
            <img className="guid-img" src={UploadSampOne} alt="" />
            <div className="content-bottom">
              <img src={UploadClose} alt="" />
              <p className="">blurring</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
