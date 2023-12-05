import DownloadButton from "@/components/Button/DownloadButton";
import ContactOptions from "@/components/ContactOptions/ContactOptions";
import Image from "next/image";
import profile from "../../../public/profile.jpg";
import path from "path";
import puppeteer from "puppeteer";
import fs from "fs";

const Home = async () => {
  const handlePdfCreate = async () => {
    "use server";
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();

    const data = fs.readFileSync(path.join(process.cwd(), "src/cv.html"));

    await page.setContent(data.toString(), {
      waitUntil: "load",
    });

    const pdf = await page.pdf({
      format: "A4",
      width: "21cm",
      height: "29.9cm",
    });

    const pdfBytes64 = pdf.toString("base64");

    // close the browser
    await browser.close();

    return `data:application/octet-stream;base64,${pdfBytes64}`;
  };

  return (
    <section className="flex flex-col items-center px-14 justify-evenly lg:py-10 h-full gap-3 lg:gap-10">
      <div className="w-[200px] rounded-50 h-[200px] max-h-[200px]  relative">
        <Image
          src={profile}
          alt="Pablo Bentivengo profile"
          className="rounded-50 object-cover"
          fill
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-center font-semibold gap-3 lg:gap-5 text-center">
        <h2 className="text-2xl lg:text-4xl">Welcome to my digital CV!</h2>
        <h1 className="text-3xl lg:text-5xl">I am Pablo Bentivengo</h1>
        <p className="text-center lg:text-2xl">
          A Fullstack Developer, looking to keep on learning and improving
          professionaly and personally
        </p>
        <DownloadButton handleClick={handlePdfCreate} />
        <ContactOptions />
      </div>
    </section>
  );
};

export default Home;
