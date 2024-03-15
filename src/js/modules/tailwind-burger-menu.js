function burgerMenu() {
  const menuBurger = document.querySelector(".menu-burger");
  const headerMenu = document.querySelector(".header-menu");
  const header = document.querySelector("#header");
  const body = document.body;

  menuBurger.addEventListener("click", openMenu);

  function openMenu() {
    menuBurger.classList.toggle("open");
    headerMenu.classList.toggle("open");
    if (headerMenu.classList.contains("open")) {
      const distanceToHeader = header.getBoundingClientRect().bottom;
      if (distanceToHeader > 0) {
        headerMenu.style = `height: calc(100dvh - ${distanceToHeader}px)`;
      } else {
        headerMenu.style = "height: 100dvh;";
      }
      const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth + "px";
      body.style.paddingRight = scrollWidth;
      header.style.paddingRight = scrollWidth;
    } else {
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
    body.classList.toggle("overflow-hidden");
  }

  document.addEventListener("keydown", closeHeaderMenu);

  function closeHeaderMenu(event) {
    if (event.code == "Escape") {
      headerMenu.classList.remove("open");
      menuBurger.classList.remove("open");
      body.classList.remove("overflow-hidden");
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
  }

  document.addEventListener("click", closeHeaderMenu2);

  function closeHeaderMenu2(event) {
    if (
      !event.target.closest(".menu-burger") &&
      (event.target.closest("a") || event.target.closest("button"))
    ) {
      headerMenu.classList.remove("open");
      menuBurger.classList.remove("open");
      body.classList.remove("overflow-hidden");
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
  }
}

export default burgerMenu;
