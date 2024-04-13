"use client";

import { HiMenuAlt4 } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const buttonOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="py-3 relative z-30 bg text-color flex w-auto lg:w-full">
      <div className="flex p-2">
        <span className="text-blue-800 font-bold text-2xl px-1">
          <BiCodeAlt />
        </span>
        Developer X
      </div>
      <div className="lg:hidden ml-auto">
        <Button
          className={buttonVariants({
            variant: "outline",
            className: "text-color text-2xl bg-transparent border-transparent ",
          })}
          onClick={buttonOpen}
        >
          <HiMenuAlt4 />
        </Button>
      </div>
      <div
        className={cn("lg:flex gap-3 ml-auto hidden", {
          "flex flex-col fixed z-20 m-0 mt-12 w-full gap-0 h-fit bg-white":
            open,
        })}
      >
        <Button
          className={buttonVariants({
            variant: "outline",
            className: cn("text-color bg-transparent border-transparent ", {
              "text-xl my-4": open,
            }),
          })}
        >
          Home
        </Button>
        <Link
          href={"/#aboutme"}
          className={buttonVariants({
            variant: "outline",
            className: cn("text-color bg-transparent border-transparent ", {
              "text-xl my-4": open,
            }),
          })}
        >
          About Me
        </Link>
        <Button
          className={buttonVariants({
            variant: "outline",
            className: cn(
              cn("text-color bg-transparent border-transparent ", {
                "text-xl my-4": open,
              })
            ),
          })}
        >
          Blog
        </Button>
        <Button
          className={buttonVariants({
            variant: "outline",
            className: cn("text-color bg-transparent border-transparent ", {
              "text-xl my-4": open,
            }),
          })}
        >
          Portfolio
        </Button>
      </div>
    </nav>
  );
};
