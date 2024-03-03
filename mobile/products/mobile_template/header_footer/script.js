// footer toggle block function

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

    // header search function

    /***/ "./src/js/components/clearInput.js":
    /*!*****************************************!*\
      !*** ./src/js/components/clearInput.js ***!
      \*****************************************/
    /*! exports provided: clearInput */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInput", function() { return clearInput; });
        var clearInput = function clearInput() {
            var input = $(".js-searchInput");
            var clearBtn = $(".js-qclear");
            input.on("change paste keyup", function (e) {
                var target = $(e.currentTarget);
                var value = target.val();
                value != "" ? clearBtn.show() : clearBtn.hide();
            });
            clearBtn.on("click", function (e) {
                var target = $(e.currentTarget);
                input.val("");
                input.focus();
                target.hide();
            });
        };

        /***/ "./src/js/components/inputFocus.js":
        /*!*****************************************!*\
          !*** ./src/js/components/inputFocus.js ***!
          \*****************************************/
        /*! exports provided: inputFocus */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputFocus", function() { return inputFocus; });
            var inputFocus = function inputFocus() {
                var inputElement = $(".js-searchInput");
                var overlay = $(".search__backdrop");
                inputElement.on("focus, click", function () {
                    if (overlay) {
                        overlay.fadeIn(200);
                    }
                });
                overlay.on("click", function () {
                    $(this).fadeOut(200);
                });
            };



            /// GENERAL

            /***/ "./src/js/helpers.js":
            /*!***************************!*\
              !*** ./src/js/helpers.js ***!
              \***************************/
            /*! exports provided: default */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

                    var vars = {};
                    vars.$document = $(document);
                    vars.$window = $(window);
                    vars.$body = $(document.body);
                    vars.$html = $(document.documentElement);
                    vars.isMobile = function () {
                        return innerWidth <= 1024;
                    };
                    vars.isIE = function () {
                        return vars.$html.hasClass('is-browser-ie');
                    };
                    vars.isIOS = function () {
                        return vars.$html.hasClass('is-os-ios');
                    };
                    vars.winWidth = window.innerWidth;

                    /**
                     * Очистить текст от спецсимволов
                     * @param {string} text Обязательное, строка для очистки
                     * @returns {string} Очищенная строка
                     */
                    vars.clearText = function (text) {
                        return text.trim().replace(/\s+/g, ' ');
                    };

                    /**
                     * Создать куки запись
                     * @param {string} name Обязательное, название записи
                     * @param {string} value Обязательное, значение записи
                     * @param {string} days Обязательное, время для жизни
                     */
                    vars.setCookie = function (name, value, days) {
                        var expires = '';
                        if (days) {
                            var date = new Date();
                            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                            expires = "; expires=".concat(date.toUTCString());
                        }
                        document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
                    };

                    /**
                     * Получить куки запись
                     * @param {string} name Обязательное, название записи
                     */
                    vars.getCookie = function (name) {
                        var nameEQ = "".concat(name, "=");
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) === ' ') {
                                c = c.substring(1, c.length);
                            }
                            if (c.indexOf(nameEQ) === 0) {
                                return c.substring(nameEQ.length, c.length);
                            }
                        }
                        return null;
                    };

                    /**
                     * Удалить куки запись
                     * @param {string} name Обязательное, название записи
                     */
                    vars.eraseCookie = function (name) {
                        document.cookie = "".concat(name, "=; Max-Age=-99999999;");
                    };
                    var dataScrollLocks;
                    /**
                     * Блокирует скролл страницы
                     * Необходим для использования модальных окон
                     * @param {boolean} state Обязательное
                     * @param {string} element Обязательное, элемент которому нужно разрешить скролл
                     * @param {string} name Необязательное, ключ,
                     * чтобы была возможность открывать окно поверх другого окна
                     */
                    vars.lockScroll = function (state, $element, name) {
                        var element = $element.get(0) ? $element.get(0) : $element;
                        if (typeof dataScrollLocks === 'undefined') {
                            dataScrollLocks = new Set();
                        }
                        var scrollLocks = dataScrollLocks;
                        if (state) {
                            if (typeof name === 'string') {
                                scrollLocks.add(name);
                            }
                            body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
                                reserveScrollBarGap: true
                            });
                            setImmediate(function () {
                                vars.$html.addClass('is-lock-scroll');
                            });
                        } else {
                            if (typeof name === 'string') {
                                scrollLocks["delete"](name);
                            }
                            body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);
                            if (!scrollLocks.size) {
                                body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
                                vars.$html.removeClass('is-lock-scroll');
                            }
                        }
                    };

                    /**
                     * Скролл до элемента
                     * @param {string} $container Обязательное, элемент к которому нужно скроллить
                     * @param {string|number} time Необязательное, время скролла
                     * @param {string|number} offset Необязательное, смещение скролла может быть + или -
                     */
                    vars.scrollTo = function ($container) {
                        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
                        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                        vars.$html.css('scroll-behavior', 'initial');
                        $('html, body').stop().animate({
                            scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
                        }, parseInt(time, 10));
                        setTimeout(function () {
                            vars.$html.css('scroll-behavior', '');
                        }, parseInt(time, 10) + 100);
                    };
                    var scrollDiv;

                    /**
                     * Получить размер скроллбара если он есть
                     * @returns {number} размер скроллбара
                     */
                    vars.getScrollbarWidth = function () {
                        var width = window.innerWidth - vars.$html.get(0).clientWidth;
                        if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
                            return width;
                        }

                        // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
                        if (!scrollDiv) {
                            scrollDiv = document.createElement('div');
                            scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
                            document.body.appendChild(scrollDiv);
                        }
                        return scrollDiv.offsetWidth - scrollDiv.clientWidth;
                    };

                    /**
                     * Узнать есть доступен ли ховер
                     * @returns {boolean}
                     */
                    function hasHoverSupport() {
                        var hoverSupport;
                        if (vars.isIE && vars.getScrollbarWidth()) {
                            // On touch devices scrollbar width is usually 0
                            hoverSupport = true;
                        } else if (vars.isMobile()) {
                            hoverSupport = false;
                        } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
                            hoverSupport = true;
                        } else if (window.matchMedia('(hover: none)').matches) {
                            hoverSupport = false;
                        } else {
                            hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
                        }
                        return hoverSupport;
                    }
                    if (!hasHoverSupport()) {
                        vars.$html.removeClass('has-hover').addClass('no-hover');
                    } else {
                        vars.$html.removeClass('no-hover').addClass('has-hover');
                    }

                    /**
                     * Переопределение доступности ховера
                     */
                    function resize() {
                        setTimeout(function () {
                            if (vars.winWidth !== window.innerWidth) {
                                if (!hasHoverSupport()) {
                                    vars.$html.removeClass('has-hover').addClass('no-hover');
                                } else {
                                    vars.$html.removeClass('no-hover').addClass('has-hover');
                                }
                                vars.winWidth = window.innerWidth;
                            }
                        }, 300);
                    }
                    vars.$window.on('resize', resize);
                    /* harmony default export */ __webpack_exports__["default"] = (vars);
                    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

                /***/ }),


