//HEADER MENU
const menu_button = document.getElementById("menu_button");
const mobile_menu = document.getElementById("mobile_menu");

menu_button.addEventListener("click", () =>{
    mobile_menu.classList.toggle("closed");
    menu_button.classList.toggle("opened");
});
//Days buttons
const monday_btn = document.getElementById("monday_btn");
const tuesday_btn = document.getElementById("tuesday_btn");
const wednesday_btn = document.getElementById("wednesday_btn");
const thursday_btn = document.getElementById("thursday_btn");
const friday_btn = document.getElementById("friday_btn");
const saturday_btn = document.getElementById("saturday_btn");

//DAYS AVAILABLE
const monday = true;
const tuesday = true;
const wednesday = true;
const thursday = false;
const friday = true;
const saturday = true;

//System to verify if the day is available and enable it

//Monday
if (monday){
    monday_btn.classList.remove("not-included");
}
else{
    monday_btn.classList.add("not-included");
}

//Tuesday
if (tuesday){
    tuesday_btn.classList.remove("not-included");
}
else{
    tuesday_btn.classList.add("not-included");
}

//Wednesday
if (wednesday){
    wednesday_btn.classList.remove("not-included");
}
else{
    wednesday_btn.classList.add("not-included");
}

//Thursday
if (thursday){
    thursday_btn.classList.remove("not-included");
}
else{
    thursday_btn.classList.add("not-included");
}

//Friday
if (friday){
    friday_btn.classList.remove("not-included");
}
else{
    friday_btn.classList.add("not-included");
}

//Saturday
if (saturday){
    saturday_btn.classList.remove("not-included");
}
else{
    saturday_btn.classList.add("not-included");
}


monday_btn.addEventListener('click', () => {
    if (monday){
        window.location.href = "./monday.html";
    }
})

tuesday_btn.addEventListener('click', () => {
    if (tuesday){
        window.location.href = "./tuesday.html";
    }
})

wednesday_btn.addEventListener('click', () => {
    if (wednesday){
        window.location.href = "./wednesday.html";
    }
})

thursday_btn.addEventListener('click', () => {
    if (thursday){
        window.location.href = "./thursday.html";
    }
})

friday_btn.addEventListener('click', () => {
    if (friday){
        window.location.href = "./friday.html";
    }
})

saturday_btn.addEventListener('click', () => {
    if (saturday){
        window.location.href = "./saturday.html";
    }
})