/***/ "./src/js/components/add-cart.js":
/*!***************************************!*\
  !*** ./src/js/components/add-cart.js ***!
  \***************************************/
/*! exports provided: addCartInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartInit", function() { return addCartInit; });
    var addCart = function addCart() {
        $(".js-add-cart").on("click", function (e) {
            var target = $(e.currentTarget);
            var toast = $(".toast");
            target.hide();
            target.parent().find(".js-add-block").show();
            target.closest(".card-adding-block").find(".cart-fast-add").hide();
            var toastImage = target.closest(".product-cart").find("img").data("src");
            toast.find("img").attr("src", toastImage);
        });
    };
    var plusCart = function plusCart() {
        $(".js-add-plus").on("click", function (e) {
            var target = $(e.currentTarget);
            var $input = target.parent().find("input");
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    };
    var minusCart = function minusCart() {
        $(".js-add-minus").on("click", function (e) {
            var target = $(e.currentTarget);
            var $input = target.parent().find("input");
            var count = parseInt($input.val()) - 1;
            if (count < 1) {
                count = 1;
                target.closest(".card-adding-block").find(".js-add-cart").show();
                target.closest(".card-adding-block").find(".js-add-block").hide();
                target.closest(".card-adding-block").find(".cart-fast-add").show();
            } else {
                count;
            }
            $input.val(count);
            $input.change();
            return false;
        });
    };
    var addCartInit = function addCartInit() {
        addCart();
        plusCart();
        minusCart();
    };

    //

    /***/ "./src/js/components/likeToggle.js":
    /*!*****************************************!*\
      !*** ./src/js/components/likeToggle.js ***!
      \*****************************************/
    /*! exports provided: likeToggle */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeToggle", function() { return likeToggle; });
        var likeToggle = function likeToggle() {
            $("._like").on("click", function (e) {
                var target = $(e.currentTarget);
                target.toggleClass("is-active");
            });
        };



        /***/ "./src/js/components/slider.js":
        /*!*************************************!*\
          !*** ./src/js/components/slider.js ***!
          \*************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* eslint-disable no-new */