const defaultState = {
	style: 'FSCzech', // enum of { FSG, FSA, FSN, FSEast, FSCzech, FSSpain, FSSwitzerland }
	id: null,
	title: null,
	questions: [],
	success: 0,
	submitTimer: 0,
	submitInterval: null,
	totalTimer: 0,
	totalInterval: null,
}

var state


function clearState() {

	state = JSON.parse(JSON.stringify(defaultState))

}

clearState()


function updateTitles() {
	document.querySelector('#prescreen h1').innerHTML = state.title || ''
	document.querySelector('#quiz h1').innerHTML = state.title || ''
}


function changeView(view) {

	for (el of document.querySelectorAll('.view'))
		el.style.display = 'none'

	document.getElementById(view).style.display = 'block'

}


const memes = [
	"GE-SUND-BRUN-NEN-CENTER!",
	"Deine Mudda! Berlin!",
	"Eine Runde Kicker?",
	"Hulkdrian!",
	"Jetz' bin i' wieda doa",
	"Mmmmh Carbonstaub",
	"#würthshausfranz",
	"#berlinerluft",
	"FaST<b>TUBe</b>, not Fast<b>COQUE</b>",
	"Yes, we CAN",
	"Ist in der Cloud.",
	"Ist im Wiki.",
	"Ich liiebe Teamcenter <3",
	"Podio kann alles!",
	"Let's build 3 fucking racecars!",
	"Der Fahrstuhl ist kaputt",
	"Frau Ipta reißt euch den Kopf ab!",
	"Max, Max, Max, Max, Max, Max, MaxMax!",
	"Julian, Anwärter, Firewall",
	"Diese Webseite ist geerdet.",
	"Wer AMS sagt muss auch BMS sagen",
	"Ist der Kabelbinder in der BOM?",
	"*Fistbump*",
	"Nividia!",
	"Ihr schafft das! :)",
	"Klotzen, nicht kleckern!",
	"*revving noises*",
	"Resistance is futile",
	"Jan schweißt das noch",
	"Would Claude approve of this?",
	"Im CAD hat's noch gepasst",
	"¯\\_(ツ)_/¯",
	"AMK Brudi",
	"Mmmhh cones",
	"Best viewed in Netscape Navigator 1.22",
]