import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useAnimationHandler } from "./AllAnimations";

type props = {
  url: string;
  hairUrl: string;
};

export function SampleAvatar({ url, hairUrl }: props) {
  const group = useRef<any>(null);
  const { scene: avatarScene, animations } = useGLTF(url) as any;
  const { actions } = useAnimations(animations, group);
  const model = useGLTF(url);
  const { nodes, materials }: any = useGLTF(url) as any;
  const headRef = useRef<any>(null);
  const armRef = useRef<any>(null);
  const handRef = useRef<any>(null);

  // useAnimationHandler({ headRef, armRef, handRef, nodes });

  // Play initial animation
  useEffect(() => {
    console.log(actions.AvatarAction);
    if (actions.AvatarAction) {
      actions.AvatarAction.play();
    }
  }, [actions]);

  useEffect(() => {
    console.log(nodes);
    console.log(group.current);
  }, []);

  // const { scene: hairScene } = useGLTF(hairUrl);

  // Auto-rotate the group
  useFrame(() => {
    group.current.rotation.y += 0.001; // Adjust the speed of rotation here
  });

  // Initial animation for scaling up the model
  const [scale, setScale] = useState<any>(0); // Initialize scale to 0
  useFrame((state) => {
    if (group.current) {
      if (scale < 1) {
        setScale((prev: any) => Math.min(prev + 0.02, 1)); // Gradually increase scale
      }
      group.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={group}>
      <primitive object={avatarScene} />
      {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes?.LeftHandRing3?.geometry}
          // material={materials.AvatarTeethLower}
        />  */}
      {/* <primitive object={hairScene} />  */}
    </group>
  );
}
