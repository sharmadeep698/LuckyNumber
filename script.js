const body = document.querySelector("#script")
console.log(body.innerHTML)
const click = document.querySelector('.button');
console.log(click)
const input = document.getElementById("input")
console.dir(input)
	input.addEventListener("change" || "keydown", (event)=>{
	let name =  event.target.value
	console.log(name)
	let num = Math.floor(Math.random() * 6);
	body.innerHTML =(`${name} lucky day is :  ${weekday[num]}`)
});
	var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


