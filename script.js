//.................My Profile Data


const name = "Jerry Neequaye";
const major = "Digital Media";
const school = "Northwest Vista College";
const goal = "UI Designer";


//..................For Loop


const skills = [
    "Graphic Design",
    "Photography",
    "Adobe Creative Cloud",
    "Digital Media",
    "Video Editing"
];


const skillsList = document.getElementById("skillsList");

//.............For Loop...................
for (let i = 0; i < skills.length; i++) {

    const listItem = document.createElement("li");


    listItem.textContent = skills[i];

    
    skillsList.appendChild(listItem);
}



//....................While Loop


const goals = [
    "Improve my JavaScript skills",
    "Improve my UI design skills",
    "Build my design portfolio",
    "Become a professional UI Designer"
];

const goalsList = document.getElementById("goalsList");

let number = 0;


//............................While Loop
while (number < goals.length) {

    const goalItem = document.createElement("li");

    goalItem.textContent = goals[number];

    goalsList.appendChild(goalItem);

    number++;
}



//..........................Change CSS with JavaScript


let progress = 80;


const progressText = document.getElementById("progressText");

progressText.textContent = "My current progress is " + progress + "%";


if (progress >= 80) {

   
    document.body.style.backgroundColor = "#dff5e1";
    document.getElementById("title").style.color = "green";

} else if (progress >= 50) {

    document.body.style.backgroundColor = "#fff3cd";
    document.getElementById("title").style.color = "orange";

} else {

    document.body.style.backgroundColor = "#f8d7da";
    document.getElementById("title").style.color = "red";
}



const userList = document.querySelectorAll(".tools li");
console.log(userList);

const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function() {

  
    document.querySelector(".container").style.backgroundColor = "#aeffff";

    document.getElementById("title").style.fontSize = "50px";

    document.getElementById("intro").style.fontWeight = "bold";

});