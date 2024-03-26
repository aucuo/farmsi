export const scrollTop = () => {
	const scrollButton = $(".scroll-up");

	scrollButton.on("click", () => {
		$("body, html").scrollTop(0);
	});
};
