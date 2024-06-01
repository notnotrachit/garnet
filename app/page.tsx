import Image from "next/image";
import Navbar from "@/components/navbar";
import VCarusel from "@/components/vcarusel";
import Gridbg from "@/components/gridbg";
import { Chakra_Petch } from "next/font/google";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={chakra_petch.className}>
      <Gridbg />
      <Navbar />
      <div className=" mt-52 flex justify-evenly space-x-72">
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
      <div className="absolute right-0 top-1/4">
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
    </div>
  );
}
