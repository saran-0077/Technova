function showSection(id){

    let sections = document.querySelectorAll(".content");

    sections.forEach(function(section){

        section.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}



function updateClock(){

    let now = new Date();

    let hour = String(now.getHours()).padStart(2,"0");

    let minute = String(now.getMinutes()).padStart(2,"0");

    let second = String(now.getSeconds()).padStart(2,"0");

    document.getElementById("clock").innerHTML =
        hour + ":" + minute + ":" + second;

}

setInterval(updateClock,1000);

updateClock();



let dark = false;

function toggleTheme(){

    if(dark){

        document.body.style.background="#eef2f7";

        document.body.style.color="#222";

        dark=false;

    }

    else{

        document.body.style.background="#111827";

        document.body.style.color="white";

        dark=true;

    }

}



window.onload=function(){

    let note = localStorage.getItem("notes");

    if(note){

        document.getElementById("noteText").value = note;

    }

}

function saveNote(){

    let note=document.getElementById("noteText").value;

    localStorage.setItem("notes",note);

    alert("Note Saved Successfully!");

}


function addValue(value){

    document.getElementById("display").value += value;

}

function clearDisplay(){

    document.getElementById("display").value = "";

}

function calculate(){

    try{

        document.getElementById("display").value =
        eval(document.getElementById("display").value);

    }

    catch{

        alert("Invalid Expression");

    }

}



let taskList = document.getElementById("taskList");

function addTask(){

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if(task==""){

        alert("Please Enter Task");

        return;

    }

    let li = document.createElement("li");

    li.innerHTML = task +
    " <button onclick='deleteTask(this)' style='float:right;background:red;'>Delete</button>";

    taskList.appendChild(li);

    saveTasks();

    input.value="";

}


function deleteTask(button){

    button.parentElement.remove();

    saveTasks();

}




function saveTasks(){

    localStorage.setItem("tasks",taskList.innerHTML);

}

function loadTasks(){

    let data = localStorage.getItem("tasks");

    if(data){

        taskList.innerHTML = data;

    }

}

loadTasks();


document.getElementById("taskInput").addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        addTask();

    }

});


const apiKey = "YOUR_OPENWEATHER_API_KEY";

async function getWeather(){

    let city = document.getElementById("city").value.trim();

    if(city===""){

        alert("Please Enter City Name");

        return;

    }

    let url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response = await fetch(url);

        let data = await response.json();

        if(data.cod != 200){

            document.getElementById("weatherResult").innerHTML =
            "<h3>City Not Found</h3>";

            return;

        }

        document.getElementById("weatherResult").innerHTML =

        `
        <h2>${data.name}</h2>

        <h3>${data.main.temp} °C</h3>

        <p><b>Weather :</b> ${data.weather[0].main}</p>

        <p><b>Humidity :</b> ${data.main.humidity}%</p>

        <p><b>Wind :</b> ${data.wind.speed} m/s</p>
        `;

    }

    catch(error){

        document.getElementById("weatherResult").innerHTML =
        "<h3>Unable to Fetch Weather</h3>";

    }

}


const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});



document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});



console.log("DevDesk OS Loaded Successfully");

alert("Welcome to DevDesk OS 🚀");