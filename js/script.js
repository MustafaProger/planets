import setupCustomSelect from "./custom-select";
import setupSelect from "./visualization";

document.addEventListener("DOMContentLoaded", () => {
	const select1 = document.getElementById("select-1");
	const select2 = document.getElementById("select-2");

	setupCustomSelect(select1, () => select2.getSelectedValue());
	setupCustomSelect(select2, () => select1.getSelectedValue());

	select1.onChange = () => select2.updateOptions();
	select2.onChange = () => select1.updateOptions();

	select1.updateOptions();
	select2.updateOptions();

	function getItem(dataType, side) {
		return document.querySelector(
			`.container__block[data-type="${dataType}"] .planet-comparison__item--${side}`
		);
	}

	setupSelect(
		"select-1",
		getItem("diameter", 1),
		"planet-comparison__number_diameter",
		"diameter.smartphones",
		true
	);
	setupSelect(
		"select-2",
		getItem("diameter", 2),
		"planet-comparison__number_diameter",
		"diameter.smartphones",
		true
	);

	setupSelect(
		"select-1",
		getItem("temperature", 1),
		"planet-comparison__number_temp",
		"temperature.celsius.average"
	);
	setupSelect(
		"select-2",
		getItem("temperature", 2),
		"planet-comparison__number_temp",
		"temperature.celsius.average"
	);
});
