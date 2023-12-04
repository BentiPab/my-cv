"use client";

import { ArrowBack } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  imageComponent: React.ReactNode;
  items: React.ReactNode;
};

const ProjectExperienceLayout = ({ imageComponent, items, title }: Props) => {
  const router = useRouter();

  return (
    <section className="py-5 px-6 lg:px-14  lg:grid lg:grid-cols-2 lg:gap-y-10 lg:justify-items-center flex flex-col items-center gap-3">
      <div className="lg:col-span-2 items-center w-full  flex">
        <button
          onClick={(e) => {
            e.preventDefault();

            router.back();
          }}
          className="flex"
        >
          <ArrowBack /> Back
        </button>
        <div className="text-4xl font-bold text-center flex justify-center w-full">
          {title}
        </div>
      </div>
      <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
        {imageComponent}
      </div>
      <div className="flex flex-col font-bold lg:items-start gap-5">
        {items}
      </div>
    </section>
  );
};

export default ProjectExperienceLayout;
