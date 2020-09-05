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