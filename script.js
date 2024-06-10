updateDate();
updateTime();

function updateDate(currentDate) {
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  var currentDate = new Date();
 
  var month = monthNames[currentDate.getMonth()];
  var date = currentDate.getDate();
  
  var completeDate = month + " " + addZero(date);
  
  document.getElementById("dateDisplay").innerHTML = completeDate;
  
}

function updateTime(currentTime) {
  
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
   
  var completeTime = "AM";
  var tmp = 0;
  
  if(hours > 12) {
    completeTime = "PM";
    tmp = 12;
    
  } else if (hours == 12) {
    completeTime = "PM";
    
  }
  
  completeTime = (hours - tmp) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + completeTime;
  
  setTimeout("updateTime()", 1000);
  
  rotatePointer(seconds, minutes, hours);
  
  document.getElementById("timeDisplay").innerHTML = completeTime;
  
}

function rotatePointer(currentSecond, currentMinute, currentHour) {
  
  const totalAngle = 360;

  //Rotating second pointer
  var secondPointerAngle = -90 + (totalAngle/60)*currentSecond;
  var currentPointer = document.getElementById("secondPointer");
  currentPointer.style.transform = "rotate(" + secondPointerAngle + "deg)"; 
  
  //Rotating minute pointer
  var minutePointerAngle = -90 + (totalAngle/60)*currentMinute; 
  currentPointer = document.getElementById("minutePointer");
  currentPointer.style.transform = "rotate(" + minutePointerAngle + "deg)"; 
  
  //Rotating hour pointer
  var hourPointerAngle = -90 + (totalAngle/12)*currentHour;
  currentPointer = document.getElementById("hourPointer");
  currentPointer.style.transform = "rotate(" + hourPointerAngle + "deg)";
  
}

function addZero(number) {
  
  if (number < 10) {
    number = "0" + number;
  }
  
  return number;
  
}


function changeToLightTheme() {
  
  //Body
  document.body.style.backgroundColor = "#F5F5F5";
  
  //Text display
  document.getElementById("dateDisplay").style.color = "#1C1C1E";
  document.getElementById("timeDisplay").style.color = "#1C1C1E";
  
  //Light theme button
  var lightButton = document.getElementById("lightThemeButton");
  lightButton.classList.remove("btn-dark");
  lightButton.classList.add("btn-light");
  
  //Dark theme button
  var darkButton = document.getElementById("darkThemeButton");
  darkButton.classList.remove("btn-dark");
  darkButton.classList.add("btn-light");
  
  //Petal colors
  var petals = document.getElementsByClassName("petal");
	for(var i = 0; i < petals.length; i++) {
		petals[i].style.background = "linear-gradient(#090979, #fd1d1d, #fcf745)";
    petals[i].style.border = "1px solid #5b14a2";
	}
  
  //Clock
  document.getElementById("clockOrigin").style.backgroundColor = "#E20F0F";
  document.getElementById("secondPointer").style.backgroundColor = "#E20F0F";
  
  //Footer
  document.querySelector("footer").style.color = "#1C1C1E";
  document.getElementById("myName").classList.remove("name-dark");
  document.getElementById("myName").classList.add("name-light");
  
}

function changeToDarkTheme() {
  
  //Body
  document.body.style.backgroundColor = "#1C1C1E";
  
  //Text display
  document.getElementById("dateDisplay").style.color = "#F5F5F5";
  document.getElementById("timeDisplay").style.color = "#F5F5F5";
  
  //Light theme button
  var lightButton = document.getElementById("lightThemeButton");
  lightButton.classList.remove("btn-light");
  lightButton.classList.add("btn-dark");
  
  //Dark theme button
  var darkButton = document.getElementById("darkThemeButton");
  darkButton.classList.remove("btn-light");
  darkButton.classList.add("btn-dark");
  
  //Petal colors
  var petals = document.getElementsByClassName("petal");
	for(var i = 0; i < petals.length; i++) {
		petals[i].style.background = "linear-gradient(#48c9b0, #6f48c9, #c94861)";
    petals[i].style.border = "1px solid #a2c948";
	}
  
  //Clock
  document.getElementById("clockOrigin").style.backgroundColor = "#A21414";
  document.getElementById("secondPointer").style.backgroundColor = "#A21414";
  
  //Footer
  document.querySelector("footer").style.color = "#F5F5F5";
  document.getElementById("myName").classList.remove("name-light");
  document.getElementById("myName").classList.add("name-dark");
  
}
