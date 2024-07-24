// context.tsx
import React, { useState, createContext, useContext, useEffect } from "react";
import { useGlobalMainContext } from "./globalMainContext";
import { generateAvatar, generateAvatarHair } from "../api/avatar.api";

type GlobalGenerateContextType = {};

export const GlobalGenerateContext = createContext<any>(null);

const GlobalGenerateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // main hook
  const { toasted, setToasted, signupTrigger } = useGlobalMainContext();

  // states
  const [file, setFile] = useState<File>();

  const [fileError, setFileError] = useState<Boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [genderError, setGenderError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [hairName, setHairName] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("Continue");

  const [activeStep, setActiveStep] = useState<
    "step-1" | "step-2" | "step-3" | "step-4" | "step-5" | "step-6"
  >("step-1");

  const alertTrigger = (text: string, type: "success" | "error" | "alert") => {
    setToasted((prev: {}) => ({
      ...prev,
      check: true,
      type: type,
      text: text,
    }));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToasted({ ...toasted, check: false });
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [toasted]);

  //   steps trigger
  const handleContinue = () => {
    let goOn = true;

    if (activeStep === "step-4") {
      setUsernameError(false);
      setGenderError(false);
      setFileError(false);
      const errorMessages = []; // Array to store error messages

      if (username === "") {
        // errorMessages.push("Please enter your username.");
        alertTrigger("please enter your username", "error");
        setUsernameError(true);
        goOn = false;
      }
      if (gender === "") {
        // errorMessages.push("Please select your gender.");
        alertTrigger("Please select your gender.", "error");
        setGenderError(true);
        goOn = false;
      }
      if (!file) {
        errorMessages.push("Please upload your avatar image.");
        alertTrigger("Please upload your avatar image.", "error");
        setFileError(true);
        goOn = false;
      }
      if (username && gender && file && goOn) {
        setActiveStep("step-5");
        // setLoading(true);
        // generateAvatar(username, gender, file)
        // .then((result) => {
        // setLoading(false);
        // if (result.success) {
        //   alertTrigger("your avatar has been created successfully", "success");
        //   setAvatarUrl(result.data);
        //   setActiveStep("step-5");

        // } else {
        //   alertTrigger("somtihng went wrong.","error");
        // }
        // })
        // .catch((error) => {
        //   if (error?.response?.data) {
        //     if (error?.response?.data?.detail) {
        //       alertTrigger("somtihng went wrong.","error");
        //     } else {
        //       alertTrigger("somtihng went wrong.","error");
        //     }
        //   } else {
        //     alertTrigger("somtihng went wrong.","error");

        //   setLoading(false);
        //   }
        // });
      }
    } else if (activeStep === "step-5") {
      setActiveStep("step-6");
    }
  };

  const emptyAll = () => {
    setActiveStep("step-1");
    setGender("");
    setUsername("");
  };

  const contextValue = {
    activeStep,
    setActiveStep,
    file,
    setFile,
    fileError,
    setFileError,
    username,
    setUsername,
    usernameError,
    setUsernameError,
    genderError,
    setGenderError,
    gender,
    setGender,
    handleContinue,
    loading,
    setLoading,
    avatarUrl,
    setAvatarUrl,
    hairName,
    alertTrigger,
    emptyAll,
  };

  return (
    <GlobalGenerateContext.Provider value={contextValue}>
      {children}
    </GlobalGenerateContext.Provider>
  );
};

export const useGlobalGenerateContext = () => useContext(GlobalGenerateContext);

export default GlobalGenerateProvider;
