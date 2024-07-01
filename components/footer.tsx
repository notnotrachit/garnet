"use client";
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";


export default function Footer() {
    const [email, setEmail] = useState("");

    function subscribe() {
        fetch(
          "https://script.google.com/macros/s/AKfycbzkEp7JVhf1ZSkj2LAXmWFVc0NXWI7yUk7nhmirS6FJKqrtMfyllUibiZrqoqMiCx7ekA/exec?email=" +
            email, 
            {
                method: "POST",
            }
        );
        setEmail("");
    }

    return (
              <div className="bg-white">
        <div className="py-4 md:py-10 flex justify-between mx-4 md:mx-16 text-black text-xl md:text-3xl bg-white flex-wrap">
          <div>
            <Image
              src={"/final_logo_GC_light 4.png"}
              height={400}
              width={400}
              alt="logo"
            />
          </div>
          <div className="mt-4 md:mt-0">Subscribe to be in touch</div>
        </div>
        <div className="md:mt-10 mb-2 flex mx-4 md:mx-16">
          <input
            type="text"
            placeholder="Enter your email"
            className=" text-black w-full ring-0 active:ring-0 focus:ring-0 focus:outline-none rounded-md md:text-2xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <button className=" bg-gradient-to-r from-[#8D77CC] to-[#B2F79C] via-[#7BD5FB] p-1 rounded-md group"
                onClick={subscribe}
            >
              <div className="bg-white rounded-md px-4 md:px-8 py-1 md:py-2 text-black group-hover:bg-black group-hover:text-white transition-all ease-in-out font-bold">
                Subscribe
              </div>
            </button>
          </div>
        </div>
        <div className="w-screen h-1 px-4 md:px-16 mb-8 flex justify-center">
          <div className="w-full h-full  border-t-2 border-black"></div>
        </div>
        <div className="bg-black w-full overflow-y-hidden">
          <div className="flex justify-center">
            <div className="relative text-[5.5rem] md:text-[12rem] text-stroke-2 text-center font-bold text-stroke-white text-fill-transparent">
              <div className="text-stroke-slate-800">
                GARNET
                <br />
                CLUB
              </div>
              <div className="absolute top-10 md:top-12 left-0">
                GARNET
                <br />
                CLUB
              </div>
            </div>
          </div>
          <div className="px-4 md:px-48 flex text-xl mb-96 mt-16 uppercase gap-x-28  justify-center md:justify-between flex-wrap">
            <div className="flex md:gap-x-28 justify-between w-full md:w-auto">
              <div>Solutions</div>
              <div>Quick Links</div>
              <div>Legal</div>
            </div>
            <div>
              <div className="mt-16 md:mt-0">
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
    )
}