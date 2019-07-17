var $ = require("jquery");

$(function () {
    $('.toggle__switch').click(function () {
        $(this).toggleClass('toggle__switch--on');
    });
});