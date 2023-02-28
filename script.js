// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Today date and day display
var DateRN = moment().format('ddd, MMMM Do YYYY');
$("#currentDay").html(DateRN);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var txt = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

//save to local storage
    localStorage.setItem(time, txt);
  })

  function TrackTime() {
    var TimeRN = moment().hour();

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
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));

  TrackTime();
})
