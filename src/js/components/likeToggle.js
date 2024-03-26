export const likeToggle = () => {
	$("._like").on("click", (e) => {
		const target = $(e.currentTarget);

		target.toggleClass("is-active");
	});
};
