/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generarCarta = () => {
  const numeroAlAzar = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  let figuras = ["♠", "♥", "♦", "♣"];
  let numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let colores = ["red", "green", "black", "blue"];

  let carta = document.querySelector(".card");

  let figura = document.querySelector(".figura");
  figura.innerHTML = numeroAlAzar(figuras);
  figura.style.color = numeroAlAzar(colores);

  if (figura.style.color === "black") {
    carta.style.backgroundColor = "rgba(129, 122, 121, 0.8)";
  }
  if (figura.style.color === "red") {
    carta.style.backgroundColor = "rgba(223, 206, 206, 0.84)";
  }
  if (figura.style.color === "green") {
    carta.style.backgroundColor = "rgba(189, 219, 189, 0.8)";
  }
  if (figura.style.color === "blue") {
    carta.style.backgroundColor = "rgba(180, 180, 218, 0.81)";
  }

  let figuraAbajo = document.querySelector(".abajo");
  figuraAbajo.innerHTML = figura.innerHTML;
  figuraAbajo.style.color = figura.style.color;

  let listaNumeros = document.getElementsByClassName("numeros");
  Array.from(listaNumeros).forEach(numero => {
    numero.innerText = numeroAlAzar(numeros);
    numero.style.color = figura.style.color;
  });
};
window.generarCarta = generarCarta;
window.onload = function() {
  generarCarta();
};
