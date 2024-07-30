import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';

export function Model3(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3-animated.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    for (const action in actions) {
    //   actions[action].play();
      let actionN = actions[action];
      actionN.setLoop(THREE.LoopPingPong);
      actionN.play();
    }

  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={[0.7,0.7,0.7]}>
      <group name="Scene">
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.gradient}
          position={[-2.311, 1.422, 0]}
          scale={[0.582, 0.037, 0.582]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.gradient}
          position={[0, 1.993, 0]}
          scale={[0.838, 0.048, 0.838]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.gradient}
          position={[2.338, 1.422, 0]}
          scale={[0.582, 0.027, 0.582]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.blue}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['blue emission']}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.blue}
          position={[-2.311, 0, 0]}
          scale={0.7}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['blue emission']}
          position={[-2.311, 0, 0]}
          scale={0.7}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.blue}
          position={[2.338, 0, 0]}
          scale={0.7}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['blue emission']}
          position={[2.338, 0, 0]}
          scale={0.7}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['robo.002']}
          position={[2.34, 0.609, 0.062]}
          rotation={[0, -0.296, 0]}
          scale={0.05}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['eyes.002']}
          position={[2.329, 0.666, 0.096]}
          rotation={[1.419, -0.046, 0.292]}
          scale={[0.005, 0.001, 0.012]}
        />
        <mesh
          name="face"
          castShadow
          receiveShadow
          geometry={nodes.face.geometry}
          material={materials['Material.020']}
          position={[2.34, 0.609, 0.063]}
          rotation={[0, -0.296, 0]}
          scale={0.05}
        />
        <group
          name="Headfphone"
          position={[2.339, 0.705, 0.062]}
          rotation={[-Math.PI / 2, 0, -0.296]}
          scale={[0.019, 0.008, 0.015]}
        />
        <mesh
          name="Headfphone_Material003_0002"
          castShadow
          receiveShadow
          geometry={nodes.Headfphone_Material003_0002.geometry}
          material={materials['Material.021']}
          position={[2.339, 0.609, 0.062]}
          rotation={[-Math.PI / 2, 0, -0.296]}
          scale={[0.019, 0.008, 0.015]}
        />
        <mesh
          name="Headfphone_Material005_0001"
          castShadow
          receiveShadow
          geometry={nodes.Headfphone_Material005_0001.geometry}
          material={materials['Material.022']}
          position={[2.339, 0.609, 0.062]}
          rotation={[-Math.PI / 2, 0, -0.296]}
          scale={[0.019, 0.008, 0.015]}
        />
        <group
          name="Headfphone_Material009_0"
          position={[2.339, 0.609, 0.062]}
          rotation={[-Math.PI / 2, 0, -0.296]}
          scale={[0.019, 0.008, 0.015]}>
          <mesh
            name="Headfphone_Material009_0002"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material009_0002.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Headfphone_Material009_0002_1"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material009_0002_1.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Headfphone_Material009_0002_2"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material009_0002_2.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Headfphone_Material009_0002_3"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material009_0002_3.geometry}
            material={materials['Material.026']}
          />
        </group>
        <group
          name="Headfphone_Material_0007"
          position={[2.339, 0.609, 0.062]}
          rotation={[-Math.PI / 2, 0, -0.296]}
          scale={[0.019, 0.008, 0.015]}>
          <mesh
            name="Headfphone_Material_0002"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material_0002.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Headfphone_Material_0002_1"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material_0002_1.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Headfphone_Material_0002_2"
            castShadow
            receiveShadow
            geometry={nodes.Headfphone_Material_0002_2.geometry}
            material={materials['Material.021']}
          />
        </group>
        <mesh
          name="Object_2001"
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['blue emission.001']}
          position={[-0.254, 2.028, 0]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.001}
        />
        <group
          name="Pink_Headphonefbx"
          position={[2.339, 0.705, 0.062]}
          rotation={[0, -0.296, 0]}
          scale={0}
        />
        <group
          name="RootNode003"
          position={[2.339, 0.705, 0.062]}
          rotation={[0, -0.296, 0]}
          scale={0}
        />
        <group
          name="Sketchfab_model003"
          position={[2.339, 0.705, 0.062]}
          rotation={[-Math.PI / 2, 0, -0.296]}
          scale={[0.019, 0.015, 0.015]}
        />
        <group name="Circle_77" position={[-1.117, 3.357, -0.359]} rotation={[0, 0, -1.076]}>
          <group name="Object_85" position={[1.466, -2.246, 0]} scale={0.022}>
            <mesh
              name="Object_42"
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials.Coin}
            />
            <mesh
              name="Object_42_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_42_1.geometry}
              material={materials.Material}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model004"
          position={[-0.152, 1.6, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.186}>
          <group
            name="58a27246ae464271b784cb2a9caa44c2fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode004">
              <group name="Coin">
                <group name="Coin_Coin_0001" position={[18.639, -27.836, 0.022]} scale={0.684}>
                  <mesh
                    name="Coin_Coin_0001_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_Coin_0001_1.geometry}
                    material={materials.Coin}
                  />
                  <mesh
                    name="Coin_Coin_0001_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_Coin_0001_2.geometry}
                    material={materials['blue emission.002']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model005"
          position={[-0.159, 1.582, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.012}>
          <group name="Pickaxeobjcleanermaterialmergergles">
            <group name="Object_3001">
              <mesh
                name="Object_1001"
                castShadow
                receiveShadow
                geometry={nodes.Object_1001.geometry}
                material={materials.Coin}
              />
              <mesh
                name="Object_1001_1"
                castShadow
                receiveShadow
                geometry={nodes.Object_1001_1.geometry}
                material={materials['blue emission']}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['4.001']}
          position={[-2.311, 0, 0]}
          scale={0.7}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials['4.001']}
          position={[2.338, 0, 0]}
          scale={0.7}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3-animated.glb')

