import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function Model1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/1-animated.glb')
  const { actions } = useAnimations(animations, group)
    useEffect(() => {
    for (const action in actions) {
      actions[action].setLoop(THREE.LoopPingPong);
      actions[action].play();

    }

  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.blue}
          position={[0, -0.459, 0]}
          scale={0.8}
        />
        <group
          name="Moniter"
          position={[0, -0.16, 0.16]}
          rotation={[0, -1.571, 0]}
          scale={[0.067, 0.191, 0.339]}>
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.crayfishdiffuse}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.W}
          />
          <mesh
            name="Cube002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.a}
          />
        </group>
        <mesh
          name="Object_3"
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
          position={[-0.629, 0.075, -0.042]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.1, 0.222, 0.1]}
        />
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['03___Default.001']}
          position={[-0.381, 0.5, 0.009]}
          rotation={[2.289, -0.013, 0.775]}
          scale={0}
        />
        <mesh
          name="Moniter001"
          castShadow
          receiveShadow
          geometry={nodes.Moniter001.geometry}
          material={materials.blue}
          position={[0, -0.16, 0.16]}
          rotation={[0, -1.571, 0]}
          scale={[0.067, 0.191, 0.339]}
        />
        <group name="Circle007" position={[0.703, -0.03, -0.018]} scale={[0.173, 0.173, 1]}>
          <mesh
            name="Circle007_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials.blue}
          />
          <mesh
            name="Circle007_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_2.geometry}
            material={materials['Scene_-_Root']}
          />
        </group>
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['Scene_-_Root']}
          position={[0.359, -0.085, -0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.011, 0.02, 0.011]}
        />
        <group
          name="e515dcd662734215ae119892056ced84fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <group name="RootNode">
            <group
              name="Mball031"
              position={[0, 1261.193, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={121.321}>
              <mesh
                name="Mball031__0"
                castShadow
                receiveShadow
                geometry={nodes.Mball031__0.geometry}
                material={materials['Scene_-_Root']}
                position={[0.581, -0.035, -10.392]}
                scale={[0.02, 0.02, 0.01]}
              />
            </group>
          </group>
        </group>
        <mesh
          name="GoldCoinBlank_GoldCoinBlank_0"
          castShadow
          receiveShadow
          geometry={nodes.GoldCoinBlank_GoldCoinBlank_0.geometry}
          material={materials.GoldCoinBlank}
          scale={[1.411, 1.411, 1]}
        />
        <group
          name="Sketchfab_model"
          position={[0.336, 0.714, 0.039]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={0.1}>
          <group name="zbrush_concatosgbcleanermaterialmergergles">
            <group name="sketchfab-dataprocessingmodels5ac6d7c127cb401998dfe3cbe">
              <group name="Object_6" position={[0, -0.713, -1.601]} scale={[1, 0.599, 1]}>
                <mesh
                  name="Object_2002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2002.geometry}
                  material={materials.blue}
                />
                <mesh
                  name="Object_2002_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2002_1.geometry}
                  material={materials.material_2}
                />
                <mesh
                  name="Object_2002_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_2002_2.geometry}
                  material={materials.material_0}
                />
              </group>
            </group>
            <group name="sketchfab-dataprocessingmodels5ac6d7c127cb401998dfe3cbe001" />
            <group name="sketchfab-dataprocessingmodels5ac6d7c127cb401998dfe3cbeb15b" />
          </group>
        </group>
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Scene_-_Root']}
          position={[0.359, -0.085, -0.003]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.011, 0.02, 0.011]}
        />
        <mesh
          name="Cylinder010"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials['Scene_-_Root']}
          position={[0.359, -0.085, -0.003]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.011, 0.02, 0.011]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/1-animated.glb')

