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
import AllModels from "@/components/models/AllModels";
import Footer from "@/components/footer";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400","600", "700"],
});

export default function Home() {
  return (
    <div className={chakra_petch.className + " overflow-x-hidden"}>
      <Gridbg />
      <Navbar />
      <Balls />
      <div className="mt-36 md:mt-52 flex justify-center md:justify-between md:space-x-72 md:mx-64">
        <VCarusel />
        <div
          className="mt-36 md:mt-0 text-black font-semibold md:text-xl ml-4 md:ml-0 hidden heading_content"
          id="design_content"
        >
          <ul className="list-disc bg-gradient-to-r from-white/80 to-white">
            <li className="pl-4 md:pl-16 my-1">
              Create distinctive Web3 brand identities
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Develop eye-catching token designs
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Craft blockchain-inspired visual assets
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Design user-friendly dApp interfaces
            </li>
          </ul>
        </div>

        <div
          className="mt-36 md:mt-0 text-black font-semibold md:text-xl ml-4 md:ml-0 hidden heading_content"
          id="marketing_content"
        >
          <ul className="list-disc bg-gradient-to-r from-white/80 to-white">
            <li className="pl-4 md:pl-16 my-1">
              Develop Web3-focused marketing strategies
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Create engaging crypto-native content
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Implement token-incentivized campaigns
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Optimize for on-chain analytics
            </li>
          </ul>
        </div>

        <div
          className="mt-36 md:mt-0 text-black font-semibold md:text-xl ml-4 md:ml-0 hidden heading_content"
          id="pr_content"
        >
          <ul className="list-disc bg-gradient-to-r from-white/80 to-white">
            <li className="pl-4 md:pl-16 my-1">
              Connect with crypto thought leaders
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Organize AMAs with blockchain experts
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Secure features in Web3 publications
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Manage community-driven PR initiatives
            </li>
          </ul>
        </div>

        <div
          className="mt-36 md:mt-0 text-black font-semibold md:text-xl ml-4 md:ml-0 hidden heading_content"
          id="community_content"
        >
          <ul className="list-disc bg-gradient-to-r from-white/80 to-white">
            <li className="pl-4 md:pl-16 my-1">
              Set up and moderate Discord communities
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Implement token-based governance systems
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Create incentive structures for participation
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Develop community-driven product roadmaps
            </li>
          </ul>
        </div>

        <div
          className="mt-36 md:mt-0 text-black font-semibold md:text-xl ml-4 md:ml-0 heading_content"
          id="traffic_content"
        >
          <ul className="list-disc bg-gradient-to-r from-white/80 to-white">
            <li className="pl-4 md:pl-16 my-1">
              Optimize for Web3 search visibility
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Implement cross-chain marketing strategies
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Drive traffic through DeFi platforms
            </li>
            <li className="pl-4 md:pl-16 my-1">
              Utilize decentralized ad networks
            </li>
          </ul>
        </div>
      </div>
      <div></div>

      <div className="absolute right-0 top-1/4 mt-16 md:mt-0 w-screen">
        <div className="relative">
          <div className="absolute top-0 -right-0 md:right-0 -mr-8 md:mr-0 overflow-x-clip">
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
          <div className="fixed bottom-0 md:bottom-16 mt-72 right-0 h-[30rem] w-screen md:w-[30rem] flex z-20 pt-16">
            <RoboAModel />
          </div>
        </div>
      </div>

      <div className="uppercase text-black mt-48 md:mt-24 font-bold mx-4 md:mr-0 md:ml-16 md:text-xl">
        <div>The only growth focused</div>
        <div className="bg-gradient-to-b from-[#340272] from-40% via-[#714E9C] via-58%  to-[#C1B2D4] bg-clip-text text-4xl md:text-5xl font-bold text-transparent md:w-[30rem] text-right">
          WEB 3 MARKETING
          <br />
          AGENCY
        </div>
        <div className="md:w-[36rem] text-center mt-24 md:ml-96 text-2xl">
          Your go-to specialist
          <br />
          in web3 marketing strategies
        </div>
      </div>

      {/* <div className="flex">
        <div className="mt-16 ml-4 md:ml-24 relative py-4 px-8 text-black text-3xl md:text-5xl font-bold text-fill-transparent text-stroke-black text-stroke-2 tracking-[0.7rem] [text-shadow:_5px_15px_10px_rgb(0_0_0_/_50%)]">
          TES<span className="text-fill-black">TIMON</span>IAL
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-black w-8 h-8 rounded-tr-md"></div>
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-black w-8 h-8 rounded-bl-md"></div>
          </div>
        </div>
      </div>
      <div className="my-36 md:h-96">
        <Testimonial />
      </div> */}

      <div className="my-28 py-28">
        <Explore />
      </div>

      {/* <div>
        <Experts />
      </div> */}

      <div className="">
        <Innovation />
      </div>

      <div className="relative">
        <div className="w-full border-y-2 border-gray-400 bg-white text-gray-500">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-[20rem] md:w-[50rem] flex">
              <div className="h-[10rem] md:h-[25rem] w-[10rem] md:w-[25rem] border-l-2 border-b-2 border-gray-400 p-4 md:p-16">
                <div>
                  JOIN OUR
                  <br />
                  <span className="md:text-4xl font-bold flex text-black  items-center">
                    TELEGRAM <MdArrowOutward />
                  </span>
                </div>
              </div>
              <div className="h-[10rem] md:h-[25rem] w-[10rem] md:w-[25rem] border-x-2 border-b-2 border-gray-400 p-4 md:p-16">
                <div>
                  JOIN OUR
                  <br />
                  <span className=" md:text-4xl font-bold flex text-black  items-center">
                    LINKEDIN <MdArrowOutward />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[20rem] md:w-[50rem] flex">
              <div className="h-[10rem] md:h-[25rem] w-[10rem] md:w-[25rem] border-l-2 border-gray-400 p-4 md:p-16 flex items-end">
                <div>
                  JOIN OUR
                  <br />
                  <span className=" md:text-4xl font-bold flex text-black  items-center">
                    TWITTER <MdArrowOutward />
                  </span>
                </div>
              </div>
              <div className="h-[10rem] md:h-[25rem] w-[10rem] md:w-[25rem] border-x-2 border-gray-400 p-4 md:p-16 flex items-end">
                <div>
                  DROP US A MESSAGE
                  <br />
                  <span className=" md:text-4xl font-bold flex text-black items-center">
                    CONTACT US <MdArrowOutward />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <AllModels />
        </div>
      </div>
      <Footer />
    </div>
  );
}
  