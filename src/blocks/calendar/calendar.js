$.fn.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
};

// Range date picker
$( function() {

  let $start = $('#start'),
      $end = $('#end');
  
  $start.datepicker({
      onSelect: function (fd, date) {
          $end.data('datepicker')
                  .update('minDate', date);
  
          $end.focus();
      }
  })
  
  $end.datepicker({
      onSelect: function (fd, date) {
          $start.data('datepicker')
                  .update('maxDate', date)
      }
  })

} );

// Styles of date picker
let now = new Date();
let endDate = new Date(now.getTime() + 365*24*60*60*1000)
/*
let $start = $('#start'),
    $end = $('#end');
let $datepickers = $('.datepickers');
*/
$( function() {
    $('.calendar').datepicker({
      range: true,
      clearButton: true,
      autoClose: true,
      prevHtml: '<span class="material-icons">arrow_back</span>',
      nextHtml: '<span class="material-icons">arrow_forward</span>',
      todayButton: true,
      navTitles: {
        days: 'MM yyyy'
      },
      minDate: now,
      maxDate: endDate
    })
} );

$( function() {
    $('.datepicker-here').datepicker({
      classes: 'calendar'
    })
} );