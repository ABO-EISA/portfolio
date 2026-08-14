// زرار السكرول
const up = document.getElementById("up");
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
const mode = document.getElementById("mode");
window.addEventListener("scroll", function () {
  if (window.scrollY <= 200) {
    mode.style.display = "flex";
  } else {
    mode.style.display = "none";
  }
});
// تظبيط مود الصفحة
const lis = document.querySelectorAll("#mode li");
// لو في لون محفوظ في اللوكال ستوردج
const storedColor = window.localStorage.getItem("color");
if (storedColor) {
  // شيل كلاس الاكتيف من كل الاوبشنز التانية
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // ضيف كلاس الاكتيف بس للاختيار ده (مع null-check)
  const storedElem = document.querySelector(
    `#mode [data-color="${storedColor}"]`,
  );
  if (storedElem) storedElem.classList.add("active");
} else {
  // لو مافيش لون محفوظ، حط الاكتيف على الخيار الاول لتحسين تجربة المستخدم
  const first = document.querySelector("#mode li");
  if (first) first.classList.add("active");
}
// تفعيل حدث الضغط وتغيير الالوان
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color,
    );
  });
});
