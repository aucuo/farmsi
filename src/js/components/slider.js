/* eslint-disable no-new */
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

require.context('@/images', false, /\.(png|jpe?g|svg)$/);

const navSlider = new Swiper(".js-navSlider", {
	modules: [Navigation],
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 0,
	navigation: {
		nextEl: ".header__button--next",
		prevEl: ".header__button--prev",
		disabledClass: "small-navigation--disabled",
	},
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

	var swiper = new Swiper(`.review-swiper-${index} .swiper`, {
		modules: [Navigation],
		loop: false,
		slidesPerView: 7,
		spaceBetween: 8,
		navigation: {
			nextEl: `.reviews-slider-nav-next-${index}`,
			prevEl: `.reviews-slider-nav-prev-${index}`,
			disabledClass: "reviews-slider__navigation--disabled"
		}
	});

	next.addEventListener('click', function () {
		swiper.slideTo(swiper.slides.length - 1, 300); // Переход к последнему слайду
	});

	prev.addEventListener('click', function () {
		swiper.slideTo(0, 300); // Переход к последнему слайду
	});
});

const photoSlider  = new Swiper(".photo-slider .swiper", {
	modules: [Navigation],
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

const photoScertSlider = new Swiper(".cert-slider .swiper", {
	modules: [Navigation],
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

const newsSlider  = new Swiper(".news-slider .swiper", {
	modules: [Navigation],
	loop: false,
	slidesPerView: 3,
	spaceBetween: 24,
	navigation: {
		nextEl: ".news-slider__navigation--next",
		prevEl: ".news-slider__navigation--prev",
		disabledClass: "navigation--disabled"
	}
});

const analogsSlider   = new Swiper(".analogs-slider .swiper", {
	modules: [Navigation],
	loop: false,
	slidesPerView: 4,
	navigation: {
		nextEl: ".analogs-slider__navigation--next",
		prevEl: ".analogs-slider__navigation--prev",
		disabledClass: "navigation--disabled"
	}
});