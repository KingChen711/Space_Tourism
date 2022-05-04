let planet0 = document.getElementById("planet0");
let planet1 = document.getElementById("planet1");
let planet2 = document.getElementById("planet2");
let planet3 = document.getElementById("planet3");
let contentPlanet = document.getElementById("content_planet");
const planets = [planet0, planet1, planet2, planet3];
const stringPlanets = ["planet0", "planet1", "planet2", "planet3"];
let selectedPlanet = planet0;
let planetImage = document.getElementById("planetImage");


function selectPlanetNav(planet) {
  selectedPlanet.removeChild(selectedPlanet.lastElementChild);
  selectedPlanet = planet;
  let temp = document.createElement("div");
  temp.classList.add("underline");
  selectedPlanet.appendChild(temp);
}

function selectPlanetContent(planet) {

  const planetName = {
    planet0: "Moon",
    planet1: "Mars",
    planet2: "Europa",
    planet3: "Titan"
  }
  const planetText = {
    planet0: `Moon See our planet as you’ve never seen it before. A perfect relaxing trip
    away
    to help regain perspective and come back refreshed. While you’re there, take in some history by
    visiting
    the Luna 2 and Apollo 11 landing sites.`,
    planet1: `Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    planet2: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    planet3: `Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`
  }

  const planetDistance = {
    planet0: "384,400 km",
    planet1: "225 mil. km",
    planet2: "628 mil. km",
    planet3: "1.6 bil. km"
  }

  const planetTime = {
    planet0: "3 days",
    planet1: "9 months",
    planet2: "3 years",
    planet3: "7 years"
  }

  contentPlanet.innerHTML = `<div class="planet_title">
  ${planetName[planet]}
</div>
<div class="planet_text">${planetText[planet]}</div>
<div class="line">
</div>
<div class="planet_rate">
  <div class="rate">
    <div class="rate_titile">Avg. distance</div>
    <div class="rate_num">${planetDistance[planet]} </div>
  </div>
  <div class="rate">
    <div class="rate_titile">Est. travel time</div>
    <div class="rate_num">${planetTime[planet]}</div>
  </div>
</div>`;
  const planetImages = {
    planet0: "../images/image-moon.webp",
    planet1: "../images/image-mars.webp",
    planet2: "../images/image-europa.webp",
    planet3: "../images/image-titan.webp"
  }
  planetImage.setAttribute("src",`${planetImages[planet]}`);
}

for (let i = 0; i <= 3; ++i) {
  planets[i].addEventListener("click", function () {
    selectPlanetNav(planets[i]);
    selectPlanetContent(stringPlanets[i]);
  })
}