!function (e) {
    function t(t) {
        for (var o, a, s = t[0], l = t[1], c = t[2], u = 0, p = []; u < s.length; u++) a = s[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]), r[a] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        for (d && d(t); p.length;) p.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== r[l] && (o = !1)
            }
            o && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }

    var o = {}, r = { 0: 0 }, i = [];

    function a(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = { i: t, l: !1, exports: {} };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }

    a.m = e, a.c = o, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) a.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [], l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var c = 0; c < s.length; c++) t(s[c]);
    var d = l;
    i.push([410, 1]), n()
}({
    406: function (e, t, n) {
        "use strict";
        (function (e) {
            var t, o, r = n(85), i = {};

            function a() {
                return !(!i.isIE || !i.getScrollbarWidth()) || !i.isMobile() && (!(!window.matchMedia("(any-hover: hover)").matches && !window.matchMedia("(hover: hover)").matches) || !window.matchMedia("(hover: none)").matches && void 0 === i.$html.ontouchstart)
            }

            i.$document = $(document), i.$window = $(window), i.$body = $(document.body), i.$html = $(document.documentElement), i.isMobile = function () {
                return innerWidth <= 1024
            }, i.isIE = function () {
                return i.$html.hasClass("is-browser-ie")
            }, i.isIOS = function () {
                return i.$html.hasClass("is-os-ios")
            }, i.winWidth = window.innerWidth, i.clearText = function (e) {
                return e.trim().replace(/\s+/g, " ")
            }, i.setCookie = function (e, t, n) {
                var o = "";
                if (n) {
                    var r = new Date;
                    r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=".concat(r.toUTCString())
                }
                document.cookie = "".concat(e, "=").concat(t || "").concat(o, "; path=/")
            }, i.getCookie = function (e) {
                for (var t = "".concat(e, "="), n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    for (var r = n[o]; " " === r.charAt(0);) r = r.substring(1, r.length);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return null
            }, i.eraseCookie = function (e) {
                document.cookie = "".concat(e, "=; Max-Age=-99999999;")
            }, i.lockScroll = function (n, o, a) {
                var s = o.get(0) ? o.get(0) : o;
                void 0 === t && (t = new Set);
                var l = t;
                n ? ("string" == typeof a && l.add(a), r.b(s, { reserveScrollBarGap: !0 }), e((function () {
                    i.$html.addClass("is-lock-scroll")
                }))) : ("string" == typeof a && l.delete(a), r.c(s), l.size || (r.a(), i.$html.removeClass("is-lock-scroll")))
            }, i.scrollTo = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                i.$html.css("scroll-behavior", "initial"), $("html, body").stop().animate({ scrollTop: "".concat(e.offset().top + parseInt(n, 10)) }, parseInt(t, 10)), setTimeout((function () {
                    i.$html.css("scroll-behavior", "")
                }), parseInt(t, 10) + 100)
            }, i.getScrollbarWidth = function () {
                var e = window.innerWidth - i.$html.get(0).clientWidth;
                return e || document.documentElement.clientHeight >= document.documentElement.offsetHeight ? e : (o || ((o = document.createElement("div")).style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px", document.body.appendChild(o)), o.offsetWidth - o.clientWidth)
            }, a() ? i.$html.removeClass("no-hover").addClass("has-hover") : i.$html.removeClass("has-hover").addClass("no-hover"), i.$window.on("resize", (function () {
                setTimeout((function () {
                    i.winWidth !== window.innerWidth && (a() ? i.$html.removeClass("no-hover").addClass("has-hover") : i.$html.removeClass("has-hover").addClass("no-hover"), i.winWidth = window.innerWidth)
                }), 300)
            }))
        }).call(this, n(407).setImmediate)
    }, 410: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n(161), r = n.n(o);
        n(167), n(404);
        n(405);
        n(406);
        var i = n(16);
        new i.d(".js-navSlider", {
            modules: [i.b],
            loop: !1,
            slidesPerView: "auto",
            spaceBetween: 0,
            navigation: {
                nextEl: ".header__button--next",
                prevEl: ".header__button--prev",
                disabledClass: "small-navigation--disabled"
            }
        });
        new i.d(".hero__slider .swiper", {
            modules: [i.b, i.c, i.a],
            loop: !0,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".hero__navigation--next",
                prevEl: ".hero__navigation--prev",
                disabledClass: "navigation--disabled"
            },
            pagination: { el: ".hero-pagination", type: "bullets", clickable: "true" },
            on: {
                init: function (e) {
                    e.pagination.render(), e.pagination.update()
                }, slideChange: function (e) {
                    e.pagination.render(), e.pagination.update()
                }
            }
        }).on("slideChange", (function () {
            document.querySelectorAll(".js-copy").forEach((function (e) {
                e.style.display = "", e.parentElement.querySelector(".advertising__link--complete").style.display = ""
            }))
        }));
        new i.d(".category-slider .swiper", {
            modules: [i.b],
            loop: !1,
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 8,
        }), new i.d(".pharmacy-slider .swiper", {
            modules: [i.b],
            loop: !1,
            slidesPerView: 'auto',
            spaceBetween: 8,
            freeMode: true,
            navigation: {
                nextEl: ".pharmacy-slider__navigation--next",
                prevEl: ".pharmacy-slider__navigation--prev",
                disabledClass: "navigation--disabled"
            },
            breakpoints: { 1024: { slidesPerView: 6 }, 1200: { slidesPerView: 6 } }
        }), new i.d(".news-slider .swiper", {
            modules: [i.b],
            loop: !1,
            slidesPerView: 'auto',
            freeMode: {
                enabled: true,
                sticky: false,
            },
            spaceBetween: 8,
        });

        var a, s, l, c, d, u, p, h, f, v = n(162), m = n.n(v), g = function () {
            m()(".js-lazy", {
                rootMargin: "10px 0px", threshold: .1, enableAutoReload: !0, loaded: function (e) {
                    e.classList.add("is-loaded")
                }
            }).observe()
        };
        !function () {
            !function () {
                if ("performance" in window == 0 && (window.performance = {}), Date.now = Date.now || function () {
                    return (new Date).getTime()
                }, "now" in window.performance == 0) {
                    var e = Date.now();
                    performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function () {
                        return Date.now() - e
                    }
                }
            }(), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
                t = t || window;
                for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
            }), function () {
                if ("function" == typeof window.CustomEvent) return !1;

                function e(e, t) {
                    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }

                e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function (e, t) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this), o = n.length >>> 0;
                    if (0 === o) return !1;
                    var r, i, a = 0 | t, s = Math.max(a >= 0 ? a : o - Math.abs(a), 0);
                    for (; s < o;) {
                        if ((r = n[s]) === (i = e) || "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i)) return !0;
                        s++
                    }
                    return !1
                }
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;);
                return n > -1
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            }), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
                e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment();
                        e.forEach((function (e) {
                            var n = e instanceof Node;
                            t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.insertBefore(t, this.firstChild)
                    }
                })
            })), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
                e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment();
                        e.forEach((function (e) {
                            var n = e instanceof Node;
                            t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.appendChild(t)
                    }
                })
            })), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) {
                e.hasOwnProperty("before") || Object.defineProperty(e, "before", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment();
                        e.forEach((function (e) {
                            var n = e instanceof Node;
                            t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.parentNode.insertBefore(t, this)
                    }
                })
            })), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) {
                e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        null !== this.parentNode && this.parentNode.removeChild(this)
                    }
                })
            })), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
                value: function (e, t) {
                    var n = t > 0 ? 0 | t : 0;
                    return this.substring(n, n + e.length) === e
                }
            });
            if (window.navigator.msSaveBlob) {
                var e = document.querySelectorAll("a[download]");
                e.length && e.forEach((function (e) {
                    !function (e) {
                        if ("" === e.href) throw Error("The element has no href value.");
                        var t = e.getAttribute("download");
                        if (null === t || "" === t) {
                            var n = e.href.split("/");
                            t = n[n.length - 1]
                        }
                        e.addEventListener("click", (function (n) {
                            n.preventDefault();
                            var o = new XMLHttpRequest;
                            o.onloadstart = function () {
                                o.responseType = "blob"
                            }, o.onload = function () {
                                navigator.msSaveOrOpenBlob(o.response, t)
                            }, o.open("GET", e.href, !0), o.send()
                        }))
                    }(e)
                }))
            }
            window.MSInputMethodContext && document.documentMode && document.querySelectorAll("svg").forEach((function (e) {
                e.setAttribute("focusable", "false")
            }));
            !function () {
                var e, t, n, o = document.querySelector("main"), r = document.querySelector(".header"),
                    i = document.querySelector(".footer");
                if (o && window.MSInputMethodContext && document.documentMode) {
                    var a = function () {
                        e = r ? r.getBoundingClientRect().height : 0, t = i ? i.getBoundingClientRect().height : 0, n = window.innerHeight, o.style.minHeight = n - (e + t) + "px"
                    };
                    document.addEventListener("loadDOMContentLoaded", a()), window.addEventListener("resize", a)
                }
            }()
        }(), function () {
            if (!window.MSInputMethodContext || !document.documentMode) {
                var e = window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(e, "px")), window.addEventListener("resize", (function () {
                    e = window.innerHeight, document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                }))
            }
        }(), g(), a = $(".js-searchInput"), s = $(".js-qclear"), a.on("change paste keyup", (function (e) {
            "" != $(e.currentTarget).val() ? s.show() : s.hide()
        })), s.on("click", (function (e) {
            var t = $(e.currentTarget);
            a.val(""), a.focus(), t.hide()
        })), c = $(".header__slide"), d = $(".submenu__item"), u = $(".submenu"), c.on("mouseenter", (function () {
            l = $(this).index(), $(this).children().addClass("is-active"), $(this).siblings().children().removeClass("is-active"), d.eq(l).length ? (u.addClass("is-active"), d.eq(l).show().siblings().hide()) : (u.removeClass("is-active"), d.hide())
        })), c.on("mouseleave", (function () {
            d.eq(l).length || c.children().removeClass("is-active")
        })), u.on("mouseleave", (function () {
            c.eq(l).children().removeClass("is-active"), u.removeClass("is-active"), d.eq(l).hide()
        })), (p = $(".ad")).on("click", (function (e) {
            var t = $(e.currentTarget).attr("id");
            $('.ad__block[data-id="'.concat(t, '"]')).toggleClass("is-active")
        })), $(document).mouseup((function (e) {
            var t = $(".ad__block");
            t.is(e.target) || p.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("is-active")
        })), $(".js-tab-link").on("click", (function (e) {
            var t = $(e.currentTarget), n = t.attr("data-key");
            t.addClass("is-active").siblings().removeClass("is-active"), $(".js-tab-block[data-tab=".concat(n, "]")).addClass("is-active").siblings().removeClass("is-active")
        })), function () {
            var e = $(".js-accardion");
            e.on("click", (function (e) {
                var t = $(e.currentTarget);
                t.toggleClass("is-active").siblings().removeClass("is-active"), t.children(".js-accardion-body").slideToggle(), t.siblings().children(".js-accardion-body").slideUp()
            }))
        }(), h = $(".js-searchInput"), f = $(".search__backdrop"), h.on("focus, click", (function () {
            f && f.fadeIn(200)
        })), f.on("click", (function () {
            $(this).fadeOut(200)
        })), $(".scroll-up").on("click", (function () {
            $("body, html").scrollTop(0)
        })), $(".js-add-cart").on("click", (function (e) {
            var t = $(e.currentTarget), n = $(".toast");
            t.hide(), t.parent().find(".js-add-block").show();
            var o = t.closest(".product-cart").find("img").data("src");
            n.find("img").attr("src", o);
            t.closest('.product-cart').find('.js-add-second').hide();
        })), $(".js-add-plus").on("click", (function (e) {
            var t = $(e.currentTarget).parent().find("input");
            return t.val(parseInt(t.val()) + 1), t.change(), !1
        })), $(".js-add-minus").on("click", (function (e) {
            var t = $(e.currentTarget), n = t.parent().find("input"), o = parseInt(n.val()) - 1;
            return o < 1 && (o = 1, t.closest(".card-adding-block").find(".js-add-cart").show(), t.closest('.product-cart').find('.js-add-second').show(), t.closest(".card-adding-block").find(".js-add-block").hide()), n.val(o), n.change(), !1
        })), $("._like").on("click", (function (e) {
            $(e.currentTarget).toggleClass("is-active")
        })), document.querySelectorAll(".js-copy").forEach((function (e) {
            e.addEventListener("click", (function (e) {
                e.preventDefault();
                var t = e.currentTarget, n = t.getAttribute("href");
                navigator.clipboard.writeText(n), t.style.display = "none", t.parentElement.querySelector(".advertising__link--complete").style.display = "inline-flex"
            }))
        }));
        var w = $(".header__top"), b = $(".header__fixed, .scroll-up"), y = w.innerHeight(), E = $("body"),
            C = function () {
                E.css("--hh", "".concat(Math.round(y), "px"))
            };
        C();
        var _ = function () {
            $(window).scrollTop() >= y ? b.addClass("is-active") : b.removeClass("is-active")
        };
        _();
        var x = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        r()(x).map((function (e) {
            new bootstrap.Tooltip(e, { offset: [0, 10] })
        }));
        $(window).on("resize", C), $(window).scroll(_)
    }
});
//# sourceMappingURL=main.js.map

var accardionManyInit = function accardionManyInit() {
    var e = $(".js-accardion-many-link");
    e.on("click", (function (e) {
        var t = $(e.currentTarget).closest('.js-accardion-many');
        console.log(t)
        t.toggleClass("is-active"), t.children(".js-accardion-body").slideToggle();
    }))
}

$(document).ready(function () {
    accardionManyInit();
});

$(document).ready(function () {
    $('.modal__link').click(function (e) {
        e.preventDefault();
        var $icon = $(this).find('.modal__link--icon');
        var $url = $(this).find('.modal__link--url');
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
        $('.js-dropdown-menu').fadeOut(300);
        $('.js-dropdown.is-active').toggleClass('is-active');
        // Скрываем все активные tooltips Bootstrap
        $('.tooltip').tooltip('hide');
    });
};

// Вызываем функцию инициализации
$(document).ready(function () {
    dropdownToggleInit();
});

var jsDropdownInit = function jsDropdownInit() {
    var dropdownItems = $(".js-dropdown");

    dropdownItems.on("click", function () {
        var dropdownId = $(this).data("id");
        var dropdownMenu = dropdownId ? $(".js-dropdown-menu[data-id='" + dropdownId + "']") : $(this).find(".js-dropdown-menu");

        if (!$(this).hasClass("is-active")) {
            // Сначала скрываем все активные меню
            $('.js-dropdown.is-active').each(function () {
                var prevDropdownId = $(this).data("id");
                var prevDropdownMenu = prevDropdownId ? $(".js-dropdown-menu[data-id='" + prevDropdownId + "']") : $(this).find(".js-dropdown-menu");
                $(this).removeClass("is-active");
                prevDropdownMenu.stop(true, true).fadeOut(100); // Исправлено на fadeOut
            });

            // Теперь добавляем класс 'is-active' к текущему элементу и показываем его меню
            if (dropdownMenu.length) {
                $(this).addClass("is-active");
                dropdownMenu.stop(true, true).fadeIn(100); // Показываем выпадающий список за 100 мс
            }
        } else {
            // Если элемент уже активен, просто убираем класс и скрываем меню
            $(this).removeClass("is-active");
            dropdownMenu.stop(true, true).fadeOut(100); // Скрываем выпадающий список за 100 мс
        }
    });
};

$(document).ready(function () {
    jsDropdownInit(); // Инициализируем скрипт после загрузки документа
});

$(document).ready(function () {
    $('.breadcrumb').scrollLeft($('.breadcrumb')[0].scrollWidth); // Максимальный скролл крошек
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
        if (otherButton.hasClass("review__button--active")) {
            otherButton.find('.review__button-text').text(--otherCount)
            otherButton.toggleClass("review__button--active")
        }
    });
};

$(document).ready(function () {
    jsReviewButtonsInit(); // Инициализируем скрипт после загрузки документа
});

var advertisingsInit = function advertisingsInit() {
    var $advertisingButton = $('.advertising__text');

    $advertisingButton.on('click', function (e) {
        console.log(1)
        var $banner = $(this).closest('.advertising');
        var $block = $banner.find('.advertising__block');

        $block.toggleClass('advertising__block--active');
    });
};

$(document).ready(function () {
    advertisingsInit();
});

$(document).ready(function () {
    $('.product-cart__expandable').click(function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        var $nameContainer = $(this).closest('.product-cart__name');

        // Проверяем, расширен ли текст
        if ($nameContainer.hasClass('expanded')) {
            $nameContainer.removeClass('expanded'); // Сужаем текст
            $nameContainer.css('max-height', '72px'); // Возвращаем исходную максимальную высоту
        } else {
            $nameContainer.addClass('expanded'); // Расширяем текст
            $nameContainer.css('max-height', 'none'); // Убираем ограничение по высоте
        }
    });
});

$(document).ready(function () {
    $('#switch-checkbox').change(function () {
        if ($(this).is(':checked')) {
            // Код, если switch активирован
        } else {
            // Код, если switch деактивирован
        }
    });
});

var checkSegmentedControl = function checkSegmentedControl() {
    if (this.checked) {
        var parent = $(this).closest('.segmented-control');
        var thumb = parent.find('.segmented-control__color');

        // Действие при выборе "Фото"
        if (this.value == 'photos') {
            var width = parent.find('label[for="tab-1"]').width() + 24; // width + padding
            thumb.stop(true, true).animate({
                left: 2,
                width: width,
            }, 300);
            thumb.css('right', 'unset');

            setTimeout(function () {
                $('button[data-fancybox-close]').click();

                setTimeout(function () {
                    $('a[data-fancybox="product"] img')[0].click();
                }, 10);
            }, 600);
        }
        // Действие при выборе "Сертификаты"
        else if (this.value == 'certs') {
            var width = parent.find('label[for="tab-2"]').width() + 24; // width + padding
            thumb.css('left', 'unset');
            thumb.stop(true, true).animate({
                right: 2,
                width: width,
            }, 300);

            setTimeout(function () {
                $('button[data-fancybox-close]').click();

                setTimeout(function () {
                    $('a[data-fancybox="cert"] img')[0].click();
                }, 10);
            }, 600);

            
        }
    }
}

var showSegmentedControl = function showSegmentedControl(fancybox) {
    var trigger = $(fancybox.options.triggerEl);
    var type = trigger.data('fancybox')
    var parent = $('.segmented-control');
    var thumb = parent.find('.segmented-control__color');
    var segmentedControl = $('.js-segmented');

    if (type == "product") {
        segmentedControl.fadeIn(100);
        var width = parent.find('label[for="tab-1"]').width() + 24; // width + padding
        var input = $('input#tab-1')
        input.prop('checked', true);
        thumb.css('right', 'unset');
        thumb.css('left', 2);
        thumb.css('width', width);

    } else if (type == "cert") {
        segmentedControl.fadeIn(100);
        var width = parent.find('label[for="tab-2"]').width() + 24; // width + padding
        var input = $('input#tab-2')
        input.prop('checked', true);
        thumb.css('left', 'unset');
        thumb.css('right', 2);
        thumb.css('width', width);
    }
}

var closeSegmentedControl = function closeSegmentedControl(fancybox) {
    var segmentedControl = $('.js-segmented');
    segmentedControl.fadeOut(100);
}

$(document).ready(function () {
    $('input[name="segmented-control"][checked]').each(checkSegmentedControl);
    $('input[type="radio"][name="segmented-control"]').change(checkSegmentedControl);
});

var fancybox = Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: {
            left: ["infobar"],
            right: ["close"],
        },
    },
    Thumbs: {
        type: "classic",
    },
    contentClick: "iterateZoom",
    Images: {
        initialSize: "fit",
        Panzoom: {
            maxScale: 2,
        },
    },
    Carousel: {
        Navigation: false,
    },
    on: {
        init: (fancybox, slide) => {
            showSegmentedControl(fancybox);
        },
        close: (fancybox, slide) => {
            closeSegmentedControl(fancybox);
        },
    },
    touch: false
});


// Yandex map

class Placemark {
    constructor(iconHref, iconSize, iconOffset) {
        this.iconHref = iconHref;
        this.iconSize = iconSize;
        this.iconOffset = iconOffset;
    }

    create(id, coordinates, name, logo, addr, sched) {
        return {
            type: 'Feature',
            id: id,
            geometry: {
                type: 'Point',
                coordinates: coordinates
            },
            properties: {
                name: name,
                logo: logo,
                addr: addr,
                sched: sched
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: this.iconHref,
                iconImageSize: this.iconSize,
                iconImageOffset: this.iconOffset,
            }
        };
    }

    createCollection(placemarkData) {
        return placemarkData.map((data, index) =>
            this.create(index + 1, data.coordinates, data.name, data.logo, data.addr, data.sched));
    }

    json(jsonString) {
        const data = JSON.parse(jsonString);
        return this.createCollection(data);
    }
}

const jsonPlacemarks =
    `[
    {
      "coordinates": [55.88880506895561, 37.44204738251827],
      "name": "ЗдравСити 1",
      "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
    },
    {
      "coordinates": [55.67914751140277, 37.280685692169946],
      "name": "ЗдравСити 2",
      "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
    },
    {
    "coordinates": [55.7848, 37.6605],
    "name": "ЗдравСити 3",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.786, 37.67],
    "name": "ЗдравСити 4",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.79, 37.6605],
    "name": "ЗдравСити 5",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.79, 37.67],
    "name": "ЗдравСити 6",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.791, 37.671],
    "name": "ЗдравСити 7",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.792, 37.672],
    "name": "ЗдравСити 8",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.793, 37.673],
    "name": "ЗдравСити 9",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.794, 37.674],
    "name": "ЗдравСити 10",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.795, 37.675],
    "name": "ЗдравСити 11",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.796, 37.676],
    "name": "ЗдравСити 12",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.797, 37.677],
    "name": "ЗдравСити 13",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.798, 37.678],
    "name": "ЗдравСити 14",
    "logo": "./images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  }
  ]`;

const placemark = new Placemark('./images/icons/placemark.svg', [38, 48], [-16, -42]);
var placemarks = placemark.json(jsonPlacemarks);

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 8,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });
    // CONTROLS
    var zoomInButton = document.querySelector('.js-map-zoom-in');
    zoomInButton.onclick = function () {
        var currentZoom = myMap.getZoom();
        myMap.setZoom(currentZoom + 1, {duration: 100});
    };

    var zoomOutButton = document.querySelector('.js-map-zoom-out');
    zoomOutButton.onclick = function () {
        var currentZoom = myMap.getZoom();
        myMap.setZoom(currentZoom - 1, {duration: 100});
    };

    var customGeoLocationButton = document.querySelector('.js-map-geolocation');
    customGeoLocationButton.onclick = function () {
        ymaps.geolocation.get({
            mapStateAutoApply: true
        }).then(function (result) {
            myMap.setCenter(result.geoObjects.position, 10);
        }, function (error) {
            console.error("Возникла ошибка при определении местоположения: ", error);
        });
    };

    // OBJECTS

    var myClusterIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__cluster"><div class="map__cluster-text">$[properties.geoObjects.length]</div></div>'
    );

    var objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    myMap.geoObjects.add(objectManager);

    var myClusterIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__cluster">$[properties.geoObjects.length]</div>', {
            build: function () {
                myClusterIconContentLayout.superclass.build.call(this);
                var size = this.getData().properties.geoObjects.length;
                var element = this.getElement();
                var newSize = calculateClusterIconSize(size);
                element.style.display = "block";
                element.style.width = newSize + "px";
                element.style.height = newSize + "px";
            }
        }
    );

    function calculateClusterIconSize(number) {
        if (number <= 9) {
            return 20;
        } else if (number >= 10 && number <= 99) {
            return 28;
        } else if (number >= 100 && number <= 999) {
            return 36;
        } else {
            return 50; // Для чисел больше 999
        }
    }

    objectManager.clusters.options.set({
        clusterIcons: [{
            href: '',
            size: [28, 28],
            offset: [-14, -14],
        }],
        clusterIconContentLayout: myClusterIconContentLayout,
    });

    objectManager.objects.events.add('click', function (e) {
        var objectId = e.get('objectId');
        var object = objectManager.objects.getById(objectId);

        if (object.type == 'Feature') {
            myMap.balloon.open(object.geometry.coordinates, {
                contentHeader: '',
                contentBody: `
                <div class="pricelist__left">
                    <div class="pricelist__company">
                        <img class="pricelist__logo" src="${object.properties.logo}" alt="">
                        <span class="pricelist__name">${object.properties.name}</span>
                    </div>
                    <div class="map__column">
                        <span class="pricelist__address">${object.properties.addr}</span>
                        <span class="pricelist__schedule">${object.properties.sched}</span>
                    </div>
                </div>
            `,
                contentFooter:''
            }, {
                minWidth: 328,
            });
        }
    });

    // Добавление созданных меток в objectManager
    objectManager.add({
        type: 'FeatureCollection',
        features: placemarks
    });
}