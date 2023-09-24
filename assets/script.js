$(function () {

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


  var theDate = $("#currentDay");

  // DISPLAY CURRENT DATE IN HEADER
  function displayCurrentDate() {
    var currentDay = dayjs().format("dddd: MMMM DD, YYYY");
    theDate.text(currentDay);
  }

  // APPLY PAST, PRESENT, or FUTURE CLASS TO TIME BLOCKS
  function getCurrentTime() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function () {
      var timeDiv = $(this).attr("data-value");

      if (currentTime == timeDiv) {
        $(this).addClass("present");
      } else if (currentTime < timeDiv) {
        $(this).addClass("future");
      } else if (currentTime > timeDiv) {
        $(this).addClass("past");
      }
    });
  };


  // SAVE BUTTON - SAVE USER INPUT
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();

    // GET THE USER INPUT AND HOUR OF THE CHOSEN SAVE BUTTON USING THIS & JQUERY SIBLINGS
    var userPlans = $(this).siblings(".description").val();
    var selectedSaveTime = $(this).siblings(".hour").html();

    // SET KEY TO SELECTED HOUR AND VALUE TO USER INPUT FOR CORRESPONDING HOUR
    localStorage.setItem(selectedSaveTime, userPlans);
  });


  // CALL FUNCTIONS
  displayCurrentDate();
  getCurrentTime();
});