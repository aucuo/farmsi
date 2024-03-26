
export function segmentedControlInit() {
    $('input[name="segmented-control"][checked]').each(checkSegmentedControl);
    $('input[type="radio"][name="segmented-control"]').change(checkSegmentedControl);
}

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

export function showSegmentedControl(fancybox) {
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

export function closeSegmentedControl(fancybox) {
    var segmentedControl = $('.js-segmented');
    segmentedControl.fadeOut(100);
}