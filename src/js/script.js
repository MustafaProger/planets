import setupCustomSelect from "./custom-select";
import setupSelect from "./visualization";
import animation from "./animation";

document.addEventListener("DOMContentLoaded", () => {
	const select1 = document.getElementById("select-1");
	const select2 = document.getElementById("select-2");

	setupCustomSelect(select1, () => select2.getSelectedValue());
	setupCustomSelect(select2, () => select1.getSelectedValue());

	select1.onChange = () => select2.updateOptions();
	select2.onChange = () => select1.updateOptions();

	select1.updateOptions();
	select2.updateOptions();

	const getItem = (dataType, side) =>
		document.querySelector(
			`.container__block[data-type="${dataType}"] .planet-comparison__item--${side}`
		);

	const configs = [
		{
			selectId: "select-1",
			dataType: "diameter",
			side: 1,
			numberClass: "planet-comparison__number_diameter",
			pathToValue: "diameter.km",
			descrClass: "planet-comparison__descr",
			descrValue: "diameter.comparison",
			hasImage: true,
		},
		{
			selectId: "select-2",
			dataType: "diameter",
			side: 2,
			numberClass: "planet-comparison__number_diameter",
			pathToValue: "diameter.km",
			descrClass: "planet-comparison__descr",
			descrValue: "diameter.comparison",
			hasImage: true,
		},
		{
			selectId: "select-1",
			dataType: "temperature",
			side: 1,
			numberClass: "planet-comparison__number_temp",
			pathToValue: "temperature.celsius.average",
			descrClass: "planet-comparison__descr",
			descrValue: "temperature.household.description",
			hasImage: false,
			emojiClass: "planet-comparison__number_emoji",
			emojiValue: "temperature.household.item",
		},
		{
			selectId: "select-2",
			dataType: "temperature",
			side: 2,
			numberClass: "planet-comparison__number_temp",
			pathToValue: "temperature.celsius.average",
			descrClass: "planet-comparison__descr",
			descrValue: "temperature.household.description",
			hasImage: false,
			emojiClass: "planet-comparison__number_emoji",
			emojiValue: "temperature.household.item",
		},
		{
			selectId: "select-1",
			dataType: "mass",
			side: 1,
			numberClass: "planet-comparison__number_mass",
			pathToValue: "mass.uranusMass",
			descrClass: "planet-comparison__descr",
			descrValue: "mass.comparison",
			hasImage: "planet-comparison__img",
		},
		{
			selectId: "select-2",
			dataType: "mass",
			side: 2,
			numberClass: "planet-comparison__number_mass",
			pathToValue: "mass.uranusMass",
			descrClass: "planet-comparison__descr",
			descrValue: "mass.comparison",
			hasImage: "planet-comparison__img",
		},
		{
			selectId: "select-1",
			dataType: "orbit",
			side: 1,
			numberClass: "planet-comparison__number_orbit",
			pathToValue: "orbit.distanceFromSun.au",
			descrClass: "planet-comparison__descr",
			descrValue: "orbit.comparison",
		},
		{
			selectId: "select-2",
			dataType: "orbit",
			side: 2,
			numberClass: "planet-comparison__number_orbit",
			pathToValue: "orbit.distanceFromSun.au",
			descrClass: "planet-comparison__descr",
			descrValue: "orbit.comparison",
		},
	];

	configs.forEach(
		({
			selectId,
			dataType,
			side,
			numberClass,
			pathToValue,
			descrClass,
			descrValue,
			hasImage = false,
			emojiClass = null,
			emojiValue = null,
		}) => {
			setupSelect(
				selectId,
				getItem(dataType, side),
				numberClass,
				pathToValue,
				descrClass,
				descrValue,
				hasImage,
				emojiClass,
				emojiValue
			);
		}
	);

	animation();
});
