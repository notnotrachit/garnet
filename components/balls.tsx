"use client";

import Image from "next/image";
import { Providers } from "@/app/providers";
import { Parallax } from "react-scroll-parallax";

export default function Balls(){
    return (
      <>
      <Providers>
        <Parallax speed={30}>
        <Image
          src="/ball.svg"
          alt="ball"
          width={200}
          height={200}
          className="absolute top-72 -left-24"
        />
        </Parallax>
        <Parallax speed={10}>
        <Image
          src="/ball.svg"
          alt="bg-1"
          width={100}
          height={100}
          className="absolute top-32 left-56"
        />
        </Parallax>
        <Image
          src="/ball.svg"
          alt="bg-1"
          width={75}
          height={75}
          className="absolute top-72 left-80"
        />
        <Image
          src="/ball.svg"
          alt="bg-1"
          width={90}
          height={90}
          className="absolute top-28 right-[43%]"
        />
        <Parallax speed={70}>
        <Image
          src="/ball.svg"
          alt="ball"
          width={150}
          height={150}
          className="absolute top-[68rem] left-24"
        />
        </Parallax>
        <Image
          src="/ball.svg"
          alt="ball"
          width={85}
          height={85}
          className="absolute top-[32rem] left-[36rem]"
        />
        <Image
          src="/ball.svg"
          alt="ball"
          width={85}
          height={85}
          className="absolute top-36 right-72"
        />
        <Parallax speed={40}>
        <Image
          src="/ball.svg"
          alt="ball"
          width={130}
          height={130}
          className="absolute top-[60rem] right-28"
        />
        </Parallax>
        </Providers>
      </>
    );
}