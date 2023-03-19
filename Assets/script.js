var saved = JSON.parse(window.localStorage.getItem("storageItem"));
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
  var textID = $(this).parent().attr("id");
  textValue = $(this).siblings(".description").val();
  var storageItem =
    JSON.parse(window.localStorage.getItem("storageItem")) || [];
  storageItem.push({ textID, textValue });
  localStorage.setItem("storageItem", JSON.stringify(storageItem));
});

//localStorage
$(".description").each(function () {
  var ID = $(this).parent().attr("id");
  console.log(ID);
  console.log(saved);
  for (let i = 0; i < saved.length; i++) {
    console.log(ID, saved[i].textID);
    if (ID == saved[i].textID) {
      $(this).text(saved[i].textValue);
    }
  }
});
function display() {
  buttonID = saveBtnEl.attr("id");
  textValue = saveBtnEl.siblings(".description").val();
  var description = textValue.textContent;
}
display();
