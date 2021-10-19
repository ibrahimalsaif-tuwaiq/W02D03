// Change the size of a heading

const changeSize = () => {
  const headings = document.querySelectorAll("h1");
  headings.forEach((element) => {
    element.style.fontSize = "300%";
  });
};

const fontSizeButton = document.getElementById("fontSize");
fontSizeButton.addEventListener("click", changeSize);

// Change the font style of a paragraph

const changeFont = () => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((element) => {
    element.style.fontStyle = "italic";
  });
};

const fontStyleButton = document.getElementById("fontStyle");
fontStyleButton.addEventListener("click", changeFont);

// Highlight a paragraph with back-ground

const highlight = () => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
};

const highlightButton = document.getElementById("fontHightlight");
highlightButton.addEventListener("click", highlight);

// Hide an Image

const HideImage = () => {
  const image = document.getElementById("pyImg");
  image.style.display = "none";
};

const hideImageButton = document.getElementById("hideImage");
hideImageButton.addEventListener("click", HideImage);

// Alternate between two images

const alternateImage = () => {
  const image = document.getElementById("jsImg");
  if (
    image.src ==
    "https://i.pinimg.com/originals/91/94/c9/9194c978fa63798b2e882e6fda5eb953.png"
  ) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png";
  } else {
    image.src =
      "https://i.pinimg.com/originals/91/94/c9/9194c978fa63798b2e882e6fda5eb953.png";
  }
};

const alternateImageButton = document.getElementById("alternateImage");
alternateImageButton.addEventListener("click", alternateImage);

//  Change an image when the mouse moves onto it, and then ...

const changeImage = (event) => {
  const image = document.getElementById("cImg");
  if (event.currentTarget.alt === "c logo") {
    image.alt = "ruby on rails logo";
    image.src =
      "https://www.nicepng.com/png/detail/749-7492440_ruby-on-rails-logo.png";
  } else {
    image.alt = "c logo";
    image.src =
      "https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png";
  }
};

const cImage = document.getElementById("cImg");
cImage.addEventListener("mouseenter", changeImage);
cImage.addEventListener("mouseleave", changeImage);

// Create a script which creates an alert on the page when a user ...

const rightClickImage = () => {
  alert("You right clicked on an image");
};

const imagesRightClick = document.querySelectorAll("img");
imagesRightClick.forEach((element) => {
  element.addEventListener("contextmenu", rightClickImage);
});

// Create an alert on the page when a user enters data into a input

const enteredData = () => {
  alert("You entered data in the input");
};

const input = document.getElementById("input");
input.addEventListener("input", enteredData);

// Create an alert to let the user know when the page has loaded

const pageLoaded = () => {
  alert("The page is fully loaded");
};

window.addEventListener("load", pageLoaded);

// Highlight all paragraphs when the mouse moves over them ...

const highlightP = (event) => {
  const paragraphs = document.querySelectorAll("p");
  if (event.currentTarget.style.backgroundColor === "lightblue") {
    paragraphs.forEach((element) => {
      element.style.backgroundColor = "white";
    });
  } else {
    paragraphs.forEach((element) => {
      element.style.backgroundColor = "lightblue";
    });
  }
};

const highlightParagraphs = document.querySelectorAll("p");
highlightParagraphs.forEach((element) => {
  element.addEventListener("mouseenter", highlightP);
  element.addEventListener("mouseleave", highlightP);
});
