var saveButton9 = $("#hour-9-button");
var saveButton10 = $("#hour-10-button");
var saveButton11 = $("#hour-11-button");
var saveButton12 = $("#hour-12-button");
var saveButton13 = $("#hour-13-button");
var saveButton14 = $("#hour-14-button");
var saveButton15 = $("#hour-15-button");
var saveButton16 = $("#hour-16-button");
var saveButton17 = $("#hour-17-button");

var textBox9 = $("#hour-9-text");
var textBox10 = $("#hour-10-text");
var textBox11 = $("#hour-11-text");
var textBox12 = $("#hour-12-text");
var textBox13 = $("#hour-13-text");
var textBox14 = $("#hour-14-text");
var textBox15 = $("#hour-15-text");
var textBox16 = $("#hour-16-text");
var textBox17 = $("#hour-17-text");

var currentDate = $("#current-date");

var textBoxes = [textBox9, textBox10, textBox11, textBox12, textBox13, textBox14, textBox15, textBox16, textBox17];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  /* 
    This function loads the page for the current date when called.
    First this function grabs the current date and puts it in header.
    Second, it loads events from local storage into their respective hour blocks if they exist.
  */
  function loadPage()
  {
    const dayjsObj = dayjs();
    var currentHour = parseInt(dayjsObj.format("H"));
    currentDate.text(dayjsObj.format("dddd, MMMM D, YYYY"));

    for (var i = 0; i < 9; i++)
    {
      // Grabs event names from local storage and updates the HTML text boxes with their content.
      if (localStorage.getItem("hour" + (i+9) + "Event") !== null) {
        textBoxes[i].text(localStorage.getItem("hour" + (i+9) + "Event"));
      }


      // If the current index is before the current hour, mark the text box gray.
      if ((i+9) < currentHour) {
        textBoxes[i].addClass("past");
      }

      // If the current index is the current hour, mark the text box red.
      else if ((i+9) === currentHour) {
        textBoxes[i].addClass("present");
      }

      // If the current index is after the current hour, mark the text box green.
      else {
        textBoxes[i].addClass("future");
      }
    }
  }

  // Creates save buttons for each hour on the planner to save events to local storage.
  saveButton9.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-9-text").val();
      localStorage.setItem("hour9Event", eventName);
  });

  saveButton10.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-10-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour10Event", eventName);
    }
  });

  saveButton11.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-11-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour11Event", eventName);
    }
  });

  saveButton12.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-12-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour12Event", eventName);
    }
  });

  saveButton13.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-13-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour13Event", eventName);
    }
  });

  saveButton14.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-14-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour14Event", eventName);
    }

  });

  saveButton15.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-15-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour15Event", eventName);
    }
  });

  saveButton16.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-16-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour16Event", eventName);
    }
  });

  saveButton17.click(function(event) {
    event.preventDefault();
    var eventName = $("#hour-17-text").val()
    if (eventName !== null) {
      localStorage.setItem("hour17Event", eventName);
    }
  });

  loadPage();
});
