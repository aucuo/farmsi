export const clearInput = () => {
	const input = $(".js-searchInput");
	const clearBtn = $(".js-qclear");

	input.on("change paste keyup", (e) => {
		const target = $(e.currentTarget);
		const value = target.val();

		value != "" ? clearBtn.show() : clearBtn.hide();
	});

	clearBtn.on("click", (e) => {
		const target = $(e.currentTarget);
		input.val("");
		input.focus();

		target.hide();
	});
};
