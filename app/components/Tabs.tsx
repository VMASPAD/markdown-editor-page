"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import ShineBorder from "@/components/ui/shine-border";
import { useTheme } from "next-themes";

export function Tab() {
  const theme = useTheme();
  const tabs = [
    {
      title: "Editor",
      value: "editor",
      content: (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-blue-900">
          <p>Sintax</p>
          <p className="text-xl font-normal">Any sintax markdown support.</p>
          <br />
          <Image
            src="https://portfoliotavm.com/markdown-editor/(3).gif"
            alt="dummy image"
            width="500"
            height="500"
            className=" "
          />
        </div>
      ),
    },
    {
      title: "Components",
      value: "components",
      content: (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-blue-900">
          <p>Components</p>
          <p className="text-xl font-normal">
            Create, edit and import componentes from any where, explore your
            creativity.
          </p>
          <br />
          <Image
            src="https://portfoliotavm.com/markdown-editor/(1).gif"
            alt="dummy image"
            width="500"
            height="500"
            className=" "
          />
        </div>
      ),
    },
    {
      title: "CSS",
      value: "css",
      content: (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-blue-900">
          <p>CSS</p>
          <p className="text-xl font-normal">
            Add any CSS to modify the UI and Code preview.
          </p>
          <br />
          <Image
            src="https://portfoliotavm.com/markdown-editor/(2).gif"
            alt="dummy image"
            width="500"
            height="500"
            className=" "
          />
        </div>
      ),
    },
    {
      title: "Mermaid Diagrams",
      value: "mermaid",
      content: (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-blue-900">
          <p>Create Diagrams</p>
          <p className="text-xl font-normal">
            You can create diagrams with mermaid and other plugins to modify the
            result.
          </p>
          <br />
          <Image
            src="https://portfoliotavm.com/markdown-editor/(4).gif"
            alt="dummy image"
            width="500"
            height="500"
            className=" "
          />
        </div>
      ),
    },
    {
      title: "External Archives",
      value: "external",
      content: (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-blue-900">
          <p>External Archives</p>
          <p className="text-xl font-normal">
            Import and export markdown files.
          </p>
          <br />
          <Image
            src="https://portfoliotavm.com/markdown-editor/(6).gif"
            alt="dummy image"
            width="500"
            height="500"
            className=" "
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/icon.png"
      alt="dummy image"
      width="100"
      height="100"
      className=" "
    />
  );
};
