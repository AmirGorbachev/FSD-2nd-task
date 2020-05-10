$('#start_one').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $("#start_one").val(fd.split("-")[0]);
    $("#end_one").val(fd.split("-")[1]);
  }
});