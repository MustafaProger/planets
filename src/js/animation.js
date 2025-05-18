export default function animation() {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	document.querySelectorAll(".container__block").forEach((block) => {
		block.classList.add("animate-hidden");
		observer.observe(block);
	});

	const arrows = document.querySelectorAll(".planet-comparison__arrow img");

	arrows.forEach((arrow) => {
		let angle = 0;
		let direction = 1;

		function animate() {
			angle += 0.5 * direction;
			if (angle > 5 || angle < -5) direction *= -1;
			arrow.style.transform = `rotate(${angle}deg)`;
			requestAnimationFrame(animate);
		}

		animate();
	});

	function animateNumber(element, target) {
		let current = 0;
		const step = target / 60;

		function update() {
			current += step;
			if (current >= target) {
				element.textContent = target.toFixed(2);
			} else {
				element.textContent = current.toFixed(2);
				requestAnimationFrame(update);
			}
		}

		update();
	}
}
