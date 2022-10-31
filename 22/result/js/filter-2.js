const buttons = document.querySelectorAll(".buttons button");
const allImage = document.querySelectorAll(".pics img");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    toggleActive(buttons[i]);
    toggleImages(buttons[i].dataset.cat);
  });
}

function toggleActive(el) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  el.classList.add("active");
}

function toggleImages(cat) {
  if (cat === "all") {
    for (let i = 0; i < allImage.length; i++) {
      allImage[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < allImage.length; i++) {
      allImage[i].dataset.cat === cat
        ? (allImage[i].style.display = "block")
        : (allImage[i].style.display = "none");
    }
  }
}
