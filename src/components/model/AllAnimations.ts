import { useFrame } from "@react-three/fiber";
import { useEffect, MutableRefObject } from "react";
import { lerp } from "three/src/math/MathUtils";

interface UseAnimationHandlerProps {
  headRef: any | null;
  armRef: any | null;
  handRef: any | null;
  nodes: any;
}

export const useAnimationHandler = ({
  headRef,
  armRef,
  handRef,
  nodes,
}: UseAnimationHandlerProps) => {
  useEffect(() => {
    if (nodes && nodes.Head) {
      headRef.current = nodes.Head as any;
    }
  }, [nodes, headRef]);

  useFrame((state) => {
    if (headRef.current) {
      const time = state.clock.getElapsedTime();
      const angle = Math.sin(time) * 0.2;
      headRef.current.rotation.y = lerp(0, angle, 1);
    }
  });

  useEffect(() => {
    if (nodes && nodes.RightArm) {
      armRef.current = nodes.RightArm as any;
    }
  }, [nodes, armRef]);

  useFrame((state) => {
    if (armRef.current) {
      const time = state.clock.getElapsedTime();
      const angle = Math.sin(time) * 0.5;
      armRef.current.rotation.x = angle;
    }
  });

  useEffect(() => {
    if (nodes && nodes.RightHand) {
      handRef.current = nodes.RightHand as any;
    }
  }, [nodes, handRef]);

  useFrame((state) => {
    if (handRef.current) {
      const time = state.clock.getElapsedTime();
      const angle = Math.sin(time) * 0.5;
      handRef.current.rotation.y = angle;
    }
  });
};
