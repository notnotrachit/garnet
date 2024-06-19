"use client";
import { useEffect } from "react";

import AnimModel1 from "@/components/models/anim1w";
import AnimModel2 from "@/components/models/anim2w";
import AnimModel3 from "@/components/models/anim3w";

export default function AllModels() {
    useEffect(() => {
        // keep changing the models every 5 seconds
        let intervalId: NodeJS.Timeout | null = null;

        let currentModel = 1;

        const model1 = document.getElementById("model1") as HTMLDivElement;
        const model2 = document.getElementById("model2") as HTMLDivElement;
        const model3 = document.getElementById("model3") as HTMLDivElement;

        const changeModel = () => {
            if (currentModel === 1) {
                model1.classList.add("opacity-0");
                model2.classList.remove("opacity-0");
                currentModel = 2;
            } else if (currentModel === 2) {
                model2.classList.add("opacity-0");
                model3.classList.remove("opacity-0");
                currentModel = 3;
            } else {
                model3.classList.add("opacity-0");
                model1.classList.remove("opacity-0");
                currentModel = 1;
            }
        };

        intervalId = setInterval(() => {
            changeModel();
        }, 5000);

    }, []);


    return (
      <div className="flex justify-center items-center w-full h-full relative">
        <div id="model1" className="w-full h-full transition-all absolute">
          <AnimModel1 />
        </div>
        <div id="model2" className="opacity-0 w-full h-full transition-all absolute">
          <AnimModel2 />
        </div>
        <div id="model3" className="opacity-0 w-full h-full transition-all absolute">
          <AnimModel3 />
        </div>
      </div>
    );
}