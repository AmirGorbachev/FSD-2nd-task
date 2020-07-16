$(function () {
    $(".toggle__switch").click(function () {
        $(this).toggleClass("toggle__switch--on");
    });
});
$(function () {
    $(".toggle__value").click(function () {
        $(this).parent(".toggle__inner").children(".toggle__switch").toggleClass("toggle__switch--on");
    });
});