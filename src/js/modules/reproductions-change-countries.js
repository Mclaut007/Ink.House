// Блок "Репродукции".
// Меняем стили кнопок по нажатию на кнопку и показываем репродукции картин авторов из выбранной страны (Англия, Франция, Германия)

function reproductionsChangeCountries() {
  const reproductionsButtonAll = document.querySelectorAll(
    ".reproductions-button"
  );

  const reproductionsCountryBlockAll = document.querySelectorAll(
    "[class^=reproductions]"
  );

  reproductionsButtonAll.forEach((item) => {
    item.addEventListener("click", changeReproductionsCountry);
  });

  function changeReproductionsCountry(event) {
    changeReproductionsButtonStyle(event);
    changeReproductionsBlocks(event);
  }

  function changeReproductionsButtonStyle(event) {
    reproductionsButtonAll.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  function changeReproductionsBlocks(event) {
    reproductionsCountryBlockAll.forEach((item) => {
      item.classList.remove("active");
      if (item.classList.contains(event.target.id)) {
        item.classList.add("active");
      }
    });
  }
}

export default reproductionsChangeCountries;
