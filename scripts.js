function start(){
    window.seconds = "(?)"
    document.getElementById("secondsDeterminatorContainer").style.display = "inline"
    document.getElementById("buttonStart").style.display = "none"
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "none"
    document.getElementById("testInfoContainer").style.display = "none"
    document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    window.seconds = seconds
    document.getElementById("cpsResult").innerHTML = "Your final CPS are 0"
    document.getElementById("clicksResult").innerHTML = "Clicks: 0"
    window.clicks = 0
    document.getElementById("secondsInputButton").value = ""
}
function secondsDeterminator(){
    window.secondsCheck = document.getElementById("secondsInputButton").value
    if(secondsCheck > 0 && Number.isInteger(eval(secondsCheck))){
        secondsDeterminatorFolowing()
    } else {
        alert("The number must be a positive integer")
        start()
    }
}
function secondsDeterminatorFolowing(){
    window.seconds = document.getElementById("secondsInputButton").value
    window.nonVariableSeconds = seconds
    document.getElementById("buttonStart").style.display = "inline"
    document.getElementById("testInfoContainer").style.display = "inline"
    document.getElementById("secondsDeterminatorContainer").style.display = "none"
    document.getElementById("buttonStart").innerHTML = "Press the button to start the " + seconds + " seconds CPS test"
    document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
}
function cpsTestStart(){
    document.getElementById("buttonStart").style.display = "none"
    document.getElementById("buttonLoad").style.display = "inline"
    workingCountdown()
}
function cpsTestLoad(){
    window.clicks++
    document.getElementById("clicksResult").innerHTML = "Clicks: " + clicks
}
function cpsTestFinish(){
    alert("You have finished the test, click accept to view the results")
    window.cps = clicks/nonVariableSeconds
    document.getElementById("cpsResult").innerHTML = "Your final CPS are " + cps
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "inline"
}
function workingCountdown(){
    document.getElementById("buttonLoad").innerHTML = "Click as fast as posible for " + seconds + " seconds"
    window.variableCountdown = setInterval(countdown, 1000)
}
function countdown(){
    if(seconds>1){
        window.seconds--
        document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    } else {
        document.getElementById("countdown").innerHTML = "You have 0 seconds left"
        clearInterval(variableCountdown)
        setTimeout(function(){cpsTestFinish()}, 50) 
    }
}