var saveButton9 = document.querySelector("#hour-9-button");
var saveButton10 = document.querySelector("#hour-10-button");
var saveButton11 = document.querySelector("#hour-11-button");
var saveButton12 = document.querySelector("#hour-12-button");
var saveButton13 = document.querySelector("#hour-13-button");
var saveButton14 = document.querySelector("#hour-14-button");
var saveButton15 = document.querySelector("#hour-15-button");
var saveButton16 = document.querySelector("#hour-16-button");
var saveButton17 = document.querySelector("#hour-17-button");

var textBox9 = document.querySelector("#hour-9-text");
var textBox10 = document.querySelector("#hour-10-text");
var textBox11 = document.querySelector("#hour-11-text");
var textBox12 = document.querySelector("#hour-12-text");
var textBox13 = document.querySelector("#hour-13-text");
var textBox14 = document.querySelector("#hour-14-text");
var textBox15 = document.querySelector("#hour-15-text");
var textBox16 = document.querySelector("#hour-16-text");
var textBox17 = document.querySelector("#hour-17-text");

var currentDate = document.querySelector("#current-date");

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
    console.log(currentHour);
    currentDate.innerHTML = dayjsObj.format("dddd, MMMM D, YYYY");

    for (var i = 0; i < 9; i++)
    {
      // Grabs event names from local storage and updates the HTML text boxes with their content.
      if (localStorage.getItem("hour" + (i+9) + "Event") !== null) {
        textBoxes[i].innerHTML = localStorage.getItem("hour" + (i+9) + "Event");
      }


      // If the current index is before the current hour, mark the text box gray.
      if ((i+9) < currentHour) {
        textBoxes[i].className = textBoxes[i].className + " past";
      }

      // If the current index is the current hour, mark the text box red.
      else if ((i+9) === currentHour) {
        textBoxes[i].className = textBoxes[i].className + " present";
      }

      // If the current index is after the current hour, mark the text box green.
      else {
        textBoxes[i].className = textBoxes[i].className + " future";
      }
    }
  }

  // Creates save buttons for each hour on the planner to save events to local storage.
  saveButton9.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-9-text").value
      localStorage.setItem("hour9Event", eventName);
  });

  saveButton10.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-10-text").value
    if (eventName !== null) {
      localStorage.setItem("hour10Event", eventName);
    }
  });

  saveButton11.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-11-text").value
    if (eventName !== null) {
      localStorage.setItem("hour11Event", eventName);
    }
  });

  saveButton12.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-12-text").value
    if (eventName !== null) {
      localStorage.setItem("hour12Event", eventName);
    }
  });

  saveButton13.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-13-text").value
    if (eventName !== null) {
      localStorage.setItem("hour13Event", eventName);
    }
  });

  saveButton14.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-14-text").value
    if (eventName !== null) {
      localStorage.setItem("hour14Event", eventName);
    }

  });

  saveButton15.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-15-text").value
    if (eventName !== null) {
      localStorage.setItem("hour15Event", eventName);
    }
  });

  saveButton16.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-16-text").value
    if (eventName !== null) {
      localStorage.setItem("hour16Event", eventName);
    }
  });

  saveButton17.addEventListener("click", function(event) {
    event.preventDefault();
    var eventName = document.querySelector("#hour-17-text").value
    if (eventName !== null) {
      localStorage.setItem("hour17Event", eventName);
    }
  });

  loadPage();
});
