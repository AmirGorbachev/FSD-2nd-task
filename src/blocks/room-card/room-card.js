// Слайдер в room-card
document.addEventListener('DOMContentLoaded', function(){
  let roomCard = document.querySelectorAll(".room-card__inner");
  for(let i=0; i<roomCard.length; i++){
    // Кнопки
    let btnLeft = roomCard[i].querySelector('.room-card__slider-left');
    let btnRight = roomCard[i].querySelector('.room-card__slider-right');
    // Точка 
    let point = roomCard[i].querySelectorAll('.room-card__point');
    let numberPoint = 0;
    // Слайдер влево
    btnLeft.addEventListener('click', function(event){
      point[numberPoint].classList.remove('room-card__point--active');
      numberPoint -= 1;
      // Сравнение значений на выход за пределы допустимого
      if (numberPoint == -1) {
        numberPoint = 3;
      }
      // Результат
      point[numberPoint].classList.add('room-card__point--active');   
    })
    // Слайдер вправо
    btnRight.addEventListener('click', function(event){
      point[numberPoint].classList.remove('room-card__point--active');
      numberPoint += 1;
      // Сравнение значений на выход за пределы допустимого
      if (numberPoint == 4) {
        numberPoint = 0;
      }
      // Результат
      point[numberPoint].classList.add('room-card__point--active'); 
    })
  }
});