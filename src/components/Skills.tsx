"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Progress } from "./ui/progress";

const Skills = () => {
  return (
    <div>
      <h1 className="font-extrabold p-4 text-2xl">Skills</h1>
      <div>
        <div>
          <h2 className="font-bold p-6 text-xl">Technical Skills</h2>
          <div className="lg:block flex flex-wrap    m-2">
            <h2 className="font-semibold p-8 px-4 text-lg">
              Programming Languages
            </h2>
            <div className="block lg:flex flex-wrap m-2">
              <Card className="lg:w-1/3 w-full  ">
                <CardHeader>C++</CardHeader>
                <CardContent>
                  <Progress value={90} />
                </CardContent>
              </Card>
              <Card className="lg:w-1/3  w-full ">
                <CardHeader>Java</CardHeader>
                <CardContent>
                  <Progress value={80} />
                </CardContent>
              </Card>
              <Card className="lg:w-1/3 w-full ">
                <CardHeader>Python</CardHeader>
                <CardContent>
                  <Progress value={95} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold p-8 px-4 text-lg">Web Development</h2>
          <div className="lg:flex block flex-wrap  m-2">
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>HTML</CardHeader>
              <CardContent>
                <Progress value={100} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>CSS</CardHeader>
              <CardContent>
                <Progress value={85} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>SCSS</CardHeader>
              <CardContent>
                <Progress value={85} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>JS</CardHeader>
              <CardContent>
                <Progress value={95} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Node JS</CardHeader>
              <CardContent>
                <Progress value={97} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>React JS</CardHeader>
              <CardContent>
                <Progress value={97} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Next JS</CardHeader>
              <CardContent>
                <Progress value={97} />
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="font-semibold p-8 px-4 text-lg">Soft Skilld</h2>
          <div className="lg:flex block flex-wrap  m-2">
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Excellent communication skills</CardHeader>
              <CardContent>
                <Progress value={100} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Strong problem-solving abilities</CardHeader>
              <CardContent>
                <Progress value={100} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Effective time management</CardHeader>
              <CardContent>
                <Progress value={100} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Adaptability</CardHeader>
              <CardContent>
                <Progress value={100} />
              </CardContent>
            </Card>
            <Card className="lg:w-1/3 w-full ">
              <CardHeader>Teamwork and collaboration</CardHeader>
              <CardContent>
                <Progress value={100} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
