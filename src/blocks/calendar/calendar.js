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

/**/

$( function() {
    $('#calendar').datepicker({
    	range: true,
    	clearButton: true/*,
    	prevHtml: <svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>,
    	nextHtml: <svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>*/
	})
} );