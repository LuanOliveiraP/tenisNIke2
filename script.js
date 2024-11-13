
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicadores");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  if (dotsOld) {
    dotsOld.classList.remove("active");
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");

  let numberIndicator = indicator.querySelector(".number");
  numberIndicator.innerHTML = active + 1;
}

nextButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider();
};

prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  setSlider();
};

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const closeButton = document.getElementById("close");
const modalDescription = document.getElementById("modal-description");
const descriptions = [
  "O cabedal é um mix de elementos do AJ6 e AJ7: a parte superior da língua e a camada modificada fazem referência ao AJ6, enquanto o forro parcial na camada interna homenageia o AJ7.Logo Nike Air bordado no calcanhar faz referência ao AJ6 e o detalhe moldado no calcanhar vem do AJ8.O modelo do solado faz referência ao AJ6. A unidade Nike Air-Sole encapsulada fornece amortecimento leve.",
  "Este é o produto 2. Aqui também temos uma descrição separada para a modal, mostrando mais detalhes que não estão visíveis na área principal.",
  "Este é o produto 3. O texto na modal será único para a descrição aqui. Diferente do que está nas informações do produto na página principal."
];

const infoButtons = document.querySelectorAll(".info");

infoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    
    modal.style.display = "flex";

    modalDescription.textContent = descriptions[index];
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

setSlider();
