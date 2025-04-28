import puppeteer from "puppeteer";
jest.setTimeout(10000)

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("btn render on page", async () => {
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".btn");
    const submit = await page.$(".btn");

    await submit.click();

    await page.waitForSelector(".popover");

    const isHidden = await page.$eval(".popover", (el) =>
      el.classList.contains("hidden"),
    );
    expect(isHidden).toBe(false);

    await submit.click();

    await new Promise((resolve) => setTimeout(resolve, 300));

    await page.waitForSelector(".popover");

    const isNoHidden = await page.$eval(".popover", (el) =>
      el.classList.contains("hidden"),
    );
    expect(isNoHidden).toBe(true);
  });

  afterEach(async () => {
    await browser.close();
  });
});
