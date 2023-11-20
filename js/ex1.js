const button = document.querySelector("button");
const body = document.querySelector("body");
const me = document.querySelector(".me");
const container = document.querySelector(".container");


const p = document.createElement("p");
const email = document.createElement("input");
const button_valid = document.createElement("button");

let year = 2004;
let mouth = 3;
let day = 12;



function changeProfile() {
	
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBckgndColor();
}

function NameToJob() {
	document.getElementById("numeprenume").innerHTML = "Post de munca Software engineer";
}

function changeHobby() {
	hobbys = document.querySelectorAll(".hobbys");

	hobbys[0].innerHTML = "Reușita academică";
	hobbys[1].innerHTML = "Cea mai buna lucrare de licenta!";
	hobbys[2].innerHTML = "Intership la Fortech";
	hobbys[3].innerHTML = "Erasmus";
}

function oldToNewImage() {
	var img = document.querySelector("#poza");
	img.src = "img/Maria_Ianos.jpeg";
	img.style.opacity = '0.7';
	img.style.border = '2px solid #fff';
	img.style.blur = '0.5';
	img.style.height = 'auto';
}

function changeBodyBckgndColor() {
	//svar bdy = document.getElementById("mbody");

	document.getElementById('alta-viata').style.backgroundColor = '	FF A0 7A';
    document.getElementById('alta-viata').style.color = 'DC 14 3C';
}


function getAge(){
	date = new Date();

	curentYear = date.getFullYear();
	curentMouth = date.getMonth() + 1;
	curentDay = date.getDay();

	age = curentYear - year;

	if (curentMouth < mouth || (curentMouth == mouth && day > curentDay)){
		age--;
	}

	return age;
}

function createEmail(){
	email.name = "email";
	email.type = 'email';
	email.placeholder = "Puneti email-ul!";

	button_valid.innerHTML = "Valideaza"; 

	container.appendChild(email);
	container.appendChild(button_valid);
	
}


button.addEventListener("click", () => {
	p.innerHTML = "Date: " + year + "/" + mouth + "/" + day;
	me.appendChild(p);
	body.classList.add("new-body");

	NameToJob();
	changeHobby();
	oldToNewImage();
	createEmail();

	button.style.display = 'none';
});

p.addEventListener("mouseout", () => {
	p.innerHTML = "Date: " + year + "/" + mouth + "/" + day;
});

p.addEventListener("mouseover", () => {
	p.innerHTML = "Varsta: " + getAge();
});


button_valid.addEventListener("click", () => {
	if (email.value.indexOf('@') == -1){
		alert("Emailul nu este valid");		
	} else {
		alert("Emailul este valid");
	}
});