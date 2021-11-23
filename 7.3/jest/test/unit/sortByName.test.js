const sorting = require("../../app");

describe("Books names test suit", () => {
	it("Books names should be sorted in ascending order", () => {
		expect(
			sorting.sortByName([
				"Гарри Поттер",
				"Властелин Колец",
				"Волшебник изумрудного города",
			]),
		).toEqual([
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		]);
	});
  it("Should not sort the titles of the same books in ascending order", () => {
		expect(
			sorting.sortByName([
				"Малыш и Карлсон",
				"Малыш и Карлсон",
				"Малыш и Карлсон",
			]),
		).toEqual([
			"Малыш и Карлсон",
			"Малыш и Карлсон",
			"Малыш и Карлсон",
		]);
	});
});
