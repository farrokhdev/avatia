import React, { ReactElement, useEffect, useRef, useState } from "react";
import CheckIcon from "../../../assets/svgs/check-circle.svg";
import AvatarSampleTwo from "../../../assets/images/avatar-sample2.svg";
import { GenerateAvatar } from "../../../components/syledComponents/CreateStepsLayout.style";

import GenerationStepsLayout from "../CreateStepsLayout.page";
import { useGlobalMainContext } from "../../../contexts/globalMainContext";
import {
  ButtonSixStyled,
  GenderButtonStyled,
} from "../../../components/syledComponents/Buttons.styled";
import { ReactComponent as ArrowRight } from "../../../assets/svgs/arrow-right.svg";
import { Link } from "react-router-dom";
import ModelViewer from "../../../components/generate-avatar/model-viewer";
import UploadIcon from "../../../assets/svgs/upload-cloud.svg";

type Props = {
  nextStep: (e: any) => void;
  // file: File | undefined;
  // setFile: (file: File) => void;
  // fileError: boolean;
  // setFileError: (fileError: boolean) => void;
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

export const GenerateAvatarStep = ({ nextStep }: Props) => {
  const { setSignupTrigger } = useGlobalMainContext();
  // upload
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://www.chocolatetext.com/selfie-tins/images/uploadImage.jpg"
  );
  const inputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

  return (
    <GenerateAvatar>
      <div className="generate-part">
        <div className={`generate-box`}>
          {/* <img
            className="w-full h-full object-contain bg-white cursor-pointer"
            // src={selectedImage || ""}
            src={AvatarSampleTwo}
            alt=""
          /> */}
          <ModelViewer src="" />
        </div>
      </div>
      <div className="generate-contents">
        <div className="title-part">
          <h4 className="heading4">available formats</h4>
          <div className="bottom-line"></div>
        </div>
        <div className="desc">
          <div className="para2 lg:mb-[83px]">
            Lorem ipsum dolor sit amet curabitur,Lorem ipsum dolor sit amet
            curabitur Magna erat pharetra tristique mi viverra et accumsan.
            Lorem ipsum dolor sit amet curabitur,Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-start text-center lg:text-start">
          <GenderButtonStyled
            width="328px"
            height="75px"
            beforeOpacity="0"
            // onClick={() => uploadFile()}
            onClick={() => setSignupTrigger(true)}
          >
            <div className="icon">
              <img src={UploadIcon} alt="" />
            </div>
            Download
          </GenderButtonStyled>
        </div>
      </div>
    </GenerateAvatar>
  );
};
