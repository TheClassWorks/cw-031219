let Data = {
  اصفهان: ["اصفهان", "کاشان", "شهرضا"],
  فارس: ["شیراز", "لار", "لامرد", "گراش", "جهرم"],
  خوزستان: ["اهواز", "آبادان", "ماهشهر"],
  تهران: ["مهرآباد", "فرودگاه امام", "کرج", "ورامین"],
  "خراسان رضوی": ["مشهد", "سبزوار", "چناران", "شاندیز", "طرقبه"],
  "استان مقصد را انتخاب کنید ...": ["انتخاب کنید  ..."],
};

// let obj={key1:value1,key2:value2}

// let list = document.querySelector(".list");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   let newLi = document.createElement("li");
//   newLi.innerText = "متن جدید";
//   list.append(newLi);
// });

console.log(Data["اصفهان"]);
let ostan = document.getElementById("ostan");
let shahr = document.getElementById("shahr");

ostan.addEventListener("change", () => {
  // console.log(ostan.value);
  // console.log(Data[ostan.value]);
  let cities = Data[ostan.value];
  shahr.innerHTML = "";
  cities.forEach((city) => {
    let newCity = document.createElement("option");
    newCity.innerText = city;
    shahr.append(newCity);
  });
});

// setInterval(x => Math.pow(x,2), interval);
