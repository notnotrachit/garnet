import Image from "next/image"

import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({ weight: ["400","600"], style: "normal", subsets: ["latin"]});


export default function Navbar() {
    return (
      <>
        <div className="flex justify-between p-5 bg-gradient-to-t from-white/0 to-white flex-wrap">
          <div className="flex items-center justify-center w-full md:w-auto">
            <Image
              src="/final_logo_GC_light 4.png"
              alt="logo"
              width={300}
              height={300}
            />
          </div>
          <div className="flex items-center">
            <div className="flex md:space-x-10 space-x-2 text-black w-full font-bold items-center flex-wrap md:justify-center justify-evenly">
              <div className={"group text-2xl hover:scale-105 transition-all " + chakra.className}>
                <span>Company</span>
                <div className="justify-center px-4">
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#350372] origin-center"></span>
                </div>
              </div>
              <div className={"group text-2xl hover:scale-105 transition-all " + chakra.className}>
                <span>Our Services</span>
                <div className="justify-center px-4">
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#350372] origin-center"></span>
                </div>
              </div>
              <div className={"group text-2xl hover:scale-105 transition-all " + chakra.className}>
                <span>Clients</span>
                <div className="justify-center px-4">
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#350372] origin-center"></span>
                </div>
              </div>
              <div className={"group text-2xl hover:scale-105 transition-all " + chakra.className}>
                <span>Learn & Earn</span>
                <div className="justify-center px-4">
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#350372] origin-center"></span>
                </div>
              </div>
              <div className={"group text-2xl hover:scale-105 transition-all " + chakra.className}>
                <span>FAQs</span>
                <div className="justify-center px-4">
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#350372] origin-center"></span>
                </div>
              </div>

              {/* <div className={"text-2xl " + chakra.className}>Our Services</div>
              <div className={"text-2xl " + chakra.className}>Clients</div>
              <div className={"text-2xl " + chakra.className}>Learn & Earn</div>
              <div className={"text-2xl " + chakra.className}>FAQs</div> */}
            </div>
          </div>
          <div className="flex w-full md:w-auto justify-center z-10">
            <button className=" bg-gradient-to-r from-[#8D77CC] to-[#B2F79C] via-[#7BD5FB] p-1 rounded-md">
              <div className="bg-black rounded-md px-3 py-2">
                Let&apos;s Collaborate
              </div>
            </button>
          </div>
        </div>
      </>
    );
}