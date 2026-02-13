function changeInput1() {
    let input1Value = document.getElementById("box1").value

    document.getElementById("box1").disabled = "true"
    document.getElementById("box2").focus()


    if (input1Value == 1) {
        console.log("Value Matched")
    }
    else {
        document.getElementById("bomb1").src = "https://png.pngtree.com/png-vector/20241228/ourmid/pngtree-dynamic-comic-style-explosion-with-vibrant-colors-and-bold-text-png-image_14923635.png"
    }
}

function changeInput2() {
    let input2Value = document.getElementById("box2").value

    document.getElementById("box2").disabled = "true"
    document.getElementById("box3").focus()

    if (input2Value == 9) {
        console.log("Value Matched")
    }
    else {
        document.getElementById("bomb2").src = "https://png.pngtree.com/png-vector/20241228/ourmid/pngtree-dynamic-comic-style-explosion-with-vibrant-colors-and-bold-text-png-image_14923635.png"
    }
}

function changeInput3() {
    let input3Value = document.getElementById("box3").value

    document.getElementById("box3").disabled = "true"
    document.getElementById("box4").focus()

    if (input3Value == 2) {
        console.log("Value Matched")
    }
    else {
        document.getElementById("bomb3").src = "https://png.pngtree.com/png-vector/20241228/ourmid/pngtree-dynamic-comic-style-explosion-with-vibrant-colors-and-bold-text-png-image_14923635.png"
    }
}

function changeInput4() {
    let input4Value = document.getElementById("box4").value

    if (input4Value == 0) {
        console.log("Value Matched")
    }
    else {
        document.getElementById("bomb4").src = "https://png.pngtree.com/png-vector/20241228/ourmid/pngtree-dynamic-comic-style-explosion-with-vibrant-colors-and-bold-text-png-image_14923635.png"
    }
}


