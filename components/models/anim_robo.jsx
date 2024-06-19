"use client";

import React, { use, useRef } from "react";
import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export function RoboModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/robo-model-animated.glb");
  const { actions } = useAnimations(animations, group);
  //   useFrame(() => {
  //   console.log("Hey, I'm executing every frame!")
  // })
  console.log("actions")
  console.log(actions)
  // play all animations
  useEffect(() => {
    for (const action in actions) {
      actions[action].play();
      console.log("action")
    }

  }, [actions]);

    useEffect(() => {
      // when user scrolls down, reduce the size of the model
      const handleScroll = () => {
      if (window.scrollY > 500) {
        const scaleFactor = Math.max(0, 2 - (window.scrollY - 500) / 1000);
        group.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      } else {
        const scaleFactor = 1 + (window.scrollY / 500);
        group.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
      window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.robo}
          position={[-0.003, -0.308, -0.027]}
          rotation={[0, -0.436, 0]}
        />
        <mesh
          name="face"
          geometry={nodes.face.geometry}
          material={materials["Material.002"]}
          position={[-0.009, -0.308, -0.013]}
          rotation={[0, -0.436, 0]}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials.eyes}
          position={[-0.311, 0.834, 0.604]}
          rotation={[1.427, -0.067, 0.432]}
          scale={[0.103, 0.01, 0.24]}
        />
        <group
          name="Headfphone"
          position={[-0.019, 1.624, -0.034]}
          rotation={[-Math.PI / 2, 0, -0.436]}
          scale={[0.371, 0.153, 0.3]}
        />
        <mesh
          name="Headfphone_Material003_0002"
          geometry={nodes.Headfphone_Material003_0002.geometry}
          material={materials["Material.003"]}
          position={[-0.019, -0.308, -0.034]}
          rotation={[-Math.PI / 2, 0, -0.436]}
          scale={[0.371, 0.153, 0.3]}
        />
        <mesh
          name="Headfphone_Material005_0001"
          geometry={nodes.Headfphone_Material005_0001.geometry}
          material={materials["Material.006"]}
          position={[-0.019, -0.308, -0.034]}
          rotation={[-Math.PI / 2, 0, -0.436]}
          scale={[0.371, 0.153, 0.3]}
        />
        <group
          name="Headfphone_Material009_0"
          position={[-0.019, -0.308, -0.034]}
          rotation={[-Math.PI / 2, 0, -0.436]}
          scale={[0.371, 0.153, 0.3]}
        >
          <mesh
            name="Headfphone_Material009_0_1"
            geometry={nodes.Headfphone_Material009_0_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Headfphone_Material009_0_2"
            geometry={nodes.Headfphone_Material009_0_2.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Headfphone_Material009_0_3"
            geometry={nodes.Headfphone_Material009_0_3.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Headfphone_Material009_0_4"
            geometry={nodes.Headfphone_Material009_0_4.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Headfphone_Material_0007"
          position={[-0.019, -0.308, -0.034]}
          rotation={[-Math.PI / 2, 0, -0.436]}
          scale={[0.371, 0.153, 0.3]}
        >
          <mesh
            name="Headfphone_Material_0007_1"
            geometry={nodes.Headfphone_Material_0007_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Headfphone_Material_0007_2"
            geometry={nodes.Headfphone_Material_0007_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Headfphone_Material_0007_3"
            geometry={nodes.Headfphone_Material_0007_3.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group
          name="Pink_Headphonefbx"
          position={[-0.019, 1.624, -0.034]}
          rotation={[0, -0.436, 0]}
          scale={[0.004, 0.003, 0.003]}
        />
        <group
          name="RootNode"
          position={[-0.019, 1.624, -0.034]}
          rotation={[0, -0.436, 0]}
          scale={[0.004, 0.003, 0.003]}
        />
        <group
          name="Sketchfab_model"
          position={[-0.019, 1.624, -0.034]}
          rotation={[-Math.PI / 2, 0, -0.436]}
          scale={[0.371, 0.3, 0.3]}
        />
        <mesh
          name="Object_6"
          geometry={nodes.Object_6.geometry}
          material={materials["Material.035"]}
          position={[-0.712, 0, -1.305]}
          rotation={[0, -0.436, 0]}
          scale={0.1}
        />
        <mesh
          name="Object_6001"
          geometry={nodes.Object_6001.geometry}
          material={materials["Material.035"]}
          position={[0.723, 0, 1.251]}
          rotation={[0, -0.436, 0]}
          scale={0.1}
        />
        <mesh
          name="Object_6002"
          geometry={nodes.Object_6002.geometry}
          material={materials["Material.035"]}
          position={[0.007, 2.204, -0.022]}
          rotation={[0, -0.436, 0]}
          scale={0.1}
        />
        <mesh
          name="Object_6003"
          geometry={nodes.Object_6003.geometry}
          material={materials["Material.035"]}
          position={[1.34, 1.046, -0.508]}
          rotation={[0, -0.436, 0]}
          scale={0.1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/robo-model-animated.glb");
