function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLastChar() {
    const currentValue = document.querySelector('input[name="display"]').value;
    document.querySelector('input[name="display"]').value = currentValue.slice(0, -1);
}

function appendValue(value) {
    document.querySelector('input[name="display"]').value += value;
}

function calculateResult() {
    const currentValue = document.querySelector('input[name="display"]').value;
    document.querySelector('input[name="display"]').value = eval(currentValue);
}
