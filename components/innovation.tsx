"use client";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import InnovationCard from "./innovation/card";
import { MdArrowOutward } from "react-icons/md";

export default function Innovation() {

  // useEffect(() => {
  //   let intervalId: NodeJS.Timeout | null = null;
  //   let intervalId2: NodeJS.Timeout | null = null;
  //   let intervalId3: NodeJS.Timeout | null = null;

  //   let scrolldir1 = 1;
  //   let scrolldir2 = -1;
  //   let scrolldir3 = 1;

  //   const scroll2 = document.getElementById(
  //     "innovation_scroll_2"
  //   ) as HTMLDivElement;
  //   scroll2.scrollLeft = scroll2.scrollWidth - scroll2.clientWidth +2;

  //   // const startScrolling1 = () => {
  //   //   intervalId = setInterval(() => {
  //   //     const scroll = document.getElementById("innovation_scroll_1") as HTMLDivElement;
  //   //     if (scroll) {
  //   //       console.log(
  //   //         scroll.scrollLeft,
  //   //         scroll.scrollWidth - scroll.clientWidth,
  //   //         scrolldir1
  //   //       );
  //   //       if (scroll.scrollLeft > scroll.scrollWidth - scroll.clientWidth) {
  //   //         scrolldir1=-1;  
  //   //         console.log("setted scroll to -1", scrolldir1);
  //   //       }
  //   //       if (scroll.scrollLeft < 0) {
  //   //         scrolldir1=1;
  //   //         console.log("scrollDirection", scrolldir1);
  //   //       }
  //   //       console.log("scrolling dir",scrolldir1);
  //   //       scroll.scrollLeft += scrolldir1;
  //   //       console.log("scrolling new", scroll.scrollLeft);
  //   //     }
  //   //   }, 10);
  //   // };

  //   // const startScrolling2 = () => {
  //   //   intervalId2 = setInterval(() => {
  //   //     const scroll2 = document.getElementById(
  //   //       "innovation_scroll_2"
  //   //     ) as HTMLDivElement;
  //   //     if (scroll2) {
  //   //       if (
  //   //         scroll2.scrollLeft >=
  //   //         scroll2.scrollWidth - scroll2.clientWidth - 3
  //   //       ) {
  //   //         scrolldir2 = -1;
  //   //       }
  //   //       if (scroll2.scrollLeft <= 0) {
  //   //         scrolldir3 = 1;
  //   //       }
  //   //       scroll2.scrollLeft += 1 * scrolldir2;
  //   //     }
  //   //   }, 15);
  //   // };

  //   // const startScrolling3 = () => {
  //   //   intervalId3 = setInterval(() => {
  //   //     const scroll3 = document.getElementById(
  //   //       "innovation_scroll_3"
  //   //     ) as HTMLDivElement;
  //   //     if (scroll3) {
  //   //       if (
  //   //         scroll3.scrollLeft >=
  //   //         scroll3.scrollWidth - scroll3.clientWidth - 3
  //   //       ) {
  //   //         scrolldir3 = -1;
  //   //       }
  //   //       if (scroll3.scrollLeft <= 0) {
  //   //         scrolldir3 = 1;
  //   //       }
  //   //       scroll3.scrollLeft += 1 * scrolldir3;
  //   //     }
  //   //   }, 10);
  //   // };

  //   // const stopScrolling1 = () => {
  //   //   if (intervalId) {
  //   //     clearInterval(intervalId);
  //   //     intervalId = null;
  //   //   }
  //   // };

  //   // const stopScrolling2 = () => {
  //   //   if (intervalId2) {
  //   //     clearInterval(intervalId2);
  //   //     intervalId2 = null;
  //   //   }
  //   // };

  //   // const stopScrolling3 = () => {
  //   //   if (intervalId3) {
  //   //     clearInterval(intervalId3);
  //   //     intervalId3 = null;
  //   //   }
  //   // };

  //   // startScrolling1();
  //   // startScrolling2();
  //   // startScrolling3();

  //   // return () => {
  //   //   stopScrolling1();
  //   //   stopScrolling2();
  //   //   stopScrolling3();
  //   // };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <div>
        {/* <Marquee gradient={false} speed={70} autoFill={true}>
          <div className="my-28 text-4xl  md:text-6xl text-black font-bold px-10">
            EXPLORE OUR INNOVATION
          </div>
        </Marquee> */}
      </div>
      <div className="mt-16 text-black flex justify-center text-4xl md:text-5xl font-black text-center p-2 md:p-0">
        <div className="px-16 py-4 relative rounded-md">
          <div>
            Explore our{" "}
            <span className="text-stroke-2 text-stroke-black text-fill-white tracking-widest font-bold">
              Web3 Triumphs
            </span>
          </div>
          <div className=" w-6 h-6 absolute top-0 left-0 border-t-2 border-l-2 border-black rounded-tl-[0.2rem]"></div>
          <div className=" w-6 h-6 absolute top-0 right-0 border-t-2 border-r-2 border-black rounded-tr-[0.2rem]"></div>
          <div className=" w-6 h-6 absolute bottom-0 right-0 border-b-2 border-r-2 border-black rounded-br-[0.2rem]"></div>
          <div className=" w-6 h-6 absolute bottom-0 left-0 border-b-2 border-l-2 border-black rounded-bl-[0.2rem]"></div>
        </div>
      </div>

      {/* <div className="my-16 flex justify-evenly md:justify-between text-gray-400 text-xl md:text-2xl font-bold mx-2 md:mx-16">
        <div>Founders Portfolio</div>
        <div>Founders Portfolio</div>
        <div className="hidden md:flex">Founders Portfolio</div>
        <div className="hidden md:flex">Founders Portfolio</div>
      </div> */}
      <Marquee
        className="my-16 flex overflow-x-auto no-scrollbar"
        gradient={false}
        speed={70}
        autoFill={true}
      >
        <InnovationCard name="Sidus" image="sidus" category="Web 3 Gaming" />
        <InnovationCard
          name="Neptune Mutual"
          image="neptune"
          category="Insurance"
        />
        <InnovationCard
          name="Moonwell"
          image="moonwell"
          category="Decentralised"
        />
        <InnovationCard
          name="Step App"
          image="step"
          category="Fitness & Crypto"
        />
        <InnovationCard name="Lumerin" image="lumerin" category="Hashpower" />
        <InnovationCard name="Zebec" image="zebec" category="Infra Network" />
        <InnovationCard
          name="Blocto"
          image="blocto"
          category="Blockchain World"
        />
      </Marquee>

      <Marquee
        gradient={false}
        speed={70}
        autoFill={true}
        direction="right"
        className="my-16 flex overflow-x-auto no-scrollbar"
      >
        <InnovationCard
          name="Cosmix Guild"
          image="cosmic_guild"
          category="Cosmic"
        />
        <InnovationCard
          name="Concordium"
          image="concordium"
          category="Blockchain"
        />
        <InnovationCard name="Linch" image="linch" category="Network" />
        <InnovationCard name="Ignition" image="ignition" category="Software" />
        <InnovationCard name="Nakamoto" image="nakamoto" category="Bitcoin" />
        <InnovationCard name="Pirate" image="pirate" category="Infra Network" />
        <InnovationCard name="Trace" image="trace" category="Blockchain" />
        <InnovationCard
          name="Easy Fit"
          image="easy_fit"
          category="Blockchain World"
        />
        <InnovationCard
          name="Solanium"
          image="solanium"
          category="Blockchain World"
        />
      </Marquee>

      {/* <div className="mt-16 flex justify-evenly md:justify-between text-gray-400 text-xl md:text-2xl font-bold mx-2 md:mx-16">
        <div>Founders Portfolio</div>
        <div>Founders Portfolio</div>
        <div className="hidden md:flex">Founders Portfolio</div>
        <div className="hidden md:flex">Founders Portfolio</div>
      </div>

      <div className="my-16 flex justify-evenly md:justify-between text-gray-400 text-xl md:text-2xl font-bold mx-2 md:mx-16">
        <div>NFT Portfolio</div>
        <div>NFT Portfolio</div>
        <div className="hidden md:flex">NFT Portfolio</div>
        <div className="hidden md:flex">NFT Portfolio</div>
      </div> */}

      <Marquee
        className="my-16 flex overflow-x-auto no-scrollbar"
        gradient={false}
        speed={70}
        autoFill={true}
      >
        <InnovationCard name="Bayn" image="bayc" category="Ape Nfts" />
        <InnovationCard
          name="The Otherside"
          image="otherside"
          category="Metaverse"
        />
        <InnovationCard name="Azuki" image="azuki" category="Metaverse" />
        <InnovationCard name="Dogami" image="dogami" category="Nfts" />
        <InnovationCard name="ICP" image="icp" category="Hashpower" />
        <InnovationCard
          name="Doodles"
          image="doodles"
          category="Infra Network"
        />
        <InnovationCard
          name="Invisible Friends"
          image="invisible_friends"
          category="Avatars"
        />
      </Marquee>
      {/* <div className="my-16 mb-32 flex justify-evenly md:justify-between text-gray-400 text-xl md:text-2xl font-bold mx-2 md:mx-16">
        <div>NFT Portfolio</div>
        <div>NFT Portfolio</div>
        <div className="hidden md:flex">NFT Portfolio</div>
        <div className="hidden md:flex">NFT Portfolio</div>
      </div> */}
    </>
  );
}
