// Workaround for Date & Time Formats
// Add the following code within a <script> </script>
// on the header web template

//Sets the date & time format
document.body.setAttribute("data-datetimeformat", "d/M/yyyy h:mm tt");

//Sets the time only format
document.body.setAttribute("data-timeformat", "h:mm tt");

//Sets the date only format
document.body.setAttribute("data-dateformat", "d/M/yyyy");

