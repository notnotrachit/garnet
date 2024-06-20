import TestimonialCard from "./TestimonialCard"
import Image from "next/image";

export default function Testimonial(){
    return (
      <>
        <div className="flex justify-center space-x-4 relative flex-wrap space-y-5">
          <div className="absolute h-48 top-24 left-0 w-full border-y-[3px] border-[#350372]"></div>
          <div className="absolute -top-5 left-[10%] z-10">
            <Image src={"/sq_grid.svg"} alt="grid" width={60} height={60} />
          </div>
          <div className="absolute top-[22rem] right-[8%] z-10">
            <Image src={"/sq_grid.svg"} alt="grid" width={60} height={60} />
          </div>
          <TestimonialCard
            image="T1.png"
            name="Alice"
            title="Founder of Maven"
            text=""
          />
          <TestimonialCard
            image="T2.png"
            name="Alice"
            title="Founder of Maven"
            text=""
          />
          <TestimonialCard
            image="T3.png"
            name="Alice"
            title="Founder of Maven"
            text=""
          />
          <TestimonialCard
            image="T4.png"
            name="Alice"
            title="Founder of Maven"
            text=""
          />
          <TestimonialCard
            image="T5.png"
            name="Alice"
            title="Founder of Maven"
            text=""
          />
        </div>
      </>
    );
}