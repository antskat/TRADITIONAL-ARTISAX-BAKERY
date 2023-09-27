var buybtn = document.getElementById("bybtn");
var order01 = document.getElementById("order01");
var order02 = document.getElementById("order02");
var order03 = document.getElementById("order03");
var order04 = document.getElementById("order04");
var scrollObject = document.getElementById("scroll-object");
var message = document.getElementById("message");

buybtn.getAttribute("disabled");

function scroll() {
  scrollObject.scrollIntoView({ behavior: "smooth" });
}

function alarm() {
  let elem = document.getElementById("message");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("message").style.display = "block";
  } else if (style.display !== "none") {
    document.getElementById("message").style.display = "none";
  }
  setTimeout(function () {
    document.getElementById("message").style.display = "none";
  }, 3000);
}

order01.addEventListener("click", alarm);
order01.addEventListener("click", scroll);
order02.addEventListener("click", alarm);
order02.addEventListener("click", scroll);
order03.addEventListener("click", alarm);
order03.addEventListener("click", scroll);
order04.addEventListener("click", alarm);
order04.addEventListener("click", scroll);

var buybtn01 = document.getElementById("buy01");
var buybtn02 = document.getElementById("buy02");
var buybtn03 = document.getElementById("buy03");
var blurBg = document.getElementById("blur-background");
var closebtn = document.getElementById("closebtn");
var closebtn2 = document.getElementById("container");

function showPopup() {
  let elem = document.getElementById("popup");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("popup").style.display = "block";
  } else if (style.display !== "none") {
    document.getElementById("popup").style.display = "none";
  }

  if (style.display === "block") {
    document.getElementById("blur-background").style.display = "block";
    document.body.style.overflowY = "hidden";
  } else if (style.display !== "block") {
    document.getElementById("blur-background").style.display = "none";
  }
}

function closePopup() {
  let elem = document.getElementById("popup");
  let style = getComputedStyle(elem);
  if (style.display === "block") {
    document.getElementById("popup").style.display = "none";
    document.getElementById("blur-background").style.display = "none";
    document.body.style.overflowY = "scroll";
  } else if (style.display !== "block") {
    document.getElementById("popup").style.display = "block";
    document.getElementById("blur-background").style.display = "block";
    document.body.style.overflowY = "hidden";
  }
}

buybtn.addEventListener("click", showPopup);
buybtn01.addEventListener("click", showPopup);
buybtn02.addEventListener("click", showPopup);
buybtn03.addEventListener("click", showPopup);
closebtn.addEventListener("click", closePopup);
blurBg.addEventListener("click", closePopup);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

// const div = document.querySelector("#popup");

// if (div.style.display = 'block') {
//   document.addEventListener("click", (e) => {
//     const withinBoundaries = e.composedPath().includes(div);

//     if (!withinBoundaries) {
//       div.style.display = "none";
//     }
//   });
// }
