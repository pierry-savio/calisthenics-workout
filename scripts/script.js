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

monday_btn.addEventListener('click', () => {
    window.location.href = "../pages/monday.html";
})