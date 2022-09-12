const doFetch = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1");

    if (response.status === 404 && !response.ok)
      throw new Error("Smth goes wrong");

    return await response.json();
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
    };
  }
};

async function responseInit() {
  const response = await doFetch();

  document.getElementsByTagName("main")[0].innerHTML = tableMarkup();

  const table = document.getElementsByClassName("place-for-response")[0];
  const markup = Object.keys(response)
    .map((key) => {
      const objValue = response[key];
      let value;

      if (Array.isArray(objValue)) {
        value = objValue.map((text) => `<p>${text}</p>`).join("");
      } else value = objValue;
      return rowMarkup(key, value);
    })
    .join("");

  table.innerHTML = markup;
}
