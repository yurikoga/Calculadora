const display = document.getElementById('display');

function appendToDisplay(input) {
    display.innerText += input;
}

function clearDisplay() {
    display.innerText = "";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        // eval é usado aqui para simplicidade, em produção recomenda-se um parser matemático
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}

// Troca de Tema (Light/Dark)
function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
}
