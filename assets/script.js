// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the Elements
// in the html.

var theDate = $('#currentDay');

// VARIABLES FOR GETTING HOUR DIVS
var hour9El = $("#hour-9");
var hour10El = $("#hour-10");
var hour11El = $("#hour-11");
var hour12El = $("#hour-12");
var hour13El = $("#hour-13");
var hour14El = $("#hour-14");
var hour15El = $("#hour-15");
var hour16El = $("#hour-16");
var hour17El = $("#hour-17");

// CREATE ARRAYS FOR HOUR LOCAL STORAGE
var hour9 = [];
var hour10 = [];
var hour11 = [];
var hour12 = [];
var hour13 = [];
var hour14 = [];
var hour15 = [];
var hour16 = [];
var hour17 = [];

$(function planner() {
  // COMPLETE: Display the current date in the header of the page.
  $(function displayDate() {
    var currentDay = dayjs().format("dddd: MMMM DD, YYYY");
    theDate.text(currentDay);
  });

  // COMPLETE: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. How can Day.js be used to get the
  // current hour in 24-hour time?
  $(function currentTime() {
    var currentTime = dayjs().hour();
    console.log("current Time:", currentTime);

    // Loop through each element with a class of time-block and compare their data-value 
    // with the current time to check for match.
    $(".time-block").each(function colorTime() {
      let timeDiv = $(this).attr('data-value');

      if (currentTime == timeDiv) {
        // Set matched to class of present
        $(this).addClass("present");
        // Grab all before current and add class of past
        $(this).closest('.time-block').prevAll().addClass("past");
        // Grab all after current and add class of future
        $(this).closest('.time-block').nextAll().addClass("future");
      }
    })
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.time-block').on('click', function(e) {
    var selectedHour = $(this);
    $(selectedHour).addClass('testing');
    e.preventDefault();

});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea Elements. HINT: How can the id
  // attribute of each time-block be used to do this?


});
