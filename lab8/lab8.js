function showDate() {
    let out = document.getElementById('curret-date');
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    const mName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let mes = mName[month];
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let weekday = weekdays[today.getDay()]
    let day = today.getDate();
    let out2 = document.getElementById('curret-date2');
    let out3 = document.getElementById('curret-date3');
    let out4 = document.getElementById('curret-date4');
    let out5 = document.getElementById('curret-date5');
    let out6 = document.getElementById('curret-date6');
    let out7 = document.getElementById('curret-date7');
    let out8 = document.getElementById('curret-year');
    let out9 = document.getElementById('curret-mon');
    let out10 = document.getElementById('curret-wd');
    let out11 = document.getElementById('curret-day');
    out.innerHTML = `Время и дата для России ${today.toLocaleString('ru-RU')}`;
    out2.innerHTML = `Время и дата для Ирака ${today.toLocaleString('ar-IQ')}`;
    out3.innerHTML = `Время и дата для Белоруси ${today.toLocaleString('be-BY')}`;
    out4.innerHTML = `Время и дата для ГрециИ ${today.toLocaleString('el-GR')}`;
    out5.innerHTML = `Время и дата для Панамы ${today.toLocaleString('es-PA')}`;
    out6.innerHTML = `Время и дата для Финляндии ${today.toLocaleString('fi-FI')}`;
    out7.innerHTML = `Время и дата для Армении ${today.toLocaleString('hy-AM')}`;
    out8.innerHTML = `Текущий год ${year}`;
    out9.innerHTML = `Текущий месяц ${mes}`;
    out10.innerHTML = `Текущий день недели ${weekday}`;
    out11.innerHTML = `Текущий день недели ${day}`;

}