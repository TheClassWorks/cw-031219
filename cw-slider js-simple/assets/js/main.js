let Data = [
  { id: 0, src: "assets/img/header-1.jpg", titr: "آموزش وب" },
  { id: 1, src: "assets/img/header-2.jpg", titr: "آموزش هوش" },
  { id: 2, src: "assets/img/header-3.jpg", titr: "" },
  { id: 3, src: "assets/img/header-4.jpg", titr: "" },
];
let ax = document.querySelector(".slider-img");
let forwardbtn = document.querySelector(".slider-forward-btn");
let backbtn = document.querySelector(".slider-back-btn");
let titr = document.getElementById("titr");

// console.log(Data[1]);

let slideshow = setInterval(nextpic, 3000);

let index = 0;
function nextpic() {
  index++;
  if (index >= Data.length) {
    index = 0;
  }
  console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
  titr.innerText = Data[index].titr;
  clearInterval(slideshow);
  slideshow = setInterval(nextpic, 3000);
}

forwardbtn.addEventListener("click", nextpic);
backbtn.addEventListener("click", prevpic);

function prevpic() {
  index--;
  if (index < 0) {
    index = Data.length - 1;
  }
  console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
  clearInterval(slideshow);
  slideshow = setInterval(nextpic, 3000);
}
