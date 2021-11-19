const puppeteer = require('puppeteer');
let page;

beforeEach(async () => {
	page = await browser.newPage();
}, 30000);

afterEach(() => {
	page.close();
}, 30000);

describe('Netology.ru tests', () => {
	beforeEach(async () => {
		page = await browser.newPage();
		await page.goto('https://netology.ru');
	}, 30000);

	test("The first test'", async () => {
		const title = await page.title();
		console.log('Page title: ' + title);
		const firstLink = await page.$('header a + a');
		// const firstLinkText = await page.$eval(
		//   "header a + a",
		//   (link) => link.textContent
		// );
		await firstLink.click();
		await page.waitForNavigation();
		const title2 = await page.title();
		console.log('Page title: ' + title2);
		const pageList = await browser.newPage();
		await pageList.goto('https://netology.ru/navigation');
		await pageList.waitForSelector('h1');
	}, 60000);

	test("The first link text 'Медиа Нетологии'", async () => {
		const actual = await page.$eval('header a + a', (link) => link.textContent);
		expect(actual).toContain('Медиа Нетологии');
	}, 60000);

	test("The first link leads on 'Медиа' page", async () => {
		await page.click('header a + a');
		await page.waitForSelector('.logo__media', {
			visible: true,
		});
		const actual = await page.$eval('.logo__media', (link) => link.textContent);
		expect(actual).toContain('Медиа');
	}, 60000);
});

test('Should check the titles on the job page', async () => {
	await page.goto('https://netology.ru/job');
	const actual = await page.title();
	expect(actual).toContain('Вакансии в Нетологии – найти работу');
	await page.screenshot({ path: 'screenshot/job.png' });
}, 30000);

test('Should check the titles on the page for experts', async () => {
	await page.goto('https://netology.ru/experts');
	const actual = await page.title();
	expect(actual).toContain('Станьте экспертом Нетологии');
	await page.screenshot({ path: 'screenshot/experts.png' });
}, 60000);

test('Should check the titles on the partner page', async () => {
	await page.goto('https://netology.ru/partners');
	const actual = await page.title();
	expect(actual).toContain('Партнерская программа и информационная поддержка');
	await page.screenshot({ path: 'screenshot/partners.png' });
}, 30000);
