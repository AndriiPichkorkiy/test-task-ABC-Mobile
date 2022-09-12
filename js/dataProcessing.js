const analysisArr = [
  "Анализ введенных данных",
  "Коррекция астрологического знака",
  "Расчет вариаций ответов",
  "Генерация предсказания",
  "Сохранение результата",
  "Поиск свободного оператора",
  "Начала озвучки и записи аудио-сообщения",
];

let currentAnalysis = 0;
let refsAnalysis = {
  list: null,
  progress: null,
  ready: null,
};

function dataProcessingInit() {
  app.remove();
  introSection.innerHTML = analisysPageMarkup();

  //refs
  refsAnalysis.list = document.querySelector(".progress-status");
  refsAnalysis.progress = document.querySelector(".progress-line-processing");
  refsAnalysis.ready = document.querySelector(".progress-ready");

  //do analysis
  nextAnalysis();
}

function nextAnalysis() {
  const i = +currentAnalysis;
  const markup = analisysStepMarkup(analysisArr[i], i);

  refsAnalysis.list.insertAdjacentHTML("beforeEnd", markup);
  const elementRight = document
    .querySelector(`[data-id="${i}"]`)
    .querySelector(".redText");

  const AnalisysFinished = () => {
    //bar
    const persent = (((i + 1) / analysisArr.length) * 100).toFixed(0) + "%";
    refsAnalysis.progress.innerHTML = persent;
    refsAnalysis.progress.style.width = persent;

    //list
    elementRight.innerHTML = "Выполнено!";
    elementRight.classList.remove("redText");
  };

  if (analysisArr.length !== currentAnalysis + 1) {
    currentAnalysis += 1;

    setTimeout(() => {
      AnalisysFinished();
      nextAnalysis();
    }, 500);
  } else {
    setTimeout(() => {
      AnalisysFinished();
      refsAnalysis.ready.classList.remove("hide");
      setTimeout(finelPageInit, 1000);
      // refsAnalysis.btn.addEventListener("click", finelPageInit, { once: true });
    }, 1000);
  }
}
