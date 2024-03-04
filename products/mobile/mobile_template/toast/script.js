var btns = document.querySelectorAll(".js-add-cart");
var toast = document.querySelector(".toast");

const option = {
    autohide: true,
    delay: 3000,
    animation: true,
};

// Create toast instance
var myToast = new bootstrap.Toast(toast, option);

btns.forEach((element) => {
    element.addEventListener("click", function () {
        myToast.show();
    });
});