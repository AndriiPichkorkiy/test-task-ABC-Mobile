const allQuestions = [
  {
    id: 0,
    type: "radio",
    text: "Укажите свой пол:",
    answers: ["Женщина", "Мужчина"],
  },
  {
    id: 1,
    type: "radio",
    text: "В какое время суток Вы чувствуете себя наиболее комфортно?",
    answers: ["Утро", "Ночь", "Вечер", "День"],
  },
  {
    id: 2,
    type: "radio",
    text: "Подскажите, мучает ли Вас бессонница последнее время?",
    answers: ["Да", "Нет", "Иногда"],
  },
  {
    id: 3,
    type: "radio",
    text: "Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?",
    answers: ["Да", "Нет", "Иногда"],
  },
  {
    id: 4,
    type: "radio",
    text: "Какой Вы видите свою жизнь через 5 лет?",
    answers: [
      "Брак, семья, дети, дом",
      "Путешествия по Миру",
      "Успешная карьера",
      "Всё вместе",
    ],
  },
  {
    id: 5,
    type: "date",
    text: "Введите дату своего рождения:",
    answers: [],
  },
];

const zodiacEn = [
  "",
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
];

const zodiacRu = [
  "",
    "Козерог",
   "Водолей",
   "Рыбы",
   "Овен",
   "Телец",
   "Близнецы",
   "Рак",
   "Лео",
   "Дева",
   "Весы",
   "Скорпион",
   "Стрелец",
   "Козерог",
];

function getZodiac(day, month) {
  // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
  var last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > last_day[month] ? zodiacEn[month * 1 + 1] : zodiacEn[month];
}

function getMonthFromString(mon) {
  const date = Date.parse(mon + ", 1, 2012");
  if (!isNaN(date)) {
    return new Date(date).getMonth() + 1;
  }
  return -1;
}
