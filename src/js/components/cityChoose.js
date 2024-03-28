import {toastShow} from "@/js/components/toast";

export function cityChooseInit() {
    const cityPopup = $('.city-popup');
    cityPopup.fadeIn(300);
    const cityChangeModal = new bootstrap.Modal($('#cityChangeModal'), {});
    cityChangeModal.show();

    const cities = [
        {
            "city": "Москва и область",
            "region": "",
            "coords": "",
        },
        {
            "city": "Санкт-Петербург и область",
            "region": "",
            "coords": "",
        },
        {
            "city": "Воронежская область",
            "region": "",
            "coords": "",
        },
        {
            "city": "Смоленская область",
            "region": "",
            "coords": "",
        },
        {
            "city": "Астрахань",
            "region": "Астраханская область",
            "coords": "",
        },
        {
            "city": "Пермь",
            "region": "Пермский край",
            "coords": "",
        },
        {
            "city": "Белгород",
            "region": "Белгородская область",
            "coords": "",
        },
        {
            "city": "Липецк",
            "region": "Липецкая область",
            "coords": "",
        },
        {
            "city": "Село Королевка",
            "region": "Новосибирская область",
            "coords": "",
        },
        {
            "city": "Село Ташара",
            "region": "Новосибирская область",
            "coords": "",
        },
        {
            "city": "Село Мельниково",
            "region": "Томская область, ооочень длинный текст чтобы посмотреть как переносится",
            "coords": "",
        },
        {
            "city": "Село Егорово",
            "region": "Новосибирская область",
            "coords": "",
        },
        {
            "city": "Село Сельское",
            "region": "Московская область",
            "coords": "",
        },
        {
            "city": "Село Селянское",
            "region": "Московская область",
            "coords": "",
        },
    ];

    const cityHtml = cities.map(city => `
        <div class="city-change__city" data-city="${city.city}" data-region="${city.region}">
            <div class="city-change__city-text">${city.city}</div>
            ${city.region ? `<div class="city-change__city-text city-change__city-region">${city.region}</div>` : ''}
        </div>
    `).join('');
    $('.city-change__cities').append(cityHtml);

    const submitLocation = () => {
        $('.city-popup').fadeOut(300);
    };

    const changeLocation = () => {
        $('.city-popup').fadeOut(300);
        new bootstrap.Modal($('#cityChangeModal'), {}).show();
    };

    const fixedCityPopup = () => {
        const scroll = $(window).scrollTop();
        const headerHeight = $(".header__top").innerHeight();
        scroll >= headerHeight ? cityPopup.addClass("is-active") : cityPopup.removeClass("is-active");
    };

    const filterCities = () => {
        const value = $(".city-change__input").val().toLowerCase();
        const $nf = $('.city-change__cities-nf');
        const $query = $('.city-change__cities-nf-query');
        const $loading = $('.city-change__input-loading');
        const $clearBtn = $('.city-change__input-clear');
        let citiesVisible = false;

        $clearBtn.fadeOut(100)
        $loading.fadeIn(100);

        if (value === '') {
            $(".city-change__cities .city-change__city").removeClass("hidden");
            citiesVisible = true;
        } else {
            $(".city-change__cities .city-change__city").each(function () {
                const match = $(this).text().toLowerCase().includes(value);
                $(this).toggleClass("hidden", !match);
                if (match) citiesVisible = true;
            });
        }

        citiesVisible ? $nf.hide() : $nf.show().find($query).text(value);
        setTimeout(() => {
            $loading.fadeOut(100)
            if (value !== '')
                $clearBtn.fadeIn(100);
            else
                $clearBtn.fadeOut(100)
        }, 500);
    };
    const defineLocation = () => {
        const $loading = $('.city-change__define-loading')
        const $icon = $('.city-change__define-icon')
        $icon.css("opacity", "0");
        $loading.fadeIn(100);

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Здесь вы можете делать что-то с полученными координатами
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            }, error => {
                console.error("Error Code = " + error.code + " - " + error.message);

                import('@/images/icons/danger.svg');
                toastShow('/images/icons/danger.svg', 24, 'Не удалось определить ваше местоположение');
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        setTimeout(() => {
            $loading.fadeOut(100);
            $icon.css("opacity", "1");
        }, 500);
    }

    const selectCity = ($el) => {
        $el = $el.closest('.city-change__city');
        const $loading = $('.city-change__choosen-loading');
        const $city = $('.city-change__choosen-text--city');
        const $region = $('.city-change__choosen-text--region');
        var city = $el.data('city')
        var region = $el.data('region')

        $loading.fadeIn(100);

        console.log($el)
        console.log(city)
        console.log(region)
        setTimeout(() => {
            $loading.fadeOut(100);

            $city.text(city);
            $region.text(region);
        }, 500);
    };

    fixedCityPopup();
    $(window).scroll(fixedCityPopup);
    $('.js-change-location').on("click", changeLocation);
    $('.js-submit-location').on("click", submitLocation);
    $(".city-change__input").on("keyup", filterCities);
    $(".city-change__cities-nf-suggest").on("click", () => {
        $(".city-change__input").val("Московская область").trigger("keyup");
    });
    $(".city-change__define").on("click", defineLocation)
    $(".city-change__input-clear").on("click", () => {
        const $input = $(".city-change__input");
        $input.val('');
        filterCities();
    })
    $(".city-change__city").on("click", event => {
        selectCity($(event.target))
    });
}
