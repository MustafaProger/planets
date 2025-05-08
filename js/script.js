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

	setupSelect("select-1", document.querySelector(".planet-1"));
	setupSelect("select-2", document.querySelector(".planet-2"));
});
