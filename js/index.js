function handlesingleSubscriptionRadioButton() {
  const radioButton = document.getElementById(
    "singleSubscriptionRadioButton",
  ).checked;
  const SingularRadioButtonMainDiv = document.getElementById(
    "SingularRadioButtonMainDiv",
  );
  const DynamicDoublerMainRadioDiv = document.getElementById(
    "DynamicDoublerMainRadioDiv",
  );
  if (radioButton) {
    const showDiv = document.getElementById("singleSubscriptionDynamicDiv");
    const hideDiv = document.getElementById("doubleSubscriptionDynamicDiv");
    showDiv.classList.remove("sno");
    hideDiv.classList.add("sno");
    DynamicDoublerMainRadioDiv.classList.remove("border-single-main");
    SingularRadioButtonMainDiv.classList.add("border-single-main");
  }
}
function handleDoubleSubscriptionRadioButton() {
  const radioButton = document.getElementById(
    "doubleSubscriptionRadioButton",
  ).checked;
  const SingularRadioButtonMainDiv = document.getElementById(
    "SingularRadioButtonMainDiv",
  );
  const DynamicDoublerMainRadioDiv = document.getElementById(
    "DynamicDoublerMainRadioDiv",
  );
  if (radioButton) {
    const showDiv = document.getElementById("doubleSubscriptionDynamicDiv");
    const hideDiv = document.getElementById("singleSubscriptionDynamicDiv");
    showDiv.classList.remove("sno");
    hideDiv.classList.add("sno");
    SingularRadioButtonMainDiv.classList.remove("border-single-main");
    DynamicDoublerMainRadioDiv.classList.add("border-single-main");
  }
}
const percentageTexts = document.querySelectorAll(".scroll-bar-item h3");
const scrollSection = document.querySelector(".scroll-bar");
let hasAnimationStarted = false;

function runPercentageAnimation() {
  percentageTexts.forEach((textEl) => {
    const finalValue = +textEl.getAttribute("data-target");
    let currentValue = 0;
    const animationSpeed = 20;

    function updateValue() {
      if (currentValue < finalValue) {
        currentValue++;
        textEl.innerText = currentValue + "%";
        setTimeout(updateValue, animationSpeed);
      } else {
        textEl.innerText = finalValue + "%";
      }
    }

    updateValue();
  });
}

window.addEventListener("scroll", () => {
  const sectionPosition = scrollSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionPosition < windowHeight && !hasAnimationStarted) {
    hasAnimationStarted = true;
    runPercentageAnimation();
  }
});
const dotsMainSpan = document.getElementById("dotsMain");
const dynamicImageDiv = document.getElementById("dynamicImageDiv");
let count = 1;
function setImage(ImageNum) {
  const dots = dotsMainSpan.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[ImageNum - 1].classList.add("active");
  dynamicImageDiv.className = "";
  dynamicImageDiv.className = `dynamicImageClass${ImageNum}`;
  count = ImageNum;
}

function navigateImage(action) {
  if (action === "F") {
    count = count <= 4 ? count + 1 : count;
  } else if (action === "B") {
    count = count >= 2 ? count - 1 : count;
  }
  setImage(count);
}
let link;
function updateCartUrl() {
  const fragranceSetSingle = document.querySelector(
    'input[name="fragrancePickSingle"]:checked',
  ).value;
  const fragranceSetDoubleA = document.querySelector(
    'input[name="fragrancePickDoubleA"]:checked',
  ).value;
  const fragranceSetDoubleB = document.querySelector(
    'input[name="fragrancePickDoubleB"]:checked',
  ).value;
  const purchase = document.querySelector(
    'input[name="subscription"]:checked',
  ).value;

  if (purchase === "Single") {
    link = `https://dummyfragrancshop.com/cart?type=${purchase}&fragrance=${fragranceSetSingle}`;
  } else {
    link = `https://dummyfragrancshop.com/cart?type=${purchase}&fragranceseta=${fragranceSetDoubleA}&fragrancesetb=${fragranceSetDoubleB}`;
  }
}

updateCartUrl();
function addToCartUrl() {
  console.log(link);
  alert(`Selected Cart Link: ${link}`);
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", updateCartUrl);
});

document.querySelectorAll(".sectionsPick").forEach((card) => {
  card.addEventListener("click", function () {
    const radio = this.querySelector('input[type="radio"]');
    radio.checked = true;
    radio.dispatchEvent(new Event("change"));
  });
});
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});
document.querySelectorAll("img.lazy-img").forEach((img) => {
  img.addEventListener("load", () => {
    img.classList.add("loaded");
  });
});
