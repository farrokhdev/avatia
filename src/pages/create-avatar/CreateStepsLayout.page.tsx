import React, { useRef, useState, useEffect } from "react";
import { CreateStepsBox } from "../../components/syledComponents/CreateStepsLayout.style";
import { Page } from "../../components/structure";
import { UploadAvatarStep } from "./generation.pages/UploadAvatarStep";
import { AlertToast } from "../../components/custom/toast";
import { useGlobalMainContext } from "../../contexts/globalMainContext";
import { SelectStyleStep } from "./generation.pages/SelectStyleStep";
import { GenerateAvatarStep } from "./generation.pages/GenerateAvatarStep";
import ArrowBack from "../../assets/svgs/create-back.svg";
import { useMediaQuery, useTheme } from "@mui/material";
import { SignUp } from "../../components/custom/SignUp";
import { useGlobalGenerateContext } from "../../contexts/generateContext";
import { CreateAvatarStep } from "./CreateAvatarStep";
import { GenderTypeStep } from "./GenderTypeStep";
import { UserNameStep } from "./UserNameStep";
import { generateAvatarHair } from "../../api/avatar.api";

type Types = {
  children: any;
};

const steps = [
  { id: "step-4", text: "step 1: upload your photo", text2: "step 1" },
  { id: "step-5", text: "step 2: select style", text2: "step 2" },
  { id: "step-6", text: "step 3: generate", text2: "step 3" },
];

const CreateStepsLayout = () => {
  // upload
  const [selectedImage, setSelectedImage] = useState<string>("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const {
    handleContinue,
    activeStep,
    setActiveStep,
    file,
    setFile,
    fileError,
    setFileError,
    loading,
    setLoading,
    avatarUrl,
    hairName,
    setHairName,
    username,
  } = useGlobalGenerateContext();

  const nextStep = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    if (activeStep === "step-1") {
      setActiveStep("step-2");
    } else if (activeStep === "step-2") {
      setActiveStep("step-3");
    } else if (activeStep === "step-3") {
      setActiveStep("step-4");
    } else {
      handleContinue();
    }
  };

  const prevStep = (e: any) => {
    e.preventDefault();
    if (activeStep === "step-4") {
      setActiveStep("step-3");
    } else if (activeStep === "step-5") {
      setActiveStep("step-4");
    } else if (activeStep === "step-6") {
      setActiveStep("step-5");
    }
    // back
  };

  return (
    <Page title="Create Avatar Steps">
      {<AlertToast />}
      <CreateStepsBox>
        <div
          className={` ${
            activeStep !== "step-1" &&
            activeStep !== "step-2" &&
            activeStep !== "step-3" &&
            "upload-container"
          } 
        `}
        >
          {activeStep !== "step-1" &&
            activeStep !== "step-2" &&
            activeStep !== "step-3" && (
              <div className="w-full flex items-center justify-between">
                {activeStep !== "step-4" && (
                  <button
                    className="back-btn bg-transparent gap-2 text-white hidden sm:flex items-center justify-center"
                    onClick={prevStep}
                  >
                    <div className="flex items-center justify-center h-full">
                      <img className="object-contain " src={ArrowBack} alt="" />
                    </div>
                    Back
                  </button>
                )}
                {/* steps  */}
                <div className="steps">
                  <div className="line-bg"></div>
                  {steps.map((step: any) => {
                    return (
                      <div
                        key={step.id}
                        className={`step-but para3 ${
                          step.id === activeStep && "active"
                        }`}
                      >
                        {matches
                          ? step.text
                          : step.id === activeStep
                          ? step.text
                          : step.text2}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          {/* main content  */}
          {activeStep === "step-1" && <CreateAvatarStep nextStep={nextStep} />}
          {activeStep === "step-2" && <GenderTypeStep nextStep={nextStep} />}
          {activeStep === "step-3" && <UserNameStep nextStep={nextStep} />}
          {activeStep === "step-4" && (
            <UploadAvatarStep
              nextStep={nextStep}
              file={file}
              setFile={setFile}
              fileError={fileError}
              setFileError={setFileError}
              loading={loading}
              username={username}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
          {activeStep == "step-5" && (
            <SelectStyleStep
              nextStep={nextStep}
              activeStep={activeStep}
              hairName={hairName}
              username={username}
              setLoading={setLoading}
              loading={loading}
              setHairName={setHairName}
              avatarUrl={avatarUrl}
            />
          )}
          {activeStep == "step-6" && <GenerateAvatarStep nextStep={nextStep} />}
        </div>
        {/* footer  */}
        <div className={"footer"}>
          <p className="para2">Avatia Company 2022 © All Rights Reserved.</p>
          <p className="para3">
            Powered by{" "}
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
      </CreateStepsBox>
    </Page>
  );
};

export default CreateStepsLayout;
