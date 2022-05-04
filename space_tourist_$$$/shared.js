let menu = document.querySelector(".menu");
let dropdown = document.querySelector(".dropdownMenu")
menu.addEventListener("click", () => {
  dropdown.style.transform = "translateX(0)";
  let close = document.getElementById("close");
  close.addEventListener("click", () => {
    dropdown.style.transform = "translateX(100%)";
  })
})