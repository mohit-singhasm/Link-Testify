import puppeteer from "puppeteer";
import { links } from "../database/database.js";
import { startLoader } from "./loader.js";

// const link = 'https://www.canadacarcash.com/page-sitemap.xml';


// const links = 'https://www.canadacarcash.com/car-title-loans-saskatchewan/'

let result = [];

let testScrape = async (url) => {

  // Launch the browser and open a new blank page
  // const browser = await puppeteer.launch({ headless: "new", headless: false });
  const browser = await puppeteer.launch({ headless: "new"});
  for (const link of url) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 960,
      deviceScaleFactor: 1,
    });
    page.setDefaultNavigationTimeout(3000000);

    try {
      // Navigate the page to a URL
      await page.goto(link)

      // Set screen size
      await page.setViewport({ width: 1080, height: 1024 });

      // Evaluate the page content in the browser context
      const para = await page.evaluate(() => {
        // Select all <ul> elements on the page
        const ulElements = document.querySelectorAll('.citypgsect6  ul li');

        // Convert NodeList to an array and return it
        return Array.from(ulElements).map(li => {
          const anchor = li.querySelector('a')
          const span = li.querySelector('span')
          if (anchor) {
            return false;
          } else if (span) {
            return true;
          }
        });
      })

      let para1 = para.reduce((acc, currentValue) => Boolean(acc + currentValue), false);

      // console.log(para1)
      if (para1) {
        result.push(link)
      }

    } catch (error) {
      console.error('Not Working')
    } finally {
      await page.close();
      // console.log(result, )
    }
  }
  await browser.close()
}


async function tester() {
  await testScrape(links)
  startLoader(result)
}

tester()


