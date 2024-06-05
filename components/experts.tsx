import Image from "next/image";

export default function Experts() {
    return (
      <div className="min-h-screen w-full bg-black/90 relative">
        <div className="w-full h-full inset-0 absolute bg-black/90">
          <div className="absolute top-28 left-28 rounded-full h-2/3 aspect-square bg-[#7BD5FB]/80  blur-3xl"></div>
          <div className="absolute bottom-28 left-[32rem] rounded-full h-96 aspect-square bg-[#5000BB] blur-3xl"></div>
          <div className="absolute top-28 right-28 rounded-full h-[32rem] aspect-square bg-[#5000BB] blur-3xl"></div>
          <div className="absolute bottom-28 right-[26rem] rounded-full h-[20rem] aspect-square bg-[#7BD5FB] blur-3xl"></div>
          <div className="w-full h-screen bg-repeat bg-[url('/bg_rectangle.svg')] mix-blend-overlay bg-blend-overlay"></div>
        </div>
        <div className="absolute top-40 left-[28rem]">
          <Image src="/ball.svg" height={200} width={200} alt="ball" />
        </div>
        <div className="w-full h-full flex justify-center items-center absolute">
          <div className="bg-white/10 w-[46rem] p-16 rounded-xl backdrop-blur-xl">
            <div className="text-4xl font-bold text-center mb-16">
              Marc Jaison
              <br />
              <span className="text-2xl font-normal">Founder of Garnet Club</span>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
        <div className="w-full h-full flex">
          <div className="flex">
            <div className="mt-16 ml-24 relative py-4 px-8 text-white text-5xl font-bold text-stroke-2 tracking-[0.4rem] [text-shadow:_5px_15px_10px_rgb(0_0_0_/_50%)]">
              OUR EXPERTS
              <br />
              <span className="ml-16 text-fill-black text-stroke-white">
                AT GARNET CLUB
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-0 left-0 border-t-4 border-l-4 border-white w-8 h-8 rounded-tl-md"></div>
                <div className="absolute bottom-0 right-0 border-b-4 border-r-4 border-white w-8 h-8 rounded-br-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}