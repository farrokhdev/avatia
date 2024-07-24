import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Bounds,
  OrbitControls,
  useGLTF,
  DragControls,
  SpotLight,
} from "@react-three/drei";
import { SampleAvatar } from "./SampleAvatar";

type props2 = {
  avatarUrl: string;
  hairUrl: string;
};

export function SampleAvatarCanvas({ avatarUrl, hairUrl }: props2) {
  return (
    <Canvas
      // autoFocus
      style={{ background: "white", width: "100%", height: "100%" }}
      gl={{ alpha: false, antialias: true }}
      camera={{
        position: [0, 0, 5],
        near: 0.1,
        far: 1000, // Far clipping plane
        fov: 50, // Field of view
        zoom: 2.2, // Zoom factor
        // Uncomment the following line to make the camera look at a specific point
        // lookAt: [0, 0, 0],
      }}
    >
      <color attach="background" args={["white"]} />
      {/* <Suspense fallback={null}> */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 4, 5]} intensity={1} />
      <spotLight
        position={[5, 4, 5]}
        // position={[10, 10, 10]}
        angle={0.15}
        penumbra={5}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Bounds clip observe margin={1}>
        <SampleAvatar url={avatarUrl} hairUrl={hairUrl} />
      </Bounds>
      {/* </Suspense> */}
      <OrbitControls
        target={[0, 0.9, 0]} // Set the initial target to the center of the avatar
        // enableRotate={false}
        // enablePan={false}
        // enableZoom={false}
        mouseButtons={{
          LEFT: 0, // left-click for rotate
          MIDDLE: 1, // middle-click for zoom
          RIGHT: 2, // right-click for pan
        }}
      />
    </Canvas>
  );
}
