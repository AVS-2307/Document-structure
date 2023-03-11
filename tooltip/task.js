document.addEventListener("click", e => {  //слушаем клики по документу

    if (e.target.classList.contains('has-tooltip') || e.target.closest('.has-tooltip')) { //проверям клик нужный элемент или рядом с ним
        tooltipShow(e.target)                 //показываем посказку
        e.preventDefault()
    }
})

function tooltipShow(link) {

  /*   if (!document.querySelector('.tooltip')) { //если еще нет div с подсказкой, то создаем
        tooltipCreate(link);
    } */

    let tooltip = document.querySelector('.tooltip'),  // получаем существующий div подсказки
        dataPosition = link.getBoundingClientRect();   // получаем координаты блока для подсказки

    if (tooltip.textContent === link.getAttribute("title")) { // сравниваем открытую подсказку и клик
        tooltipHide(tooltip)
    } else {
        tooltipHide(tooltip)                                    // закрываем преыдущюю подсказку
        tooltip.innerHTML = link.getAttribute('title');         //обновляем данные для новой подсказки
        tooltip.classList.add('tooltip_active');
        tooltip.style.left = dataPosition.left + "px";
        tooltip.style.top = dataPosition.bottom + "px";
    }
}

function tooltipHide(link) {
    link.classList.remove('tooltip_active');
    link.textContent = ""
}

/* function tooltipCreate() {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.append(tooltip);
} */
