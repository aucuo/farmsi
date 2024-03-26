export const submenuInit = () => {
	const links = $(".header__slide");
	const submenuItem = $(".submenu__item");
	const submenu = $(".submenu");
	let i;

	links.on("mouseenter", function () {
		i = $(this).index();
		$(this).children().addClass("is-active");
		$(this).siblings().children().removeClass("is-active");
		if (submenuItem.eq(i).length) {
			submenu.addClass("is-active");
			submenuItem.eq(i).show().siblings().hide();
		} else {
			submenu.removeClass("is-active");
			submenuItem.hide();
		}
	});

	links.on("mouseleave", () => {
		if (!submenuItem.eq(i).length) {
			links.children().removeClass("is-active");
		}
	});

	submenu.on("mouseleave", () => {
		links.eq(i).children().removeClass("is-active");
		submenu.removeClass("is-active");
		submenuItem.eq(i).hide();
	});
};
