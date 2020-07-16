let now = new Date();
// Максимальный диапазон выбора даты - один год
let endDate = new Date(now.getTime() + 365*24*60*60*1000)

document.addEventListener('DOMContentLoaded', function(){
  const dateDropdowns = document.querySelectorAll('.date-dropdown__inner');

  for(let i=0; i<dateDropdowns.length; i++) {
    let firstInput = "#"+dateDropdowns[i].querySelector(".date-dropdown__first").getAttribute("id");
    let secondInput = "#"+dateDropdowns[i].querySelector(".date-dropdown__second").getAttribute("id");
    // Объявление datepicker
    $(firstInput).datepicker({ 
      range: true,
      clearButton: true,
      prevHtml: '<span class="material-icons">arrow_back</span>',
      nextHtml: '<span class="material-icons">arrow_forward</span>',
      todayButton: true,
      navTitles: {
        days: 'MM yyyy'
      },
      minDate: now,
      maxDate: endDate,
      onSelect: function (fd, d, picker) { 
        $(firstInput).val(fd.split("-")[0]);
        $(secondInput).val(fd.split("-")[1]);
      }
    });
    // Событие при клике на второй input
    $(secondInput).on("click", function() {
      $(firstInput).data('datepicker').show();
    });
    // Кнопка 'Принять' (скрытие календаря)
    const acceptButton = document.querySelectorAll('[data-action="today"]');
    $(acceptButton).on('click', function() {
      $(firstInput).data('datepicker').hide();
    });
  }
});