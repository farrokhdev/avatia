import React, { ReactElement, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckCircle } from "../../assets/svgs/check-circle.svg";
import { ReactComponent as List } from "../../assets/svgs/list.svg";
import { ReactComponent as Select } from "../../assets/svgs/select.svg";
import { CTextField } from "../mui";
import { CSelectField } from "../mui/SelectField";
import { CModal } from "../mui/Modal";

const Box = styled.div`
  display: flex;

  > .col-1 {
    > img {
      width: 483px;
      height: 470px;
      border-radius: 37px;
      background: ${({ theme }) => theme.white100};

      &.error {
        border: 1px solid ${({ theme }) => theme.red100};
      }
    }

    > .row {
      display: flex;
      justify-content: space-between;

      > .d-flex {
        display: grid;
        cursor: pointer;
        transition: all 0.3s;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        &.button {
          background: ${({ theme }) => theme.blue20};
          border-radius: 10px;
          padding-right: 10px;
          padding-left: 10px;
          margin: 5px;
          display: flex;
          width: 100%;
          text-align: center;

          > svg {
            margin-top: 18px;
            margin-right: 10px;
          }

          > p {
            font-family: "Poppins", sans-serif;
            font-size: 15px;
            font-weight: 600;
            line-height: 31px;
            letter-spacing: 0;
            text-align: center;
            color: ${({ theme }) => theme.black100};
          }

          &:hover {
            background: ${({ theme }) => theme.blue90};

            > p {
              color: ${({ theme }) => theme.white100};
            }

            > svg > path {
              stroke: ${({ theme }) => theme.white100};
              fill: ${({ theme }) => theme.white100};
            }
          }
        }
      }
    }
  }

  > .col-2 {
    margin-left: 100px;
    width: 100%;

    > h3 {
      font-family: "Poppins", sans-serif;
      font-size: 22px;
      font-weight: 600;
      line-height: 31px;
      letter-spacing: 0;
      text-align: left;
      color: ${({ theme }) => theme.black100};
    }

    > .row {
      display: flex;
      justify-content: space-between;

      > .m-2 {
        width: 100%;
        margin: 10px;
      }
    }

    > .border {
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.blue90};
    }

    > .check-list {
      margin-top: 30px;

      > ul {
        list-style: none;
        margin: 0 !important;
        padding-inline-start: 0;

        > li {
          display: flex;
          margin-bottom: 10px;

          > svg {
            margin-top: 5px;
          }

          > span {
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0;
            text-align: left;
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const Modal = styled.div`
  > .items {
    width: 100%;
    margin-top: 30px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 170px);
    column-gap: 20px;
    row-gap: 20px;
    overflow: auto;

    > .item > img {
      width: 170px;
      height: 160px;
      border-radius: 20px;
      background: #ffffff;
      cursor: pointer;
    }

    > .item.selected {
      width: 200px;
      height: 130px;
      border-radius: 20px;
      border: 2px solid #165ade5c;
    }
  }
`;

export interface Props {
  file: File | undefined;
  setFile: (file: File) => void;
  username: string;
  setUsername: (username: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  usernameError: boolean;
  genderError: boolean;
  fileError: boolean;
}

export function Step1GenerateAvatar(props: Props): ReactElement {
  const inputFile = useRef(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const onChangeFile = (event: any) => {
    event.stopPropagation();
    event.preventDefault();

    if (event.target.files) {
      var file = event.target.files[0];
      props.setFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const [sampleModal, setSampleModal] = useState<boolean>(false);
  const handleOpenSamples = () => {
    setSampleModal(true);
  };

  const setSampleFile = (gender: string, image: any) => {
    props.setGender(gender);
    let randomUsername = (Math.random() + 1).toString(36).substring(7);
    props.setUsername(randomUsername);
    fetch(image).then((res) => {
      res.blob().then((blob) => {
        const file = new File([blob], "sample.jpg", {
          type: blob.type,
        });
        props.setFile(file);
        setSelectedImage(URL.createObjectURL(file));
      });
    });
    setSampleModal(false);
  };

  return (
    <Box>
      <div className={"col-1"}>
        <img className={props.fileError ? "error" : ""} src={selectedImage} />

        <div className={"row"}>
          <div className={"d-flex button"} onClick={handleOpenSamples}>
            <List />
            <p>Use Sample Photo</p>
          </div>
          <div
            className={"d-flex button"}
            onClick={() => {
              // @ts-ignore
              inputFile.current.click();
            }}
          >
            <Select />
            <p>Upload Your Photo</p>
          </div>
        </div>
      </div>
      <div className={"col-2"}>
        <h3>Fill form and select avatar photo and press on Continue button</h3>

        <div className={"row"}>
          <div className={"m-2"}>
            <CTextField
              label={"Username"}
              placeholder={"EX: avatia"}
              value={props.username}
              hasError={props.usernameError}
              onChange={(e: any) => props.setUsername(e.target.value)}
            />
          </div>
          <div className={"m-2"}>
            <CSelectField
              label={"Gender"}
              items={[
                { name: "Male", value: "male", selected: false },
                {
                  name: "Female",
                  value: "Female",
                  selected: true,
                },
              ]}
              placeholder={"Select Gender"}
              value={props.gender}
              hasError={props.genderError}
              onChange={(e: any) => props.setGender(e.target.value)}
            />
          </div>
        </div>

        <h3 style={{ marginTop: "70px" }}>Upload Guide</h3>
        <div className={"border"}></div>
        <div className={"check-list"}>
          <ul>
            <li>
              <CheckCircle /> <span>one frontal half length photo</span>
            </li>
            <li>
              <CheckCircle /> <span>clear features</span>
            </li>
            <li>
              <CheckCircle /> <span>natural expressions</span>
            </li>
            <li>
              <CheckCircle /> <span>no coverage for face and neck</span>
            </li>
          </ul>
        </div>
      </div>

      <input
        type={"file"}
        accept={"image/png,image/jpeg,image/jpg,image/bmp,image/webp"}
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />

      <CModal
        open={sampleModal}
        title={"Select sample photo"}
        width={"90%"}
        onClose={() => setSampleModal(false)}
      >
        <Modal>
          <div className={"items"}>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "male",
                  require("../../assets/images/samples/1.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/1.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/2.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/2.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/3.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/3.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/4.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/4.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "male",
                  require("../../assets/images/samples/5.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/5.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "male",
                  require("../../assets/images/samples/6.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/6.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "male",
                  require("../../assets/images/samples/7.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/7.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "male",
                  require("../../assets/images/samples/8.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/8.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/9.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/9.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/10.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/10.jpg")} />
            </div>
            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/11.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/11.jpg")} />
            </div>

            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/12.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/12.jpg")} />
            </div>

            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/13.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/13.jpg")} />
            </div>

            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/14.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/14.jpg")} />
            </div>

            <div
              className={`item`}
              onClick={() => {
                setSampleFile(
                  "female",
                  require("../../assets/images/samples/15.jpg")
                );
              }}
            >
              <img src={require("../../assets/images/samples/15.jpg")} />
            </div>
          </div>
        </Modal>
      </CModal>
    </Box>
  );
}
