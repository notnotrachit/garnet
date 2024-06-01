"use client";

import { Chakra_Petch } from "next/font/google";
// import { createElement } from "react";
import { useState, useEffect } from "react";

const chakra = Chakra_Petch({
  weight: ["400", "600"],
  style: "normal",
  subsets: ["latin"],
});


  // setInterval(() => {
  //     element.className += "transform rotate-6";
  //     // setTimeout(() => {
  //     //     element.className += "transform rotate-0";
  //     // }, 3000);
  // }, 6000);


export default function CaruselElement(props: { content: string, init_pos: number}) {
      let initial_class = " w-[36rem] shadow-2xl text-2xl transition-all ease-in-out bg-white text-black text-center py-5 font-bold rounded-[16px]";
      if (props.init_pos === 0) {
        initial_class += " translate-0 scale-100 opacity-100";
      }
      else if (props.init_pos === 1) {
        initial_class += " -translate-y-full scale-75 opacity-75";
      }
      else if (props.init_pos === 2) {
        initial_class += " -translate-y-[175%] scale-50 opacity-50";
      }
      // else if (props.init_pos === 3) {
      //   initial_class += " -translate-y-[300%] scale-0 opacity-0";
      // }
      // else if (props.init_pos === -3) {
      //   initial_class += " translate-y-[300%] scale-0 opacity-0";
      // }
      else if (props.init_pos === -2) {
        initial_class += " translate-y-[175%] scale-50 opacity-50";
      }
      else if (props.init_pos === -1) {
        initial_class += " translate-y-full scale-75 opacity-75";
      }

      useEffect (() => {
        let pos = props.init_pos;
        function rotate_element() {
          const element = document.getElementById("carusel-element-"+props.init_pos) as HTMLElement;

          setInterval(() => {
            if (pos === 0) {
              const orig_class = element.className;
              const new_class = orig_class.replace("translate-0", "-translate-y-full").replace("scale-100", "scale-75").replace("opacity-100", "opacity-75");
              element.className = new_class;
              pos = 1;
            } else if (pos === 1) {
              const orig_class = element.className;
              const new_class = orig_class.replace("-translate-y-full", "-translate-y-[175%]").replace("scale-75", "scale-50").replace("opacity-75", "opacity-50");
              element.className = new_class;
              pos = 2;
            }
            else if (pos === 2) {
              const orig_class = element.className;
              const new_class = orig_class.replace("-translate-y-[175%]", "translate-y-[175%]");
              element.className = new_class;
              pos = -2;
            }
            else if (pos === 3) {
              const orig_class = element.className;
              const new_class = orig_class.replace("-translate-y-[300%]", "translate-y-[300%]");
              element.className = new_class;
              pos = -3;
            }
            // else if (pos === -3) {
            //   const orig_class = element.className;
            //   const new_class = orig_class.replace("translate-y-[300%]", "translate-y-[175%]").replace("scale-0", "scale-50").replace("opacity-0", "opacity-50");
            //   element.className = new_class;
            //   pos = -2;
            // }
            else if (pos === -2) {
              const orig_class = element.className;
              const new_class = orig_class.replace("translate-y-[175%]", "translate-y-full").replace("scale-50", "scale-75").replace("opacity-50", "opacity-75");
              element.className = new_class;
              pos = -1;
            }
            else if (pos === -1) {
              const orig_class = element.className;
              const new_class = orig_class.replace("translate-y-full", "translate-0").replace("scale-75", "scale-100").replace("opacity-75", "opacity-100");
              element.className = new_class;
              pos = 0;
            }
          }, 3000);
        }
        rotate_element();
    }, [props.content, props.init_pos]);
  return (
    <div
      id={"carusel-element-" + props.init_pos}
      className={
        chakra.className
        + initial_class
      }
    >
      {props.content}
    </div>
  );

}