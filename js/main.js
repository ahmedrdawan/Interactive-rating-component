const ul = document.querySelectorAll("ul li");
const btn = document.getElementById("btn");
const card = document.querySelector(".card");

let currentNum = 0;

ul.forEach((el) => {
  console.log(el);
  el.addEventListener("click", () => {
    el.style.background = "var(--Light-Grey)";
    el.style.color = "var(--White)";
    currentNum++;
  });
});

btn.onclick = function () {
  card.classList.add("st");
  card.innerHTML = `
    <img src="./interactive-rating-component-main/images/illustration-thank-you.svg" alt="" class="str">
      <p class="tr">You selected ${currentNum} out of ${ul.length}</p>
      <h2>Thank you!</h2>
      <p class="text">We appreciate you taking the time to give a rating. If
        you ever need more support, don’t hesitate to get in touch! </p> 
  `;
};
