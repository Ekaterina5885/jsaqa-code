const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { mail, password } = require('../user.js');

test('Should be successful authorization', async ({ page }) => {
	await page.goto('https://netology.ru/');
	await page.screenshot({ path: 'screenshot/Successful1.png' });
	await page.click('text=Войти');
	await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
	await page.fill('[placeholder="Email"]', mail);
	await page.fill('[placeholder="Пароль"]', password);
	await page.click('text=Войти');
	await page.screenshot({ path: 'screenshot/Successful2.png' });

	await expect(page.locator('text=Мои курсы и профессии')).toBeVisible();
	await page.screenshot({ path: 'screenshot/Successful3.png' });
});

test('Should be unsuccessful authorization', async ({ page }) => {
	await page.goto('https://netology.ru/');
	await page.screenshot({ path: 'screenshot/Unsuccessful1.png' });
	await page.click('text=Войти');
	await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
	await page.fill('[placeholder="Email"]', '1111@mail.ru');
	await page.fill('[placeholder="Пароль"]', password);
	await page.click('text=Войти');
	await page.screenshot({ path: 'screenshot/Unsuccessful2.png' });

	await expect(
		page.locator('text=Вы ввели неправильно логин или пароль')
	).toBeVisible();
	await page.screenshot({ path: 'screenshot/Unsuccessful3.png' });
});
