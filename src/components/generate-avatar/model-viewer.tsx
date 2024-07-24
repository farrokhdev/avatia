import React, { useEffect, Suspense } from "react";
import "@google/model-viewer/lib/model-viewer";
import { ThreeDots } from "react-loader-spinner";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;

}

const ModelViewer = (props: ModelViewerJSX) => {
  let modelpath = props.src ? props.src.replaceAll("\\", "/") : "/sampleavatar.glb";

  return (
    <Suspense fallback={null}>
      <div className="container" style={{ width: "100%", height: "100%" }}>
        <model-viewer
          id="first"
          src={modelpath}
          ios-src={props.src.replaceAll("\\", "/")}
          seamless-poster
          environment-image="neutral"
          interaction-prompt-threshold="0"
          shadow-intensity="1"
          ar={true}
          autoplay={false}
          ar-modes="webxr scene-viewer quick-look"
          auto-rotate="false"
          camera-controls={true}
          alt="3D model"
          className={"model"}
          disable-tap=""
          touch-action="pan-y"
          style={{
            width: "100%",
            height: "100%",
            background: "white",
            borderRadius: "37px",
            padding: "10px",
          }}
        >
          <div
            className="poster"
            slot="poster"
            style={{ marginTop: "calc(480px/2)", marginLeft: "calc(350px/2)" }}
          >
            <ThreeDots color={"#165ADE"} />
          </div>
        </model-viewer>
      </div>
    </Suspense>
  );
};

export default ModelViewer;
