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

// الميديا كويري للهيدر
let bar = document.querySelector(".bar");
let navigation = document.querySelector(".nav-elements");
let links = document.querySelectorAll(".sub-nav a");
bar.addEventListener("click", () => {
  navigation.classList.toggle("open_close");
});

links.forEach((link) => {
  link.addEventListener("click", (_) => {
    navigation.classList.toggle("open_close");
  });
});
// جزء الكونتاكت
const form = document.querySelector("#my-contact-info");
const firstName = document.querySelector("#f-name");
const lastName = document.querySelector("#l-name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
// 1. مسح الأخطاء تلقائيًا بمجرد كتابة المستخدم في الحقول (توضع خارج حدث الـ submit)
firstName.addEventListener("input", () => firstName.setCustomValidity(""));
lastName.addEventListener("input", () => lastName.setCustomValidity(""));

// 2. معالجة إرسال النموذج (Submit Event)
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  // التحقق من الاسم الأول
  if (!nameRegex.test(firstName.value.trim())) {
    firstName.setCustomValidity("First name must contain letters only.");
    firstName.reportValidity();
    firstName.focus();
    return;
  } else {
    firstName.setCustomValidity("");
  }
  // التحقق من الاسم الأخير
  if (!nameRegex.test(lastName.value.trim())) {
    lastName.setCustomValidity("Last name must contain letters only.");
    lastName.reportValidity();
    lastName.focus();
    return;
  } else {
    lastName.setCustomValidity("");
  }
  // تجهيز الداتا الي هتروح للسيرفر
  let data_obj = {
    fName: firstName.value.trim(),
    lName: lastName.value.trim(),
    email: email.value.trim(),
    msg: msg.value.trim(),
  };
  // العنوان الي هيرجع من Google apps
  let url =
    "https://script.google.com/macros/s/AKfycbwQZbMMnEvlzD2s3wWPiDeBkPwMtyKCMHpEVbXoOikx_Pi8KBBz7IysL06klaqZQltK/exec";
  // بروتوكول الارسال
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data_obj),
  };

  try {
    let response = await fetch(url, options);
    let data = await response.json();
    if (data.result === "success") {
      alert(
        "Your message has been sent successfully! Thank you for reaching out.",
      );
      form.reset();
    } else {
      alert(
        "An error occurred while sending your message. Please try again later.",
      );
      console.log(data.error);
    }
  } catch (error) {
    alert(
      "Unable to connect to the server. Please check your internet connection and try again.",
    );
    console.log("catch error");
  }
});
