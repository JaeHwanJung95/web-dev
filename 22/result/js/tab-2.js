const buttons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".t-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    tabContents.forEach((content) => {
      content.classList.remove("current");
    });

    // for (let button of buttons) {
    //   button.classList.remove("active");
    // }
    // for (let content of tabContents) {
    //   content.classList.remove("current");
    // }

    button.classList.add("active");

    let tab_id = button.getAttribute("data-tab");
    document.querySelector(`#${tab_id}`).classList.add("current");
  });
});
