/***/ "./src/js/components/accardion.js":
/*!****************************************!*\
  !*** ./src/js/components/accardion.js ***!
  \****************************************/
/*! exports provided: accardion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accardion", function() { return accardion; });
    var accardion = function accardion() {
        var accardion = $(".js-accardion");
        accardion.on("click", function (e) {
            var target = $(e.currentTarget);
            target.toggleClass("is-active").siblings().removeClass("is-active");
            target.children(".js-accardion-body").slideToggle();
            target.siblings().children(".js-accardion-body").slideUp();
        });
    };