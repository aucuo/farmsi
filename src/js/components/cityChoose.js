export function cityChooseInit() {
    var cityPopup = $('.city-popup');
    cityPopup.fadeIn(300);
    const cityChangeModal = new bootstrap.Modal($('#cityChangeModal'), {});
    cityChangeModal.show();
    var fixedCityPopup = function fixedCityPopup() {
        var scroll = $(window).scrollTop();
        var cityPopup = $('.city-popup');
        var header = $(".header__top");
        var headerHeight = header.innerHeight();

        if (scroll >= headerHeight) {
            cityPopup.addClass("is-active");
        } else {
            cityPopup.removeClass("is-active");
        }
    };
    fixedCityPopup();
    $(window).scroll(fixedCityPopup);
};

function submitLocation() {
    var cityPopup = $('.city-popup');
    // cityPopup.fadeOut(300);
}

function changeLocation() {
    var cityPopup = $('.city-popup');
    // cityPopup.fadeOut(300);

    const cityChangeModal = new bootstrap.Modal($('#cityChangeModal'), {});
    cityChangeModal.show();
}