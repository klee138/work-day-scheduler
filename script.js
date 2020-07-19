//display current date and time
var currentTime = moment().toString();
         document.getElementById("currentDay").innerHTML = currentTime;

//calendar
for (var i = 9; i < 18; i++) {
    var rowEl = $(`<div data-row=${i} id=${i} class="row">`);
      //creating grid for calendar
  for (var i = 9; i < 18; i++) {
    var rowEl = $(`<div data-row=${i} id=${i} class="row">`);

    //time, events, saves
    var colHour = $(`<div class="col-sm-2 hour"><h4>` + amPm(i) + `</h4>`);
    var colEvent = $(
      `<div class="col-sm-8"><textarea class="event" placeholder="Add an event"></textarea>`
    );
    var colSave = $(
      `<div class="col-sm-2 saveBtn"><button class="saveBtn" time=${i}><i class="far fa-save"></i></button>`
    );

    rowEl.append(colHour);
    rowEl.append(colEvent);
    rowEl.append(colSave);

    //add to container
    $(".container").append(rowEl);

    //function for am / pm
    function amPm(t) {
      if (t < 12) {
        return t + " AM";
      } else if (t === 12) {
        return t + " PM";
      } else {
        return t - 12 + " PM";
      }
    }
  }

  //set local storage
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function() {
    var time = $(this).attr("time");
    var event = $(this)
      .parent()
      .siblings()
      .children(".event")
      .val();
      
//get events from local storage
    localStorage.setItem(time, event);
    console.log(time);
    console.log(event);
  });
  var savedEvent = localStorage.getItem(event);
  var savedTime = localStorage.getItem(time);
console.log(savedEvent);
console.log(savedTime);
//target input field created above to fill with localstorage event and time data
//var input = $("Add an event");
//input.value = savedEvent;
};