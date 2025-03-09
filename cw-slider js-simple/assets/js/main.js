let Data = [
  { id: 0, src: "assets/img/header-1.jpg" },
  { id: 1, src: "assets/img/header-2.jpg" },
  { id: 2, src: "assets/img/header-3.jpg" },
  { id: 3, src: "assets/img/header-4.jpg" },
];
let ax = document.querySelector(".slider-img");
let forwardbtn = document.querySelector(".slider-forward-btn");
let backbtn = document.querySelector(".slider-back-btn");

// console.log(Data[1]);

setInterval(nextpic, 3000);

let index = 0;
function nextpic() {
  index++;
  if (index >= Data.length) {
    index = 0;
  }
  console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
}
