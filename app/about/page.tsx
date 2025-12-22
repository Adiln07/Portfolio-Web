import React from "react";
import Image from "next/image";
// import Madrid from "@/public/HalaMadrid.jpg";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="size-72 overflow-hidden rounded-full relative">
        <Image
          src="/HalaMadrid.jpg"
          alt="Madrid Image"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="..."
        ></Image>
      </div>
    </div>
  );
};

export default About;
