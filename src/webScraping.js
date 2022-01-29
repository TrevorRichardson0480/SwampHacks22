// Import the puppeteer library
const puppeteer = require("puppeteer");

async function webScraper(url) {
  const browser = await puppeteer.launch(); // Launch browser
  const page = await browser.newPage(); // Open new tab
  await page.goto(url); // Got to the url

  // Get http reuqest response
  const responseStatus = await page.waitForResponse((response) => {
    return response;
  });

  if (responseStatus.status() == 200) {
    // Get all the paragraphs from the website
    const getParagraphs = await page.evaluate(() => {
      const paragraphTag = document.querySelectorAll("p"); // Get all p tags
      const paragraphArr = []; // Store the paragraghs text

      // Go through each p tag and push the text to the array
      paragraphTag.forEach((p) => {
        if (p.innerText.length >= 700) paragraphArr.push(p.innerText);
      });

      // Return paragraphs array
      return paragraphArr.join("\n");
    });

    // Check if the array is empty or not
    if (getParagraphs.length > 0) {
      console.log(getParagraphs);

      // Close browser
      await browser.close();

      // Return data
      return getParagraphs;
    } else {
      throw new Error("Array empty");
    }
  } else {
    throw new Error(`Error! HTTP request status is ${responseStatus.status()}`);
  }
}

webScraper("https://en.wikipedia.org/wiki/University_of_Florida");
