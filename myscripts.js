// import * as sidebar from "./sidebar.js";
console.log("Hello from JS");
// sidebar.test()

//Welcome text transform
const welcomeTransform = () => {
  const welcomeTextElement = document.getElementById("welcome__original");
  const changedTextElement = document.getElementById("welcome__changed");
  const textToChange = welcomeTextElement.innerText.split("");
  let changedText = [];
  textToChange.forEach((letter, i) => {
    setTimeout(() => {
      // letterElement.innerText = letter
      changedText.push(letter);
      changedTextElement.innerText = changedText.join("");

      textToChange.shift();
      welcomeTextElement.innerText = textToChange.join("");
    }, i * 350);
  });
};

// Expand/collapse btn for sidebar
const expandButton = () => {
  const sidebarElement = document.getElementById("sidebar");
  const mainElement =  document.getElementById("main")
  const sidebarStyles = window.getComputedStyle(sidebarElement);
  const sidebarVisibility = sidebarStyles.visibility;
  const arrowExpand = document.getElementById("arrow_expand");

  if (sidebarVisibility === "visible") {
    //Arrow expand rotate
    arrowExpand.style.rotate = "0deg";
    // sidebar
    sidebarElement.style.visibility = "collapse";
    sidebar.style.width = "0%";
    //main
    mainElement.style.width = "100%";
  } else if (sidebarVisibility === "collapse") {
    //Arrow expand rotate
    arrowExpand.style.rotate = "180deg";
    // sidebar
    sidebarElement.style.visibility = "visible";
    sidebar.style.width = "20%";
    //main
    mainElement.style.width = "80%";
  }
};
