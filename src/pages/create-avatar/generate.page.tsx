import React, { ReactElement, useEffect, useState } from "react";
import { Page } from "../../components/structure";
import styled from "styled-components";
import { Step1GenerateAvatar } from "../../components/generate-avatar/step-1";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { ReactComponent as Back } from "../../assets/svgs/back.svg";
import {
  downloadAvatar,
  generateAvatar,
  generateAvatarHair,
} from "../../api/avatar.api";
import { useGlobalContext } from "../../contexts";
import "@google/model-viewer/lib/model-viewer";
import { Step2GenerateAvatar } from "../../components/generate-avatar/step-2";
import { Step3GenerateAvatar } from "../../components/generate-avatar/step-3";
import { CLoader } from "../../components/custom";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components/syledComponents/generate.page.style";

export function GenerateAvatarPage(): ReactElement {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const { makeAlert } = useGlobalContext();
  const [activeTab, setActiveTab] = useState<"step-1" | "step-2" | "step-3">(
    "step-1"
  );
  const [file, setFile] = useState<File>();
  const [username, setUsername] = useState<string>("");
  const [gender, setGender] = useState<string>("female");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [genderError, setGenderError] = useState<boolean>(false);
  const [fileError, setFileError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [hairName, setHairName] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("Continue");

  const handleContinue = () => {
    setLoading(true);
    var goOn = true;

    if (activeTab === "step-1") {
      setUsernameError(false);
      setGenderError(false);
      setFileError(false);

      if (username === "") {
        makeAlert("error", "Enter username");
        setUsernameError(true);
        goOn = false;
      }
      // if (gender === '') {
      //     setGenderError(true)
      //     goOn = false
      // }
      if (!file) {
        makeAlert("error", "Select image");
        setFileError(true);
        goOn = false;
      }

      if (goOn) {
        console.log(file);
        generateAvatar(username, gender, file)
          .then((result) => {
            setLoading(false);
            if (result.success) {
              makeAlert("success", result.message);
              setAvatarUrl(result.data);
              setRe(
                <Step2GenerateAvatar
                  file={file}
                  avatarUrl={result.data}
                  hairName={hairName}
                  setHairName={(hairName) => setHairName(hairName)}
                  handleGenerateHair={(hairName: string) =>
                    handleGenerateHair(hairName)
                  }
                />
              );
              setActiveTab("step-2");
            } else {
              makeAlert("error", result.message);
            }
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.data) {
                if (error.response.data.detail) {
                  makeAlert("error", error.response.data.detail.message);
                } else {
                  makeAlert("error", "Internal server error");
                }
              } else {
                makeAlert("error", "Internal server error");
              }
            } else {
              makeAlert("error", "Internal server error");
            }
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    } else if (activeTab === "step-2") {
      setLoading(false);
      setActiveTab("step-3");
      setButtonName("Download");
    } else if (activeTab === "step-3") {
      downloadAvatar(username)
        .then((result) => {
          setLoading(false);
          if (result.success) {
            makeAlert("success", result.message);
            window.open(result.data, "_blank");
          } else {
            makeAlert("error", result.message);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data) {
              if (error.response.data.detail) {
                makeAlert("error", error.response.data.detail.message);
              } else {
                makeAlert("error", "Internal server error");
              }
            } else {
              makeAlert("error", "Internal server error");
            }
          } else {
            makeAlert("error", "Internal server error");
          }
          setLoading(false);
        });
    }
  };

  const handleGenerateHair = (hairName: string) => {
    setLoading(true);

    generateAvatarHair(username, hairName)
      .then((result) => {
        setLoading(false);
        if (result.success) {
          makeAlert("success", result.message);
          setAvatarUrl(result.data);
          setRe(
            <Step2GenerateAvatar
              file={file}
              avatarUrl={result.data}
              hairName={hairName}
              setHairName={(hairName) => setHairName(hairName)}
              handleGenerateHair={(hairName: string) =>
                handleGenerateHair(hairName)
              }
            />
          );
          setActiveTab("step-2");
        } else {
          makeAlert("error", result.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data) {
            if (error.response.data.detail) {
              makeAlert("error", error.response.data.detail.message);
            } else {
              makeAlert("error", "Internal server error");
            }
          } else {
            makeAlert("error", "Internal server error");
          }
        } else {
          makeAlert("error", "Internal server error");
        }
        setLoading(false);
      });
  };

  const [re, setRe] = useState<any>(
    <Step2GenerateAvatar
      file={file}
      avatarUrl={avatarUrl}
      hairName={hairName}
      setHairName={(hairName) => setHairName(hairName)}
      handleGenerateHair={(hairName: string) => handleGenerateHair(hairName)}
    />
  );

  return (
    <Page title="Generate Avatar">
      <Box height={window.innerHeight + "px"}>
        <div className={"container"}>
          <div className={"row"}>
            <div
              className={"back"}
              onClick={() => {
                setButtonName("Continue");
                if (activeTab === "step-2") setActiveTab("step-1");
                else setActiveTab("step-2");
              }}
            >
              {activeTab !== "step-1" && (
                <>
                  <Back />
                  <p>Back</p>
                </>
              )}
            </div>

            <div className={"d-flex"}>
              <div className={`item ${activeTab === "step-1" ? "active" : ""}`}>
                <span>step 1: upload your photo</span>
              </div>
              <div className={`item ${activeTab === "step-2" ? "active" : ""}`}>
                <span>step 2: select style</span>
              </div>
              <div className={`item ${activeTab === "step-3" ? "active" : ""}`}>
                <span>step 3: generate</span>
              </div>
            </div>
          </div>
          <div className={"content"}>
            {activeTab === "step-1" ? (
              <Step1GenerateAvatar
                file={file}
                setFile={(file) => setFile(file)}
                username={username}
                setUsername={(username) => setUsername(username)}
                gender={gender}
                usernameError={usernameError}
                genderError={genderError}
                fileError={fileError}
                setGender={(gender) => setGender(gender)}
              />
            ) : activeTab === "step-2" ? (
              re
            ) : activeTab === "step-3" ? (
              <Step3GenerateAvatar file={file} avatarUrl={avatarUrl} />
            ) : null}
          </div>
          <div className={"footer"}>
            <button className={"create"} onClick={handleContinue || loading}>
              {loading ? (
                <div className={"loader"}>
                  <CLoader width={80} height={80} color={"white100"} />
                </div>
              ) : (
                <>
                  <p>{buttonName}</p>
                  {buttonName !== "Download" && (
                    <div className={"icon"}>
                      <ArrowRight />
                    </div>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
        <div className={"footer"}>
          <p className="para">Avatia Company 2022 © All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a href={"https://allostasis.io"} target={"_blank"}>
              Allostasis.io
            </a>
          </p>
        </div>
      </Box>
    </Page>
  );
}
