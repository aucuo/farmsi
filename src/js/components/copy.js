export const copyLink = () => {
	const button = document.querySelectorAll(".js-copy");

	button.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();
			const target = e.currentTarget;
			// getting the text content that we want to copy
			const content = target.getAttribute("href");
			// loading the content into our clipboard
			navigator.clipboard.writeText(content);

			target.style.display = "none";
			target.parentElement.querySelector(
				".advertising__link--complete"
			).style.display = "inline-flex";
			// target.querySelector(".advertising__link--complete").style.display =
			// 	"inline-flex";
		});
	});
};
