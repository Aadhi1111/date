var date = document.createElement("input");
date.setAttribute("type","date");
date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "bt btn-primary";
button.innerHTML = "CLICK ME";
button.addEventListener("click",date_data);

document.body.append(date,button);

function date_data(){
    var input = document.getElementById("dob").value;
    var input_date = new Date(input);
    var current_date = new Date();
    var millisecondsdiff = parseInt(current_date.getTime() - input_date.getTime());
    //console.log(millisecondsdiff);
    var secondsdiff = Math.floor(millisecondsdiff/1000);
    //console.log(secondsdiff);
    var minutesdiff = Math.floor(secondsdiff/60);
    //console.log(minutesdiff);
    var hoursdiff = Math.floor(minutesdiff/60);
    //console.log(hoursdiff);
    var daysdiff = Math.floor(hoursdiff/24);
    //console.log(daysdiff);
    var yearsdiff = current_date.getFullYear() - input_date.getFullYear();
    //console.log(yearsdiff);
    var monthsdiff = yearsdiff*12 + (current_date.getMonth() - input_date.getMonth());
    //console.log(monthsdiff);
    var today_date = document.createElement("div");
    today_date.innerHTML =  `Given input date is ${input_date}`;
    var years = document.createElement("div");
    years.innerHTML = `year ${yearsdiff}`;
    var months = document.createElement("div");
    months.innerHTML = `month ${monthsdiff}`;
    var days = document.createElement("div");
    days.innerHTML = `day ${daysdiff}`;
    var hours = document.createElement("div");
    hours.innerHTML = `hour ${hoursdiff}`;
    var minutes = document.createElement("div");
    minutes.innerHTML = `minute ${minutesdiff}`;
    var seconds = document.createElement("div");
    seconds.innerHTML = `second ${secondsdiff}`;
    var milliseconds = document.createElement("div");
    milliseconds.innerHTML = `mill second ${millisecondsdiff}`;

    document.body.append(today_date,years,months,days,hours,minutes,seconds,milliseconds);

}