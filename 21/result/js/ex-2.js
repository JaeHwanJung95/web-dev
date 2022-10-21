const raffle = document.querySelector("#raffle");

raffle.addEventListener("click", (e) => {
  e.preventDefault();  
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  let  winner = Math.floor((Math.random() * total.value) + 1);
  
  result.innerText = `당첨자 : ${winner}`;
  result.classList.add("show");
});