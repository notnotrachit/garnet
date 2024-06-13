import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    });

export default function InnovationCard(props: {name: string, category: string, image: string}) {
    return (
      <>
        <div className=" w-72 h-36 border-black border-2 p-2 rounded-xl mx-4 bg-white text-black shrink-0" id={props.name}>
          <div className="w-full h-full relative px-4 py-1">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-black rounded-tr-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black rounded-br-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-black rounded-bl-lg"></div>
            <div className="relative h-full">
              <div className="top-0 left-0 flex justify-between mt-1 items-center">
                <Image
                  src={"/innovations/" + props.image + ".png"}
                  width={50}
                  height={50}
                  alt={props.name}
                />
                <button className=" bg-gradient-to-r from-[#8D77CC] to-[#B2F79C] via-[#7BD5FB] p-[0.18rem] rounded-md group">
                  <div className="rounded-md py-1 w-32 bg-black text-white transition-all ease-in-out font-semibold text-sm">
                    {props.category}
                  </div>
                </button>
              </div>
              <div
                className={
                  "absolute bottom-0 left-0 text-2xl ml-4 font-bold " +
                  inter.className
                }
              >
                {props.name}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}