function start(){
    //Manage the cps test buttons display 
    document.getElementById("cpsButtonStart").style.display = "none"
    document.getElementById("cpsButtonLoad").style.display = "none"
    document.getElementById("cpsButtonFinish").style.display = "none"
    //Manage the seconds determinator container display
    document.getElementById("secondsDeterminatorContainer").style.display = "inline"
    //Manage the cps test info container display
    document.getElementById("cpsTestInfoContainer").style.display = "none"
    //Start/reset the cps test info results texts
    document.getElementById("cpsResultTestInfo").innerHTML = "Your final CPS are 0"
    document.getElementById("clicksTestInfo").innerHTML = "Clicks: 0"
    //Reset the seconds input determinator value
    document.getElementById("secondsInputDeterminator").value = ""
    //Reset the clicks variable
    window.clicks = 0
}
function secondsDeterminator(){
    //Define the seconds according to the seconds selected
    window.seconds = document.getElementById("secondsInputDeterminator").value
    //CHECK IF SECONDS IS AN INTEGER POSITIVE NUMBER
    if(seconds > 0 && Number.isInteger(eval(seconds))){
        //IF YES
        //Define non variable seconds as equal to variable seconds
        window.nonVariableSeconds = seconds
        //Manage the cps test buttons diplay 
        document.getElementById("cpsButtonStart").style.display = "inline"
        //Manage the cps test info container display
        document.getElementById("cpsTestInfoContainer").style.display = "inline"
        //Manage the seconds determinator container display
        document.getElementById("secondsDeterminatorContainer").style.display = "none"
        //Change the countdown test info text according to seconds determinated
        document.getElementById("countdownTestInfo").innerHTML = "You have " + seconds + " seconds left"
        //Change the button text according to seconds determinated
        document.getElementById("cpsButtonStart").innerHTML = "Press the button to start the " + seconds + " seconds CPS test"
    } else {
        //IF NO
        //Alert the user that the number must be a positive integer number
        alert("The number must be a positive integer number")
        //Start again by calling the start function
        start()
    }
}
function cpsTestStart(){
    //Change the button text according to seconds
    document.getElementById("cpsButtonLoad").innerHTML = "Click as fast as posible for " + seconds + " seconds"
    //Manage the buttons display
    document.getElementById("cpsButtonStart").style.display = "none"
    document.getElementById("cpsButtonLoad").style.display = "inline"
    //Start the countdown by calling to the function working countdown
    workingCountdown()
}
function cpsTestLoad(){
    //Add one to the click variable by every click 
    window.clicks++
    //Print the click added to the variable in clicks result text
    document.getElementById("clicksTestInfo").innerHTML = "Clicks: " + clicks
}
function workingCountdown(){
    //Set an interval that call the countdown function every second
    window.variableCountdown = setInterval(countdown, 1000)
}
function countdown(){
    //CHECK IF SECONDS IS BIGGER THAN ONE
    if(seconds>1){
        //IF YES
        //Substract one to the seconds variable
        window.seconds--
        //Change the countdown test info text according to seconds left
        document.getElementById("countdownTestInfo").innerHTML = "You have " + seconds + " seconds left"
    } else {
        //IF NO
        //Notify the user that they ran out of time by changing the countdown test info text
        document.getElementById("countdownTestInfo").innerHTML = "You have 0 seconds left"
        //Wait fifty miliseconds until call cps test finish function so the countdown test info text can change before the alert is displayed
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
    document.getElementById("cpsResultTestInfo").innerHTML = "Your final CPS are " + cps
    //Manage the cps buttons display
    document.getElementById("cpsButtonLoad").style.display = "none"
    document.getElementById("cpsButtonFinish").style.display = "inline"
}