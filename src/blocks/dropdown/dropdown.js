// Изменение состояния кнопок/счетчика
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

// Вывод в input для dropdown
document.addEventListener('DOMSubtreeModified', function(){
 
  // Собираем все dropdown на странице
  const dropdowns = document.querySelectorAll('.dropdown');
  let argument_1, argument_2, argument_3; // написание параметров дропдауна зависимости от количества
 
  // Работаем с каждым dropdown отдельно
  for(let i=0; i<dropdowns.length; i++) {
    const input = dropdowns[i].childNodes[0].childNodes[0]; // Находим input
    const dropOutItems = dropdowns[i].querySelectorAll('.drop-out__amount'); // Массив значений из 3 счётчиков
    
    // Записываем значения в input
    if((dropOutItems[0].textContent != 0)||(dropOutItems[1].textContent != 0)||(dropOutItems[2].textContent != 0)) {
      
      //формы слова для dropdown--facilities
      if(dropdowns[i].classList.contains('dropdown--facilities')){
        // Формы слова "спальня"
        switch(dropOutItems[0].textContent){
          case "1": 
            argument_1 = "спальня";
            break;
          case "2":
          case "3":
          case "4":
            argument_1 = "спальни";
            break;
          default:
            argument_1 = "спален";
            break;
        }
        // Формы слова "кровать"
        switch(dropOutItems[1].textContent){
          case "1": 
            argument_2 = "кровать";
            break;
          case "2":
          case "3":
          case "4":
            argument_2 = "кровати";
            break;
          default:
            argument_2 = "кроватей";
            break;
        }
        // Формы слова "ванная"
        switch(dropOutItems[2].textContent){
          case "1": 
            argument_3 = "ванная комната";
            break;
          case "2":
          case "3":
          case "4":
            argument_3 = "ванные комнаты";
            break;
          default:
            argument_3 = "ванных комнат";
            break;
        }
      }

      //формы слова для dropdown--guests
      if(dropdowns[i].classList.contains('dropdown--guests')){
        // Формы слова "взрослый"
        switch(dropOutItems[0].textContent){
          case "1": 
            argument_1 = "взрослый";
            break;
          default:
            argument_1 = "взрослых";
            break;
        }
        // Формы слова "ребенок"
        switch(dropOutItems[1].textContent){
          case "1": 
            argument_2 = "ребенок";
            break;
          case "2":
          case "3":
          case "4":
            argument_2 = "ребенка";
            break;
          default:
            argument_2 = "детей";
            break;
        }
        // Формы слова "младенец"
        switch(dropOutItems[2].textContent){
          case "1": 
            argument_3 = "младенец";
            break;
          case "2":
          case "3":
          case "4":
            argument_3 = "младенца";
            break;
          default:
            argument_3 = "младенцев";
            break;
        }
      }

      // Запись в input
      input.value = dropOutItems[0].textContent+' '+argument_1+', '+dropOutItems[1].textContent+' '+argument_2+', '+dropOutItems[2].textContent+' '+argument_3;
    } else {
     input.value = null; // Если все счётчики "0", обнуляем значение input
    }
  }
});