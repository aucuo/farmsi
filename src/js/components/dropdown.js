export var dropdownToggleInit = function dropdownToggleInit() {
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

    $('.dropdown-menu__link').click(function () {
        var $icon = $(this).find('.dropdown-menu__link--icon');
        var $url = $(this).find('.dropdown-menu__link--url');
        var newText = 'Ссылка скопирована';
        var newIconSrc = '/images/icons/check.svg'; // Убедитесь, что путь к новой иконке верный

        // Копирование URL в буфер обмена
        var url = $url.data("url");
        navigator.clipboard.writeText(url).then(() => {
            $url.text(newText);
            $icon.attr('src', newIconSrc);
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
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
        $('.js-dropdown').removeClass('is-active');
        $('.js-dropdown-menu').fadeOut(300);
        // Скрываем все активные tooltips Bootstrap
        $('.tooltip').tooltip('hide');
    });
};

export var jsDropdownInit = function jsDropdownInit() {
    var dropdownItems = $(".js-dropdown"); // Выбираем все элементы хлебных крошек
    var dropdownItemsClick = $(".js-dropdown-click"); // Выбираем все элементы хлебных крошек

    dropdownItemsClick.on("click", function (e) {
        var dropdownMenu = $(this).find(".js-dropdown-menu");

        if (!$(e.target).hasClass("js-dropdown-link"))
            dropdownMenu.css('z-index', '1');

        if (dropdownMenu.length) {
            $(this).addClass("is-active"); // Добавляем активный класс к иконке, если есть выпадающий список
            dropdownMenu.stop(true, true).fadeIn(100); // Плавно показываем выпадающий список за 300 мс
        }
    });

    dropdownItems.on("mouseenter", function () {
        if (!$(this).hasClass("js-dropdown-click")) {
            var dropdownMenu = $(this).find(".js-dropdown-menu");
            if (dropdownMenu.length) {
                $(this).addClass("is-active"); // Добавляем активный класс к иконке, если есть выпадающий список
                dropdownMenu.stop(true, true).fadeIn(100); // Плавно показываем выпадающий список за 300 мс
            }
        }
    });

    dropdownItems.on("mouseleave", function () {
        var dropdownMenu = $(this).find(".js-dropdown-menu");
        if (dropdownMenu.length) {
            $(this).removeClass("is-active"); // Убираем активный класс у иконки
            dropdownMenu.stop(true, true).fadeOut(100); // Плавно скрываем выпадающий список за 300 мс
        }
    });
};

export var jsSortButtonInit = function jsSortButtonInit() {
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

            parent.removeClass('is-active');
            parent.find('.js-dropdown-menu').css('z-index', '-1');
            // обработка сортировки
        }
    });
};
