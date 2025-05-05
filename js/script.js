import setupCustomSelect from "./custom-select";

document.addEventListener("DOMContentLoaded", () => {
	const select1 = document.getElementById("select-1");
	const select2 = document.getElementById("select-2");

	setupCustomSelect(select1, () => select2.getSelectedValue());
	setupCustomSelect(select2, () => select1.getSelectedValue());

	select1.onChange = () => select2.updateOptions();
	select2.onChange = () => select1.updateOptions();

	select1.updateOptions();
	select2.updateOptions();
});
