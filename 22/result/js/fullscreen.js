let video = document.querySelector("#bg-video");
let button = document.querySelector("#video-control");


button.addEventListener("click", () =>{
  if(video.paused) {
    video.play();
    button.innerText = "중지";
  } else {
    video.pause();
    button.innerText = "재생";
  }
})