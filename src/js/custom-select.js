export default function setupCustomSelect(customSelect, getOtherSelectedValue) {
	const button = customSelect.querySelector(".select-button");
	const dropdown = customSelect.querySelector(".select-dropdown");
	const options = dropdown.querySelectorAll(".select-option");
	const selectedValue = button.querySelector(".selected-value");

	function closeDropdown() {
		customSelect.classList.remove("open");
		button.setAttribute("aria-expanded", "false");
	}

	function openDropdown() {
		customSelect.classList.add("open");
		button.setAttribute("aria-expanded", "true");
		dropdown.focus();
	}

	button.addEventListener("click", (e) => {
		e.stopPropagation();
		if (customSelect.classList.contains("open")) {
			closeDropdown();
		} else {
			openDropdown();
		}
	});

	options.forEach((option) => {
		option.addEventListener("click", () => {
			options.forEach((opt) => opt.classList.remove("selected"));
			option.classList.add("selected");
			selectedValue.textContent = option.textContent;
			closeDropdown();
			if (typeof customSelect.onChange === "function") customSelect.onChange();
		});
	});

	document.addEventListener("click", (e) => {
		if (!customSelect.contains(e.target)) closeDropdown();
	});

	function updateOptions() {
		const otherValue = getOtherSelectedValue();
		options.forEach((opt) => {
			if (opt.dataset.value === otherValue) {
				opt.setAttribute("hidden", "hidden");
			} else {
				opt.removeAttribute("hidden");
			}
		});
	}

	function getSelectedValue() {
		const sel = dropdown.querySelector(".select-option.selected");
		return sel ? sel.dataset.value : null;
	}

	customSelect.updateOptions = updateOptions;
	customSelect.getSelectedValue = getSelectedValue;
}
