export const inputFocus = () => {
	const inputElement = $(".js-searchInput");
	const overlay = $(".search__backdrop");

	inputElement.on("focus, click", () => {
		if (overlay) {
			overlay.fadeIn(200);
		}
	});

	overlay.on("click", function () {
		$(this).fadeOut(200);
	});
};
