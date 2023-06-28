//Welcome text transform
const welcomeTransform = () => {
  const welcomeTextElement = document.getElementById("welcome__original");
  const changedTextElement = document.getElementById("welcome__changed");
  const textToChange = welcomeTextElement.innerText.split("");
  let changedText = [];
  textToChange.forEach((letter, i) => {
    setTimeout(() => {
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
  const mainElement = document.getElementById("main");
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

// Observer for sections
const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

const sectionsToFade = document.querySelectorAll("section.fade");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("fade-in");
    observer.unobserve(entry.target);
  });
}, options);

sectionsToFade.forEach((section) => {
  observer.observe(section);
});

// TEST
const test = () => {
  console.log("test");
};
