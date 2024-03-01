
$(document).ready(function () {
    $('.dropdown-menu__link').click(function () {
        var $icon = $(this).find('.dropdown-menu__link--icon');
        var $url = $(this).find('.dropdown-menu__link--url');
        var newText = 'Ссылка скопирована';
        var newIconSrc = './images/icons/check.svg'; // Убедитесь, что путь к новой иконке верный

        // Копирование URL в буфер обмена
        var url = $url.data("url");
        navigator.clipboard.writeText(url).then(() => {
            // Плавное исчезновение текста и иконки
            $url.fadeOut(300, function () {
                // Изменение текста после исчезновения
                $url.text(newText).fadeIn(300);
            });

            $icon.fadeOut(300, function () {
                // Изменение источника иконки после исчезновения и плавное появление
                $icon.attr('src', newIconSrc).fadeIn(300);
            });
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
            $('.products__dropdown').stop(true, true).fadeOut(300);
        }
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