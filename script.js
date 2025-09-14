const id = document.getElementById('text')
const button = document.getElementById('submit')
const input = document.getElementById('input')
const letters = document.querySelectorAll('th:not([class="head"])')
var sentences = [`You're doing great!`, 'The key to success is hard work.',
	`You can do it!`, "You're good and dedicated!", "Keep trying new things."]
const typest = document.getElementById("typest")

const polybius = {
	"A": "11",
	"B": "12",
	"C": "13",
	"D": "14",
	"E": "15",
	"F": "21",
	"G": "22",
	"H": "23",
	"I": "24",
	"J": "24",
	"I/J": "24",
	"K": "25",
	"L": "31",
	"M": "32",
	"N": "33",
	"O": "34",
	"P": "35",
	"Q": "41",
	"R": "42",
	"S": "43",
	"T": "44",
	"U": "45",
	"V": "51",
	"W": "52",
	"X": "53",
	"Y": "54",
	"Z": "55",
	' ': '  ',
}

letters.forEach((element) => {
	element.addEventListener('mouseover',
		() => {
			id.classList.remove("fade-in");
			void id.offsetWidth;
			id.innerText = `${element.innerText} - ${polybius[element.innerText]}`;
			id.classList.add("fade-in");
		});
})

const encrypt = (string) => {
	string = string.toUpperCase();
	var result = []
	for (let y of string) {
		if (polybius.hasOwnProperty(y)) {
			let res = y.replaceAll(y, polybius[y] += ' ')
			result.push(res)
		} else {
			result.push(y)
		}
	}
	return String(result).replaceAll(',', '')
}

const decrypt = (string) => {
	string = string.toLowerCase();
	for (let x in polybius) {
		string = string.replaceAll(polybius[x], x);
	}
	return string
}

var ran1 = Math.floor(Math.random() * 5);
var r = encrypt(sentences[ran1]);
typest.innerText = r;
var count=0
document.getElementById("submit").addEventListener("click", ()=>{
	if (count>=2){
		document.body.innerHTML = `<h1 style="color:LightCoral">YOU LOSE</h1> <br> <p style="color:LightCoral">Answer- <span>"${sentences[ran1]}"</span></p>`;
	}
	var val=input.value.toUpperCase().replace(/[^a-zA-Z]/g, '');

	if (val==sentences[ran1].toUpperCase().replace(/[^a-zA-Z]/g, '')){
		typest.style.color="lightgreen"
		typest.style.textAlign="center"
		typest.innerHTML="correct";
		typest.style.textAlign="center"
		setTimeout(function() {
			window.location.reload(true);
		},3000);

	}else{
		typest.style.color="LightCoral"
		typest.style.textAlign="center"
		count++;
	}
});



