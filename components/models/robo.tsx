"use client";

import { RoboModel } from "@/components/models/anim_robo";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export function RoboAModel() {

  return (
    <div id="robo_model" className="transitions-all">
      <Canvas>
        <Suspense fallback={null}>
          <RoboModel />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
