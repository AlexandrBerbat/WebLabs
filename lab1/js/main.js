const labBtn = document.querySelectorAll('.lab-btn');
const barBtn = document.querySelectorAll('.bar-btn');

let selectedLab = "lab1";
let selectedTab = "";
let choose = "";

labBtn.forEach(item => item.addEventListener("mousedown", (el) => {
    selectedLab = "lab" + el.target.id[el.target.id.length-1];

}));

barBtn.forEach(item => item.addEventListener("mousedown", (el) => {
    selectedTab = el.target.id.slice(8);

    choose.style = "display: none;";
    choose = document.querySelector(`#${selectedLab} .${selectedTab}`)
    choose.style = "display: block";

}));

