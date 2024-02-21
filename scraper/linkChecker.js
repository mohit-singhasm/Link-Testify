import puppeteer from "puppeteer";

let cityArr = [
    "British Columbia",
    "Vancouver",
    "Victoria",
    "Surrey",
    "Burnaby",
    "North Vancouver",
    "Richmond",
    "Saanich",
    "Ladner",
    "Squamish",
    "Kelowna",
    "Prince George",
    "Delta",
    "Coquitlam",
    "Nanaimo",
    "Kamloops",
    "Abbotsford",
    "Langley",
    "Maple Ridge",
    "Chilliwack",
    "Vernon",
    "West Vancouver",
    "New Westminster",
    "Port Coquitlam",
    "Port Alberni",
    "Penticton",
    "Campbell River",
    "Mission",
    "Courtenay",
    "Fort St John",
    "Nelson",
    "Quesnel",
    "Duncan",
    "Cranbrook",
    "Powell River",
    "White Rock",
    "Williams Lake",
    "West Kelowna",
    "Dawson Creek",
    "Port Moody",
    "Trail",
    "Terrace",
    "Castlegar",
    "Comox",
    "Prince Rupert",
    "Sidney",
    "Salmon Arm",
    "Kimberley",
    "Aldergrove",
    "Coldstream",
    "Parksville",
    "Salt Spring Island",
    "Pitt Meadows",
    "Colwood",
    "Langford",
    "Qualicum Beach",
    "Chemainus",
    "Whistler",
    "Tofino",
    "Ladysmith",
    "Ucluelet",
    "Cumberland",
    "Lake Cowichan",
    "Ontario",
    "Toronto",
    "Mississauga",
    "North York",
    "Scarborough",
    "Welland Pelham",
    "St Thomas",
    "Ottawa",
    "Hamilton",
    "London",
    "Windsor",
    "Etobicoke",
    "Brampton",
    "Kitchener",
    "St Catharines",
    "Burlington",
    "Oakville",
    "Thunder Bay",
    "Oshawa",
    "Markham",
    "Cambridge",
    "Kingston",
    "Milton",
    "Peel",
    "Caledon",
    "Georgina",
    "Whitchurch Stouffville",
    "Vaughan",
    "Aurora",
    "Durham",
    "Uxbridge",
    "Newcastle",
    "Nepean",
    "Brantford",
    "Guelph",
    "Niagara Falls",
    "Sudbury",
    "Richmond Hill",
    "Peterborough",
    "Sault Ste Marie",
    "Barrie",
    "Waterloo",
    "Sarnia",
    "Whitby",
    "York",
    "Orleans",
    "Thornhill",
    "North Bay",
    "East York",
    "Cornwall",
    "Ajax",
    "Welland",
    "Woodbridge",
    "Newmarket",
    "Stoney Creek",
    "Pickering",
    "Chatham Kent",
    "Gloucester",
    "Belleville",
    "Kanata",
    "Woodstock",
    "Alberta",
    "Calgary",
    "Edmonton",
    "Lethbridge",
    "Medicine Hat",
    "Red Deer",
    "Blackfalds",
    "Grande Prairie",
    "Sherwood Park",
    "St Albert",
    "Fort Mcmurray",
    "Camrose",
    "Airdrie",
    "Leduc",
    "Spruce Grove",
    "Fort Saskatchewan",
    "Lloydminster",
    "Wetaskiwin",
    "Canmore",
    "Cochrane",
    "Okotoks",
    "Bonnyville",
    "Westlock",
    "Lacombe",
    "Stony Plain",
    "Sturgeon County",
    "Brooks",
    "Sylvan Lake",
    "Taber",
    "High River",
    "Devon",
    "Cold Lake",
    "Hinton",
    "Beaumont",
    "Chestermere",
    "Strathmore",
    "Innisfail",
    "Peace River",
    "Whitecourt",
    "Olds",
    "Edson",
    "Vermilion",
    "Morinville",
    "Drayton Valley",
    "Rocky Mountain House",
    "Vegreville",
    "Nisku",
    "Athabasca",
    "Wainwright",
    "Ponoka",
    "Coaldale",
    "Saskatchewan",
    "Regina",
    "Saskatoon",
    "Moose Jaw",
    "Prince Albert",
    "Swift Current",
    "Yorkton",
    "North Battleford",
    "Weyburn",
    "Estevan",
    "Lloydminster",
    "Meadow Lake",
    "Emerald Park",
    "White City",
    "Buena Vista",
    "Corman Park",
    "Deer Valley",
    "Grasswood",
    "Furdale",
    "Riverside Estates",
    "Warman",
    "Coppersands",
    "Casa Rio",
    "Kindersley",
    "Beaver Creek",
    "Watrous",
    "Shellbrook",
    "Martensville",
    "St Isidore De Bellevue",
    "Waldron",
    "Smiley",
    "Carragana",
    "Waseca",
    "Indian Head",
    "Caron",
    "Woodrow",
    "Alvena",
    "Ebenezer",
    "Leslie",
    "Conquest",
    "Frobisher",
    "Frenchman Butte",
    "Avonhurst",
    "Hazlet",
    "Pense",
    "Herbert",
    "Love",
    "Fulda",
    "Pathlow",
    "Semans",
    "New Brunswick",
    "Saint John",
    "Moncton",
    "Fredericton",
    "Oromocto",
    "Caraquet",
    "Saint Andrews",
    "Tracadie Sheila",
    "Bathurst",
    "Miramichi",
    "Edmundston",
    "Campbellton",
    "Grand Falls",
    "Shediac",
    "Sackville",
    "Dieppe",
    "Quispamsis",
    "Riverview",
    "Rothesay",
    "Northumberland County",
    "Chatham",
    "Nova Scotia",
    "Halifax",
    "Antigonish",
    "Baddeck",
    "Bridgewater",
    "Cheticamp",
    "Goffs",
    "Lunenberg",
    "New Glasgow",
    "Port Hawkesbury",
    "Shelburne",
    "Sherbrooke",
    "Sydney",
    "Truro",
    "Wolfville",
    "Yarmouth",
    "Prince Edward Island",
    "Alberton",
    "Cardigan",
    "Charlottetown",
    "Cornwall",
    "Georgetown",
    "Montague",
    "Souris",
    "Summerside",
    "Tignish",
    "Manitoba",
    "Winnipeg",
    "Thompson",
    "Brandon",
    "Portage La Prairie",
    "Newfoundland",
    "Corner Brook",
    "Mount Pearl",
    "St John's",
    "Bay Roberts",
    "Bishop's Falls",
    "Bonavista",
    "Botwood",
    "Burin",
    "Carbonear",
    "Channel Port Aux Basques",
    "Clarenville",
    "Conception Bay",
    "Deer Lake",
    "Gander",
    "Grand Falls Windsor",
    "Harbour Grace",
    "Labrador City",
    "Lewisporte",
    "Marystown",
    "Paradise",
    "Pasadena",
    "Placentia",
    "Portugal Cove St Phillips",
    "Stephenville",
    "Torbay"
]

let linkArr = [
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/vancouver/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/victoria/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/surrey/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/burnaby/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/north-vancouver/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/richmond/",
    "https://www.cartitleloanscanada.ca/saanich-title-loans/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/ladner/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/squamish/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/kelowna/",
    "https://www.cartitleloanscanada.ca/area-served/prince-george/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/delta/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/coquitlam/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/nanaimo/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/kamloops/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/abbotsford/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/langley/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/maple-ridge/",
    "https://www.cartitleloanscanada.ca/area-served/british-columbia/chilliwack/"
]

// let linkArr = [
//     "https://www.cartitleloanscanada.ca/area-served/british-columbia/",
//     "https://www.cartitleloanscanada.ca/area-served/british-columbia/vancouver/",
//     "https://www.cartitleloanscanada.ca/area-served/british-columbia/victoria/",
// ];

let results = {}
let anchor;
// let cityPages;
// let tagNames = {};
// let newCityPages = {};


async function scrapeProduct(url) {
    const browser = await puppeteer.launch({ headless: "new", headless: false });
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

            // , {
            //   waitUntil: "domcontentloaded",
            // }

            await page.evaluate(() => {
                let bod = document.querySelector("head")
                bod.remove()
                let disableFooter = document.querySelector('footer')
                disableFooter.remove();
                let anchor = document.querySelectorAll('a')
                anchor.forEach((ele) => {
                    ele.remove();
                })

                // let disableFooter = document.querySelector('.dynmcfootr')
                // disableFooter.remove();
                // let firstPara = document.querySelectorAll('p')[4]
                // firstPara.remove()
                // let news = document.querySelector('.citypgsec4')
                // news.remove();
                // let anchor = document.querySelectorAll('p')[4].querySelectorAll('a')
                // anchor.forEach((ele) => {
                //     ele.remove();
                // })

                // let span = document.querySelectorAll('p')[4].querySelectorAll('span')
                // if (span) {
                //     span.forEach((ele) => {
                //         ele.remove();
                //     })
                // }
                // let sec7 = document.querySelectorAll('.testmnl li')
                // // console.log(sec7)
                // if (sec7) {
                //     sec7.forEach((ele) => {
                //         ele.remove();
                //     })
                // }
            })

            let pageContent = await page.content();


            // results[link] || results[link] = {
            //     collateral: searchWordInParagraph(pageContent, 'collateral'),
            //     title: searchWordInParagraph(pageContent, 'title'),
            //     equity: searchWordInParagraph(pageContent, 'equity'),
            // }

            

            console.log(results)

            // console.log(pageContent.search(/collateral/ig))

            // cityPages = await page.evaluate(() => {
            //     let city = {}
            //     let anchor = document.querySelectorAll('p')[5].querySelectorAll('a')
            //     anchor.forEach((ele) => {
            //         // console.log(`https://instantcashcanada.com${ele.getAttribute('href')}`)
            //         console.log(city)
            //         city['anchor'] ? city['anchor'].push(`https://instantcashcanada.com${ele.getAttribute('href')}`) : city['anchor'] = [`https://instantcashcanada.com${ele.getAttribute('href')}`]
            //     })


            //     let sec7 = document.querySelectorAll('.testmnl li a')
            //     if (sec7) {
            //         sec7.forEach((ele) => {
            //             // console.log(`https://instantcashcanada.com${ele.getAttribute('href')}`)
            //             city['List'] ? city['List'].push(`https://instantcashcanada.com${ele.getAttribute('href')}`) : city['List'] = [`https://instantcashcanada.com${ele.getAttribute('href')}`]
            //         })
            //     }
            //     console.log(city)
            //     return city

            //     let abc = {}
            // })
            // newCityPages.anchor ? newCityPages.anchor.push(...cityPages.anchor) : newCityPages.anchor = cityPages.anchor
            // newCityPages.List ? newCityPages.List.push(...cityPages.List) : newCityPages.List = cityPages.List
        }
        catch (error) {
            console.error(`Error while processing ${link}: ${error.message}`);
        }
        finally {
            await page.close();
        }
    }
    await browser.close()
}

// async function linkGen(url) {
//     // console.log('2')
//     const browser = await puppeteer.launch({ headless: "new", headless: false });
//     for (let link of url) {
//         const page = await browser.newPage();
//         await page.setViewport({
//             width: 1280,
//             height: 960,
//             deviceScaleFactor: 1,
//         });
//         page.setDefaultNavigationTimeout(3000000);

//         try {
//             await page.goto(link, {
//                 waitUntil: "domcontentloaded",
//             });

//             // , {
//             //   waitUntil: "domcontentloaded",
//             // }
//         }
//         catch (error) {
//             console.error(`Error while processing ${error.message}`);
//             errorPages[link] ? errorPages[link].push(error.message) : errorPages[link] = [error.message]
//         }
//         finally {
//             await page.close();
//         }
//     }
//     console.log(errorPages)
//     await browser.close()
// }


function searchWordInParagraph(paragraph, searchTerm) {
    const regex = new RegExp(searchTerm, 'gi');
    const matches = paragraph.match(regex);

    return matches ? matches.length : 0;
}

async function tester() {
    await scrapeProduct(linkArr)
    // await linkGen(cityPages.anchor)
    // await linkGen(cityPages.List)
}


tester()



