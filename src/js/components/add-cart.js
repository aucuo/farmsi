const addCart = () => {
	$(".js-add-cart").on("click", (e) => {
		const target = $(e.currentTarget);
		const toast = $(".toast");

		target.hide();
		target.parent().find(".js-add-block").show();

		const toastImage = target
			.closest(".product-cart")
			.find("img")
			.data("src");

		toast.find("img").attr("src", toastImage);
	});
};

const plusCart = () => {
	$(".js-add-plus").on("click", (e) => {
		const target = $(e.currentTarget);
		let $input = target.parent().find("input");
		$input.val(parseInt($input.val()) + 1);
		$input.change();

		return false;
	});
};

const minusCart = () => {
	$(".js-add-minus").on("click", (e) => {
		const target = $(e.currentTarget);

		let $input = target.parent().find("input");
		let count = parseInt($input.val()) - 1;
		if (count < 1) {
			count = 1;
			target.closest(".card-adding-block").find(".js-add-cart").show();
			target.closest(".card-adding-block").find(".js-add-block").hide();
		} else {
			count;
		}
		$input.val(count);
		$input.change();

		return false;
	});
};

export const addCartInit = () => {
	addCart();
	plusCart();
	minusCart();
};
