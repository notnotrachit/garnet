

export default function Gridbg() {
    return (
      <div className="absolute left-0 top-0 w-full -z-10">
        <div className="flex justify-center">
          <div className="border-x border-black/20 w-1/2 h-screen absolute"></div>
          <div className="border-x border-black/20 w-1/4 h-screen absolute mx-auto mt-16"></div>
        </div>
        <div className="flex-col">
          <div className="border-y border-black/20 w-screen h-56 absolute mt-28"></div>
          <div className="border-y border-black/20 w-screen h-56 absolute mt-[21rem] translate-y-full"></div>
        </div>
      </div>
    );
}