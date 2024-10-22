"use client";
import BlurFade from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Meteors from "@/components/ui/meteors";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin"; 
import { Tab } from "./components/Tabs";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { Square } from "lucide-react";

export default function Home() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <FlickeringGrid
      className="z-0 absolute inset-0 size-full opacity-50"
      squareSize={4}
      gridGap={6}
      color="#157280"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={800}
      width={800}
    />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      href: "/",
      name: "Any compatible sintax md",
      description: "Write the way you want and the way you want", 
      background: <img src="https://portfoliotavm.com/markdown-editor/(3).gif" className="absolute   opacity-60" alt="Sintax"/>,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "MultiSupport",
      description: "Use KaTeX or HTML expressions to express yourself in a better way.",
      href: "/",
      cta: "Learn more",
      background: <FlickeringGrid
      className="z-0 absolute inset-0 size-full  opacity-50"
      squareSize={4}
      gridGap={6}
      color="#7F1A7380"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={800}
      width={800}
    />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      href: "/",
      description: "Use the calendar to filter your files by date.", 
      background: <FlickeringGrid
      className="z-0 absolute inset-0 size-full  opacity-50"
      squareSize={4}
      gridGap={6}
      color="#FE9900"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={800}
      width={800}
    />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Square,
      name: "Diagrams",
      description:
        "Create your own mermaid diagrams.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute  opacity-60" src="https://portfoliotavm.com/markdown-editor/(4).gif" alt="Diagram example"/>,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  return (
    <>
      <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Meteors number={15} />
        <BlurFade delay={0.25} inView>
          <Image
            src={"/icon.png"}
            alt="icon"
            width={100}
            height={100}
            className="z-10 mt-60 "
          />
        </BlurFade>

        <BlurFade delay={0.30} inView>
          <GradualSpacing
            className="font-display text-center text-4xl font-extrabold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Markdown Editor"
          />
        </BlurFade> 
        <BlurFade delay={0.65} inView>
          <div className="flex flex-col justify-center items-center mb-32">
          <h2 className="text-3xl font-semibold tracking-tighter  ">
            Create a beatiful md files with diagrams and code HTML  you want.
          </h2>
          <br />
          <a href="https://github.com/VMASPAD/markdown-editor">
          <Image
            src={"/github.svg"}
            alt="icon"
            width={200}
            height={200}
            className="z-10 " 
          /></a></div>
          <br />
        </BlurFade>
        <br />
        <BlurFade delay={1.0} inView className="flex   justify-center">
        <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </BlurFade>
      <Tab />
        <BorderBeam size={250} duration={12} delay={9} />
      </section>
    </>
  );
}

 