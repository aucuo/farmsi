/***/ "./src/js/components/scrollUp.js":
/*!***************************************!*\
  !*** ./src/js/components/scrollUp.js ***!
  \***************************************/
/*! exports provided: scrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
    var scrollTop = function scrollTop() {
        var scrollButton = $(".scroll-up");
        scrollButton.on("click", function () {
            $("body, html").scrollTop(0);
        });
    };