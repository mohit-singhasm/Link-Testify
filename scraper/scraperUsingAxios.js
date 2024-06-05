import axios from "axios";
import * as cheerio from "cheerio";
import { links } from "../database/database.js";

// let link = "https://www.samedaycashloan.ca/car-equity-loans-toronto/";

let issuelink = {};

async function checkerFunk(link, webSiteUrl) {
  let fullLink = link.startsWith("http")
    ? link
    : `https://www.samedaycashloan.ca${link}`;

  //   console.log(fullLink);

  try {
    let checker = await axios
      .get(fullLink, { timeout: 3000000 })
      // .then((res) => res.status)
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error(
            `4Error fetching ${(link, fullLink)}:`,
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request was made but no response was received
          console.error(
            `5Error fetching ${(link, fullLink)}: No response received`,
            error,
            error.status
          );
        } else {
          // Something happened in setting up the request
          console.error(`6Error fetching ${(link, fullLink)}:`, error.message);
        }
      });

    let html = checker.status;

    // console.log(fullLink);
    console.log(html);
    if (html === 200) return null;

    if (html !== 200) {
      return issuelink[webSiteUrl]?.push(fullLink) || [];
    }
    return null;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(
        `1Error fetching ${fullLink}:`,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // Request was made but no response was received
      console.error(
        `2Error fetching ${fullLink}: No response received`
        // error.request
      );
    } else {
      // Something happened in setting up the request
      console.error(`3Error fetching ${fullLink}:`, error.message);
    }
    console.log("error - config", error.config);
  }
}

const scraper = async (lnk) => {
  try {
    let response = await axios.get(lnk, { timeout: 3000000 });
    const html = response.data;

    //   Use Cheerio to parse the html
    const $ = cheerio.load(html);

    let anchorsArr = [];
    let links = [];
    let href = [];

    let anchorTags = $(".entry-content p a");
    let linkTags = $("#pointssect_ctpg li a");

    anchorTags.each((i, ele) => {
      const li = $(ele).attr("href");
      if (li && li.trim() !== "") {
        anchorsArr.push(li);
      }
    });
    linkTags.each((i, ele) => {
      const li = $(ele).attr("href");
      if (li && li.trim() !== "") {
        links.push(li);
      }
    });

    href = [...anchorsArr, ...links];
    // console.log(anchorsArr, links);
    // return links;

    for (const li of href) {
      let res = await checkerFunk(li, lnk);
      //   console.log(res);
    }
  } catch (error) {
    // console.error("Error in scraper function:-", error);
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(
        `7Error fetching ${lnk}:`,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // Request was made but no response was received
      console.error(
        `8Error fetching ${lnk}: No response received`,
        error.request
      );
    } else {
      // Something happened in setting up the request
      console.error(`9Error fetching ${lnk}:`, error.message);
    }
    console.log("error - config", error.config);
  }
};

for (const i of links) {
  console.log(i);
  await scraper(i);
  console.log(issuelink);
}
