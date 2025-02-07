function addition() {
    const input1 = document.getElementById("first-number").value;
    const input2 = document.getElementById("second-number").value;
    const number1 = Number(input1);
    const number2 = Number(input2);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("output").innerHTML = "Please enter a valid number";
    } else {
        const result = number1 + number2;
        document.getElementById("output").innerHTML = `<h3>${String(result)}</h3>`;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function subtraction() {
    const input1 = document.getElementById("first-number").value;
    const input2 = document.getElementById("second-number").value;
    const number1 = Number(input1);
    const number2 = Number(input2);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("output").innerHTML = "Please enter a valid number";
    } else {
        const result = number1 - number2;
        document.getElementById("output").innerHTML = `<h3>${String(result)}</h3>`;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function multiplication() {
    const input1 = document.getElementById("first-number").value;
    const input2 = document.getElementById("second-number").value;
    const number1 = Number(input1);
    const number2 = Number(input2);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("output").innerHTML = "Please enter a valid number";
    } else {
        const result = number1 * number2;
        document.getElementById("output").innerHTML = `<h3>${String(result)}</h3>`;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function division() {
    const input1 = document.getElementById("first-number").value;
    const input2 = document.getElementById("second-number").value;
    const number1 = Number(input1);
    const number2 = Number(input2);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("output").innerHTML = "Please enter a valid number";
    } else {
        const result = number1 / number2;
        document.getElementById("output").innerHTML = `<h3>${String(result)}</h3>`;
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function exponential() {
    const input1 = document.getElementById("first-number").value;
    const input2 = document.getElementById("second-number").value;
    const number1 = Number(input1);
    let number2 = Number(input2);
    let flag = false;
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("output").innerHTML = "Please enter a valid number";

    }
    if (number2 < 0) {
        flag = true;
        number2 *= (-1);
    }
    let result = 1;
    for (let i = 0; i < number2; i++) {
        result *= number1;
    }
    if (flag) {
        result = 1 / result;
    }
    document.getElementById("output").innerHTML = `<h3>${String(result)}</h3>`;
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function erase() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}