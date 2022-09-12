function analisysStepMarkup(text, i) {
  return `
        <li class="progress-status__line" data-id="${i}">
            <div class="progress-status__left">${text}</div>
            <div class="progress-status__right redText">Идёт запись!
</div>
            <div class="progress-status__dottes"></div>
          </li>
    `;
}

function analisysPageMarkup() {
  return `
        <h2 class="progress-title">Обработка Ваших данных:</h2>

        <div class="progress-bar-processing">
          <div class="progress-line-processing">20%</div>
        </div>
        <ul class="progress-status">
          
        </ul>

        <span class="progress-ready hide">Готово!</span>
    `;
}
