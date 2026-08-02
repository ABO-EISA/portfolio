let up = document.getElementById("up");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});
up.addEventListener("click", (_) =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  }),
);
