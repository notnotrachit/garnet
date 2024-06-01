import Image from "next/image";
import Navbar from "@/components/navbar";
import VCarusel from "@/components/vcarusel";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" mt-52 flex justify-evenly">
        <VCarusel />
        <div className="text-black">
          <ul>
            <li>Customized marketing strategies</li>
            <li>Leverage our extensive network</li>
            <li>Captivating designs and branding</li>
            <li>Captivating designs and branding</li>
          </ul>
        </div>
      </div>
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
    </>
  );
}
