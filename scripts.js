function start(){
    //Define the variables seconds variable
    window.seconds = Number
    //Manage the cps test buttons display 
    document.getElementById("buttonStart").style.display = "none"
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "none"
    //Manage the seconds determinator container display
    document.getElementById("secondsDeterminatorContainer").style.display = "inline"
    //Manage the cps test info container display
    document.getElementById("cpsTestInfoContainer").style.display = "none"
    //Start/reset the cps test info results texts
    document.getElementById("cpsResult").innerHTML = "Your final CPS are 0"
    document.getElementById("clicksResult").innerHTML = "Clicks: 0"
    //Reset the seconds input determinator value
    document.getElementById("secondsInputDeterminator").value = ""
    //Reset the clicks variable
    window.clicks = 0
}
function secondsDeterminator(){
    //Define a variable to check if the seconds number selected are postive integer number
        window.secondsCheck = document.getElementById("secondsInputDeterminator").value
    //CHECK IF SECONDS IS AN INTEGER POSITIVE NUMBER
    if(secondsCheck > 0 && Number.isInteger(eval(secondsCheck))){
        //IF YES
        //Define the seconds according to the seconds selected
        window.seconds = document.getElementById("secondsInputDeterminator").value
        //define non variable seconds as equal to variable seconds
        window.nonVariableSeconds = seconds
        //Manage the cps test buttons diplay 
        document.getElementById("buttonStart").style.display = "inline"
        //Manage the cps test info container display
        document.getElementById("cpsTestInfoContainer").style.display = "inline"
        //Manage the seconds determinator container display
        document.getElementById("secondsDeterminatorContainer").style.display = "none"
        //Change countdown text according to seconds determinated
        document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
        //Change button text according to seconds determinated
        document.getElementById("buttonStart").innerHTML = "Press the button to start the " + seconds + " seconds CPS test"
    } else {
        //IF NO
        //Alert the user that the number must be a positive integer number
        alert("The number must be a positive integer number")
        //Start again
        start()
    }
}
function cpsTestStart(){
    //Change button text according to seconds
    document.getElementById("buttonLoad").innerHTML = "Click as fast as posible for " + seconds + " seconds"
    //Manage buttons display
    document.getElementById("buttonStart").style.display = "none"
    document.getElementById("buttonLoad").style.display = "inline"
    //Start the countdown by calling to the function working countdown
    workingCountdown()
}
function cpsTestLoad(){
    //Add one to the click variable by every click 
    window.clicks++
    //Print the click added to the variable in clicks result text
    document.getElementById("clicksResult").innerHTML = "Clicks: " + clicks
}
function workingCountdown(){
    //Set an interval that call the countdown variable every second
    window.variableCountdown = setInterval(countdown, 1000)
}
function countdown(){
    //CHECK IF SECONDS IS BIGGER THAN ONE
    if(seconds>1){
        //IF YES
        //Substract 1 to the seconds variable
        window.seconds--
        //Change the countdown text according to seconds left
        document.getElementById("countdown").innerHTML = "You have " + seconds + " seconds left"
    } else {
        //IF NO
        //Notify the user that they ran out of time by changing the countdown text
        document.getElementById("countdown").innerHTML = "You have 0 seconds left"
        //Wait fifty miliseconds unitl call cps test finish function so the countdown text can change before the alert is played
        setTimeout(function(){cpsTestFinish()}, 50) 
        //Stop the countdown repeat
        clearInterval(variableCountdown)
    }
}
function cpsTestFinish(){
    //Alert the user that the cps test have finished and advise to the user that they have to click accept to view the results
    alert("You have finished the test, click accept to view the results")
    //Calculate the cps by dividing the clicks over the seconds selected
    window.cps = clicks/nonVariableSeconds
    //Print the cps test results in cps result
    document.getElementById("cpsResult").innerHTML = "Your final CPS are " + cps
    //Manage the cps buttons display
    document.getElementById("buttonLoad").style.display = "none"
    document.getElementById("buttonFinish").style.display = "inline"
}