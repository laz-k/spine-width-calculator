let paper = {};
paper["essential-silk"] = [
	"90gsm",
	"100gsm",
	"115gsm",
	"135gsm",
	"150gsm",
	"170gsm",
];
paper["lumi-silk"] = [
	"90gsm",
	"100gsm",
	"115gsm",
	"135gsm",
	"150gsm",
	"170gsm",
];
paper["colour-copy"] = ["90gsm", "100gsm", "120gsm", "160gsm"];
paper["essential-offset"] = [
	"80gsm",
	"90gsm",
	"100gsm",
	"120gsm",
	"135gsm",
	"150gsm",
	"170gsm",
];
paper["inaset"] = [
	"80gsm",
	"90gsm",
	"100gsm",
	"120gsm",
	"135gsm",
	"150gsm",
	"170gsm",
];

function changePaperList() {
	let paperList = document.getElementById("paper-type");
	let paperWeightList = document.getElementById("paper-weight");
	let selCat = paperList.options[paperList.selectedIndex].value;

	while (paperWeightList.options.length) {
		paperWeightList.remove(0);
	}

	let paperCat = paper[selCat];
	if (paperCat) {
		let i;
		for (i = 0; i < paperCat.length; i++) {
			let cat = new Option(paperCat[i], i);
			paperWeightList.options.add(cat);
		}
	}
}

if ("serviceWorker" in navigator) {
	console.log("CLIENT: service worker registration in progress.");
	navigator.serviceWorker.register("../service-worker.js").then(
		function () {
			console.log("CLIENT: service worker registration complete.");
		},
		function () {
			console.log("CLIENT: service worker registration failure.");
		}
	);
} else {
	console.log("CLIENT: service worker is not supported.");
}

let divText = document.querySelector("#div-text");
let paperType = document.querySelector("#paper-type");
let numOfPages = document.querySelector("#number-of-pages");
let paperWeight = document.querySelector("#paper-weight");
let displayText = document.querySelector("#display-text");
let form = document.querySelector("#calc-form");
let display;

function spineWidthCalculator() {
	if (paperType.value == "essential-silk") {
		essentialSilk();
	} else if (paperType.value == "lumi-silk") {
		lumiSilk();
	} else if (paperType.value == "colour-copy") {
		colourCopy();
	} else if (paperType.value == "essential-offset") {
		essentialOffset();
	} else {
		inaset();
	}
}
form.reset();

function essentialSilk() {
	switch (paperWeight.value) {
		case "0":
			display = ((numOfPages.value * 0.08) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "1":
			display = ((numOfPages.value * 0.089) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "2":
			display = ((numOfPages.value * 0.104) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "3":
			display = ((numOfPages.value * 0.112) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "4":
			display = ((numOfPages.value * 0.133) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "5":
			display = ((numOfPages.value * 0.156) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
	}
}
function lumiSilk() {
	switch (paperWeight.value) {
		case "0":
			display = ((numOfPages.value * 0.078) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "1":
			display = ((numOfPages.value * 0.087) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "2":
			display = ((numOfPages.value * 0.094) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "3":
			display = ((numOfPages.value * 0.11) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "4":
			display = ((numOfPages.value * 0.127) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "5":
			display = ((numOfPages.value * 0.144) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
	}
}
function colourCopy() {
	switch (paperWeight.value) {
		case "0":
			display = ((numOfPages.value * 0.098) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "1":
			display = ((numOfPages.value * 0.106) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "2":
			display = ((numOfPages.value * 0.126) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
		case "3":
			display = ((numOfPages.value * 0.166) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine should be ${display} mm wide`;
			break;
	}
}
function essentialOffset() {
	switch (paperWeight.value) {
		case "0":
			display = ((numOfPages.value * 0.103) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "1":
			display = ((numOfPages.value * 0.114) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "2":
			display = ((numOfPages.value * 0.123) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "3":
			display = ((numOfPages.value * 0.146) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "4":
			display = ((numOfPages.value * 0.168) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "5":
			display = ((numOfPages.value * 0.18) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "6":
			display = ((numOfPages.value * 0.2) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
	}
}
function inaset() {
	switch (paperWeight.value) {
		case "0":
			display = ((numOfPages.value * 0.106) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "1":
			display = ((numOfPages.value * 0.119) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "2":
			display = ((numOfPages.value * 0.13) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "3":
			display = ((numOfPages.value * 0.152) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "4":
			display = ((numOfPages.value * 0.162) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "5":
			display = ((numOfPages.value * 0.18) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
		case "6":
			display = ((numOfPages.value * 0.205) / 2 + 0.5).toFixed(2);
			displayText.value = `${display} mm`;
			divText.innerHTML = `The spine width should be ${display} mm`;
			break;
	}
}
