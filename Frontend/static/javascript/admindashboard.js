document.addEventListener("DOMContentLoaded", function() {
  const html = document.documentElement;
  const body = document.body;
  const menuLinks = document.querySelectorAll(".admin-menu a");
  const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
  const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
  const switchInput = document.querySelector(".switch input");
  const switchLabel = document.querySelector(".switch label");
  const switchLabelText = switchLabel.querySelector("span:last-child");
  const collapsedClass = "collapsed";
  const lightModeClass = "light-mode";

  /*TOGGLE HEADER STATE*/
  collapseBtn.addEventListener("click", function() {
    body.classList.toggle(collapsedClass);
    this.getAttribute("aria-expanded") == "true"
      ? this.setAttribute("aria-expanded", "false")
      : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "collapse menu"
      ? this.setAttribute("aria-label", "expand menu")
      : this.setAttribute("aria-label", "collapse menu");
  });

  /*TOGGLE MOBILE MENU*/
  toggleMobileMenu.addEventListener("click", function() {
    body.classList.toggle("mob-menu-opened");
    this.getAttribute("aria-expanded") == "true"
      ? this.setAttribute("aria-expanded", "false")
      : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "open menu"
      ? this.setAttribute("aria-label", "close menu")
      : this.setAttribute("aria-label", "open menu");
  });

  /*SHOW TOOLTIP ON MENU LINK HOVER*/
  for (const link of menuLinks) {
    link.addEventListener("mouseenter", function() {
      if (
        body.classList.contains(collapsedClass) &&
        window.matchMedia("(min-width: 768px)").matches
      ) {
        const tooltip = this.querySelector("span").textContent;
        this.setAttribute("title", tooltip);
      } else {
        this.removeAttribute("title");
      }
    });
  }

  // Check the stored mode in localStorage and apply it
  if (localStorage.getItem("dark-mode") === "false") {
    html.classList.add(lightModeClass);
    switchInput.checked = false;
    switchLabelText.textContent = "Light";
  } else {
    html.classList.remove(lightModeClass);
    switchInput.checked = true;
    switchLabelText.textContent = "Dark";
  }

  // Add event listener to the toggle switch
  switchInput.addEventListener("input", function() {
    html.classList.toggle(lightModeClass);
    if (html.classList.contains(lightModeClass)) {
      switchLabelText.textContent = "Light";
      localStorage.setItem("dark-mode", "false");
    } else {
      switchLabelText.textContent = "Dark";
      localStorage.setItem("dark-mode", "true");
    }
  });

  const searchInput = document.querySelector('input[type="search"]');
  const form = document.querySelector('form');

  searchInput.addEventListener('focus', function() {
    form.classList.add('active');
  });

  searchInput.addEventListener('blur', function() {
    if (!searchInput.value) {
      form.classList.remove('active');
    }
  });
});
