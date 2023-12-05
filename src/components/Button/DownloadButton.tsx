import path from "path";
import puppeteer from "puppeteer";
import fs from "fs";

const DownloadButton = async () => {
  const handlePdfCreate = async () => {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();

    const data = fs.readFileSync(
      path.join(process.cwd(), "src/components/Button/cv.html")
    );

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

  const pdf = await handlePdfCreate();

  return (
    <button className="bg-dodgerblue px-4 py-2 text-white hover:scale-95 transition-transform duration-300  cursor-pointer rounded-2xl disabled:opacity-75 disabled:cursor-wait ">
      <a href={pdf} download={"CV Pablo Bentivengo.pdf"}>
        {"Download My CV"}
      </a>
      {/* //   disabled={loading}
    //   onClick={async (e) => {
    //     setLoading(true);
    //     e.preventDefault();
    //     const data = await handleClick();
    //     const link = document.createElement("a");
    //     link.href = data;
    //     link.download = `CV Pablo Bentivengo.pdf`;
    //     link.click();
    //     setLoading(false);
    //   }}
    // >
    //   {loading ? "Downloading CV..." : "Download My CV"} */}
    </button>
  );
};

export default DownloadButton;
