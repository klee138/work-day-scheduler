//display current date and time
var currentTime = moment().toString();
         document.getElementById("currentDay").innerHTML = currentTime;

//create calendar grid
for (var i = 9; i < 18; i++) {
    var rowEl = $(`<div data-row=${i} id=${i} class="row">`);
      //creating grid for calendar
  for (var i = 9; i < 18; i++) {
    var rowEl = $(`<div data-row=${i} id=${i} class="row">`);

    //columns for hour, events, and save buttons
    var colHour = $(`<div class="col-sm-2 hour"><h4>` + amPm(i) + `</h4>`);
    var colEvent = $(
      `<div class="col-sm-8"><textarea class="event" placeholder="Add an event"></textarea>`
    );
    var colSave = $(
      `<div class="col-sm-2 saveBtn"><button class="saveBtn" time=${i}><i class="far fa-save"></i></button>`
    );

    //append columns to rows

    rowEl.append(colHour);
    rowEl.append(colEvent);
    rowEl.append(colSave);

    //append to container
    $(".container").append(rowEl);

    //determines am or pm
    function amPm(x) {
      if (x < 12) {
        return x + " AM";
      } else if (x === 12) {
        return x + " PM";
      } else {
        return x - 12 + " PM";
      }
    }
  }

  //save to local storage
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function() {
    var time = $(this).attr("time");
    var event = $(this)
      .parent()
      .siblings()
      .children(".event")
      .val();

    localStorage.setItem(time, event);
    console.log(time);
    console.log(event);
  });
};