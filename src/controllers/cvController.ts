import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export const createCV = async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_TOKEN}`,
  });
  const page = await browser.newPage();

  const data = fs.readFileSync(path.resolve("src/cv.html"), {
    encoding: "utf-8",
  });

  await page.setContent(data, {
    waitUntil: "load",
  });

  const pdf = await page.pdf({
    format: "a4",
    width: "21cm",
    height: "29.9cm",
  });

  const pdfBytes64 = pdf.toString("base64");

  // close the browser
  await browser.close();

  return `data:application/octet-stream;base64,${pdfBytes64}`;
};
