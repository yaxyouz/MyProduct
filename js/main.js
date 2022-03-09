const btn = document.querySelector(".header__btn-user");
const btnOpened = document.querySelector(".header__content-btn");
const nightDay = document.querySelector(".header__btn-toggle");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  btnOpened.classList.toggle("header__btn--opened");
})
  nightDay.addEventListener("click", function () {
  body.classList.toggle("night-day")
})

const burgerToggler = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");



burgerToggler.addEventListener("click", function() {
    if (!burgerToggler.classList.contains("header__burger--opened")) {
      body.classList.add("freez");
      burgerToggler.classList.add("header__burger--opened");
      navigation.classList.add("header__nav--opened");
    } else {
      body.classList.remove("freez");
      burgerToggler.classList.remove("header__burger--opened");
      navigation.classList.add("header__nav--closing");
    }
  });
  
  navigation.addEventListener("animationend", function(evt) {
    if (evt.animationName === "nav-close") {
      navigation.classList.remove("header__nav--opened");
      navigation.classList.remove("header__nav--closing");
    }
  });