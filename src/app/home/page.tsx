import DownloadButton from "@/components/Button/DownloadButton";
import ContactOptions from "@/components/ContactOptions/ContactOptions";
import { CVService } from "@/services";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col items-center px-14 justify-evenly lg:py-10 h-full gap-3 lg:gap-10">
      <div className="w-[200px] rounded-50 h-[200px] max-h-[200px]  relative">
        <Image
          src="/profile.jpg"
          alt="Vercel Logo"
          className="rounded-50 object-cover"
          fill
          priority
        />
      </div>
      <div className="flex flex-col items-center font-semibold gap-3 lg:gap-5 text-center">
        <h2 className="text-2xl lg:text-4xl">Welcome to my digital CV!</h2>
        <h1 className="text-3xl lg:text-5xl">I am Pablo Bentivengo</h1>
        <p className="text-center lg:text-2xl">
          A Fullstack Developer, looking to keep on learning and improving
          professionaly and personally
        </p>
        <DownloadButton />
        <ContactOptions />
      </div>
    </section>
  );
};

export default Home;
