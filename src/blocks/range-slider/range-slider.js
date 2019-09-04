var $ = require("jquery");
  
$( function() {
    $( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 15700,
      step: 10,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( ".range-slider__label" ).val( ui.values[ 0 ] + "Р - " + ui.values[ 1 ] + "Р");
      }
    });
    $( ".range-slider__label" ).val( $( ".slider-range" ).slider( "values", 0 ) +
      "Р - " + $( ".slider-range" ).slider( "values", 1 ) + "Р" );
  } );