import { AiFillGithub } from "react-icons/ai";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const Portfolio = () => {
  return (
    <Card>
      <CardHeader className="text-2xl px-6">Projects</CardHeader>
      <CardContent>
        <Card>
          <CardHeader>
            <Link href={""} className="flex flex-wrap">
              <AiFillGithub className="h-8 w-8 my-2" />
              <h1 className="py-3 px-1 ">/PathFinder</h1>
            </Link>
          </CardHeader>
          <CardTitle className="px-8 text-xl">PathFinder</CardTitle>
          <CardContent>
            <CardDescription className="text-base px-2">
              PathFinder is a pathfinding algorithm implementation that finds
              the shortest path from a starting point to an endpoint in a grid
              with walls and obstacles. The algorithm uses a variation of the
              breadth-first search algorithm, where it checks all four sides of
              the starting point and expands the search to the closest valid
              points. The algorithm ensures that each point is not repeated and
              that the chosen point satisfies both conditions of being valid and
              closest to the starting point.
            </CardDescription>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
