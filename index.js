let createColorDiv = () => {
  const containerEl = document.querySelector(".container");

  for (let i = 0; i < 30; i++) {
    const colorContainersEl = document.createElement("div");
    const color = "#" + generateColors();
    colorContainersEl.classList.add("color-containers");
    colorContainersEl.innerText = color;
    colorContainersEl.style.backgroundColor = color;
    containerEl.appendChild(colorContainersEl);
  }
};
let generateColors = () => {
  const randomizer = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f',];
  const randomColor = [];
  for (let i = 0; i < 6; i++) {
    const RandomIndex = Math.floor(Math.random() * randomizer.length);
    const randomContent = randomizer[RandomIndex];
    randomColor.push(randomContent);
  }
  return randomColor.join("");
};
createColorDiv();
