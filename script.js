const char = document.querySelector(".char");
const step1 = document.querySelector(".step1");
const wholestep1 = document.querySelector(".wholestep1");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");
const charGround = document.querySelector(".charandground");
const input = document.querySelector("#num");
const startBtn = document.querySelector(".start");
const steps = document.querySelector(".steps");
let computedStyle = window.getComputedStyle(char);
let genBtn = document.querySelector(".gen");
let imgDiv = document.querySelector(".img");
let hasClass = false;
// let apple = document.querySelector(".apple");
// const imagePaths = {
//   gumball: "/image/gum.jfif", // './' means the current directory
//   history: "/image/history.jfif",
// };
const imagePaths = ["/image/1.jfif", "/image/2.jfif", "/image/3.png"];

function handleStart() {
  //click start, create
  // if (steps.firstChild) {
  //   console.log(steps.classList)
  //   return;
  // }
  if (hasClass == true) {
    return;
  }
  let apple = document.createElement("span");
  steps.appendChild(apple);
  let num = parseInt(input.value, 10);
  // upBtn.style.display = "block";
  // downBtn.style.display = "block";
  console.log(num);

  for (let i = 0; i < num; i++) {
    let step = document.createElement("div");
    step.classList.add("step");
    steps.appendChild(step);
  }
  hasClass = true;
  const childStep = [...steps.children].slice(1);

  for (let i = 0; i < childStep.length; i++) {
    // const child = children[i];
    // // Do something with the child element
    // child.style.backgroundColor = 'red';
    childStep[i].style.bottom = (i + 1) * 20 + "px";
    childStep[i].style.left = (i + 1) * 120 + "px";
    if (i == childStep.length - 1) {
      let lastStep = window.getComputedStyle(childStep[i]);
      let lastStepLeft = parseInt(lastStep.left, 10);
      let lastStepBottom = parseInt(lastStep.bottom, 10);
      console.log(lastStepLeft);
      console.log(lastStepBottom);

      console.log(apple);
      // &#x1F34E;
      // apple.textContent = "\u{1F34E}";
      apple.innerHTML = "&#x1F34E;";
      apple.style.position = "absolute";
      apple.style.bottom = lastStepBottom + 10 + "px";
      apple.style.left = lastStepLeft + 40 + "px";
    }
  }
}
function handleUp() {
  console.log("up");
  let currentBottom = parseInt(computedStyle.bottom, 10);

  // let currentBottom = parseInt(char.style.bottom, 10); // || 0 handles NaN if empty
  console.log(currentBottom);

  let currentLeft = parseInt(computedStyle.left, 10);
  console.log(currentLeft);
  // || 0 handles NaN if empty
  char.style.bottom = currentBottom + 20 + "px";
  console.log(currentBottom);

  // char.style.bottom = char.style.bottom.current + 20 + "px";
  char.style.left = currentLeft + 120 + "px";
  console.log(currentLeft);
}
function handleDown() {
  console.log("down");

  let currentBottom = parseInt(computedStyle.bottom, 10);
  let currentLeft = parseInt(computedStyle.left, 10);
  // let currentBottom = parseInt(char.style.bottom, 10); // || 0 handles NaN if empty
  console.log(currentBottom);

  console.log(currentLeft);
  // || 0 handles NaN if empty
  char.style.bottom = currentBottom - 20 + "px";
  console.log(currentBottom);

  char.style.left = currentLeft - 120 + "px";
  console.log(currentLeft);
}
let count = -1;

function handleGen() {
  count++;

  if (imgDiv.classList.length > 0) {
    while (imgDiv.firstChild) {
      imgDiv.removeChild(imgDiv.firstChild);
    }
  }
  //ge
  const img = document.createElement("img");
  img.classList.add("realImg");
  var imgWidth = img.offsetWidth;
  imgDiv.appendChild(img);
  // for (let i = 0; i < imagePaths.length; i++) {
  //   console.log(imagePaths[i]);
  // }
  console.log(imagePaths[count % 3]);

  img.src = imagePaths[count % 3];
}
// upBtn.addEventListener("click", handleUp);
// downBtn.addEventListener("click", handleDown);
document.addEventListener("keydown", function (event) {
  // console.log("hello")
  if (event.key === "ArrowUp") {
    console.log("Upkey");
    handleUp();
  } else if (event.key === "ArrowDown") {
    handleDown();
  }
});

startBtn.addEventListener("click", handleStart);
genBtn.addEventListener("click", handleGen);
