const search = document.querySelector("#search");

search.addEventListener("keyup", () => {
  let filter = search.value;
  console.log(filter);
  let items = document.querySelectorAll("#line-2 li");
  console.log(items);

  // items.forEach((item) => {
  //   if (item.innerHTML.includes(filter)) {
  //     item.style.display = "block";
  //   } else {
  //     item.style.display = "none";
  //   }
  // });
  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].innerText.includes(filter)) {
  //     items[i].style.display = "";
  //   } else {
  //     items[i].style.display = "none";
  //   }
  // }

  for (let i = 0; i < items.length; i++) {
    if (items[i].innerHTML.indexOf(filter) !== -1) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
});
