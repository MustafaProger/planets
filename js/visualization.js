import { planets } from "./planets";

function updateComparisonArrow(outputElement1, outputElement2) {
	const value1 = parseInt(
		outputElement1.querySelector(".planet-comparison__number").textContent
	);
	const value2 = parseInt(
		outputElement2.querySelector(".planet-comparison__number").textContent
	);
	const arrowImg = document.querySelector(".planet-comparison__arrow img");

	if (value1 > value2) {
		arrowImg.src = "./img/arrow/arrow-right.svg";
	} else if (value1 < value2) {
		arrowImg.src = "./img/arrow/arrow-left.svg";
	}
}

export default function setupSelect(selectId, outputElement) {
	const select = document.getElementById(selectId);
	const options = select.querySelectorAll(".select-option");
	const planetImg = outputElement.querySelector("img");
	const numbers = outputElement.querySelector(".planet-comparison__number");

	const renderPlanet = (value) => {
		const data = planets[value];
		if (!data) return;

		const size = 100 * (data.diameter.km / 50000);
		planetImg.src = data.image;
		planetImg.alt = data.name;
		planetImg.style.height = `${size}px`;
		planetImg.style.width = `${size}px`;
		numbers.textContent = data.diameter.smartphones;

		updateComparisonArrow(
			document.querySelector(".planet-comparison__item--1"),
			document.querySelector(".planet-comparison__item--2")
		);
	};

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
