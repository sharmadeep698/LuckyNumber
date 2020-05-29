const body = document.querySelector("#script")
console.log(body.innerHTML)
const click = document.querySelector('.button');
console.log(click)
const input = document.getElementById("input")
console.dir(input)
	input.addEventListener("change", (event)=>{
	let name =  event.target.value
	let num = Math.floor(Math.random() * 10);
	body.innerHTML =(`this is the number ${num}`)
});

