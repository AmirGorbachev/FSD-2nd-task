/* Сброс стилей */
import "../../node_modules/normalize.css/normalize.css";
/* Плагин - jQuery UI */
var $ = require("jquery");
import "../plugins/jquery-ui/jquery-ui.min.js";
/* Плагин - AIR DATEPICKER  */
import "../../node_modules/air-datepicker/dist/js/datepicker.min.js";
/* Подключение скриптов БЭМ-блоков */
import "../blocks/calendar/calendar.js";
import "../blocks/checkbox-list/checkbox-list.js";
import "../blocks/date-dropdown/date-dropdown.js";
import "../blocks/dropdown/dropdown.js";
import "../blocks/like-button/like-button.js";
import "../blocks/range-slider/range-slider.js";
import "../blocks/toggle/toggle.js";
import "../blocks/room-card/room-card.js";


// Слайдер bg-img
let imageBlocks = document.querySelectorAll(".slider");
// Если элементам изначально задать в стилях displey: none;
// то по неизвестным причинам функция fadeIn() не работает,
// так что в начале скрываем все элементы с помощью js
for(let imageBlock of imageBlocks) {
  $(imageBlock).fadeOut(0);
}

slideshow(imageBlocks);

function slideshow(images) {
  let nextImage = 0;
  doSlideshow();
  // Рекурсия для бесконечного листания
  function doSlideshow(){
    $(images[nextImage]).fadeOut(500);

    nextImage += 1;
    if(nextImage === images.length) {
      nextImage = 0;
    }

    $(images[nextImage]).fadeIn(500);

    setTimeout(doSlideshow, 3000);
  }
}