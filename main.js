window.addEventListener("load", () => {
	if (!("serviceWorker" in navigator)) {
		// service workers not supported 😣
		return;
	}

	navigator.serviceWorker.register("service-worker.js").then(
		() => {
			// registered! 👍🏼
		},
		(err) => {
			console.error("SW registration failed! 😱", err);
		}
	);
});

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

function createPaperWeightList() {
	let paperList = document.getElementById("paper-type");
	let paperWeightList = document.getElementById("paper-weight");
	let selectedPaper = paperList.options[paperList.selectedIndex].value;

	while (paperWeightList.options.length > 0) {
		paperWeightList.remove(0);
	}

	let paperType = paper[selectedPaper];
	if (paperType) {
		for (let i = 0; i < paperType.length; i++) {
			let weight = new Option(paperType[i], i);
			paperWeightList.options.add(weight);
		}
	}
	resetResult();
}

let resultText = document.querySelector("#result-text");
let paperType = document.querySelector("#paper-type");
let numOfPages = document.querySelector("#number-of-pages");
let paperWeight = document.querySelector("#paper-weight");
let resultInputText = document.querySelector("#result-input-text");
let form = document.querySelector("#calc-form");
let result;

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

function resetResult() {
	resultInputText.value = "";
	resultText.innerHTML = "";
}
document.getElementById("number-of-pages").onkeypress = submitEnter;
function submitEnter(e) {
	if (e.which == 13) {
		spineWidthCalculator();
	}
}

function essentialSilk() {
	switch (paperWeight.value) {
		case "0":
			result = ((numOfPages.value * 0.08) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "1":
			result = ((numOfPages.value * 0.089) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "2":
			result = ((numOfPages.value * 0.104) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "3":
			result = ((numOfPages.value * 0.112) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "4":
			result = ((numOfPages.value * 0.133) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "5":
			result = ((numOfPages.value * 0.156) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
	}
}
function lumiSilk() {
	switch (paperWeight.value) {
		case "0":
			result = ((numOfPages.value * 0.078) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "1":
			result = ((numOfPages.value * 0.087) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "2":
			result = ((numOfPages.value * 0.094) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "3":
			result = ((numOfPages.value * 0.11) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "4":
			result = ((numOfPages.value * 0.127) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "5":
			result = ((numOfPages.value * 0.144) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
	}
}
function colourCopy() {
	switch (paperWeight.value) {
		case "0":
			result = ((numOfPages.value * 0.098) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "1":
			result = ((numOfPages.value * 0.106) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "2":
			result = ((numOfPages.value * 0.126) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
		case "3":
			result = ((numOfPages.value * 0.166) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine should be ${result} mm wide`;
			break;
	}
}
function essentialOffset() {
	switch (paperWeight.value) {
		case "0":
			result = ((numOfPages.value * 0.103) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "1":
			result = ((numOfPages.value * 0.114) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "2":
			result = ((numOfPages.value * 0.123) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "3":
			result = ((numOfPages.value * 0.146) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "4":
			result = ((numOfPages.value * 0.168) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "5":
			result = ((numOfPages.value * 0.18) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "6":
			result = ((numOfPages.value * 0.2) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
	}
}
function inaset() {
	switch (paperWeight.value) {
		case "0":
			result = ((numOfPages.value * 0.106) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "1":
			result = ((numOfPages.value * 0.119) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "2":
			result = ((numOfPages.value * 0.13) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "3":
			result = ((numOfPages.value * 0.152) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "4":
			result = ((numOfPages.value * 0.162) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "5":
			result = ((numOfPages.value * 0.18) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
		case "6":
			result = ((numOfPages.value * 0.205) / 2 + 0.5).toFixed(2);
			resultInputText.value = `${result} mm`;
			resultText.innerHTML = `The spine width should be ${result} mm`;
			break;
	}
}
