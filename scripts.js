function start(){
    document.getElementById("buttonStart").style.display = "inline"
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "none"
    document.getElementById("countdown").innerHTML = "You have 5 seconds left"
    window.seconds = 5
    document.getElementById("cpsFinal").innerHTML = "Your final CPS are 0"
    document.getElementById("clicks").innerHTML = "Clicks: 0"
    window.clicks = 0
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
    alert("You have finished the test")
    window.cps = clicks/5
    document.getElementById("cpsFinal").innerHTML = "Your final CPS are " + cps
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "inline"
}
function cpsTestStartAgain (){
    start()
    cpsTestStart()
}
function workingCountdown(){
    window.variableCountdown = setInterval(countdown, 1000)
}
function countdown(){
    if(seconds>1 && seconds !== 0){
        window.seconds--
        document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    } else {
        document.getElementById("countdown").innerHTML = "You have 0 seconds left"
        clearInterval(variableCountdown)
        setTimeout(function(){cpsTestFinish()}, 10) 
    }
}