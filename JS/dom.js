// console.log("External JS")

// function addNumbers(num1, num2){
//     console.log(num1+num2)
// }

// addNumbers(60,100)

// addNumbers(100,400)


let h = document.getElementById("myHeading")

h.innerText = "MERN Stack"


let box = document.getElementById("box")
box.innerHTML = "<h1>Hi</h1>"


function submitForm() {
    let inputValue = document.getElementById("input1").value
    console.log(inputValue)
}

// UPPERCASE
// lowercase
// camelCase
// kebab-case
// snake_case
// HelloWorld


function changeImg() {
    document.getElementById("image1").src = "images/sunset.jpg"

    document.getElementById("imgHeading").innerHTML = "Sunset"

    let imgHeading = document.getElementById("imgHeading")

    imgHeading.style.backgroundColor = "red"
    imgHeading.style.color = "white"
    imgHeading.style.fontSize = "100px"
}


function changeImg2() {
    document.getElementById("image1").src = "images/waterfall.jpeg"
    document.getElementById("imgHeading").innerHTML = "Waterfall"
}
