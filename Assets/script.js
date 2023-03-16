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
// save button
saveBtnEl.on("click", function (event) {
  event.preventDefault();
  var buttonID = $(this).attr("id");
  //var textareaID = buttonID.split("btn").join("txt");
  textValue = $(this).siblings(".description").val();
  localStorage.setItem(buttonID, textValue);
});

//localStorage
function display() {
  buttonID = saveBtnEl.attr("id");
  textValue = saveBtnEl.siblings(".description").val();
  localStorage.getItem(buttonID);
  var description = textValue.textContent;
}
display();
