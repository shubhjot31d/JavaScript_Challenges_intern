let startButton = document.getElementById("timerTrigger");
let secondsRef = document.getElementById("secondsTBR");
let minutesRef = document.getElementById("minutesTBR");
let checker = document.getElementsByClassName("time")[0];
let settingsButtonRef = document.getElementById("settingsTBR");
let ring = document.getElementsByClassName("ring")[0];
let zero = "0";
let interval = null
function setEnabled() {
	minutesRef.disabled = true;
	secondsRef.disabled = true;
	console.log(checker.id);
	if(checker.id === "true") {
		checker.id = "false";
		startButton.innerHTML = "STOP";
	} else {
		checker.id = "true";
		startButton.innerHTML = "START";
	}
}
function isValid() {
	if(!(minutesRef.value >= 0 && minutesRef.value < 60) || !(secondsRef.value >= 0 && secondsRef.value < 60)
		|| minutesRef.value.length === 0 || secondsRef.value.length === 0) {
		console.log("helllo");
		return false;
	} else {
		console.log("By");

		return true;
	}
}
function invertState(messageToBrDisplayed) {
	alert(messageToBrDisplayed);
	setEnabled();
	minutesRef.disabled = !minutesRef.disabled;
	secondsRef.disabled = !secondsRef.disabled;
}
function changeTiming(interval) {
	if(secondsRef.value <= 0) {
		if(minutesRef.value <= 0) {
			ring.style.stroke = "red";
			clearInterval(interval);
			//invertState("Time's UP, Enter Value to Start Again And Press Enter");

		} else {
			secondsRef.value = "59";
			minutesRef.value--;
		}
	} else {
		secondsRef.value--;
	}
	var txt = "".concat(minutesRef.value);
	if(txt.length === 1) {
		minutesRef.value = zero.concat(minutesRef.value);
	}
	txt = "".concat(secondsRef.value); 
	if(txt.length === 1) {
		secondsRef.value = zero.concat(secondsRef.value);
	}
}
function switcher() {
	setEnabled();
	if(checker.id === "false" ){
		ring.style.stroke = "green";
		interval = setInterval(function () {
			if(checker.id === "true"){
				clearInterval(interval);
			} else {
				if(isValid()){
					changeTiming(interval);
				} else {
					ring.style.stroke = "red";
					clearInterval(interval);
					invertState("Please Enter a Valid Entry");	
				}
			}
		}, 1000);
	} else {
		ring.style.stroke = "blue";
		console.log("hi");
	}


}
function alterSettings() {
	if(checker.id === "true") {
		// checker.id = "true";
		ring.style.stroke = "blue";
		startButton.innerHTML = "START";
		minutesRef.disabled = false;
		secondsRef.disabled = false;
	}
}
// Global Execution Context
startButton.addEventListener("click", switcher);
settingsButtonRef.addEventListener("click", alterSettings);