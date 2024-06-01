import Image from "next/image";

export default function Balls(){
    return (
      <>
        <Image
          src="/ball.svg"
          alt="ball"
          width={200}
          height={200}
          className="absolute top-72 -left-24"
        />
        <Image
          src="/ball.svg"
          alt="bg-1"
          width={100}
          height={100}
          className="absolute top-32 left-56"
        />
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
        <Image
          src="/ball.svg"
          alt="ball"
          width={150}
          height={150}
          className="absolute top-[38rem] left-24"
        />
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
        <Image
          src="/ball.svg"
          alt="ball"
          width={130}
          height={130}
          className="absolute top-[24rem] right-28"
        />
      </>
    );
}