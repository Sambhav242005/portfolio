import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

const About = () => {
  return (
    <Card className="w-svw lg:w-full overflow-hidden" id="aboutme">
      <CardHeader className="font-semibold">About</CardHeader>
      <CardContent className="text-wrap lg:pr-28 w-svw lg:w-full ">
        Hello, I'm Sambhav Surana, a passionate and dedicated Computer Science
        student at Shri Vaishnav Vidyapeeth Vishwavidyalaya University. I'm
        interested in software development and have been actively involved in
        various coding projects.
        <div className="flex flex-wrap gap-4 p-2">
          <Link href={"https://twitter.com/Sambhav242005"}>
            <AiOutlineTwitter className="h-10 w-10 text-blue-500 " />
          </Link>
          <Link href={"https://github.com/Sambhav242005"}>
            <AiFillGithub className="h-10 w-10 " />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
