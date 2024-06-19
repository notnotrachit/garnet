"use client";

import { RoboModel } from "@/components/models/anim_robo";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect } from "react";
export function RoboAModel() {

  useEffect(() => {
    // when use scrolls down, reduce the size of the model
    const robo_model = document.getElementById("robo_model") as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // robo_model.classList.add("scale-50");
        null;
      } else {
        // robo_model.classList.remove("scale-50");
        null;
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);


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
