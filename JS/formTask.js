function submitForm() {
    let name = document.getElementById("userName").value
    if (!name) {
        document.getElementById("myHeading1").style.color = "red"
        document.getElementById("myHeading1").innerHTML = "Input name is required."
    }
    
    let email = document.getElementById("userEmail").value
    let pattern = /^[a-zA-Z0-9.-_]+\@+[a-z]+\.+[a-z]{2,3}$/
    if(!email) {
        document.getElementById("myHeading2").style.color = "red"
        document.getElementById("myHeading2").innerHTML = "Valid email is required."
    }
    else if(pattern.test(email)) {
        document.getElementById("myHeading2").style.color = "green"
        document.getElementById("myHeading2").innerHTML = "Email pass!!"
    }
    else {
        document.getElementById("myHeading2").style.color = "red"
        document.getElementById("myHeading2").innerHTML = "Please write email according to pattern."
    }
    

    let password = document.getElementById("userPassword").value
    if(!password) {
        document.getElementById("myHeading3").style.color = "red"
        document.getElementById("myHeading3").innerHTML = "Enter Password."
    }

    let courseName = document.getElementById("userCourse").value
    if(!courseName) {
        document.getElementById("myHeading4").style.color = "red"
        document.getElementById("myHeading4").innerHTML = "Course is required!"
    }

    let collegeName = document.getElementById("collegeName").value
    if(!collegeName) {
        document.getElementById("myHeading5").style.color = "red"
        document.getElementById("myHeading5").innerHTML = "Enter your applied College/University."
    }
}