import { LuTextSelect } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Explore() {
  return (
    <>
      <div className="flex w-full">
        <div className="h-36 relative">
          <div className="flex">
            <div className="absolute top-0 left-0 h-[4.5rem] border-t-4 border-r-4 border-[#340272] rounded-tr-3xl w-full"></div>
            <div className="mt-8 mx-12 relative py-4 px-8 text-black text-5xl font-bold text-fill-black text-stroke-black text-stroke-2 tracking-[0.7rem] [text-shadow:_5px_15px_10px_rgb(0_0_0_/_50%)]">
              EX<span className="text-fill-transparent">PLO</span>RE
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-0 right-0 border-t-4 border-r-4 border-black w-8 h-8 rounded-tr-md"></div>
                <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-black w-8 h-8 rounded-bl-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-36 relative -ml-1">
          <div className="flex items-center h-full">
            <div className="absolute top-[4.5rem] left-0 h-[4.5rem] border-b-4 border-x-4 border-[#340272] rounded-b-3xl w-full"></div>
            <div className="mx-16">
              <div className="w-56 border-2 border-black h-28 rounded-md p-2">
                <div className="w-full h-full bg-black rounded-md p-2">
                  <div className="relative h-full flex justify-center text-center items-center">
                    <div className="absolute top-0 left-0 w-5 h-5 rounded-tl-md border-t border-l border-white"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 rounded-tr-md border-t border-r border-white"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 rounded-bl-md border-b border-l border-white"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 rounded-br-md border-b border-r border-white"></div>

                    <div className="flex-col justify-center items-center gap-2 space-y-2">
                      <div className="flex justify-center items-center gap-2 text-xl">
                        <LuTextSelect />
                        Blogs
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        Read <FiExternalLink />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-36 relative -ml-1">
          <div className="flex items-center h-full">
            <div className="absolute top-0 left-0 h-[4.5rem] border-t-4 border-x-4 border-[#340272] rounded-t-3xl w-full"></div>
            <div className="mx-16">
              <div className="w-56 border-2 border-black h-28 rounded-md p-2">
                <div className="w-full h-full bg-black rounded-md p-2">
                  <div className="relative h-full flex justify-center text-center items-center">
                    <div className="absolute top-0 left-0 w-5 h-5 rounded-tl-md border-t border-l border-white"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 rounded-tr-md border-t border-r border-white"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 rounded-bl-md border-b border-l border-white"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 rounded-br-md border-b border-r border-white"></div>

                    <div className="flex-col justify-center items-center gap-2 space-y-2">
                      <div className="flex justify-center items-center gap-2 text-xl">
                        <FaXTwitter />
                        Twitter
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        Read <FiExternalLink />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-36 relative -ml-1">
          <div className="flex items-center h-full">
            <div className="absolute top-[4.5rem] left-0 h-[4.5rem] border-b-4 border-l-4 border-[#340272] rounded-bl-3xl w-full"></div>
            <div className="mx-16">
              <div className="w-56 border-2 border-black h-28 rounded-md p-2">
                <div className="w-full h-full bg-black rounded-md p-2">
                  <div className="relative h-full flex justify-center text-center items-center">
                    <div className="absolute top-0 left-0 w-5 h-5 rounded-tl-md border-t border-l border-white"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 rounded-tr-md border-t border-r border-white"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 rounded-bl-md border-b border-l border-white"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 rounded-br-md border-b border-r border-white"></div>

                    <div className="flex-col justify-center items-center gap-2 space-y-2">
                      <div className="flex justify-center items-center gap-2 text-xl">
                        <LuTextSelect />
                        Blogs
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        Read <FiExternalLink />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-36 w-full relative -ml-1">
          <div className="flex items-center h-full">
            <div className="absolute top-[4.5rem] left-0 h-[4.5rem] border-b-4 border-[#340272] w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
