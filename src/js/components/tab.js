export const tabInit = () => {
	const tabLink = $(".js-tab-link");

	tabLink.on("click", (e) => {
		const target = $(e.currentTarget);
		const targetKey = target.attr("data-key");

		target.addClass("is-active").siblings().removeClass("is-active");

		$(`.js-tab-block[data-tab=${targetKey}]`)
			.addClass("is-active")
			.siblings()
			.removeClass("is-active");
	});
};
