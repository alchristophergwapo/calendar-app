let today = new Date();
let cm = today.getMonth(); //current month
let cy = today.getFullYear(); //current year
let selectYear = document.getElementById("year"); //year selected
let selectMonth = document.getElementById("month"); //month selected

// list of months
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(cm, cy); // this will show the current month and year

// for the next button
function next() {
    cy = (cm === 11) ? cy + 1 : cy; // if the current month is equal value of 11, then the year will be added 1 ????(sakto ba?)
    cm = (cm + 1) % 12; // ambot unsa ni
    showCalendar(cm, cy); // this will show the current month and year
}

// for the previous button
function previous() {
    cy = (cm === 0) ? cy - 1 : cy;
    cm = (cm === 0) ? 11 : cm - 1;
    showCalendar(cm, cy);
}

// if you'll choose month and year of your choice
function jump() {
    cy = parseInt(selectYear.value); // this will get your chosen year
    cm = parseInt(selectMonth.value); // this will get yur chosen month
    showCalendar(cm, cy); // this will dispay your chosen month and year
}

// this function will show the calendar itself
function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay(); // this will get the first day of the month
    let daysInMonth = 32 - new Date(year, month, 32).getDate(); // this will get how many days are in the month

    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year; // this will display the month and the year
    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                // cell.style.border = "1px solid black";
                // cell.style.width = "40px";
                // cell.style.padding = "20px";
                row.appendChild(cell);
            }
            else if (date > daysInMonth) { // if the day will exceed to the number of days in the month,
                break; //  it will not continue
            }

            else { // if the date does not exceed,
                let cell = document.createElement("td"); // it will add another cell
                cell.style.border = "1px solid black";
                cell.style.width = "40px";
                cell.style.padding = "20px";
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {//
                }
                cell.appendChild(cellText);
                cell.style.border = "1px solid black";
                cell.style.width = "40px";
                cell.style.padding = "20px";
                cell.style.textAlign = "center";

                cell.addEventListener("mouseover",function(event){
                  event.target.style.backgroundColor =  "grey";
                  // setTimeout(function(){
                  //   event.target.style.backgroundColor = "";
                  // },200);
                  cell.addEventListener("mouseout",function(){
                    event.target.style.backgroundColor = "";
                  });
                });

                cell.addEventListener("mousedown",function(event){
                  event.target.style.backgroundColor = "red";

                });
                row.appendChild(cell);
                date++;
            }

        }

        tbl.appendChild(row); 
    }
    function mouseOver() {
      document.getElementById("cell").style.color = "red";
    }
}