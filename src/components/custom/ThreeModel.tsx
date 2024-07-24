import React, { useRef, useEffect, startTransition, Suspense } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Stats,
  OrbitControls,
  Circle,
  useGLTF,
  PresentationControls,
  Stage,
  Environment,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";

interface ThreeDModelProps {
  modelPath?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({
  modelPath = "/sampleavatar.glb",
}) => {
  const model = useGLTF(modelPath);
  console.log(model);

  return (
    <Canvas
      // dpr={[1, 2]}
      // shadows
      // camera={{ fov: 45 }}
      style={{ width: "100%", height: "500px" }}
    >
      <Environment preset="sunset">
        <OrbitControls
          enableZoom={false}
          // autoRotate={true}
          // rotateSpeed={200}
        />
        <primitive object={model.scene} scale={0.01} />
      </Environment>
      {/* <PresentationControls speed={1.5} zoom={0.5} polar={[-0.1, Math.PI / 4]}> */}

      {/* // </PresentationControls> */}

      {/* <Suspense fallback={null}> */}

      {/* </Suspense> */}
    </Canvas>
  );
};

export default ThreeDModel;

useGLTF.preload("/earth.glb");
