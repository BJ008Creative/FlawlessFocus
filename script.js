let time = document.getElementById("time");
time.innerHTML = "25:00";

let select1 = document.getElementById("1");
select1.addEventListener("click", function () {
    time.innerHTML = "25:00";
});

let select2 = document.getElementById("2");
select2.addEventListener("click", function () {
    time.innerHTML = "30:00";
});

let select3 = document.getElementById("3");
select3.addEventListener("click", function () {
    time.innerHTML = "40:00";
});

let select4 = document.getElementById("4");
select4.addEventListener("click", function () {
    time.innerHTML = "50:00";
});

let select5 = document.getElementById("5");
select5.addEventListener("click", function () {
    time.innerHTML = "60:00";
});

let replica = time.innerHTML;

let playbutton = document.getElementById("play");

let playing = false;

let interval;

let a;

playbutton.addEventListener("click", function () {

    // PLAY
    if (playing == false) {

        let parts = time.innerHTML.split(":");

        let minutes = parseInt(parts[0]);
        let seconds = parseInt(parts[1]);

        let totaltime = minutes * 60 + seconds;

        a = totaltime;

        playing = true;

        playbutton.style.backgroundImage =
            'url("stop-button_5628258.png")';

        interval = setInterval(function () {

            a--;

            let mins = parseInt(a / 60);
            let secs = a % 60;

            if (secs < 10) {
                time.innerHTML = mins + ":" + "0" + secs;
            }

            else {
                time.innerHTML = mins + ":" + secs;
            }

            if (a <= 0) {

                time.style.fontSize = "20px";

                time.innerHTML =
                    "Yayy we finished " + replica + " minutes";

                clearInterval(interval);

                playing = false;

                playbutton.style.backgroundImage =
                    'url("play-button_6241826.png")';
            }

        }, 1000);

    }

    // PAUSE
    else {

        playing = false;

        clearInterval(interval);

        playbutton.style.backgroundImage =
            'url("play-button_6241826.png")';
    }

});
let to_do= document.querySelector(".to-doList");
let date = document.getElementById("date");
let presentDate = new Date();
date.innerHTML = presentDate.getDate() + "-" + (presentDate.getMonth()+1) +"-"+ presentDate.getFullYear();


let todolist =
    JSON.parse(localStorage.getItem("tasks"))
    || [];

let text = document.querySelector(".text");
function addText(){
    
    if(text.value.trim() === ""){
        alert("Please enter a valid item");
        return;
    }
    todolist.push({
    taskName: text.value,
    date: presentDate.getDate() + "-" +
          (presentDate.getMonth()+1) + "-" +
          presentDate.getFullYear()
    });

    localStorage.setItem(
    "tasks",
    JSON.stringify(todolist)
    );
    console.log(todolist);
}
function resetText(){
    text.value="";
}
let i=0;

function dropList(){

    to_do.innerHTML = "";
    
    for(let i = 0; i < todolist.length; i++){

        
        
            
            to_do.innerHTML += `<div class="dropsection">
            <button class="ListButton" onclick="
             deleteButton(${i});
             dropList();
            ">X</button>
            <button class="EditButton" onclick="
                editButton(${i});
            
            ">Edit</button>
            <p>${todolist[i].taskName}</p> 
            </div>`;
           
        

    }
}
        
         

    
    
       
let taskData={
    taskName:"",
    date:presentDate
};
function resetList(){
    todolist=[];
    
    localStorage.removeItem("tasks");
    to_do.innerHTML="";
    
}
function deleteButton(i){

    todolist.splice(i,1);

    localStorage.setItem(
        "tasks",
        JSON.stringify(todolist)
    );
}
function editButton(index){

    let newTask = prompt(
        "Edit your task:",
        todolist[index].taskName
    );

    if(newTask !== null){

        todolist[index].taskName = newTask;

        localStorage.setItem(
            "tasks",
            JSON.stringify(todolist)
        );

        dropList();
    }
}
dropList();
let calendar = document.getElementById("calendar");

calendar.addEventListener("change", function(){

    let selectedDate = calendar.value;

    let parts = selectedDate.split("-");

    let formattedDate =
        Number(parts[2]) + "-" +
        Number(parts[1]) + "-" +
        parts[0];

    to_do.innerHTML = "";

    let found = false;

    for(let i = 0; i < todolist.length; i++){

        if(todolist[i].date === formattedDate){

            found = true;

            to_do.innerHTML += `
            <div class="dropsection">

                <button class="ListButton" onclick="
                    deleteButton(${i});
                    dropList();
                ">X</button>

                <button class="EditButton" onclick="
                    editButton(${i});
                ">Edit</button>

                <p>${todolist[i].taskName}</p>

            </div>`;
        }
    }

    if(!found){
        to_do.innerHTML =
        "<p style='margin-left:20px'>No tasks found for this date.</p>";
    }
});
let dateData = document.querySelector(".dateList");

function showDate(){

    dateData.innerHTML = "";

    for(let i = 0; i < todolist.length; i++){
        

        dateData.innerHTML += `
            <button onclick="
            hideDate();
            showEvent(${i});
            ">
                
                
                ${todolist[i].date}
            </button>
        `;
    }

    dateData.style.display = "contents";
    

}
function hideDate(){
    dateData.innerHTML = "";
    dateData.style.display = "none";
}
function showEvent(c){
    to_do.innerHTML = "";
    let fixedDate = todolist[c].date;
    
    
    for(let i = 0; i < todolist.length; i++){

        
        if(todolist[i].date===fixedDate){
            
            to_do.innerHTML += `<div class="dropsection">
            <button class="ListButton" onclick="
             deleteButton(${i});
             dropList();
            ">X</button>
            <button class="EditButton" onclick="
                editButton(${i});
            
            ">Edit</button>
            <p>${todolist[i].taskName}</p> 
            </div>`;
        }
           
        

    }


}
let journal = document.querySelector(".textPlace");

let journals =
    JSON.parse(localStorage.getItem("journals"))
    || {};
let PresentDate = new Date();
let currentJournalDate =
    PresentDate.getDate() + "-" +
    (PresentDate.getMonth()+1) + "-" +
    PresentDate.getFullYear();
journal.value = journals[currentJournalDate] || "";
journal.addEventListener("input", function(){

    journals[currentJournalDate] =
        journal.value;

    localStorage.setItem(
        "journals",
        JSON.stringify(journals)
    );

});
let journalCalendar =
    document.getElementById("journalCalendar");

journalCalendar.addEventListener(
    "change",
    function(){

        let parts =
            journalCalendar.value.split("-");

        currentJournalDate =
            Number(parts[2]) + "-" +
            Number(parts[1]) + "-" +
            parts[0];

        journal.value =
            journals[currentJournalDate] || "";
    }
);