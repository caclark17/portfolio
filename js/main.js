function checkNumber() {
    var numberAsText = document.getElementById("number_input").value
    var remainder = numberAsText % 2
    if(remainder == 0){
        document.getElementById("result_display").innerHTML = numberAsText + "is even."
    }
    else{
        document.getElementById("result_display").innerHTML = numberAsText + "is odd."

    }
}