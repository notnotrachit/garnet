import Image from "next/image";
import Navbar from "@/components/navbar";
import VCarusel from "@/components/vcarusel";
import Gridbg from "@/components/gridbg";
import Balls from "@/components/balls";
import Testimonial from "@/components/testimonials";
import Explore from "@/components/explore";
import { Chakra_Petch } from "next/font/google";
import Experts from "@/components/experts";
import Innovation from "@/components/innovation";
import { MdArrowOutward } from "react-icons/md";
import { RoboAModel } from "@/components/models/robo";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400","600", "700"],
});

export default function Home() {
  return (
    <div className={chakra_petch.className}>
      <Gridbg />
      <Navbar />
      <Balls />
      <div className=" mt-52 flex justify-between space-x-72 mx-64">
        <VCarusel />
        <div className="text-black font-semibold text-xl">
          <ul className="list-disc bg-gradient-to-r from-white/80 to-white">
            <li className="pl-16 my-1">Customized marketing strategies</li>
            <li className="pl-16 my-1">Leverage our extensive network</li>
            <li className="pl-16 my-1">Captivating designs and branding</li>
            <li className="pl-16 my-1">Captivating designs and branding</li>
          </ul>
        </div>
      </div>
      <div></div>
      <div className="absolute right-0 top-1/4">
        <div className="relative">
          <div className="absolute top-0 right-0">
            <svg
              width="760"
              height="910"
              viewBox="0 0 760 910"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_130_58)">
                <circle cx="455" cy="455" r="155" fill="#350372" />
              </g>
              <defs>
                <filter
                  id="filter0_f_130_58"
                  x="0"
                  y="0"
                  width="910"
                  height="910"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_130_58"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="fixed bottom-16 mt-72 right-0 h-96 w-96 flex z-20">
            <RoboAModel />
          </div>
        </div>
      </div>
      <div className="uppercase text-black mt-24 font-bold ml-16 text-xl">
        <div>The only growth focused</div>
        <div className="bg-gradient-to-b from-[#340272] from-40% via-[#714E9C] via-58%  to-[#C1B2D4] bg-clip-text text-5xl font-bold text-transparent w-[30rem] text-right">
          WEB 3 MARKETING
          <br />
          AGENCY
        </div>
        <div className="w-[36rem] text-center mt-24 ml-96 text-2xl">
          Your go-to specialist
          <br />
          in web3 marketing strategies
        </div>
      </div>
      <div className="flex">
        <div className="mt-16 ml-24 relative py-4 px-8 text-black text-5xl font-bold text-fill-transparent text-stroke-black text-stroke-2 tracking-[0.7rem] [text-shadow:_5px_15px_10px_rgb(0_0_0_/_50%)]">
          TES<span className="text-fill-black">TIMON</span>IAL
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-black w-8 h-8 rounded-tr-md"></div>
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-black w-8 h-8 rounded-bl-md"></div>
          </div>
        </div>
      </div>
      <div className="my-36 h-96">
        <Testimonial />
      </div>

      <div className="my-28 py-28">
        <Explore />
      </div>
      <div>
        <Experts />
      </div>
      <div className="">
        <Innovation />
      </div>
      <div className="bg-white">
        <div className="py-10 flex justify-between mx-16 text-black text-3xl bg-white">
          <div>
            <Image
              src={"/final_logo_GC_light 4.png"}
              height={400}
              width={400}
              alt="logo"
            />
          </div>
          <div>Subscribe to be in touch</div>
        </div>
        <div className="mt-10 mb-2 flex mx-16">
          <input
            type="text"
            placeholder="Enter your email"
            className=" text-black w-full ring-0 active:ring-0 focus:ring-0 focus:outline-none rounded-md text-2xl"
          />
          <div>
            <button className=" bg-gradient-to-r from-[#8D77CC] to-[#B2F79C] via-[#7BD5FB] p-1 rounded-md group">
              <div className="bg-white rounded-md px-8 py-2 text-black group-hover:bg-black group-hover:text-white transition-all ease-in-out font-bold">
                Subscribe
              </div>
            </button>
          </div>
        </div>
        <div className="w-screen h-1 px-16 mb-8 flex justify-center">
          <div className="w-full h-full  border-t-2 border-black"></div>
        </div>
        <div className="bg-black w-full overflow-y-hidden">
          <div className="flex justify-center">
            <div className="relative text-[12rem] text-stroke-2 text-center font-bold text-stroke-white text-fill-transparent">
              <div className="text-stroke-slate-800">
                GARNET
                <br />
                CLUB
              </div>
              <div className="absolute top-12 left-0">
                GARNET
                <br />
                CLUB
              </div>
            </div>
          </div>
          <div className="px-48 flex text-xl mb-96 mt-16 uppercase gap-x-28 justify-between">
            <div className="flex gap-x-28">
              <div>Solutions</div>
              <div>Quick Links</div>
              <div>Legal</div>
            </div>
            <div>
              <div className="">
                <div className="">
                  <span className="flex items-center gap-2">
                    Telegram <MdArrowOutward />
                  </span>
                  <span className="flex items-center gap-2">
                    LinkedIn <MdArrowOutward />
                  </span>
                  <span className="flex items-center gap-2">
                    Twitter <MdArrowOutward />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
