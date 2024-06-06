"use client";
import Image from "next/image";
import { useEffect } from "react";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";

export default function ExpertCard(props: { name: string; title: string, image: string, description: string, enum: number, changeExpert: any}) {

  useEffect(() => {
    const prev_button = document.getElementById("expert_"+props.enum+"_prev");
    const next_button = document.getElementById("expert_"+props.enum+"_next");
    prev_button?.addEventListener("click", () => {
      props.changeExpert(props.enum, "backward");
    });
    next_button?.addEventListener("click", () => {
      props.changeExpert(props.enum, "forward");
    });

  }, [props]);

  return (
    <div
      className="flex w-full h-full justify-evenly opacity-0 items-center absolute"
      id={"expert_" + props.enum}
    >
      <div className="bg-white/10 w-[46rem] p-16 rounded-xl backdrop-blur-xl transition-none">
        <div
          id="text_box"
          className="opacity-0 transition-all ease-in-out duration-1000"
        >
          <div className="text-4xl font-bold text-center mb-16">
            {props.name}
            <br />
            <span className="text-2xl font-normal">{props.title}</span>
          </div>
          <span>{props.description}</span>
          <div className="flex justify-center text-4xl mt-8 gap-12">
            <button id={"expert_" + props.enum + "_prev"}>
              <MdOutlineArrowBack className="hover:bg-white/20 rounded-full p-2" />
            </button>
            <button id={"expert_" + props.enum + "_next"}>
              <MdOutlineArrowForward className="hover:bg-white/20 rounded-full p-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* <Image src="/ball.svg" height={200} width={200} alt="ball" /> */}
        <div className="h-72 w-72 border-spacing-4 border-2 border-white rounded-full p-2">
          <div className="h-full w-full bg-white p-2 rounded-full opacity-0 transition-all ease-in-out duration-1000" id="expert_img">
            <Image
              src={"/experts/" + props.image}
              height={200}
              width={200}
              alt="Mark"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
