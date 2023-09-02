// to be managed for the big cup
const liters = document.getElementById("L");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

//to be managed for small cubs
const cups = document.querySelectorAll(".cup.small_cup");

cups.forEach((cup, clicked_index) => {
  cup.addEventListener("click", () => {
    update_filled_cups(clicked_index);
    update_big_cup();
  });
});

const update_filled_cups = (clicked_index) => {
  const full_check = cups[clicked_index].classList.contains("full");
  if (
    clicked_index !== 7 &&
    full_check &&
    !cups[clicked_index].nextElementSibling.classList.contains("full")
  ) {
    cups[clicked_index].classList.remove("full");
  } else if (clicked_index === 7 && full_check) {
    cups[clicked_index].classList.remove("full");
  } else {
    cups.forEach((cup) => cup.classList.remove("full"));
    for (let i = 0; i <= clicked_index; i++) {
      cups[i].classList.add("full");
    }
  }
};

const update_big_cup = () => {
  const number_of_filled_cups = document.querySelectorAll(
    ".cup.small_cup.full"
  ).length;
  if (number_of_filled_cups === 8) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
    percentage.style.visibility = "visible";
  } else if (number_of_filled_cups === 0) {
    percentage.style.visibility = "hidden";
  } else {
    remained.style.visibility = "visible";
    percentage.style.visibility = "visible";
  }
  liters.textContent = `${2 - (number_of_filled_cups * 250) / 1000}L`;
  percentage.textContent = `${(number_of_filled_cups / 8) * 100}%`;
  percentage.style.height = `${(number_of_filled_cups / 8) * 100}%`;
};
