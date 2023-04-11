const start = document.querySelector("#start");
const screenTwo = document.querySelectorAll(".two ul li");
const screenThree = document.querySelectorAll(".three ul li");
const screenFour = document.querySelectorAll(".four ul li");

start.addEventListener("click", () => {
  document.querySelector(".two").style.display = "flex";
  document.querySelector(".two").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.querySelector(".one").style.display = "none";
  }, 3000);
});

screenTwo.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.for;
  });
});

screenTwo.forEach(function (div, index) {
  div.addEventListener("click", function () {
    if (div.textContent == "Eu? 🤔La eleee") {
        alert('Achou mesmo que seria fácil assim? Me paga um jantar primeiro né 😏')
    } else {
        localStorage.setItem("comida", div.textContent);
        document.querySelector("#button02").classList.add("animation")
        screenTwo.forEach(function (div) {
          div.classList.remove("active");
        });
    
        this.classList.add("active");
    }
    
  });
});

document.querySelector("#button02").addEventListener("click", () => {
  document.querySelector(".three").style.display = "flex";
  document.querySelector(".three").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.querySelector(".two").style.display = "none";
  }, 3000);
});

screenThree.forEach(function (div) {
  div.addEventListener("click", function () {
    localStorage.setItem("dia", div.textContent);
    document.querySelector("#button03").classList.add("animation")
    screenThree.forEach(function (div) {
      div.classList.remove("active");
    });

    this.classList.add("active");
  });
});

document.querySelector("#button03").addEventListener("click", () => {
  document.querySelector(".four").style.display = "flex";
  document.querySelector(".four").scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    document.querySelector(".three").style.display = "none";
  }, 3000);
});

screenFour.forEach(function (div) {
  div.addEventListener("click", function () {
    localStorage.setItem("hora", div.textContent);

    document.querySelector("#button04").classList.add("animation")
    screenFour.forEach(function (div) {
      div.classList.remove("active");
    });

    this.classList.add("active");
  });
});




document.querySelector("#button04").addEventListener("click", () => {
  document.querySelector(".five").style.display = "flex";
  document.querySelector(".five").scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    document.querySelector(".four").style.display = "none";
  }, 3000);

  const comida = localStorage.getItem("comida");
  const dia = localStorage.getItem("dia");
  const hora = localStorage.getItem("hora");

    const mensagem = `Fechou então, vamos de ${comida} ${
    dia == "Sábado" || dia == "Domingo" ? "no " + dia : "na " + dia
  }, vou passar ai na sua casa às ${hora}, Beleza??`

  document.querySelector("#confirm").innerHTML = mensagem;

  
});

const whatsApp = () => {
    const number = '5511952105294'
    const comida = localStorage.getItem("comida");
    const dia = localStorage.getItem("dia");
    const hora = localStorage.getItem("hora");
  
      const mensagemWhatsAPp = `Fechou vida!, vamos de ${comida} ${
      dia == "Sábado" || dia == "Domingo" ? "no " + dia : "na " + dia
    }, pode passar aqui em casa às ${hora}❤️😘`

    setTimeout(() => {
        window.open(`https://wa.me/${encodeURIComponent(number)}&text=${encodeURIComponent(mensagemWhatsAPp)}`, "_blank")
      }, 5000);
}

const alertazinha = () => {
    alert(`Parabéns, você conseguiu clicar no botão! Você acabou de desbloquear a "Ficada", isso significa que você me deve um beijo ❤️`)
}

document.addEventListener("keydown", (ev) => {
    if (ev.keyCode === 71 || ev.key === "g") {
        document.querySelector(".btnrun").removeAttribute("id")
    }
})