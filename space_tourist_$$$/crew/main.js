let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let buttons = [btn1, btn2, btn3, btn4];
let stringButtons = ["btn1", "btn2", "btn3", "btn4"];
let selectedButton = btn1;
let crewInfo = document.getElementById("crewInfo");

function selectButton(button) {
  selectedButton.classList.remove("btn-select");
  selectedButton = button;
  selectedButton.classList.add("btn-select");
}

function selectCrew(button) {

  const role = {
    btn1: `Commander`,
    btn2: `Pilot `,
    btn3: `Mission Specialist`,
    btn4: `Flight Engineer`
  }
  const name = {
    btn1: `Douglas Hurley`,
    btn2: `Victor Glover`,
    btn3: `Mark Shuttleworth`,
    btn4: `Anousheh Ansari`
  }
  const describe = {
    btn1: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
    btn2: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
    btn3: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    btn4: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`
  }

  crewInfo.innerHTML = `<div class="crew_role">${role[button]}</div>
  <div class="crew_name">${name[button]}</div>
  <div class="crew_describe">${describe[button]}</div>`;


  const image = {
    btn1: `url(../images/image-douglas-hurley.webp)`,
    btn2: `url(../images/image-victor-glover.webp)`,
    btn3: `url(../images/image-mark-shuttleworth.webp)`,
    btn4: `url(../images/image-anousheh-ansari.webp)`
  }
  document.querySelector(".container_right").style.backgroundImage = image[button];
  if (button === "btn1") {
    document.querySelector(".container_right").style.backgroundPosition = "center";
  }
  else {
    document.querySelector(".container_right").style.backgroundPosition = "initial";
  }
}

for (let i = 0; i <= 3; ++i) {
  buttons[i].addEventListener("click", () => {
    selectButton(buttons[i]);
    selectCrew(stringButtons[i])
  })
}