// Import library
const fetch = require("node-fetch");
const cheerio = require("cheerio");

// Web scraping website
export async function webScraping(url) {
  const searchUrl = url; // Webiste url
  const response = await fetch(searchUrl); // fetch page (html)

  const htmlString = await response.text(); // get response text
  const $ = cheerio.load(htmlString); // parse HTML string

  // Get paragraphs data
  const paragraphs = $("p").text().split("\n");
  const finalData = [];
  paragraphs.forEach((p) => {
    if (p.length >= 700) {
      finalData.push(p);
    }
  });

  // Return data
  return finalData.join("\n");
}
