
// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var startDate = 0;
var monthsWorked = "";
var monthlyRate = "";
var totalBilled = "";

// Capture Button Click
$("#submit-button").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name-input").val();
  role = $("#role-input").val();
  startDate = $("#start-date-input").val();
  monthsWorked = $("#months-worked-input").val();
  monthlyRate = $("#rate-input").val();
  totalBilled = $("#bill-input").val();

database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthsWorked: monthsWorked,
    monthlyRate: monthlyRate,
    totalBilled: totalBilled,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })

});

// Firebase watcher + initial loader + order/limit HINT: .on("child_added"
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
// storing the snapshot.val() in a variable for convenience
var sv = snapshot.val();

// Console.loging the last user's data
console.log(sv.name);
console.log(sv.role);
console.log(sv.startDate);
console.log(sv.monthWorked);
console.log(sv.monthRate)
console.log(sv.totallBill)

  // Change the HTML to reflect

//   var newEmployee = $("<tr>")
//
//   var newName = $("<td>")
//   newName.attr("data-input", name);
//   newName.text(name);
//   newEmployee.append(newName);
//
//   var newRole = $("<td>")
//   newRole.attr("data-input", role);
//
//   var newStartDate = $("<td>")
//   var newMonthsWorked = $("<td>")
//   var newMonthlyRate = $("<td>")
//   var totalBilled = $("<td>")
//
//   $("#name-display").html(sv.name);
//   $("#email-display").html(sv.email);
//   $("#age-display").html(sv.age);
//   $("#comment-display").html(sv.comment);
//
//   // Handle the errors
// }, function(errorObject) {
//   console.log("Errors handled: " + errorObject.code);
});
