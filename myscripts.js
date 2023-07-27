// On Load
const onLoad = () => {
  const width = window.screen.width;
  const expandBtn = document.getElementById("btn_expand");

  if (width <= 600) expandBtn.style.display = "none";
  welcomeTransform();
  observeRedirectHome();
  observeSections();
  observeBookmarks();
};

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

  //sidebar close
  if (sidebarVisibility === "visible") {
    //Arrow expand rotate
    arrowExpand.style.rotate = "0deg";
    // sidebar
    sidebarElement.style.visibility = "collapse";
    sidebar.style.width = "0%";
    sidebarElement.style.animation = "none";
    //main
    mainElement.style.width = "100%";
    //sidebar open
  } else if (sidebarVisibility === "collapse") {
    //Arrow expand rotate
    arrowExpand.style.rotate = "180deg";
    // sidebar
    sidebarElement.style.visibility = "visible";
    sidebar.style.width = "20%";
    sidebarElement.style.animation = "fade 1s";

    //main
    mainElement.style.width = "80%";
  }
};

// Observer for sections (Fade)
const observeSections = () => {
  const options = {
    root: null,
    threshold: 0.25,
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
};

//Observe and change colors on sidebar bookmarks
const observeBookmarks = () => {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  };
  const linksObj = [
    {
      id: "about",
      element: document.getElementById("links__about"),
    },
    {
      id: "skills",
      element: document.getElementById("links__skills"),
    },
    {
      id: "experience",
      element: document.getElementById("links__experience"),
    },
    {
      id: "contact",
      element: document.getElementById("links__contact"),
    },
  ];
  const sectionsElements = document.querySelectorAll("section.fade");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const currentObj = linksObj.filter((obj) => obj.id === entry.target.id);
      if (entry.isIntersecting)
        currentObj[0].element.style.color = "var(--COLOR-FANCY)";
      else currentObj[0].element.style.color = "var(--COLOR)";
    });
  });
  sectionsElements.forEach((section) => {
    observer.observe(section);
  });
};

// Arrow to Home
const observeRedirectHome = () => {
  const welcomeEl = document.getElementById("welcome");
  const arrowTop = document.getElementById("arrow-top");
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // entry.target.style.display = "none";
        arrowTop.style.display = "none";
      } else {
        arrowTop.style.display = "block";
      }
    });
  }, options);

  observer.observe(welcomeEl);
};

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// TEST
const test = () => {
  console.log("test");
};
