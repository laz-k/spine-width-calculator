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

const paper = [
	{
		name: "Inaset Offset",
		weight: ["80gsm", "90gsm", "100gsm", "120gsm", "135gsm"],
		microns: [0.106, 0.119, 0.13, 0.152, 0.162],
	},
	{
		name: "Navigator Offset",
		weight: ["80gsm", "90gsm", "100gsm", "120gsm"],
		microns: [0.11, 0.115, 0.12, 0.128],
	},
	{
		name: "Essential Offset",
		weight: ["80gsm", "90gsm", "100gsm", "120gsm", "135gsm", "150gsm", "170gsm"],
		microns: [0.103, 0.114, 0.123, 0.146, 0.168, 0.18, 0.2],
	},
	{
		name: "Essential Silk",
		weight: ["90gsm", "100gsm", "115gsm", "135gsm", "150gsm", "170gsm"],
		microns: [0.08, 0.089, 0.104, 0.112, 0.133, 0.156],
	},
	{
		name: "Lumi Silk",
		weight: ["90gsm", "100gsm", "115gsm", "135gsm", "150gsm"],
		microns: [0.078, 0.087, 0.094, 0.11, 0.127],
	},
	{
		name: "Colour Copy",
		weight: ["90gsm", "100gsm", "120gsm", "160gsm"],
		microns: [0.098, 0.106, 0.126, 0.166],
	},
];

let paperNames = [];
paper.forEach(paper => paperNames.push(paper.name));

const selectPaperName = document.getElementById("paperName");
paperNames.forEach((el, key) => (selectPaperName[key] = new Option(el, key)));

function genPaperWeightList() {
	let getPaperName = document.getElementById("paperName").options[selectPaperName.selectedIndex].text;

	let selectPaperWeight = document.getElementById("paperWeight");

	while (selectPaperWeight.options.length > 0) {
		selectPaperWeight.remove(0);
	}

	let weightOption;
	paper.forEach(paper => {
		if (getPaperName === paper.name) {
			weightOption = paper.weight;
			weightOption.value = paper.microns;
		}
	});

	weightOption.forEach((element, index) => (selectPaperWeight[index] = new Option(element, index)));

	weightOption.forEach((element, index) => (selectPaperWeight.options[index].value = weightOption.value[index]));

	let paperThickness = document.getElementById("paperWeight").options[paperWeight.selectedIndex].value;
}

const numberOfPages = document.querySelector("#number-of-pages");
const spineWidth = document.querySelector("#spine-width-result");

function spineWidthCalculator() {
	const paperWeight = document.querySelector("#paperWeight");
	if (numberOfPages.value >= 20 && numberOfPages.value <= 600) {
		const spineWidthResult = (numberOfPages.value / 2) * paperWeight.value + 0.4;
		spineWidth.value = spineWidthResult.toFixed(2) + " mm";
	} else {
		alert("The minimum number of pages is 20 and the maximum 600");
		numberOfPages.value = 20;
	}
}

function resetResult() {
	spineWidth.value = "";
}

document.getElementById("number-of-pages").onkeypress = event => {
	if (event.which == 13 && numberOfPages.value >= 20 && numberOfPages.value <= 600) {
		spineWidthCalculator();
	}
};

document.addEventListener("load", genPaperWeightList());

