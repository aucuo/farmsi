export var reviewButtonsInit = function reviewButtonsInit() {
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
