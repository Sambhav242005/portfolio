"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

import { BsFillStarFill } from "react-icons/bs";
import { EachElement } from "@/hook/Each";
import { Typewriter } from "react-simple-typewriter";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white  to-blue-400 flex  flex-wrap w-svw lg:w-full">
      {/*Left*/}
      <div className="p-10 font-bold">
        <h4 className="font-semibold text-xl">Hello,</h4>
        <h1 className="text-3xl">I'm Sambhav Surana</h1>
        <h2 className="text-2xl">
          A{" "}
          <Typewriter
            words={["Full Stack Developer", "Programmer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="font-normal text-wrap max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magni illo impedit, labore ratione ut earum. Optio, cum. Alias
          voluptatem provident officia.
        </p>
        <div>
          <div className="my-5 flex flex-wrap gap-5">
            <ul className="flex items-center gap-2">
              <EachElement
                of={Array(5).fill(1)}
                render={(item, index) => (
                  <li key={index} className="list-none">
                    <BsFillStarFill className="h-6 w-6 text-yellow-500" />
                  </li>
                )}
              />
            </ul>
            <p className="font-medium lg:font-light">
              1100+ <span className="">Execllent Reviws</span>
            </p>
          </div>
          <div className="flex justify-start gap-1 pt-6">
            <Button className="rounded-2xl">
              Download CV
              <HiDownload className="h-6 w-6 ml-2" />
            </Button>
            <Button
              className={buttonVariants({
                variant: "outline",
                className: "text-black rounded-2xl",
              })}
            >
              Contact Me
              <AiOutlineArrowRight className="h-6 w-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ml-auto mx-16">
        <Image
          className="w-64 h-64 m-5 mt-16"
          src={"/ProfilePlaceholder.png"}
          alt=""
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
