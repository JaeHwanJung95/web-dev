let headerText = document.querySelector("header > h1");

window.onscroll = () => {
  // console.log(`${document.documentElement.scrollTop}, ${window.scrollY}`);
  if (window.scrollY > 50) {
    headerText.style.fontSize = "1.2rem";
  } else {
    headerText.style.fontSize = "2rem";
  }
};
