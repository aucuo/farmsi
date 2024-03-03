__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* eslint-disable no-new */

var heroSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".hero__slider .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
});

heroSlider.on("slideChange", function () {
    var copy = document.querySelectorAll(".js-copy");
    copy.forEach(function (element) {
        element.style.display = "";
        element.parentElement.querySelector(".advertising__link--complete").style.display = "";
    });
});