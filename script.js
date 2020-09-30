$(".btn").on("click", function () {
    // Pull value from the textare of chosen save button. This will serve as the value for out setItem
    var text = $(this).siblings(".text-input").val();

    // Pull the id of the clicked element to serve as the id

    var time = $(this).parent().attr("id");

    // This is where you will save the data to local storage
    localStorage.setItem(time,text)
})


// Function to update the color of the time display
function hourUpdater() {
    var currentTime = moment().hours()

        $(".time-block").each(function () {

            // take the value frome each id and setting to the variable block. HINT parseInt
            var block = parseInt($(this).attr("id").split("hour")[1]);

            // if statments to ask: Is the current time before the block? after the block or equal to the block
            // in each if statement you will need to add a class and remove a class
            if (block < currentTime) {
                // add the class of past to that element
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (block === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            
        })

}
// current day and time display
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

hourUpdater()

var interval = setInterval(hourUpdater, 15000);

// here we need to access the values from localstorage and GET the times to display them on screen
$("#hour9 .text-input").val(localStorage.getItem("hour9"));
$("#hour10 .text-input").val(localStorage.getItem("hour10"));
$("#hour11 .text-input").val(localStorage.getItem("hour11"));
$("#hour12 .text-input").val(localStorage.getItem("hour12"));
$("#hour13 .text-input").val(localStorage.getItem("hour13"));
$("#hour14 .text-input").val(localStorage.getItem("hour14"));
$("#hour15 .text-input").val(localStorage.getItem("hour15"));
$("#hour16 .text-input").val(localStorage.getItem("hour16"));
$("#hour17 .text-input").val(localStorage.getItem("hour17"));
