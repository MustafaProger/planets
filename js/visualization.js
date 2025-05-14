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
	descrClass,
	descrValue,
	hasImage = false,
	emojiClass = null,
	emojiValue = null
) {
	const select = document.getElementById(selectId);
	const options = select.querySelectorAll(".select-option");
	const numberEl = outputElement.querySelector(`.${numberClass}`);
	const descrEl = outputElement.querySelector(`.${descrClass}`);
	const emojiEl = outputElement.querySelector(`.${emojiClass}`);
	const planetImg = outputElement.querySelector("img");

	function renderPlanet(value) {
		const data = planets[value];
		if (!data) return;

		const valueDigits = getNestedValue(data, pathToValue);
		numberEl.textContent = valueDigits;

		const valueDescr = getNestedValue(data, descrValue);
		descrEl.textContent = valueDescr;

		if (emojiClass && emojiValue) {
			const valueEmoji = getNestedValue(data, emojiValue);
			emojiEl.textContent = valueEmoji;
		}

		if (
			hasImage &&
			planetImg &&
			data.image &&
			data.diameter?.km &&
			hasImage !== "planet-comparison__img"
		) {
			const size = 100 * (data.diameter.km / 50000);
			planetImg.src = data.image;
			planetImg.alt = data.name;
			planetImg.style.height = `${size}px`;
			planetImg.style.width = `${size}px`;
		}

		if (planets.uranus.image && hasImage === "planet-comparison__img") {
			const container = outputElement.querySelector(
				".planet-comparison__img-wrapper"
			);
			container.innerHTML = "";

			const count = Math.floor(data.mass.uranusMass);

			if (count > 0) {
				for (let i = 0; i < count; i++) {
					const img = document.createElement("img");
					img.src = planets.uranus.image;
					img.alt = "Уран";
					img.classList.add("planet-comparison__img");
					container.appendChild(img);
				}
			}
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
