/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/*! exports provided: tabInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabInit", function() { return tabInit; });
    var tabInit = function tabInit() {
        var tabLink = $(".js-tab-link");
        tabLink.on("click", function (e) {
            var target = $(e.currentTarget);
            var targetKey = target.attr("data-key");
            target.addClass("is-active").siblings().removeClass("is-active");
            $(".js-tab-block[data-tab=".concat(targetKey, "]")).addClass("is-active").siblings().removeClass("is-active");
        });
    };
