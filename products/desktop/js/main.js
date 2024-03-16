/******/ (function (modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for (; i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
        /******/
      }
/******/ 			installedChunks[chunkId] = 0;
      /******/
    }
/******/ 		for (moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
/******/ 		if (parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while (resolves.length) {
/******/ 			resolves.shift()();
      /******/
    }
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
    /******/
  };
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for (var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
/******/ 			if (fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/
      }
      /******/
    }
/******/
/******/ 		return result;
    /******/
  }
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
    /******/
  };
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
  };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
  };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js", "vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
  /******/
})
/************************************************************************/
/******/({

/***/ "./src/js/components/accardion.js":
/*!****************************************!*\
  !*** ./src/js/components/accardion.js ***!
  \****************************************/
/*! exports provided: accardion */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accardion", function () { return accardion; });
      var accardion = function accardion() {
        var accardion = $(".js-accardion");
        accardion.on("click", function (e) {
          var target = $(e.currentTarget);
          target.toggleClass("is-active").siblings().removeClass("is-active");
          target.children(".js-accardion-body").slideToggle();
          target.siblings().children(".js-accardion-body").slideUp();
        });
      };

      /***/
    }),

/***/ "./src/js/components/ad.js":
/*!*********************************!*\
  !*** ./src/js/components/ad.js ***!
  \*********************************/
/*! exports provided: adversting */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adversting", function () { return adversting; });
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

      /***/
    }),

/***/ "./src/js/components/add-cart.js":
/*!***************************************!*\
  !*** ./src/js/components/add-cart.js ***!
  \***************************************/
/*! exports provided: addCartInit */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartInit", function () { return addCartInit; });
      var addCart = function addCart() {
        $(".js-add-cart").on("click", function (e) {
          var target = $(e.currentTarget);
          var toast = $(".toast");
          target.hide();
          target.parent().find(".js-add-block").show();
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

      /***/
    }),

/***/ "./src/js/components/clearInput.js":
/*!*****************************************!*\
  !*** ./src/js/components/clearInput.js ***!
  \*****************************************/
/*! exports provided: clearInput */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInput", function () { return clearInput; });
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

      /***/
    }),

/***/ "./src/js/components/copy.js":
/*!***********************************!*\
  !*** ./src/js/components/copy.js ***!
  \***********************************/
/*! exports provided: copyLink */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyLink", function () { return copyLink; });
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

      /***/
    }),

/***/ "./src/js/components/inputFocus.js":
/*!*****************************************!*\
  !*** ./src/js/components/inputFocus.js ***!
  \*****************************************/
/*! exports provided: inputFocus */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputFocus", function () { return inputFocus; });
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

      /***/
    }),

/***/ "./src/js/components/likeToggle.js":
/*!*****************************************!*\
  !*** ./src/js/components/likeToggle.js ***!
  \*****************************************/
/*! exports provided: likeToggle */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeToggle", function () { return likeToggle; });
      var likeToggle = function likeToggle() {
        $("._like").on("click", function (e) {
          var target = $(e.currentTarget);
          target.toggleClass("is-active");
        });
      };

      /***/
    }),

/***/ "./src/js/components/scrollUp.js":
/*!***************************************!*\
  !*** ./src/js/components/scrollUp.js ***!
  \***************************************/
/*! exports provided: scrollTop */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function () { return scrollTop; });
      var scrollTop = function scrollTop() {
        var scrollButton = $(".scroll-up");
        scrollButton.on("click", function () {
          $("body, html").scrollTop(0);
        });
      };

      /***/
    }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
      /* eslint-disable no-new */

      var navSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".js-navSlider", {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: ".header__button--next",
          prevEl: ".header__button--prev",
          disabledClass: "small-navigation--disabled"
        }
      });

      // Находим все контейнеры слайдеров
      var reviewSliders = document.querySelectorAll('.reviews-slider');

      // Инициализируем Swiper для каждого контейнера слайдера
      reviewSliders.forEach((sliderContainer, index) => {
        sliderContainer.classList.add(`review-swiper-${index}`);
        var prev = sliderContainer.querySelector('.reviews-slider__navigation--prev');
        var next = sliderContainer.querySelector('.reviews-slider__navigation--next');
        prev.classList.add(`reviews-slider-nav-prev-${index}`);
        next.classList.add(`reviews-slider-nav-next-${index}`);
        var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](`.review-swiper-${index} .swiper`, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
          loop: false,
          slidesPerView: 7,
          spaceBetween: 8,
          navigation: {
            nextEl: `.reviews-slider-nav-next-${index}`,
            prevEl: `.reviews-slider-nav-prev-${index}`,
            disabledClass: "reviews-slider__navigation--disabled"
          }
        });

        next.addEventListener('click', function() {
          swiper.slideTo(swiper.slides.length - 1, 300); // Переход к последнему слайду
        });

        prev.addEventListener('click', function() {
          swiper.slideTo(0, 300); // Переход к последнему слайду
        });
      });

      var photoSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".photo-slider .swiper", {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
        loop: false,
        spaceBetween: 24,
        navigation: {
          nextEl: ".photo-slider__navigation--next",
          prevEl: ".photo-slider__navigation--prev",
          disabledClass: "navigation--disabled"
        },
        breakpoints: {
          1024: {
            slidesPerView: 6
          },
          1200: {
            slidesPerView: 6
          }
        }
      });
      var certSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".cert-slider .swiper", {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
        loop: false,
        spaceBetween: 24,
        navigation: {
          nextEl: ".cert-slider__navigation--next",
          prevEl: ".cert-slider__navigation--prev",
          disabledClass: "navigation--disabled"
        },
        breakpoints: {
          1024: {
            slidesPerView: 6
          },
          1200: {
            slidesPerView: 6
          }
        }
      });
      var newsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".news-slider .swiper", {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
        loop: false,
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: ".news-slider__navigation--next",
          prevEl: ".news-slider__navigation--prev",
          disabledClass: "navigation--disabled"
        }
      });
      var analogsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".analogs-slider .swiper", {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
        loop: false,
        slidesPerView: 4,
        navigation: {
          nextEl: ".analogs-slider__navigation--next",
          prevEl: ".analogs-slider__navigation--prev",
          disabledClass: "navigation--disabled"
        }
      });
      /***/
    }),

/***/ "./src/js/components/submenu.js":
/*!**************************************!*\
  !*** ./src/js/components/submenu.js ***!
  \**************************************/
/*! exports provided: submenuInit */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submenuInit", function () { return submenuInit; });
      var submenuInit = function submenuInit() {
        var links = $(".header__slide");
        var submenuItem = $(".submenu__item");
        var submenu = $(".submenu");
        var i;
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
        links.on("mouseleave", function () {
          if (!submenuItem.eq(i).length) {
            links.children().removeClass("is-active");
          }
        });
        submenu.on("mouseleave", function () {
          links.eq(i).children().removeClass("is-active");
          submenu.removeClass("is-active");
          submenuItem.eq(i).hide();
        });
      };

      /***/
    }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/*! exports provided: tabInit */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabInit", function () { return tabInit; });
      var tabInit = function tabInit() {
        var tabLink = $(".js-tab-link");
        tabLink.on("click", function (e) {
          var target = $(e.currentTarget);
          var targetKey = target.attr("data-key");
          target.addClass("is-active").siblings().removeClass("is-active");
          $(".js-tab-block[data-tab=".concat(targetKey, "]")).addClass("is-active").siblings().removeClass("is-active");
        });
      };

      /***/
    }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

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
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

      /***/
    }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _components_clearInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/clearInput */ "./src/js/components/clearInput.js");
/* harmony import */ var _components_submenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/submenu */ "./src/js/components/submenu.js");
/* harmony import */ var _components_ad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ad */ "./src/js/components/ad.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.js");
/* harmony import */ var _components_accardion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/accardion */ "./src/js/components/accardion.js");
/* harmony import */ var _components_inputFocus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inputFocus */ "./src/js/components/inputFocus.js");
/* harmony import */ var _components_scrollUp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/scrollUp */ "./src/js/components/scrollUp.js");
/* harmony import */ var _components_add_cart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-cart */ "./src/js/components/add-cart.js");
/* harmony import */ var _components_likeToggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/likeToggle */ "./src/js/components/likeToggle.js");
/* harmony import */ var _components_copy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/copy */ "./src/js/components/copy.js");

















      Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_4__["ieFix"])();
      Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_5__["vhFix"])();
      _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_6__["default"].init();
      Object(_components_clearInput__WEBPACK_IMPORTED_MODULE_7__["clearInput"])();
      Object(_components_submenu__WEBPACK_IMPORTED_MODULE_8__["submenuInit"])();
      Object(_components_ad__WEBPACK_IMPORTED_MODULE_9__["adversting"])();
      Object(_components_tab__WEBPACK_IMPORTED_MODULE_10__["tabInit"])();
      Object(_components_accardion__WEBPACK_IMPORTED_MODULE_11__["accardion"])();
      Object(_components_inputFocus__WEBPACK_IMPORTED_MODULE_12__["inputFocus"])();
      Object(_components_scrollUp__WEBPACK_IMPORTED_MODULE_13__["scrollTop"])();
      Object(_components_add_cart__WEBPACK_IMPORTED_MODULE_14__["addCartInit"])();
      Object(_components_likeToggle__WEBPACK_IMPORTED_MODULE_15__["likeToggle"])();
      Object(_components_copy__WEBPACK_IMPORTED_MODULE_16__["copyLink"])();
      var header = $(".header__top");
      var headerFixed = $(".header__fixed, .scroll-up");
      var headerHeight = header.innerHeight();
      var body = $("body");
      var heightHeader = function heightHeader() {
        body.css("--hh", "".concat(Math.round(headerHeight), "px"));
      };
      heightHeader();
      var fixedHeader = function fixedHeader() {
        var scroll = $(window).scrollTop();
        if (scroll >= headerHeight) {
          headerFixed.addClass("is-active");
        } else {
          headerFixed.removeClass("is-active");
        }
      };
      fixedHeader();
      var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      var tooltipList = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tooltipTriggerList).map(function (tooltipTriggerEl) {
        var tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
          offset: [0, 10]
        });
      });
      $(window).on("resize", heightHeader);
      $(window).scroll(fixedHeader);

      /***/
    }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

      var observer;

      /**
      * Модуль "Отложенная загрузка изображений"
      * https://github.com/ApoorvSaxena/lozad.js
      */
      var init = function init() {
        observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
          rootMargin: '10px 0px',
          // syntax similar to that of CSS Margin
          threshold: 0.1,
          // ratio of element convergence
          enableAutoReload: true,
          // it will reload the new image when validating attributes changes
          loaded: function loaded(el) {
            el.classList.add('is-loaded');
          }
        });
        observer.observe();
      };

      /**
      * Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
      * @param {string} img Обязательное, элемент img
      */
      var trigger = function trigger(img) {
        observer.triggerLoad(img);
      };
/* harmony default export */ __webpack_exports__["default"] = ({
        init: init,
        trigger: trigger
      });

      /***/
    }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);


      // import svg4everybody from "svg4everybody";
      // import $ from "jquery";
      // import objectFitImages from 'object-fit-images';
      // import objectFitVideos from 'object-fit-videos';

      // svg4everybody();
      // objectFitImages();
      // objectFitVideos();

      // window.$ = $;
      // window.jQuery = $;
      // window.objectFitImages = objectFitImages;
      // window.objectFitVideos = objectFitVideos;

      __webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

      /***/
    }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function () { return ieFix; });
      /* eslint-disable */

      /**
      * Много разных фиксов для ie,
      * чтобы не было лишних проблем
      * Performance.now()
      * forEach
      * CustomEvent
      * includes
      * matches
      * closest
      * prepend
      * append
      * before
      * remove
      * startsWith
      * Performance.now()
      * https://gist.github.com/paulirish/5438650
      */

      var ieFix = function ieFix() {
        (function () {
          if ("performance" in window == false) {
            window.performance = {};
          }

          // thanks IE8
          Date.now = Date.now || function () {
            return new Date().getTime();
          };
          if ("now" in window.performance == false) {
            var nowOffset = Date.now();
            if (performance.timing && performance.timing.navigationStart) {
              nowOffset = performance.timing.navigationStart;
            }
            window.performance.now = function now() {
              return Date.now() - nowOffset;
            };
          }
        })();

        // forEach
        if (window.NodeList && !NodeList.prototype.forEach) {
          NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
              callback.call(thisArg, this[i], i, this);
            }
          };
        }

        // CustomEvent
        (function () {
          if (typeof window.CustomEvent === 'function') return false;
          function CustomEvent(event, params) {
            params = params || {
              bubbles: false,
              cancelable: false,
              detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
          }
          CustomEvent.prototype = window.Event.prototype;
          window.CustomEvent = CustomEvent;
        })();

        // includes
        if (!Array.prototype.includes) {
          Object.defineProperty(Array.prototype, 'includes', {
            value: function value(searchElement, fromIndex) {
              if (this == null) {
                throw new TypeError('"this" is null or not defined');
              }
              var o = Object(this);
              var len = o.length >>> 0;
              if (len === 0) {
                return false;
              }
              var n = fromIndex | 0;
              var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
              function sameValueZero(x, y) {
                return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
              }
              while (k < len) {
                if (sameValueZero(o[k], searchElement)) {
                  return true;
                }
                k++;
              }
              return false;
            }
          });
        }

        // matches
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s);
            var i = matches.length;
            // eslint-disable-next-line no-empty
            while (--i >= 0 && matches.item(i) !== this) { }
            return i > -1;
          };
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }

        // closest
        if (!Element.prototype.closest) {
          Element.prototype.closest = function (s) {
            var el = this;
            do {
              if (el.matches(s)) {
                return el;
              }
              el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
          };
        }

        // prepend
        (function (arr) {
          arr.forEach(function (item) {
            if (item.hasOwnProperty("prepend")) {
              return;
            }
            Object.defineProperty(item, "prepend", {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function prepend() {
                // eslint-disable-next-line prefer-rest-params
                var argArr = Array.prototype.slice.call(arguments);
                var docFrag = document.createDocumentFragment();
                argArr.forEach(function (argItem) {
                  var isNode = argItem instanceof Node;
                  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });
                this.insertBefore(docFrag, this.firstChild);
              }
            });
          });
        })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

        // append
        (function (arr) {
          arr.forEach(function (item) {
            if (item.hasOwnProperty("append")) {
              return;
            }
            Object.defineProperty(item, "append", {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function append() {
                // eslint-disable-next-line prefer-rest-params
                var argArr = Array.prototype.slice.call(arguments);
                var docFrag = document.createDocumentFragment();
                argArr.forEach(function (argItem) {
                  var isNode = argItem instanceof Node;
                  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });
                this.appendChild(docFrag);
              }
            });
          });
        })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

        // before
        (function (arr) {
          arr.forEach(function (item) {
            if (item.hasOwnProperty("before")) {
              return;
            }
            Object.defineProperty(item, "before", {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function before() {
                // eslint-disable-next-line prefer-rest-params
                var argArr = Array.prototype.slice.call(arguments);
                var docFrag = document.createDocumentFragment();
                argArr.forEach(function (argItem) {
                  var isNode = argItem instanceof Node;
                  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });
                this.parentNode.insertBefore(docFrag, this);
              }
            });
          });
        })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

        // remove
        (function (arr) {
          arr.forEach(function (item) {
            if (item.hasOwnProperty("remove")) {
              return;
            }
            Object.defineProperty(item, "remove", {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function remove() {
                if (this.parentNode !== null) {
                  this.parentNode.removeChild(this);
                }
              }
            });
          });
        })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

        // startsWith
        if (!String.prototype.startsWith) {
          // eslint-disable-next-line no-extend-native
          Object.defineProperty(String.prototype, "startsWith", {
            value: function value(search, rawPos) {
              var pos = rawPos > 0 ? rawPos | 0 : 0;
              return this.substring(pos, pos + search.length) === search;
            }
          });
        }

        // Fixes
        //---------------------------------

        // ie download
        var ie11Download = function ie11Download(el) {
          if (el.href === "") {
            throw Error("The element has no href value.");
          }
          var filename = el.getAttribute("download");
          if (filename === null || filename === "") {
            var tmp = el.href.split("/");
            filename = tmp[tmp.length - 1];
          }
          el.addEventListener("click", function (evt) {
            evt.preventDefault();
            var xhr = new XMLHttpRequest();
            xhr.onloadstart = function () {
              xhr.responseType = "blob";
            };
            xhr.onload = function () {
              navigator.msSaveOrOpenBlob(xhr.response, filename);
            };
            xhr.open("GET", el.href, true);
            xhr.send();
          });
        };
        if (window.navigator.msSaveBlob) {
          var downloadLinks = document.querySelectorAll("a[download]");
          if (downloadLinks.length) {
            downloadLinks.forEach(function (el) {
              ie11Download(el);
            });
          }
        }

        // ie svg focus fix
        var unfocusableSvg = function unfocusableSvg() {
          if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
            return;
          }
          var svg = document.querySelectorAll('svg');
          svg.forEach(function (el) {
            el.setAttribute('focusable', 'false');
          });
        };
        unfocusableSvg();

        //ie footer nailing
        var ieFooterNailing = function ieFooterNailing() {
          var main = document.querySelector('main');
          var header = document.querySelector('.header');
          var footer = document.querySelector('.footer');
          var headerH;
          var footerH;
          var mainHMin;
          if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
            return;
          }
          var mainHeight = function mainHeight() {
            // eslint-disable-next-line no-unused-expressions
            header ? headerH = header.getBoundingClientRect().height : headerH = 0;
            // eslint-disable-next-line no-unused-expressions
            footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
            mainHMin = window.innerHeight;
            main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
          };
          document.addEventListener('loadDOMContentLoaded', mainHeight());
          window.addEventListener('resize', mainHeight);
        };
        ieFooterNailing();
      };


      /***/
    }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function () { return vhFix; });
      /**
      * Модуль исправления багов на iOs устройствах
      * определяет высоту экрана и при любом изменении переопределяет её
      * в стилях используйте кастомные стили var(--vh)
      */
      var vhFix = function vhFix() {
        if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
          var vh = window.innerHeight;
          document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
          window.addEventListener('resize', function () {
            vh = window.innerHeight;
            document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
          });
        }
      };


      /***/
    })

  /******/
});
//# sourceMappingURL=main.js.map



$(document).ready(function () {
  $('.dropdown-menu__link').click(function () {
    var $icon = $(this).find('.dropdown-menu__link--icon');
    var $url = $(this).find('.dropdown-menu__link--url');
    var newText = 'Ссылка скопирована';
    var newIconSrc = './images/icons/check.svg'; // Убедитесь, что путь к новой иконке верный

    // Копирование URL в буфер обмена
    var url = $url.data("url");
    navigator.clipboard.writeText(url).then(() => {
      $url.text(newText);
      $icon.attr('src', newIconSrc);
    }).catch(err => {
      console.error('Ошибка при копировании: ', err);
    });
  });
});

var dropdownToggleInit = function dropdownToggleInit() {
  var shareButtons = $(".button-share"); // Выбираем все кнопки поделиться

  shareButtons.on("click", function () {
    var dropdownId = $(this).data('dropdown-id'); // Получаем ID выпадающего меню из атрибута кнопки
    var dropdownMenu = $('.products__dropdown[data-dropdown-id="' + dropdownId + '"]'); // Находим соответствующее выпадающее меню

    if (dropdownMenu.length) {
      // Проверяем, видимо ли выпадающее меню в данный момент
      if (dropdownMenu.is(':visible')) {
        dropdownMenu.stop(true, true).fadeOut(300); // Если видимо, скрываем его
      } else {
        dropdownMenu.stop(true, true).fadeIn(300); // Если скрыто, показываем
      }
    }
  });

  // Дополнительно: скрытие меню при клике вне его
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.button-share, .products__dropdown').length) {
      $('.products__dropdown').fadeOut(300);
    }
  });

  // Дополнительно: скрытие меню при скролле
  $(window).on('scroll', function () {
    // Скрываем выпадающие меню
    $('.products__dropdown').fadeOut(300);

    // Скрываем все активные tooltips Bootstrap
    $('.tooltip').tooltip('hide');
  });
};

// Вызываем функцию инициализации
$(document).ready(function () {
  dropdownToggleInit();
});

var jsDropdownInit = function jsDropdownInit() {
  var dropdownItems = $(".js-dropdown"); // Выбираем все элементы хлебных крошек

  dropdownItems.on("mouseenter", function () {
    var dropdownMenu = $(this).find(".js-dropdown-menu");
    if (dropdownMenu.length) {
      $(this).addClass("is-active"); // Добавляем активный класс к иконке, если есть выпадающий список
      dropdownMenu.stop(true, true).fadeIn(300); // Плавно показываем выпадающий список за 300 мс
    }
  });

  dropdownItems.on("mouseleave", function () {
    var dropdownMenu = $(this).find(".js-dropdown-menu");
    if (dropdownMenu.length) {
      $(this).removeClass("is-active"); // Убираем активный класс у иконки
      dropdownMenu.stop(true, true).fadeOut(300); // Плавно скрываем выпадающий список за 300 мс
    }
  });
};

$(document).ready(function () {
  jsDropdownInit(); // Инициализируем скрипт после загрузки документа
});

var jsSortButtonInit = function jsSortButtonInit() {
  var sortButton = $(".js-sort")
  var sortButtonItems = sortButton.find(".js-dropdown-link");

  sortButtonItems.on("click", function () {
    if (!$(this).hasClass("js-dropdown-link--active")) {
      var parent = $(this).closest(".js-sort");
      var activeItem = parent.find('.js-dropdown-link--active');
      activeItem.removeClass('js-dropdown-link--active');
      $(this).addClass('js-dropdown-link--active');
      activeItem = $(this);
      parent.find(".reviews__sort-text").text(activeItem.text())

      // обработка сортировки
    }
  });
};

$(document).ready(function () {
  jsSortButtonInit(); // Инициализируем скрипт после загрузки документа
});

var jsReviewButtonsInit = function jsReviewButtonsInit() {
  var likeButton = $('.js-review-like');
  var dislikeButton = $('.js-review-dislike');

  likeButton.on("click", function () {
    $(this).toggleClass("review__button--active")
    var currentCount = parseInt($(this).find('.review__button-text').text());

    if ($(this).hasClass("review__button--active"))
      $(this).find('.review__button-text').text(++currentCount)
    else
      $(this).find('.review__button-text').text(--currentCount)

    var otherButton = $(this).closest('.review__buttons').find('.js-review-dislike');
    var otherCount = parseInt(otherButton.find('.review__button-text').text());
    if (otherButton.hasClass("review__button--active")) {
      otherButton.find('.review__button-text').text(--otherCount)
      otherButton.toggleClass("review__button--active")
    }
  });

  dislikeButton.on("click", function () {
    $(this).toggleClass("review__button--active")
    var currentCount = parseInt($(this).find('.review__button-text').text());

    if ($(this).hasClass("review__button--active"))
      $(this).find('.review__button-text').text(++currentCount)
    else
      $(this).find('.review__button-text').text(--currentCount)

    var otherButton = $(this).closest('.review__buttons').find('.js-review-like');
    var otherCount = parseInt(otherButton.find('.review__button-text').text());
    console.log(otherButton)
    if (otherButton.hasClass("review__button--active")) {
      otherButton.find('.review__button-text').text(--otherCount)
      otherButton.toggleClass("review__button--active")
    }
  });
};

$(document).ready(function () {
  jsReviewButtonsInit(); // Инициализируем скрипт после загрузки документа
});