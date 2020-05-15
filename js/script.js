// Creating chart fro skills section

var chart = document.getElementById("skill-set").getContext("2d");
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = "black";
let popChart = new Chart(chart, {
  type: "pie",
  data: {
    labels: ["C", "C++", "Python", "HTML", "CSS", "JavaScript"],
    datasets: [
      {
        label: "Skills",
        data: [70, 70, 75, 80, 80, 90],

        backgroundColor: [
          "#4ECDC4",
          "#1A535C",
          "#4ECDC4",
          "#1A535C",
          "#4ECDC4",
          "#1A535C",
          "#4ECDC4",
        ],
        borderWidth: 1,
        borderColor: "gray",
        hoverBorderWidth: 2,
        hoverBorderColor: "black",
        fontColor: "white",
      },
    ],
  },
  default: {
    scale: {
      ticks: { min: 0 },
    },
  },
  options: {
    title: {
      display: true,
      fontSize: 25,
    },
    legend: {
      position: "right",
    },
    layout: {
      padding: 20,
    },
    tooltips: {
      enabled: true,
    },
  },
});

// creating animations on scroll
function scrollEffect() {
  var aboutHead = document.querySelector(".about-heading");
  var aboutContent = document.querySelector(".about-content");
  var aboutHeadDist = aboutHead.getBoundingClientRect().top;
  var aboutContentDist = aboutContent.getBoundingClientRect().top;

  var windowSizeHead = window.innerHeight / 2;
  var windowSizeContent = window.innerHeight / 2.6;

  var webContent = document.querySelector(".projects-web");
  var webContentDist = webContent.getBoundingClientRect().top;
  var uiContent = document.querySelector(".projects-ui");
  var uiContentDist = uiContent.getBoundingClientRect().top;

  var windowSizeWeb = window.innerHeight / 1.6;
  var windowSizeUi = window.innerHeight / 1.5;

  console.log(webContentDist, windowSizeWeb);

  if (aboutHeadDist < windowSizeHead) {
    aboutHead.classList.add("about-heading-appear");
  }
  if (aboutContentDist < windowSizeContent) {
    aboutContent.classList.add("about-content-appear");
  }
  if (webContentDist < windowSizeWeb) {
    webContent.classList.add("projects-web-appear");
  }
  if (uiContentDist < windowSizeUi) {
    uiContent.classList.add("projects-ui-appear");
  }
}
window.addEventListener("scroll", scrollEffect);
