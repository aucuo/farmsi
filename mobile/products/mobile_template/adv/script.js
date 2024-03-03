/***/ "./src/js/components/ad.js":
/*!*********************************!*\
  !*** ./src/js/components/ad.js ***!
  \*********************************/
/*! exports provided: adversting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adversting", function() { return adversting; });
    var adversting = function adversting() {
        var ad = $(".ad");
        ad.on("click", function (e) {
            var target = $(e.currentTarget);
            var targetId = target.attr("id");
            var targetBlock = $(".ad__block[data-id=\"".concat(targetId, "\"]"));
            targetBlock.toggleClass("is-active");
        });
        $(document).mouseup(function (e) {
            var container = $(".ad__block");
            if (!container.is(e.target) && !ad.is(e.target) && container.has(e.target).length === 0) {
                container.removeClass("is-active");
            }
        });
    };

    /***/ "./src/js/components/copy.js":
    /*!***********************************!*\
      !*** ./src/js/components/copy.js ***!
      \***********************************/
    /*! exports provided: copyLink */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyLink", function() { return copyLink; });
        var copyLink = function copyLink() {
            var button = document.querySelectorAll(".js-copy");
            button.forEach(function (element) {
                element.addEventListener("click", function (e) {
                    e.preventDefault();
                    var target = e.currentTarget;
                    // getting the text content that we want to copy
                    var content = target.getAttribute("href");
                    // loading the content into our clipboard
                    navigator.clipboard.writeText(content);
                    target.style.display = "none";
                    target.parentElement.querySelector(".advertising__link--complete").style.display = "inline-flex";
                    // target.querySelector(".advertising__link--complete").style.display =
                    // 	"inline-flex";
                });
            });
        };
