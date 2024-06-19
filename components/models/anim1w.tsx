"use client";

import { RoboModel } from "@/components/models/anim_robo";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect } from "react";
import { Model1 } from "@/components/models/anim1";

export default function AnimModel1() {
  return (
    <div id="anim1_model" className="flex w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Model1 />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
