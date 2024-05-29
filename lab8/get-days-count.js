function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let output = document.getElementById('output');
    output.innerHTML = `Дней от дня рождения: ${daysCount}`;

    let clearButton = document.createElement('button');
    clearButton.innerText = "Очистить";
    clearButton.id = "clearButton";
    clearButton.onclick = clearFields;
    let mainContent = document.getElementById('main-content');
    mainContent.appendChild(clearButton);
}

function clearFields() {
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value = '';
    let output = document.getElementById('output');
    output.innerHTML = '';
    let clearButton = document.getElementById('clearButton');
    clearButton.remove();
}
