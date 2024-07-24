import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  ButtonSixStyled,
  GenderButtonStyled,
} from "../../../components/syledComponents/Buttons.styled";
import UploadIcon from "../../../assets/svgs/upload-cloud.svg";
import ImageIcon from "../../../assets/svgs/image.svg";
import AlertIcon from "../../../assets/svgs/alert-circle.svg";
import CheckIcon from "../../../assets/svgs/check-circle.svg";
import ResetIcon from "../../../assets/svgs/reset.svg";

import { ReactComponent as ArrowRight } from "../../../assets/svgs/arrow-right.svg";
import { Link } from "react-router-dom";
import { UploadAvatar } from "../../../components/syledComponents/CreateStepsLayout.style";
import GenerationStepsLayout from "../CreateStepsLayout.page";
import { useGlobalMainContext } from "../../../contexts/globalMainContext";
import { CLoader } from "../../../components/custom";
import UploadSample from "../../../assets/images/sampleUpload.png";
import Tips from "../../../components/uploadAvatar/Tips";
import SampleTips from "../../../components/uploadAvatar/SampleTips";
import * as faceapi from "face-api.js";

type Props = {
  nextStep: (e: any) => void;
  file: File | undefined;
  setFile: (file: File) => void;
  fileError: boolean;
  setFileError: (fileError: boolean) => void;
  loading: boolean;
  username: string;
  selectedImage: string;
  setSelectedImage: (selectedImage: string) => void;
};

// export interface Props {
//   username: string;
//   setUsername: (username: string) => void;
//   gender: string;
//   setGender: (gender: string) => void;
//   usernameError: boolean;
//   genderError: boolean;
//   fileError: boolean;
// }

export const UploadAvatarStep = ({
  nextStep,
  file,
  setFile,
  fileError,
  setFileError,
  loading,
  username,
  selectedImage,
  setSelectedImage,
}: Props) => {
  // sample photos
  const [sampleModal, setSampleModal] = useState(false);
  const [detectMessage, setDetectMessage] = useState("");
  const imageRef = useRef<any>(null);

  const inputFile = useRef<HTMLInputElement>(null);

  const uploadFile = () => {
    inputFile.current?.click();
  };

  const onChangeFile = async (event: any) => {
    event.stopPropagation();
    event.preventDefault();

    if (event.target.files) {
      setFileError(false);
      var file = event.target.files[0];
      setFile(file);
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
        setDetectMessage("Proccessing ...");
      } else {
        setSelectedImage("");
      }
    }
  };

  const processImage = async () => {
    if (imageRef?.current) {
      // Load face-api.js models
      // await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      // await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      // await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      // const detections = await faceapi
      //   .detectAllFaces(imageRef.current, new faceapi.TinyFaceDetectorOptions())
      //   .withFaceLandmarks()
      //   .withFaceExpressions();

      console.log(faceapi.nets.tinyFaceDetector.loadFromUri("/models"));

      // if (detections.length > 0) {
      //   const expressions = detections[0].expressions;
      //   if (expressions.happy > 0.5) {
      //     setDetectMessage("The person is laughing");
      //   } else {
      //     setDetectMessage("The person is not laughing");
      //   }
      // } else {
      //   setDetectMessage("No face detected");
      // }
    }
  };

  useEffect(() => {
    console.log(selectedImage);
    processImage();
  }, [selectedImage]);

  return (
    <>
      <SampleTips
        sampleModal={sampleModal}
        setSampleModal={setSampleModal}
        setSelectedImage={setSelectedImage}
      />
      <UploadAvatar>
        <div className="upload-part">
          <div
            className={`upload-box relative ${
              fileError ? "border-4 border-error-500" : ""
            }`}
          >
            <div className="upload-username-box">{username}</div>
            <img
              ref={imageRef}
              className="w-full h-full object-contain cursor-pointer"
              src={selectedImage || UploadSample}
              alt=""
              onClick={uploadFile}
            />
          </div>
          {detectMessage && <p className="text-white">{detectMessage}</p>}
          <div className="upload-buttons">
            <GenderButtonStyled
              width="328px"
              height="75px"
              beforeOpacity="0"
              onClick={() => setSampleModal(!sampleModal)}
            >
              <div className="icon">
                <img src={ImageIcon} alt="" />
              </div>
              use sample photos
            </GenderButtonStyled>
            {selectedImage ? (
              <GenderButtonStyled
                width="328px"
                height="75px"
                beforeOpacity="0"
                // onClick={() => uploadFile()}
                onClick={() => setSelectedImage("")}
              >
                <div className="icon">
                  <img src={ResetIcon} alt="" />
                </div>
                Try Another Photo
                <input
                  type={"file"}
                  accept={"image/png,image/jpeg,image/jpg,image/bmp,image/webp"}
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={onChangeFile}
                />
              </GenderButtonStyled>
            ) : (
              <GenderButtonStyled
                width="328px"
                height="75px"
                beforeOpacity="0"
                onClick={() => uploadFile()}
              >
                <div className="icon">
                  <img src={UploadIcon} alt="" />
                </div>
                upload your photo
                <input
                  type={"file"}
                  accept={"image/png,image/jpeg,image/jpg,image/bmp,image/webp"}
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={onChangeFile}
                />
              </GenderButtonStyled>
            )}
          </div>
        </div>
        <div className="upload-contents">
          <div className="title-part">
            <div className="flex items-center gap-2">
              <img className="hidden sm:flex" src={AlertIcon} alt="" />
              <h4 className="heading4">upload guide</h4>
            </div>
            <div className="bottom-line"></div>
          </div>
          {/* <div className="text-part">
          <div className="flex items-center gap-4">
            <img src={CheckIcon} alt="" />
            <span className="para">one frontal half length photo</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={CheckIcon} alt="" />
            <span className="para">clear features</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={CheckIcon} alt="" />
            <span className="para">natural expressions</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={CheckIcon} alt="" />
            <span className="para">no coverage for face and neck</span>
          </div>
        </div> */}
          <Tips />

          <div className="button-part para">
            <ButtonSixStyled
              className="start-button ml-auto"
              onClick={nextStep}
            >
              <Link to={"/create-avatar"}>
                <>
                  {loading ? (
                    <p>
                      <CLoader width={100} height={40} color={"white100"} />
                    </p>
                  ) : (
                    <p>continue</p>
                  )}

                  <div className={"icon"}>
                    <ArrowRight />
                  </div>
                </>
              </Link>
            </ButtonSixStyled>
          </div>
        </div>
      </UploadAvatar>
    </>
  );
};
