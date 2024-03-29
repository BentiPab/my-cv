import puppeteer from "puppeteer";
import { readFileSync } from "fs";
import path from "path";

const getBrowser = () =>
  process.env.NODE_ENV === "production"
    ? puppeteer.connect({
        browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_TOKEN}`,
      })
    : puppeteer.launch({ headless: "new" });

export const createCV = async () => {
  const browser = await getBrowser();
  const page = await browser.newPage();
  const file = path.join(process.cwd(), "public", "cv.html");
  const stringified = readFileSync(file, "utf8");

  await page.setContent(stringified, {
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
