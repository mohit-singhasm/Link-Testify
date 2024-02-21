import puppeteer from "puppeteer";

const site = 'https://www.canadacarcash.com/';
// const site = 'https://premierloanscanada.com/';
const link = `${site}page-sitemap.xml`

const carTitleLinks = []
const carEquityLinks = []
const carCollateralLinks = []

async function scrapingSiteMap(url) {
    const browser = await puppeteer.launch({ headless: "new", headless: false })
    const page = await browser.newPage();
    // Set screen size
    await page.setViewport({ width: 1080, height: 1024, deviceScaleFactor: 1 });
    page.setDefaultNavigationTimeout(3000000);

    try {
        await page.goto(url)
        let linkList = await page.evaluate(() => {
            let linkArr = document.querySelectorAll('a')
            return Array.from(linkArr).map(a => a.innerText)
        })

        // console.log(linkList.replace(site, ''))
        linkList = linkList.map(e => e.replace(site, ''))

        const carEquityLinks = linkList.filter(link => link.includes('equity'))
        const carTitleLinks = linkList.filter(link => link.includes('title'))
        const carCollateralLinks = linkList.filter(link => link.includes('collateral'))

        let linkDatabase = {site, carTitleLinks, carEquityLinks, carCollateralLinks};
        // console.log(linkDatabase);
        console.log(carEquityLinks, carEquityLinks.length);

    } catch (error) {
        console.error("Not Working", error)
    } finally {
        await page.close();
    }
    await browser.close()
}


scrapingSiteMap(link)