var timeBlock = $(".time-block");
var saveBtnEl = $(".saveBtn");
var currentTime = dayjs().format("HH");
var nowHour = Number(currentTime);
//Current Time
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMM D, YYYY"));

//Return the value of id "hour-x", specific to x (number)
timeBlock.each(function () {
  var workHourList = $(this).attr("id").split("-")[1];
  var workHour = parseInt(workHourList);

  if (workHour > nowHour) {
    $(this).addClass("future");
  } else if (workHour == nowHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});

//Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.

saveBtnEl.on("click", function () {
  var buttonID = $(this).attr("id");
  var textareaID = buttonID.split("btn").join("txt");
  textareaID.text();

  localStorage.setItem(buttonID);
});

function planValue() {
  localStorage.getItem(buttonID);
}
