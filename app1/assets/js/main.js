let h2Elem = document.getElementById("zaman");

// zaman.style.color = "red";
// zaman.innerHTML = tarikh;

let options = {
  weekday: "long",
  //   year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
// setInterval(() => {
//   let tarikh = new Date();
//   h2Elem.innerHTML = tarikh.toLocaleString("fa-IR", options).replace("ساعت", "-");
// }, 1000);


setTimeout(function test() {
  let tarikh = new Date();
  h2Elem.innerHTML = tarikh.toLocaleString("fa-IR", options).replace("ساعت", "-");
  setTimeout(test, 1000);
}, 1000);
