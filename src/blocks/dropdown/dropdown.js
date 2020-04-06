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
        // Делаем кнопку не активной при 0
        decrease.classList.remove('drop-out__btn-decrease--active'); 
      }
      if (amount < maxCount) {
        // Делаем кнопку активной при != 0
        increase.classList.add('drop-out__btn-increase--active');
      }
    });

    // Обработка событий для 'плюса'
    increase.addEventListener('click', function(event) {
      if (amount < maxCount) {
        amount++;
        counter.innerHTML = amount;
      }
      if (amount > minCount) {
        // Делаем кнопку активной при != 5
        decrease.classList.add('drop-out__btn-decrease--active'); 
      }
      if (amount == maxCount) {
        // Делаем кнопку не активной при 5
        increase.classList.remove('drop-out__btn-increase--active'); 
      }
    });
  }
});

// Вывод в input для dropdown
document.addEventListener('DOMSubtreeModified', function(){
 
  // Собираем все dropdown на странице
  const dropdowns = document.querySelectorAll('.dropdown');
  // написание параметров дропдауна в зависимости от количества
  let argument_1, argument_2, argument_3; 
 
  // Работаем с каждым dropdown отдельно
  for(let i=0; i<dropdowns.length; i++) {
    // Находим input
    const input = dropdowns[i].childNodes[0].childNodes[0]; 
    // Массив значений из 3 счётчиков
    const dropOut = dropdowns[i].querySelector('.drop-out');
    const dropOutItems = dropdowns[i].querySelectorAll('.drop-out__amount');
    // Кнопки "Очистить" и "Принять"
    let buttonAccept = dropdowns[i].querySelector('.btn-accept');
    let buttonClear = dropdowns[i].querySelector('.btn-clear');
    
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
        //Баттоны
        buttonClear.style.display = "block";
        buttonClear.addEventListener('click', function(){
          buttonClear.style.display = "none";
          dropOutItems[0].innerHTML = 0;
          dropOutItems[1].innerHTML = 0;
          dropOutItems[2].innerHTML = 0;
        })
        buttonAccept.addEventListener('click', function(){
          input.blur();
        })
        //Баттоны
      }

      // Запись в input
      input.value = dropOutItems[0].textContent+' '+argument_1+', '+dropOutItems[1].textContent+' '+argument_2+', '+dropOutItems[2].textContent+' '+argument_3;
    } else {
      // Если все счётчики "0", обнуляем значение input
      input.value = null;
    }
  }
});