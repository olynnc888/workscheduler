//Today date and day display
var DateRN = dayjs().format('ddd, MMMM Do YYYY');
$("#currentDay").html(DateRN);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var txt = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

//save to local storage
    localStorage.setItem(time, txt);
  })

  function TrackTime() {
    var TimeRN = dayjs().hour();

//loop time blocks
    $(".time-block").each(function () {
      var timeblock = parseInt($(this).attr("id").split("hour")[1]);
//function to check if time is past, cuurent, or future
      if (timeblock < TimeRN) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      else if (timeblock === TimeRN) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
//
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour13"));
  $("#hour2 .description").val(localStorage.getItem("hour14"));
  $("#hour3 .description").val(localStorage.getItem("hour15"));
  $("#hour4 .description").val(localStorage.getItem("hour16"));
  $("#hour5 .description").val(localStorage.getItem("hour17"));
  $("#hour6 .description").val(localStorage.getItem("hour18"));
  $("#hour7 .description").val(localStorage.getItem("hour19"));
  $("#hour8 .description").val(localStorage.getItem("hour20"));

  TrackTime();
})
