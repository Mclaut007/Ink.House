// На разрешении экрана меньше 480px перемещаем логотип, чтобы было как в макете.

function moveFooterLogo() {
  const footerContainer = document.querySelector("#footer-container");
  const footerLogo = document.querySelector("#footer-logo");
  const footerLogoBlock = document.querySelector("#footer-logo-block");

  const mediaQuery = window.matchMedia("(max-width: 29.99875rem)");

  function handleMobileChange(e) {
    if (e.matches) {
      footerContainer.insertAdjacentElement("afterbegin", footerLogo);
    } else {
      footerLogoBlock.insertAdjacentElement("afterbegin", footerLogo);
    }
  }

  mediaQuery.addEventListener("change", handleMobileChange);
  handleMobileChange(mediaQuery);
}

export default moveFooterLogo;
