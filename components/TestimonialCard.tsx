import Image from "next/image";

export default function TestimonialCard(props: {
  image: string;
  name: string;
  title: string;
  text: string;
}) {
  return (
    <>
      <div className="flex">
        <div className="relative group hover:mb-12">
          <Image
            src={"/testimonials/" + props.image}
            alt="testimonial"
            width={350}
            height={300}
            className="object-cover contrast-150 grayscale group-hover:filter-none md:group-hover:w-[14rem] md:group-hover:h-[28rem] transition-all rounded-lg w-48 h-48 md:h-96"
          />
          <div className="w-48 md:group-hover:w-[14rem] absolute opacity-0 top-0 left-0 bg-black rounded-md -z-10 group-hover:opacity-100 transition-all">
            <div className="object-cover contrast-150 grayscale group-hover:filter-none md:group-hover:w-[14rem] md:group-hover:h-[28rem] group-hover:h-[12rem] transition-all rounded-lg w-48 h-48 md:h-96" />
            <div className="w-full group-hover:flex justify-center text-center transition-all font-bold md:my-2">
              {props.name}
              <br />
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
