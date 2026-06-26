//HEADER MENU
const menu_button = document.getElementById("menu_button");
const mobile_menu = document.getElementById("mobile_menu");

menu_button.addEventListener("click", () =>{
    mobile_menu.classList.toggle("closed");
    menu_button.classList.toggle("opened");
});

//=================== MONDAY WORKOUT ===================//
const exerciseNames = 
[
    "Flexão diamante",
    "Flexão inclinada",
    "Flexão de punhos"
];

const exerciseRepetitions = 
[
    10,
    30,
    10
];

const exerciseVideos = 
[
    "",
    "",
    ""
];

//ONLY IN SECONDS
const exerciseRests = 
[
    10,
    45,
    120
];
//=================== MONDAY WORKOUT ===================//

let currentExercise = 0;
let currentTimer = exerciseRests[0];
let passedTime = 0;
let exercisesLength = exerciseNames.length*2;
let paused = true;

const timer = setInterval(() => {
    if (!paused && passedTime < exerciseRests[(currentExercise-1)/2]){
        passedTime++;
        updateTimerTime();
        console.log(currentTimer);
    }
}, 1000);

//Current exercise display
function updateDisplay(){
    const display = document.getElementById("display");
    display.textContent = (currentExercise+1) + " / " + exercisesLength;
}

function updateCurrentTimer(){
    currentTimer = exerciseRests[(currentExercise-1)/2] - passedTime;
}

function updateExercise(){
    const exerciseName = document.getElementById("exerciseName");
    const exerciseRepetition = document.getElementById("exerciseRepetition");
    exerciseName.textContent = exerciseNames[currentExercise/2];
    exerciseRepetition.textContent = exerciseRepetitions[currentExercise/2] + " Repetições"
}

function updateTimerTime(){
    const timer_time = document.getElementById("timer_time");
    updateCurrentTimer();
    timer_time.textContent = timeFormatter(currentTimer);
}

function timeFormatter(time){
    const minutes = Math.floor(time/60).toString().padStart(2, '0');
    const seconds = Math.floor(time%60).toString().padStart(2, '0');
    return minutes + ":" + seconds;
}

updateTimerTime();
updateExercise();
updateDisplay();
updateCurrentTimer();

//Previous and next buttons
const previous_button = document.getElementById("previous_button");
const next_button = document.getElementById("next_button");

previous_button.addEventListener("click", () =>{
    if (currentExercise < 1){
        window.location.href = "./index.html#hero";
    }
    currentExercise--;
    updateDisplay();
    updateExercise();
    toggleContainers();
    updateTimerTime();
    paused = true;
    passedTime = 0;
});

next_button.addEventListener("click", () =>{
    if (currentExercise > exercisesLength-2){
        window.location.href = "./index.html#hero";
    }
    currentExercise++;
    updateDisplay();
    updateExercise();
    toggleContainers();
    updateTimerTime();
    paused = true;
    passedTime = 0;
});

//CONTAINERS
const exercise_container = document.getElementById("exercise_container");
const timer_container = document.getElementById("timer_container");

function toggleContainers(){
    exercise_container.classList.toggle("closed");
    timer_container.classList.toggle("closed");
}

//Pause button
const pause_button = document.getElementById("pause_button");
pause_button.addEventListener('click', () => {
    paused = !paused;

    const pause_button_icon = document.getElementById("pause_button_icon");

    if (paused){
        pause_button_icon.src = "../img/icons/play.png";
    }
    else{
        pause_button_icon.src = "../img/icons/pause.png";
    }
});

//Repeat button
const repeat_button = document.getElementById("repeat_button");
repeat_button.addEventListener('click', () =>{
    passedTime = 0;
    updateTimerTime();
});