"use client";
import { Id } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  _id: Id;
  image: string;
  status?: string;
};

const Card = ({ name, _id, image, status }: Props) => {
  const path = usePathname();
  return (
    <Link key={name} href={`${path}/${_id}`}>
      <div className="min-h-[300px] flex flex-col hover:scale-90 transition-transform duration-500 cursor-pointer">
        <div className="grow-2 w-[200px] h-[200px] relative">
          <Image
            className="object-cover min-w-full min-h-full rounded-t-lg"
            src={image}
            fill
            alt={name}
          />
        </div>
        <div className=" font-semibold bg-white flex grow basis-1/3 flex-col gap-2 items-center justify-center rounded-b-lg">
          <h4>{name}</h4>
          {status && <h4 className={`px-2 rounded-xl capitalize`}>{status}</h4>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
