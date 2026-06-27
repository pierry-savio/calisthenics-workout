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
    //Warm-up
    "Rotação de ombros",
    "Rotação de punhos",
    "Alongar peito",
    "Alongar pernas",
    "Flexão inclinada",

    //Workout
    "Flexão de joelhos",
    "Flexão de joelhos",
    "Flexão inclinada",
    "Flexão inclinada",
    "Tríceps banco",
    "Tríceps banco",
    "Tríceps banco",
    "Abdominal remador",
    "Abdominal remador",
    "Abdominal remador",
    "Abdominal remador",
    "Passada alternada",
    "Passada alternada",
    "Passada alternada",
    "Passada alternada",
    "Agachamento",
    "Agachamento",
    "Agachamento",
    "Agachamento",
    "Elevação de calcanhar",
    "Elevação de calcanhar",
    "Elevação de calcanhar",
    "Elevação de calcanhar",
    "Bicicleta"
];

const restUrl = "https://www.youtube.com/embed/J0shA9J-4Nc?si=lJ4MEqn3A4Q9Acxy";
const exerciseVideos = 
[
    //Warm-up
    "https://www.youtube.com/embed/J54MUf4HKjY?si=lyOx5BN0GYEoHG4K",restUrl,
    "https://www.youtube.com/embed/fnDfukH5t4Q?si=XzSDi814dpa3eaxe",restUrl,
    "https://www.youtube.com/embed/WOCi4gi-9Pg?si=jIbnEk0a165fXkVO",restUrl,
    "https://www.youtube.com/embed/0leKftMd3Rk?si=fsTUA-2WoT5UORzS",restUrl,
    "https://www.youtube.com/embed/_xSYGuvd19k?si=AP2zLP4K8C83jOIH",restUrl,

    //Work-out
    "https://www.youtube.com/embed/TvHKKSpnXbA?si=Z3ad3VbKXOoWkocf",restUrl,
    "https://www.youtube.com/embed/TvHKKSpnXbA?si=Z3ad3VbKXOoWkocf",restUrl,
    "https://www.youtube.com/embed/_xSYGuvd19k?si=AP2zLP4K8C83jOIH",restUrl,
    "https://www.youtube.com/embed/_xSYGuvd19k?si=AP2zLP4K8C83jOIH",restUrl,
    "https://www.youtube.com/embed/V8nX8nsjpws?si=Ua_Ba86wZygCdKyx",restUrl,
    "https://www.youtube.com/embed/V8nX8nsjpws?si=Ua_Ba86wZygCdKyx",restUrl,
    "https://www.youtube.com/embed/V8nX8nsjpws?si=Ua_Ba86wZygCdKyx",restUrl,
    "https://www.youtube.com/embed/wy1-MzhJGX0?si=nKjDWX_6k7NRriuV",restUrl,
    "https://www.youtube.com/embed/wy1-MzhJGX0?si=nKjDWX_6k7NRriuV",restUrl,
    "https://www.youtube.com/embed/wy1-MzhJGX0?si=nKjDWX_6k7NRriuV",restUrl,
    "https://www.youtube.com/embed/wy1-MzhJGX0?si=nKjDWX_6k7NRriuV",restUrl,
    "https://www.youtube.com/embed/K4f0GPWV9rI?si=ahD_3iHTc5egxMwc",restUrl,
    "https://www.youtube.com/embed/K4f0GPWV9rI?si=ahD_3iHTc5egxMwc",restUrl,
    "https://www.youtube.com/embed/K4f0GPWV9rI?si=ahD_3iHTc5egxMwc",restUrl,
    "https://www.youtube.com/embed/K4f0GPWV9rI?si=ahD_3iHTc5egxMwc",restUrl,
    "https://www.youtube.com/embed/aIa3dsPiBDU?si=gD6pQ2FqyAlB3MPK",restUrl,
    "https://www.youtube.com/embed/aIa3dsPiBDU?si=gD6pQ2FqyAlB3MPK",restUrl,
    "https://www.youtube.com/embed/aIa3dsPiBDU?si=gD6pQ2FqyAlB3MPK",restUrl,
    "https://www.youtube.com/embed/aIa3dsPiBDU?si=gD6pQ2FqyAlB3MPK",restUrl,
    "https://www.youtube.com/embed/T1VitIWAqHg?si=isdRTJUMbQPOli0-",restUrl,
    "https://www.youtube.com/embed/T1VitIWAqHg?si=isdRTJUMbQPOli0-",restUrl,
    "https://www.youtube.com/embed/T1VitIWAqHg?si=isdRTJUMbQPOli0-",restUrl,
    "https://www.youtube.com/embed/T1VitIWAqHg?si=isdRTJUMbQPOli0-",restUrl,
    "https://www.youtube.com/embed/CDNWOPZ6TBs?si=WNT5NFGi-FUbLxgq",restUrl
];

const exerciseRepetitions = 
[
    //Warm-up repetitions
    "30 Segundos",
    "30 Segundos",
    "10 Segundos",
    "10 Segundos",
    "10 Repetições",

    "12 Repetições",
    "12 Repetições",
    "10 Repetições",
    "10 Repetições",
    "10 Repetições",
    "10 Repetições",
    "10 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "16 Repetições",
    "16 Repetições",
    "16 Repetições",
    "16 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "15 Repetições",
    "10 Minutos"
];

//ONLY IN SECONDS
const exerciseRests = 
[
    //Warm-up rests
    10,
    10,
    10,
    10,
    60,

    60,
    60,
    120,
    120,
    120,
    120,
    120,
    90,
    90,
    90,
    90,
    120,
    120,
    120,
    120,
    90,
    90,
    90,
    90,
    60,
    60,
    60,
    60,
    60,
];
//=================== MONDAY WORKOUT ===================//

let currentExercise = 0;
let currentTimer = exerciseRests[0];
let passedTime = 0;
let exercisesLength = exerciseNames.length*2;
let paused = true;

//Sound alarm
const alarm = new Audio('../sound/alarm.MP3');

//POP-UP
const ok_buttton = document.getElementById("ok_buttton");
const popup_container = document.getElementById("popup_container");
ok_buttton.addEventListener("click", () =>{
    popup_container.classList.add("closed");
    passedTime = 0;
    paused = true;
    const pause_button_icon = document.getElementById("pause_button_icon");
    pause_button_icon.src = "../img/icons/play.png";
    alarm.pause();
    alarm.currentTime = 0;
    updateTimerTime();
});

const timer = setInterval(() => {
    if (!paused && passedTime < exerciseRests[(currentExercise-1)/2]){
        passedTime++;
        updateTimerTime();
        console.log(currentTimer);
    }
    else if (currentTimer < 1){
        popup_container.classList.remove("closed");
        if (alarm.paused){
            alarm.play();
        }
    }
}, 1000);

function updateVideo(url){
    const video = document.getElementById("video");
    video.src = exerciseVideos[currentExercise];
}

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
    exerciseRepetition.textContent = exerciseRepetitions[currentExercise/2];
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
updateVideo();

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
    updateVideo();
    paused = true;
    passedTime = 0;
    pause_button_icon.src = "../img/icons/play.png";
});

next_button.addEventListener("click", () =>{
    if (currentExercise > exercisesLength-2){
        window.location.href = "./workout-finished.html";
    }
    currentExercise++;
    updateDisplay();
    updateExercise();
    toggleContainers();
    updateTimerTime();
    updateVideo();
    paused = true;
    passedTime = 0;
    pause_button_icon.src = "../img/icons/play.png";
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