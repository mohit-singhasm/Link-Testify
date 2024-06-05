import puppeteer from "puppeteer";
import { links } from "../database/database.js";
import * as fs from "node:fs";
// import Result from "../Results/Result.json" assert { type: "json" };

let results = [];
// let anchor;

async function scrapeProduct(url) {
  const browser = await puppeteer.launch({ headless: "new", headless: false });
  // const browser = await puppeteer.launch({ headless: "new" });

  for (let link of url) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 960,
      deviceScaleFactor: 1,
    });
    page.setDefaultNavigationTimeout(3000000);

    try {
      await page.goto(link);

      let para = await page.evaluate(() => {
        const linkList = document.querySelectorAll("#pointssect_ctpg ul li a");
        const anchorList = document
          .querySelectorAll(".entry-content p")[1]
          .querySelectorAll("a");

        let anchorList1 = Array.from(anchorList).map((link) => {
          return link.getAttribute("href");
        });
        let linkList1 = Array.from(linkList).map((link) => {
          return link.getAttribute("href");
        });

        console.log(anchorList1, linkList1);
        return { anchorList1, linkList1 };
      });
      // console.log(para);


      // para ? (results[para] = link) : null;
      // para ? results.push(link) : null;
      // console.log(results)
    } catch (error) {
      console.error(`Error while processing ${link}: ${error.message}`);
    } finally {
      // await page.close();
    }
  }
  // await browser.close();
}

async function writingResult(result) {
  const jsonData = JSON.stringify(result);
  fs.writeFileSync("Results/Result.json", jsonData);
}

async function tester() {
  // loading();
  await scrapeProduct(links);
  await writingResult(results);
}

tester();

// function extractor(arr) {
//   let boolArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < url.length; j++) {
//       boolArr.push(links[j].indexOf(arr[i]));
//     }
//   }
//   return boolArr;
// }

// console.log(Object.keys(Result));
// console.log(Result);

// function loading() {
//   let twirlTimer = (function () {
//     // let P = ["\\", "|", "/", "-"];
//     let P = ["    ", ".   ", "..  ", "... ", "...."];
//     let x = 0;
//     return setInterval(function () {
//       process.stdout.write("\r" + `Loading: >> ${P[x++]} \t`);
//       x === P.length ? (x = 0) : x;
//       // console.log(x)
//     }, 150);
//   })();

//   // const clearLine = () => process.stdout.write("\x1B[2K\r"); // Clear the current line

//   // const animateLoading = () => {
//   //   // clearLine();
//   //   process.stdout.write("\r"+"Simulating work..."); // Example output

//   //   // Throttle updates to avoid flickering (optional)
//   //   setTimeout(animateLoading, 100); // Update every 100 milliseconds
//   // };

//   // animateLoading(); // Start the animation
// }
