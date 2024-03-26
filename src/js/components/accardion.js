export const accardion = () => {
	const accardion = $(".js-accardion");

	accardion.on("click", (e) => {
		const target = $(e.currentTarget);

		target.toggleClass("is-active").siblings().removeClass("is-active");

		target.children(".js-accardion-body").slideToggle();

		target.siblings().children(".js-accardion-body").slideUp();
	});
};
