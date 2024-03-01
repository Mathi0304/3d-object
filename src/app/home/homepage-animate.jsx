"use client";
import React, { useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export function Model(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('/Homepage.glb')
  const { actions } = useAnimations(animations, group);

  const [active, setActive] = useState(false);

  // // Access the animation mixer and set playback speed
  useFrame(() => {
    group.current.rotation.x += -0.002;
    group.current.rotation.y += -0.002;
    group.current.rotation.z += -0.002;

    // Assuming there's a mixer and animations, adjust the speed as needed
    if (group.current && group.current.mixer) {
      group.current.mixer.timeScale = 0.001; // Adjust speed, 1 is normal speed
    }
  });

  useEffect(() => {
    actions?.Animation?.play();
  }),
    [actions];

  const { scale, translateX, translateY, translateZ } = useSpring({
    // scale: active ? 0.7 : 0.6,
    translateX: active ? 0.05 : 0,
    translateY: active ? 0.02 : 0,
    translateZ: active ? 0.02 : 0, // Adjust the horizontal translation
    config: config.wobbly,
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <group name="Scene">
        <animated.mesh
          scale={scale}
          position-x={translateX}
          position-y={translateY}
          position-z={translateZ}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[-0.001, -0.001, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["Material.005"]}
            position={[-0.001, -0.001, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials["Material.005"]}
            position={[-0.001, -0.001, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={materials["Material.006"]}
            position={[-0.001, 0.204, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={materials["Material.003"]}
            position={[-0.001, 0.204, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={materials["Material.006"]}
            position={[-0.001, 0.204, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={materials["Material.006"]}
            position={[-0.001, -0.205, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={materials["Material.003"]}
            position={[-0.001, -0.205, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube008"
            geometry={nodes.Cube008.geometry}
            material={materials["Material.003"]}
            position={[-0.001, -0.205, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube009"
            geometry={nodes.Cube009.geometry}
            material={materials["Material.006"]}
            position={[0.203, -0.001, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube010"
            geometry={nodes.Cube010.geometry}
            material={materials["Material.005"]}
            position={[0.203, -0.001, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube011"
            geometry={nodes.Cube011.geometry}
            material={materials["Material.005"]}
            position={[0.203, -0.001, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube012"
            geometry={nodes.Cube012.geometry}
            material={materials["Material.003"]}
            position={[0.203, 0.204, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube013"
            geometry={nodes.Cube013.geometry}
            material={materials["Material.006"]}
            position={[0.203, 0.204, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube014"
            geometry={nodes.Cube014.geometry}
            material={materials["Material.006"]}
            position={[0.203, 0.204, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube015"
            geometry={nodes.Cube015.geometry}
            material={materials["Material.003"]}
            position={[0.203, -0.205, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube016"
            geometry={nodes.Cube016.geometry}
            material={materials["Material.006"]}
            position={[0.203, -0.205, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube017"
            geometry={nodes.Cube017.geometry}
            material={materials["Material.003"]}
            position={[0.203, -0.205, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube018"
            geometry={nodes.Cube018.geometry}
            material={materials["Material.005"]}
            position={[-0.206, -0.001, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube019"
            geometry={nodes.Cube019.geometry}
            material={materials["Material.003"]}
            position={[-0.206, -0.001, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube020"
            geometry={nodes.Cube020.geometry}
            material={materials["Material.003"]}
            position={[-0.206, -0.001, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube021"
            geometry={nodes.Cube021.geometry}
            material={materials["Material.003"]}
            position={[-0.206, 0.204, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube022"
            geometry={nodes.Cube022.geometry}
            material={materials["Material.006"]}
            position={[-0.206, 0.204, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube023"
            geometry={nodes.Cube023.geometry}
            material={materials["Material.005"]}
            position={[-0.206, 0.204, 0.203]}
            scale={0.101}
          />
          <mesh
            name="Cube024"
            geometry={nodes.Cube024.geometry}
            material={materials["Material.003"]}
            position={[-0.206, -0.205, 0]}
            scale={0.101}
          />
          <mesh
            name="Cube025"
            geometry={nodes.Cube025.geometry}
            material={materials["Material.005"]}
            position={[-0.206, -0.205, -0.204]}
            scale={0.101}
          />
          <mesh
            name="Cube026"
            geometry={nodes.Cube026.geometry}
            material={materials["Material.006"]}
            position={[-0.206, -0.205, 0.203]}
            scale={0.101}
          />
        </animated.mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/Homepage.glb');

const HomeBannerAnimate = () => {
  return (
    <Canvas shadows={true} camera={{ position: [100, 0, 150], fov: 40 }}>
      <Model position={[0, -1, 0]} scale={80} />
      <ambientLight intensity={0.7} />
      <directionalLight />
    </Canvas>
  );
};

export default HomeBannerAnimate;
