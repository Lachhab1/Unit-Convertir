// let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// console.log(matched);

// let body = document.querySelector("body");
// let content = document.getElementById("content");

// if (dark) {
// 	body.style.backgroundColor = "#1a1a1a";
// 	content.setAttribute("class", "dark");
// } else {
// 	body.style.backgroundColor = "#f5f5f5";
// 	content.setAttribute("class", "light");
// }
function save(number) {
    var element = document.querySelector("input.unit-content");
    number = parseFloat(element.value);
    element.addEventListener("click", save);
    (function (){
        this.feet = parseFloat(number) * 3.2808399;
        this.meter = parseFloat(number) / 3.2808399; 
        this.gallons = parseFloat(number) * 0.264172052;
        this.liter = parseFloat(number) / 0.264172052;
        this.pound = parseFloat(number) * 2.20462262;
        this.kilo = parseFloat(number) / 2.20462262;
        let length = number + " meters = " + this.feet + " feet | " + number + "feet = " + this.meter + "meters";
        document.querySelector(".length > .content-unit").textContent = length;
        let volume = number + " liters = " + this.gallons + " gallons | " + number + "liters = " + this.liter + "gallons";
        document.querySelector(".volume > .content-unit").textContent = volume;
        let mass = number + " pounds = " + this.pound + " kilos | " + number + "pounds = " + this.kilo + "Killos";
        document.querySelector(".mass > .content-unit").textContent = mass;
    }) ();
    
};
