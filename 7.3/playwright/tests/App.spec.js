const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { mail, password } = require('../user.js');

test('Successful authorization', async ({ page }) => {
	await page.goto('https://netology.ru/');
	await page.screenshot({ path: 'screenshot/Successful.png' });
	await page.click('text=Войти');
	await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
	await page.fill('[placeholder="Email"]', mail);
	await page.fill('[placeholder="Пароль"]', password);
	await page.click('text=Войти');
	await page.screenshot({ path: 'screenshot/Successful.png' });

	await expect(page.locator('text=Мои курсы и профессии')).toBeVisible();
	await page.screenshot({ path: 'screenshot/Successful.png' });
});

test('Unsuccessful authorization', async ({ page }) => {
	await page.goto('https://netology.ru/');
	await page.screenshot({ path: 'screenshot/Unsuccessful.png' });
	await page.click('text=Войти');
	await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
	await page.fill('[placeholder="Email"]', '1111@mail.ru');
	await page.fill('[placeholder="Пароль"]', password);
	await page.click('text=Войти');
	await page.screenshot({ path: 'screenshot/Unsuccessful.png' });

	await expect(
		page.locator('text=Вы ввели неправильно логин или пароль')
	).toBeVisible();
	await page.screenshot({ path: 'screenshot/Unsuccessful.png' });
});
