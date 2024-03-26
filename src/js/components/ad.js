export const adversting = () => {
	const ad = $(".ad");

	ad.on("click", (e) => {
		const target = $(e.currentTarget);
		const targetId = target.attr("id");
		let targetBlock = $(`.ad__block[data-id="${targetId}"]`);

		targetBlock.toggleClass("is-active");
	});

	$(document).mouseup((e) => {
		const container = $(".ad__block");
		if (
			!container.is(e.target) &&
			!ad.is(e.target) &&
			container.has(e.target).length === 0
		) {
			container.removeClass("is-active");
		}
	});
};
