$(function () {
  // DISPLAY CURRENT DATE IN HEADER
  function displayCurrentDate() {
    var theDate = $("#currentDay");
    var currentDay = dayjs().format("dddd: MMMM DD, YYYY");
    theDate.text(currentDay);
  }

  // APPLY PAST, PRESENT, or FUTURE CLASS TO TIME BLOCKS BASED ON currentTime & timeDiv
  function getCurrentTime() {
    var currentTime = dayjs().hour();

    // ITERATE OVER .time-blocks USING JQUERY EACH
    $(".time-block").each(function () {
      var timeDiv = $(this).attr("data-value");

      // CHECK FOR MACHING TIME
      if (currentTime == timeDiv) {
        $(this).addClass("present");
      } else if (currentTime < timeDiv) {
        $(this).addClass("future");
      } else if (currentTime > timeDiv) {
        $(this).addClass("past");
      }
    });
  }

  // SAVE BUTTON CLICK EVENT - SAVE USER INPUT
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();

    // GET THE USER INPUT AND HOUR OF THE CHOSEN SAVE BUTTON USING THIS & JQUERY SIBLINGS
    var userPlans = $(this).siblings(".description").val().trim();
    var selectedSaveTime = $(this).siblings(".hour").html();
    var textArea = $(this).siblings(".description").val();

    // IF TEXTAREA IS NOT EMPTY DISPLAY ALERT THAT ITEM WAS ADDED
    if (textArea == ""){
      return;
    } else {
      var alertUser = $(
        `<div class="alert alert-success" role="alert">
        Your event(s) for <strong>${selectedSaveTime}</strong> has been added!
        </div>`
      );

      // DISPLAY ALERT ONCE SAVED AND REMOVE AFTER SEVERAL SECONDS
      $("#eventAdded").append(alertUser);
      setTimeout(function () {
        alertUser.remove();
      }, 2700);  
  }

    // SET KEY TO SELECTED HOUR AND VALUE TO USER INPUT FOR CORRESPONDING HOUR
    localStorage.setItem(selectedSaveTime, userPlans);
  });

  // DISPLAY STORED DATA
  function displaySchedule() {
    // ITERATE OVER EACH .time-block USING JQUERY EACH TO GET STORED DATA
    $(".hour").each(function () {
      var savedTime = $(this).html();
      var savedPlans = localStorage.getItem(savedTime);

      // DISPLAY STORED DATA IN APPROPRIATE TEXTAREA
      $(this).siblings(".description").val(savedPlans);
    });
  }

  // DELETE BUTTON CLICK EVENT - CLEAR LOCAL STORAGE
  $(".deleteBtn").on("click", function () {
    localStorage.clear();

    // CLEAR EACH TEXTAREA WITH JQUERY EACH
    $(".description").each(function () {
      $(this).val("");
    });
  });

  // CALL FUNCTIONS
  displayCurrentDate();
  getCurrentTime();
  displaySchedule();
});
