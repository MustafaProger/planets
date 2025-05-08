import { planets } from "./planets";

function getNestedValue(obj, path) {
	return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function updateComparisonArrow(item1, item2) {
	const value1 = parseFloat(
		item1.querySelector(".planet-comparison__number").textContent
	);
	const value2 = parseFloat(
		item2.querySelector(".planet-comparison__number").textContent
	);

	const arrowImg = item1.parentElement.querySelector(
		".planet-comparison__arrow img"
	);
	if (!arrowImg) return;

	if (value1 > value2) {
		arrowImg.src = "./img/arrow/arrow-right.svg";
	} else if (value1 < value2) {
		arrowImg.src = "./img/arrow/arrow-left.svg";
	}
}

export default function setupSelect(
	selectId,
	outputElement,
	numberClass,
	pathToValue,
	hasImage = false
) {
	const select = document.getElementById(selectId);
	const options = select.querySelectorAll(".select-option");
	const numberEl = outputElement.querySelector(`.${numberClass}`);
	const planetImg = outputElement.querySelector("img");

	function renderPlanet(value) {
		const data = planets[value];
		if (!data) return;

		const valueToShow = getNestedValue(data, pathToValue);
		if (valueToShow == null || !numberEl) return;

		numberEl.textContent = valueToShow;

		if (hasImage && planetImg && data.image && data.diameter?.km) {
			const size = 100 * (data.diameter.km / 50000);
			planetImg.src = data.image;
			planetImg.alt = data.name;
			planetImg.style.height = `${size}px`;
			planetImg.style.width = `${size}px`;
		}

		updateComparisonArrow(
			outputElement
				.closest(".planet-comparison")
				.querySelector(".planet-comparison__item--1"),
			outputElement
				.closest(".planet-comparison")
				.querySelector(".planet-comparison__item--2")
		);
	}

	options.forEach((option) => {
		option.addEventListener("click", () => {
			const value = option.getAttribute("data-value");
			renderPlanet(value);
		});
	});

	const selectedOption = select.querySelector(".select-option.selected");
	if (selectedOption) {
		const value = selectedOption.getAttribute("data-value");
		renderPlanet(value);
	}
}
