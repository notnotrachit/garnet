import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function Model2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/2-animated.glb')
  const { actions } = useAnimations(animations, group)
      useEffect(() => {
    for (const action in actions) {
        actions[action].setLoop(THREE.LoopPingPong);
        actions[action].play();
    }

  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null} scale={1.2}>
      <group name="Scene">
        <group
          name="Sketchfab_model001"
          position={[0, 1.006, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.012, 0.012, 0.01]}>
          <group name="d6a66310c4f7418caf076beacb8ad147fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode001">
                <group name="Null" position={[0, -45.777, 0]}>
                  <group name="Null_1" position={[0, -2.456, 0]}>
                    <mesh
                      name="Null_1_Mat1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1_Mat1_0.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group name="Null_2" position={[0, 20.267, 0]}>
                    <mesh
                      name="Null_2_Mat1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_2_Mat1_0.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Объект_Ноль1"
          castShadow
          receiveShadow
          geometry={nodes.Объект_Ноль1.geometry}
          material={materials['default']}
          position={[0, 0.157, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          name="Cylinder002__0"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002__0.geometry}
          material={materials['Scene_-_Root.001']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/2-animated.glb')