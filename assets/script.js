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


  // Display the current date in the header of the page.
  var theDate = $("#currentDay");

  function displayDate() {
    var currentDay = dayjs().format("dddd: MMMM DD, YYYY");
    theDate.text(currentDay);
  }

  // Add code to apply the past, present, or future class to each time
  function currentTime() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function colorTime() {
      let timeDiv = $(this).attr("data-value");

      if (currentTime == timeDiv) {
        $(this).addClass("present");
      } else if (currentTime < timeDiv) {
        $(this).addClass("future");
      } else if (currentTime > timeDiv) {
        $(this).addClass("past");
      }
    });
  };

  // SAVE BUTTON
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();

    // GET THE USER INPUT AND HOUR OF THE CHOSEN SAVE BUTTON USING THIS & JQUERY SIBLINGS
    var userHourInput = $(this).siblings(".description").val();
    console.log("User Input:", userHourInput)

    var selectedSaveTime = $(this).siblings(".hour").html();
    console.log("Time:", selectedSaveTime)
  });


  // CALL FUNCTIONS
  displayDate();
  currentTime();
});