import React, { ReactElement, useState } from "react";
import {
  GuidModal,
  SamplePhotosModal,
} from "../syledComponents/CreateStepsLayout.style";
import AlertIcon from "../../assets/svgs/alert-circle.svg";
import { ButtonSixStyled } from "../syledComponents/Buttons.styled";

import CloseModal from "../../assets/images/icons/close-modal.svg";

import { Link } from "react-router-dom";
import { useGlobalGenerateContext } from "../../contexts/generateContext";
import { SamplePhotos } from "./SamplePhotos";
import { createPortal } from "react-dom";

type SampleProps = {
  sampleModal: boolean;
  setSampleModal: (sampleModal: boolean) => void;
  setSelectedImage: (selectedImage: string) => void;
};

const SampleTips = ({
  sampleModal,
  setSampleModal,
  setSelectedImage,
}: SampleProps) => {
  const { setFile, gender } = useGlobalGenerateContext();

  const setSampleFile = (image: any) => {
    fetch(image).then((res) => {
      res.blob().then((blob) => {
        const file = new File([blob], "sample.jpg", {
          type: blob.type,
        });
        setFile(file);
        console.log(URL.createObjectURL(file));
        setSelectedImage(URL.createObjectURL(file));
      });
    });
    setSampleModal(false);
  };

  return createPortal(
    <>
      <SamplePhotosModal
        visiblity={sampleModal ? "visible" : "hidden"}
        opacity={sampleModal ? "1" : "0"}
        pointer={sampleModal ? "auto" : "none"}
        // onClick={() => setSampleModal(false)}
      >
        <div className="upload-wrapper">
          <div className={`upload-guid-modal`}>
            <div className="modal-header">
              <div className="flex items-center gap-2">
                <img src={AlertIcon} alt="" />
                <h4 className="para">Sample Photos</h4>
              </div>

              {/* close button  */}
              <img
                className="cursor-pointer"
                src={CloseModal}
                alt=""
                onClick={() => setSampleModal(!sampleModal)}
              />
            </div>
            <div className="modal-content">
              {SamplePhotos.map((samplePhoto) => {
                if (samplePhoto.gender === gender) {
                  return (
                    <div
                      className="photo"
                      onClick={() => setSampleFile(samplePhoto.element)}
                    >
                      <img src={samplePhoto.element} alt="" />
                    </div>
                  );
                }
              })}
            </div>
            <div className="modal-bottom">
              <ButtonSixStyled onClick={() => setSampleModal(!sampleModal)}>
                <Link to={""}>Continue</Link>
              </ButtonSixStyled>
            </div>
          </div>
        </div>
      </SamplePhotosModal>
    </>,
    document.getElementById("modals") as HTMLElement
  );
};

export default SampleTips;
