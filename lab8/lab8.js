const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    const mName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let mes = mName[month];

    let weekday = weekdays[today.getDay()];
    let day = today.getDate();
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let out6 = document.getElementById('current-date6');
    let out7 = document.getElementById('current-date7');
    let out8 = document.getElementById('current-year');
    let out9 = document.getElementById('current-mon');
    let out10 = document.getElementById('current-wd');
    let out11 = document.getElementById('current-day');
    out.innerHTML = `Время и дата для России ${today.toLocaleString('ru-RU')}`;
    out2.innerHTML = `Время и дата для Ирака ${today.toLocaleString('ar-IQ')}`;
    out3.innerHTML = `Время и дата для Белоруси ${today.toLocaleString('be-BY')}`;
    out4.innerHTML = `Время и дата для Греции ${today.toLocaleString('el-GR')}`;
    out5.innerHTML = `Время и дата для Панамы ${today.toLocaleString('es-PA')}`;
    out6.innerHTML = `Время и дата для Финляндии ${today.toLocaleString('fi-FI')}`;
    out7.innerHTML = `Время и дата для Армении ${today.toLocaleString('hy-AM')}`;
    out8.innerHTML = `Текущий год ${year}`;
    out9.innerHTML = `Текущий месяц ${mes}`;
    out10.innerHTML = `Текущий день недели ${weekday}`;
    out11.innerHTML = `Текущий день ${day}`;
}

function dayofweek() {
    let den = document.getElementById('inpdate').value;
    let mesyac = document.getElementById('inpmon').value;
    let god = document.getElementById('inpyear').value;
    let dt = new Date(god, mesyac - 1, den);
    let dayof = weekdays[dt.getDay()];
    let out12 = document.getElementById('dayOfWeek');
    out12.innerHTML = `День недели: ${dayof}`;
}
