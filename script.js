function addition(a, b) {
    return a + b
}

function substraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    if (b == 0) {
        return "Erreur: impossible de divisé par 0"
    }
    return a / b
}

function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    }

    if (a < 0) {
        return "Undefined";
    }

    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
}

function square(a) {
    return a * a
}

function sqrt(a) {
    return Math.sqrt(a)
}

const main = document.getElementById("main")
main.addEventListener("click", function (event) {
    const el = event.target
    const input = document.getElementById("inputField")
    if (el.classList.contains("number")) {
        input.value += el.textContent
    }
    else if (el.classList.contains("operation")) {
        input.value += el.textContent
    } else if (el.classList.contains("equal")) {
    const operation = input.value.split(/([+\-*/²√!])/);

    const a = Number(operation[0]);
    const op = operation[1];
    const b = Number(operation[2]);

    const operationsMap = {
        "+": addition,
        "-": substraction,
        "*": multiplication,
        "/": division,
        "²": square,
        "√": sqrt,
        "!": factorial
    };

    input.value = operationsMap[op](a, b);
    } else if (el.id == ("clear")) {
        input.value = ""
    }


})

