import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Testimonial = () => {
  return (
    <Card className="border-0">
      <CardTitle className="m-5">Testimonial </CardTitle>
      <CardContent>
        <Card>
          <CardHeader className="font-bold">
            Bob Smith, Senior Developer at ABC Company
          </CardHeader>
          <CardDescription className="text-base mx-6">
            John's design abilities are truly exceptional. He was able to create
            a logo and branding for our company that perfectly captured our
            vision and values. We receive compliments on our branding all the
            time.
          </CardDescription>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
