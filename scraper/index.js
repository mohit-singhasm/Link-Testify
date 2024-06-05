import puppeteer from "puppeteer";
import { links } from "../database/database.js";
import { startLoader } from "./loader.js";
import * as fs from "node:fs";

let result = [];

let testScrape = async (url) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new", headless: false });
  // const browser = await puppeteer.launch({ headless: "new" });
  for (const link of url) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 960,
      deviceScaleFactor: 1,
    });
    page.setDefaultNavigationTimeout(3000000);

    // shows the completed Percentage
    // console.log((((url.indexOf(link) + 1) / url.length) * 100).toFixed(2) + '%')

    try {
      // Navigate the page to a URL
      await page.goto(link);

      // Set screen size
      await page.setViewport({ width: 1080, height: 1024 });

      // Evaluate the page content in the browser context
      const para = await page.evaluate(() => {
        const element = document
          .querySelectorAll(".titlesechd.bnrt h1")[0]
          .innerText.toLowerCase();

        console.log(element);

        const province = "ontario";

        let idx = element.indexOf(province);

        console.log(idx === -1 ? false : true);

        return idx === -1 ? false : true;
      });

      if (para) {
        result.push(link);
      }
    } catch (error) {
      console.log(error);
    } finally {
      await page.close();
    }
  }
  await browser.close();
};

async function writingResult(result) {
  const jsonData = JSON.stringify(result);
  fs.writeFileSync("Results/Result.json", jsonData);
}

async function tester() {
  await testScrape(links);
  // console.log("result", result)
  await writingResult(result);
  startLoader(result);
}

tester();
