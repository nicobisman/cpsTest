function start(){
    window.seconds = "(?)"
    document.getElementById("secondsDeterminatorContainer").style.display = "inline"
    document.getElementById("buttonStart").style.display = "none"
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "none"
    document.getElementById("testInfoContainer").style.display = "none"
    document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    window.seconds = seconds
    document.getElementById("cpsFinal").innerHTML = "Your final CPS are 0"
    document.getElementById("clicks").innerHTML = "Clicks: 0"
    window.clicks = 0
    document.getElementById("secondsInput").value = ""
}
function secondsDeterminator(){
    window.seconds = document.getElementById("secondsInput").value
    if(seconds <= 0){
        alert("The number must be positve and integer")
        start()
    } else if (parseInt(seconds) !== seconds){
        alert("The number must be positve and integer")
        start()
    } else {
        window.nonVariableSeconds = seconds
        document.getElementById("buttonStart").style.display = "inline"
        document.getElementById("testInfoContainer").style.display = "inline"
        document.getElementById("secondsDeterminatorContainer").style.display = "none"
        document.getElementById("buttonStart").innerHTML = "Press the button to start the " + seconds + " seconds CPS test"
        document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    }
}
function cpsTestStart(){
    document.getElementById("buttonStart").style.display = "none"
    document.getElementById("buttonLoad").style.display = "inline"
    workingCountdown()
}
function cpsTestLoad(){
    window.clicks++
    document.getElementById("clicks").innerHTML = "Clicks: " + clicks
}
function cpsTestFinish(){
    alert("You have finished the test, click accept to view the results")
    window.cps = clicks/nonVariableSeconds
    document.getElementById("cpsFinal").innerHTML = "Your final CPS are " + cps
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "inline"
}
function cpsTestStartAgain (){
    start()
}
function workingCountdown(){
    document.getElementById("buttonLoad").innerHTML = "Click as fast as posible for " + seconds + " seconds"
    window.variableCountdown = setInterval(countdown, 1000)
}
function countdown(){
    if(seconds>1 && seconds !== 0){
        window.seconds--
        document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    } else {
        document.getElementById("countdown").innerHTML = "You have 0 seconds left"
        clearInterval(variableCountdown)
        setTimeout(function(){cpsTestFinish()}, 50) 
    }
}