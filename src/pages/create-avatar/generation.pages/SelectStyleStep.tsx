import React, { ReactElement, useEffect, useRef, useState } from "react";
import CheckIcon from "../../../assets/svgs/check-circle.svg";
import AvatarSample from "../../../assets/images/avatar-sample.svg";
import { ReactComponent as ArrowRight } from "../../../assets/svgs/arrow-right.svg";
import {
  SelectStyle,
  UploadAvatar,
} from "../../../components/syledComponents/CreateStepsLayout.style";
import GenerationStepsLayout from "../CreateStepsLayout.page";
import { useGlobalMainContext } from "../../../contexts/globalMainContext";
import { ButtonSixStyled } from "../../../components/syledComponents/Buttons.styled";
import { Link } from "react-router-dom";
import ModelViewer from "../../../components/generate-avatar/model-viewer";
import { hairsList, HairsListType } from "./Hair/HairList";
import "@google/model-viewer/lib/model-viewer";
import ThreeDModel from "../../../components/custom/ThreeModel";
import { generateAvatarHair } from "../../../api/avatar.api";
import { useGlobalGenerateContext } from "../../../contexts/generateContext";
import { useGlobalContext } from "../../../contexts";
import { PullOverSvg } from "../../../components/iconComponents/PullOverSvg";
import { PantsSvg } from "../../../components/iconComponents/PantsSvg";
import { FancyDressSvg } from "../../../components/iconComponents/FancyDressSvg";
import { FancyShoeSvg } from "../../../components/iconComponents/FancyShoeSvg";
import { SweaterSvg } from "../../../components/iconComponents/SweaterSvg";
import ThreeScene from "../../../components/ThreeScene";
import { SampleAvatarCanvas } from "../../../components/model/SampleAvatarCanvas";
// import { SampleAvatarCanvas } from "../../../components/SampleAvatarCanvas";
// import Model from "../../../assets/3dmodel/earth.glb";
// import * as THREE from "three";
// import { Canvas, useLoader } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import ThreeDModel from "../../../components/custom/ThreeModel";
type Props = {
  nextStep: (e: any) => void;
  activeStep: string;
  hairName: string;
  setHairName: (hairName: string) => void;
  username: string;
  setLoading: (loading: boolean) => void;
  loading: boolean;
  avatarUrl: string;
};

export const SelectStyleStep = ({
  nextStep,
  activeStep,
  hairName,
  setHairName,
  username,
  loading,
  setLoading,
  avatarUrl,
}: Props) => {
  // hair list
  const [hairs, setHairs] = useState<Array<HairsListType>>([]);
  const { alertTrigger } = useGlobalGenerateContext();

  useEffect(() => {
    setHairs(hairsList);
    // setHairs(hairsList.filter((item) => item.tab === activeStep));
  }, []);

  const [activeSelect, setActiveSelect] = useState<
    "hair" | "shirt" | "pants" | "dress" | "shoes"
  >("hair");
  // active tab
  useEffect(() => {
    setActiveSelect("hair");
  }, []);

  useEffect(() => {
    if (activeSelect === "hair") {
      setHairs(hairsList);
    }
    if (activeSelect === "shirt") {
      setHairs(hairsList.slice(0, 4));
    }
    if (activeSelect === "pants") {
      setHairs(hairsList.slice(0, 6));
    }
    if (activeSelect === "dress") {
      setHairs(hairsList.slice(0, 3));
    }
    if (activeSelect === "shoes") {
      setHairs(hairsList.slice(0, 7));
    }
  }, [activeSelect]);

  const handleGenerateHair = (username: string, hairName: string) => {
    setLoading(true);
    // generateAvatarHair(username, hairName);
    alertTrigger("avatar with new hair style generated", "success");
  };

  // ALL FOR SAMPLE 3D AVATAR
  // hair styles
  const [hairModel, setHairModel] = useState("/sampleavatar.glb");

  console.log(avatarUrl);
  return (
    <SelectStyle>
      <div className="style-part">
        <div className={`style-box`}>
          <SampleAvatarCanvas
            avatarUrl={"/sampleavatar3.glb"}
            hairUrl={hairModel}
          />
          {/* <ModelViewer src={avatarUrl} /> */}
          {/* <ThreeScene /> */}
        </div>
      </div>
      <div className="style-contents">
        <div className="style-tabs-part">
          <PullOverSvg
            classN={`style-selector ${activeSelect === "hair" && "active_svg"}
            `}
            activateFunc={() => setActiveSelect("hair")}
          />
          <PantsSvg
            classN={`style-selector ${activeSelect === "pants" && "active_svg"}
            `}
            activateFunc={() => setActiveSelect("pants")}
          />
          <FancyDressSvg
            classN={`style-selector ${activeSelect === "dress" && "active_svg"}
            `}
            activateFunc={() => setActiveSelect("dress")}
          />
          <FancyShoeSvg
            classN={`style-selector ${activeSelect === "shoes" && "active_svg"}
            `}
            activateFunc={() => setActiveSelect("shoes")}
          />
          <SweaterSvg
            classN={`style-selector ${activeSelect === "shirt" && "active_svg"}
            `}
            activateFunc={() => setActiveSelect("shirt")}
          />
        </div>
        <div className="choose-style-part mb-auto">
          <h4 className="para">Choose Style</h4>
          <div className="choose-items">
            {hairs.map((hair) => (
              <div
                className={`choose-item cursor-pointer }`}
                onClick={() => {
                  handleGenerateHair(username, hair.name);
                }}
                style={{ position: "relative" }}
              >
                <img className="w-full h-full object-cover" src={hair.image} />

                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `#${hair.colorCode}`,
                    borderRadius: "1000px",
                    zIndex: "10",
                    textAlign: "center",
                    margin: "0 auto 0 auto",
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="button-part para">
          <ButtonSixStyled className="start-button ml-auto" onClick={nextStep}>
            <Link to={"/create-avatar"}>
              <p>continue</p>
              <div className={"icon"}>
                <ArrowRight />
              </div>
            </Link>
          </ButtonSixStyled>
        </div>
      </div>
    </SelectStyle>
  );
};
