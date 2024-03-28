export function toastShow(toastImage, toastImageSize, toastText) {
    const $toast = $(".toast");
    const $toastImage = $toast.find("img");
    const $toastText = $toast.find(".toast-text");


    $toastImage.attr("src", toastImage);
    $toastImage.css("width", toastImageSize);
    $toastImage.css("height", toastImageSize);
    $toastImage.attr("width", toastImageSize);
    $toastImage.attr("height", toastImageSize);
    $toastText.text(toastText);

    $toast.toggleClass('hide')
    $toast.toggleClass('show')
    setTimeout(() => {$toast.toggleClass('hide'); $toast.toggleClass('show')}, 5000);
}
