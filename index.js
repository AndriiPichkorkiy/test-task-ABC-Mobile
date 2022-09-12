//refs
const introSection = document.querySelector(".intro__section");

const app = document.getElementById("app");
const progressBar = app.querySelector(".progress-bar");
const progressLine = app.querySelector(".progress-line");
const form = app.querySelector(".form");
const title = form.querySelector(".form__title");
const inputBar = form.querySelector(".form__input-bar");
const btnSubmit = form.querySelector(".form__submit");

let zodiacImg = null;
let zodiacTitle = null;

//data from <form> for send to backend (if nessesary)
const formDataToSend = [];

function init() {
  form.dataset.qustionId = 0;
  nextQuestion();
  inputBar.style = "";
}

function nextQuestion() {
  const id = +form.dataset.qustionId;

  const { text, type, answers } = allQuestions[id];

  form.dataset.type = type;
  let answersMarkup;

  if (type === "radio") answersMarkup = answers.map(inputMarkUp).join("");
  else if (type === "date") {
    answersMarkup = dateMarkUp() + zodiacMarkUp();
  }

  title.innerHTML = text;
  inputBar.innerHTML = answersMarkup;
  hideBtn();

  if (type === "date") {
    initChooseDate();
    setEventForInputs(true);
    zodiacImg = document.querySelector(".zodiac__img");
    zodiacTitle = document.querySelector(".zodiac__title");
    showZodiacImg();
    inputBar.style = "flex-direction: column; align-items: center;";
  } else {
    setEventForInputs();
    inputBar.style = "flex-direction: column; align-items: left;";
  }
}

function handleSubmit({ currentTarget }) {
  event.preventDefault();
  if (currentTarget.nodeName !== "FORM") return;
  introSection.innerHTML = "";

  //collect data
  const formData = new FormData(currentTarget);
  let value;

  switch (form.dataset.type) {
    case "radio":
      value = formData.get("question");
      break;
    case "date":
      value = {
        day: +formData.get("day"),
        month: getMonthFromString(formData.get("month")),
        year: +formData.get("year"),
      };

      break;
    default:
      return showMessage("choose answer");
  }

  const id = +currentTarget.dataset.qustionId;
  const answerToSend = [id, value];
  formDataToSend.push(answerToSend);

  //next step
  removeEventForInputs();
  if (allQuestions.length !== id + 1) {
    form.dataset.qustionId = id + 1;
    nextQuestion();
    setEventForInputs();
    updateProgressBar(id + 1);
  } else {
    dataProcessingInit();
    console.log("data: ", formDataToSend);
  }
}

function updateProgressBar(id) {
  progressBar.classList.remove("hide");
  progressLine.style.width =
    ((id / (allQuestions.length - 1)) * 100).toFixed(2) + "%";
}

function setEventForInputs(isZodaic) {
  if (isZodaic) {
    const { day, month } = form.elements;
    [(day, month)].forEach((input) =>
      input.addEventListener("change", () => showZodiacImg())
    );
  }
  Array.from(form.elements).forEach((input) =>
    input.addEventListener("change", showBtn)
  );
}

function removeEventForInputs() {
  Array.from(form.elements).forEach((input) =>
    input.removeEventListener("change", showBtn)
  );
}

function showZodiacImg() {
  const formData = new FormData(form);
  const day = +formData.get("day");
  const month = getMonthFromString(formData.get("month"));

  const imgSrc = "./imgs/icons-zodiac/" + getZodiac(day, month) + ".png";

  zodiacImg.src = imgSrc;
  zodiacImg.alt = zodiacRu[month];
  zodiacTitle.innerHTML = zodiacRu[month];
}

const showBtn = () => btnSubmit.classList.remove("hide");

const hideBtn = () => btnSubmit.classList.add("hide");

function showMessage(text = "something goes wrong, try again") {
  alert(text);
}

form.addEventListener("submit", handleSubmit);
window.onload = init;
