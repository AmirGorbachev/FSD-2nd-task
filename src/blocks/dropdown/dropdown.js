document.addEventListener('DOMContentLoaded', function(){
  const items = document.querySelectorAll('.drop-out__counter');

  for(let i=0; i<items.length; i++) {
    // Значение счётчика
    let amount = items[i].childNodes[1].innerHTML;
    // Элементы счётчика
    const decrease = items[i].childNodes[0];
    const counter = items[i].childNodes[1];
    const increase = items[i].childNodes[2];
    // Пороговые значения
    const minCount = 0;
    const maxCount = 5;
    // Обработка событий для 'минуса'
    decrease.addEventListener('click', function(event) {
      if (amount > minCount) {
        amount--;
        counter.innerHTML = amount;
      }
      if (amount == minCount) {
        decrease.classList.remove('drop-out__btn-decrease--active'); // Делаем кнопку не активной при 0
      }
      if (amount < maxCount) {
        increase.classList.add('drop-out__btn-increase--active'); // Делаем кнопку активной при != 0
      }
    });
    // Обработка событий для 'плюса'
    increase.addEventListener('click', function(event) {
      if (amount < maxCount) {
        amount++;
        counter.innerHTML = amount;
      }
      if (amount > minCount) {
        decrease.classList.add('drop-out__btn-decrease--active'); // Делаем кнопку активной при != 10
      }
      if (amount == maxCount) {
        increase.classList.remove('drop-out__btn-increase--active'); // Делаем кнопку не активной при 10
      }
    });
  } // Конец цикла
});

// Вывод в input
document.addEventListener('DOMSubtreeModified', function(){
  // Собираем все dropdown на странице
  const dropdowns = document.querySelectorAll('.dropdown--facilities');
  let bedrooms, beds, bathrooms; // написание спален, кроватей и ванн в зависимости от количества
  // Работаем с каждым dropdown отдельно
  for(let i=0; i<dropdowns.length; i++) {
    const input = dropdowns[i].childNodes[0].childNodes[0]; // Находим input
    const dropOutItems = dropdowns[i].querySelectorAll('.drop-out__amount'); // Массив значений из 3 счётчиков
    // Записываем значения в input
    if((dropOutItems[0].textContent != 0)||(dropOutItems[1].textContent != 0)||(dropOutItems[2].textContent != 0)) {
      // Формы слова "спальня"
      switch(dropOutItems[0].textContent){
        case "1": 
          bedrooms = "спальня";
          break;
        case "2":
        case "3":
        case "4":
          bedrooms = "спальни";
          break;
        default:
          bedrooms = "спален";
          break;
      }
      // Формы слова "кровать"
      switch(dropOutItems[1].textContent){
        case "1": 
          beds = "кровать";
          break;
        case "2":
        case "3":
        case "4":
          beds = "кровати";
          break;
        default:
          beds = "кроватей";
          break;
      }
      // Формы слова "ванная"
      switch(dropOutItems[2].textContent){
        case "1": 
          bathrooms = "ванная комната";
          break;
        case "2":
        case "3":
        case "4":
          bathrooms = "ванные комнаты";
          break;
        default:
          bathrooms = "ванных комнат";
          break;
      }
      input.value = dropOutItems[0].textContent+' '+bedrooms+', '+dropOutItems[1].textContent+' '+beds+', '+dropOutItems[2].textContent+' '+bathrooms;
    } else {
     input.value = null; // Если все счётчики "0", обнуляем значение input
    }
  }
});