function finelPageInit() {
  document.getElementsByTagName("main")[0].innerHTML = finalMarkup();
  document.getElementsByTagName("footer")[0].innerHTML =
    "TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ";
  document.getElementsByClassName("final__btn")[0].addEventListener(
    "click",
    () => {
      event.currentTarget.innerHTML = "Подождите...";
      responseInit();
    },
    { once: true }
  );
}
