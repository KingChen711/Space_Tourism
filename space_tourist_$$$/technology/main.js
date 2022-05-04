let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");
let buttons = [bt1, bt2, bt3];
let stringButtons = ["bt1", "bt2", "bt3"];

let selectedButton = bt1;

function selectButtonNav(button) {
  selectedButton.classList.remove("btn-selected");
  selectedButton = button;
  selectedButton.classList.add("btn-selected")
}

function selectButtonImage(button) {
  const image = {
    bt1: `url("../images/image-space-capsule-portrait.jpg")`,
    bt2: `url("../images/image-launch-vehicle-portrait.jpg")`,
    bt3: `url("../images/image-spaceport-portrait.jpg")`
  };
  document.querySelector(".container_right").style.backgroundImage = image[button];
}

function selectButtonContent(button) {
  const name = {
    bt1: `Space capsule`,
    bt2: `Launch vehicle`,
    bt3: `Spaceport`
  };
  const text = {
    bt1: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time
    during the flight. It includes a space gym, cinema, and plenty of other activities to keep you
    entertained.`,
    bt2: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    bt3: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`
  };
  let script = document.getElementById("script");
  script.innerHTML = `<div class="script_title">The terminology...</div>
  <div class="script_technologyName">${name[button]} </div>
  <div class="script_text">${text[button]}</div>`;
}

for (let i = 0; i <= 2; ++i) {
  buttons[i].addEventListener("click", () => {
    selectButtonNav(buttons[i]);
    selectButtonImage(stringButtons[i]);
    selectButtonContent(stringButtons[i]);
  })
}
