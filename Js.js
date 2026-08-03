// زرار السكرول
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

let mode = document.getElementById("mode");
let new_mode = window.addEventListener("scroll", function () {
  if (window.scrollY <= 200) {
    mode.style.display = "flex";
  } else {
    mode.style.display = "none";
  }
});
// تظبيط مود الصفحة
let lis = document.querySelectorAll("ul li");
//لو في لون محفوظ في اللوكال ستوردج
if (window.localStorage.getItem("color")) {
  // خلي لون الصفحة باللون الموجود في اللوكال ستوردج والكود ده عملناه في صفحة الاتش تي ام ال عشان الرفة الي كانت بتحصل
  //   document.documentElement.style.setProperty(
  //     "--main-color",
  //     window.localStorage.getItem("color"),
  //   );
  // شيل كلاس الاكتيف من كل الاوبشنز التانية
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // ضيف كلاس الاكتيف بس للاختيار ده
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
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
