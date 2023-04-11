const start = document.querySelector("#start");
const screenTwo = document.querySelectorAll(".two ul li");
const screenThree = document.querySelectorAll(".three ul li");
const screenFour = document.querySelectorAll(".four ul li");

start.addEventListener("click", () => {
  document.querySelector(".two").style.display = "flex";
  document.querySelector(".two").scrollIntoView({ behavior: "smooth" });

});




screenTwo.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.for;
  });
});

screenTwo.forEach(function (div) {
  div.addEventListener("click", function () {
    localStorage.setItem("comida", div.textContent);
    document.querySelector("#button02").style.display = "inline-block";
    screenTwo.forEach(function (div) {
      div.classList.remove("active");
    });

    this.classList.add("active");
  });
});

document.querySelector("#button02").addEventListener("click", () => {
  document.querySelector(".three").style.display = "flex";
  document.querySelector(".three").scrollIntoView({ behavior: "smooth" });
});


screenThree.forEach(function (div) {
  div.addEventListener("click", function () {
    localStorage.setItem("dia", div.textContent);
    document.querySelector("#button03").style.display = "inline-block";
    screenThree.forEach(function (div) {
      div.classList.remove("active");
    });

    this.classList.add("active");
  });
});

document.querySelector("#button03").addEventListener("click", () => {
  document.querySelector(".four").style.display = "flex";
  document.querySelector(".four").scrollIntoView({ behavior: "smooth" });
  
});


screenFour.forEach(function (div) {
  div.addEventListener("click", function () {
    localStorage.setItem("hora", div.textContent);

    document.querySelector("#button04").style.display = "inline-block";
    screenFour.forEach(function (div) {
      div.classList.remove("active");
    });

    this.classList.add("active");
  });
});

document.querySelector("#button04").addEventListener("click", () => {
  document.querySelector(".five").style.display = "flex";
  document.querySelector(".five").scrollIntoView({ behavior: "smooth" });


  const comida = localStorage.getItem("comida");
  const dia = localStorage.getItem("dia");
  const hora = localStorage.getItem("hora");

  
document.querySelector("#confirm").innerHTML = `Fechou então, vamos de ${comida} ${(dia == 'Sábado' || dia == 'Domingo') ? 'no ' + dia : 'na ' + dia}, vou te pegar na sua casa as ${hora}, Beleza??`


});


