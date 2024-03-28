import '@/desktop_template/header/header.html';
import './desktop.html';
import '@/styles/desktop/pages/products.scss';

import "@/js/vendor";
import "@/js/helpers";
import "@/js/components/slider";
import {ieFix} from "@/js/vendor/ie-fix";
import {vhFix} from "@/js/vendor/vh-fix";
import lazyLoading from "@/js/modules/lazyLoading";
import {clearInput} from "@/js/components/clearInput";
import {submenuInit} from "@/js/components/submenu";
import {adversting} from "@/js/components/ad";
import {tabInit} from "@/js/components/tab";
import {accardion} from "@/js/components/accardion";
import {inputFocus} from "@/js/components/inputFocus";
import {scrollTop} from "@/js/components/scrollUp";
import {addCartInit} from "@/js/components/add-cart";
import {likeToggle} from "@/js/components/likeToggle";
import {copyLink} from "@/js/components/copy";
import {mapInit} from "@/js/components/map";
import {cityChooseInit} from "@/js/components/cityChoose";
import {dropdownToggleInit, jsDropdownInit, jsSortButtonInit} from "@/js/components/dropdown";
import {reviewButtonsInit} from "@/js/components/review";
import {segmentedControlInit} from "@/js/components/segmentedControl";
import {fancybox} from "@/js/components/fancybox";

ieFix();
vhFix();
lazyLoading.init();
clearInput();
submenuInit();
adversting();
tabInit();
accardion();
inputFocus();
scrollTop();
addCartInit();
likeToggle();
copyLink();
ymaps.ready(mapInit);
cityChooseInit();
dropdownToggleInit();
jsDropdownInit();
jsSortButtonInit();
segmentedControlInit();
reviewButtonsInit();

const header = $(".header__top");
const headerFixed = $(".header__fixed, .scroll-up");
const headerHeight = header.innerHeight();
const body = $("body");

const heightHeader = () => {
    body.css("--hh", `${Math.round(headerHeight)}px`);
};

heightHeader();

const fixedHeader = () => {
    const scroll = $(window).scrollTop();
    if (scroll >= headerHeight) {
        headerFixed.addClass("is-active");
    } else {
        headerFixed.removeClass("is-active");
    }
};

fixedHeader();

const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
    let tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
        offset: [0, 10],
    });
});

$(window).on("resize", heightHeader);

$(window).scroll(fixedHeader);
