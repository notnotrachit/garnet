"use client";

import ExpertCard from "./card";
import { useEffect } from "react";

const experts = [
  {
    id: 1,
    name: "Marc Jaison",
    title: "Founder of Garnet Club",
    image: "mark.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Ema Nicole",
    title: "Founder of Garnet Club",
    image: "ema.png",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.",
  },
  {
    id: 3,
    name: "Ken",
    title: "Founder of Garnet Club",
    image: "ken.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "Kia Zen",
    title: "Founder of Garnet Club",
    image: "kia.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function ExpertCards() {
  function changeExpert(current_expert: any, direction: any) {
    const current = document.getElementById(
      "expert_" + current_expert
    ) as HTMLElement;
    console.log("current: ", current);
    let next_expert = 0;
    if (direction == "forward") {
      next_expert = current_expert + 1;
      if (next_expert > 4) {
        next_expert = 1;
      }
    } else {
      next_expert = current_expert - 1;
      if (next_expert < 1) {
        next_expert = 4;
      }
    }
    const next = document.getElementById(
      "expert_" + next_expert
    ) as HTMLElement;
    current.classList.remove("z-10");
    current.classList.add("opacity-0");
    const current_textbox = current.querySelector("#text_box") as HTMLElement;
    current_textbox.classList.add("opacity-0");
    const current_image = current.querySelector("#expert_img") as HTMLElement;
    current_image.classList.add("opacity-0");

    next.classList.remove("opacity-0");
    next.classList.add("z-10");
    const next_textbox = next.querySelector("#text_box") as HTMLElement;
    next_textbox.classList.remove("opacity-0");
    const next_image = next.querySelector("#expert_img") as HTMLElement;
    next_image.classList.remove("opacity-0");

    const gblob1 = document.getElementById("gblob1") as HTMLElement;
    const gblob2 = document.getElementById("gblob2") as HTMLElement;
    const gblob3 = document.getElementById("gblob3") as HTMLElement;
    const gblob4 = document.getElementById("gblob4") as HTMLElement;
    if (next_expert == 1) {
      gblob1.classList.value =
        "absolute top-28 left-28 rounded-full h-2/3 aspect-square bg-[#7BD5FB]/80  blur-3xl transition-all ease-in-out duration-1000";
      gblob2.classList.value =
        "absolute bottom-28 left-[32rem] rounded-full h-96 aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000";
      gblob3.classList.value =
        "absolute top-28 right-28 rounded-full h-[32rem] aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000";
      gblob4.classList.value =
        "absolute bottom-28 right-[26rem] rounded-full h-[20rem] aspect-square bg-[#7BD5FB] blur-3xl transition-all ease-in-out duration-1000";
    } else if (next_expert == 2) {
      gblob1.classList.value =
        "absolute top-28 left-28 rounded-full h-2/3 aspect-square bg-[#7BD5FB]/80  blur-3xl transition-all ease-in-out duration-1000 scale-75 translate-y-56";
      gblob2.classList.value =
        "absolute bottom-28 left-[32rem] rounded-full h-96 aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000 scale-150 -translate-y-56";
      gblob3.classList.value =
        "absolute top-28 right-28 rounded-full h-[32rem] aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000 translate-y-72 scale-75";
      gblob4.classList.value =
        "absolute bottom-28 right-[26rem] rounded-full h-[20rem] aspect-square bg-[#7BD5FB] blur-3xl transition-all ease-in-out duration-1000 -translate-y-56 scale-[1.7]";
    } else if (next_expert == 3) {
      gblob1.classList.value =
        "absolute top-28 left-28 rounded-full h-2/3 aspect-square bg-[#7BD5FB]/80  blur-3xl transition-all ease-in-out duration-1000 scale-100 translate-y-56 translate-x-72";
      gblob2.classList.value =
        "absolute bottom-28 left-[32rem] rounded-full h-96 aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000 scale-150 -translate-y-72 -translate-x-72";
      gblob3.classList.value =
        "absolute top-28 right-28 rounded-full h-[32rem] aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000 translate-y-72 scale-75 -translate-x-56";
      gblob4.classList.value =
        "absolute bottom-28 right-[26rem] rounded-full h-[20rem] aspect-square bg-[#7BD5FB] blur-3xl transition-all ease-in-out duration-1000 -translate-y-56 scale-[2] translate-x-96";
    } else if (next_expert == 4) {
      gblob1.classList.value =
        "absolute top-28 left-28 rounded-full h-2/3 aspect-square bg-[#7BD5FB]/80  blur-3xl transition-all ease-in-out duration-1000 scale-75 translate-x-72";
      gblob2.classList.value =
        "absolute bottom-28 left-[32rem] rounded-full h-96 aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000 scale-[1.8] -translate-x-72";
      gblob3.classList.value =
        "absolute top-28 right-28 rounded-full h-[32rem] aspect-square bg-[#5000BB] blur-3xl transition-all ease-in-out duration-1000 scale-150 -translate-x-56";
      gblob4.classList.value =
        "absolute bottom-28 right-[26rem] rounded-full h-[20rem] aspect-square bg-[#7BD5FB] blur-3xl transition-all ease-in-out duration-1000 translate-y-56 scale-[0.8] translate-x-96";
    }
  }

  useEffect(() => {
    const expert1 = document.getElementById("expert_1") as HTMLElement;
    expert1.classList.remove("opacity-0");
    expert1.classList.add("z-10");
    const expert1_textbox = expert1.querySelector("#text_box") as HTMLElement;
    expert1_textbox.classList.remove("opacity-0");
    const expert1_image = expert1.querySelector("#expert_img") as HTMLElement;
    expert1_image.classList.remove("opacity-0");
  }, []);

  return (
    <>
      {experts.map((expert) => (
        <ExpertCard
          key={expert.id}
          name={expert.name}
          title={expert.title}
          image={expert.image}
          description={expert.description}
          enum={expert.id}
          changeExpert={changeExpert}
        />
      ))}
    </>
  );
}
