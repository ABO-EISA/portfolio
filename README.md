# 🚀 Developer Portfolio & Dynamic Contact System

A modern, responsive, and light-weight developer portfolio featuring a custom-built dynamic **Contact Form** integrated with a **Serverless Backend-as-a-Service (BaaS)** architecture using Google Apps Script (GAS) and Google Sheets.

---

## ✨ Features

- **Modern & Clean UI**: Fully responsive layout designed with modular HTML5 and custom CSS CSS custom properties / dynamic themes.
- **Asynchronous Data Handling**: Uses JavaScript ES6+ modern standard (`async/await`, `fetch` API, Object Destructuring) for smooth, non-blocking user interaction without page reloads.
- **Client-Side Validation**: Dynamic HTML5 form validation using standard JavaScript Regex and native `.reportValidity()` feedback for an optimal UX.
- **Automated Data Logging**: Incoming submit payloads are automatically parsed and recorded with precise timestamps into a dedicated Google Sheets database.
- **Instant Email Notifications**: Integrates Google's `MailApp` API to trigger structured, formatted email alerts upon every submission.
- **Robust Error Handling**: Structured JSON responses between Frontend and Backend, handling exceptions cleanly without breaking user flow.

---

## 🛠️ Tech Stack & Architecture

### **Frontend**

- **HTML5 & CSS3**: Semantic markup and modern design structure.
- **JavaScript (ES6+)**: Modular code utilizing `async/await`, `fetch`, Promises, and destructuring patterns.

### **Backend (BaaS)**

- **Google Apps Script (GAS)**: Serves as a lightweight API engine processing `POST` requests.
- **Google Sheets**: Acts as an accessible, real-time relational-like database.
- **Google Mail Engine (`MailApp`)**: Automated SMTP trigger for notification emails.

---

## ⚙️ How It Works (System Architecture)

[ User Input ]
│
▼
[ JS Validation (Regex / Event Handlers) ]
│
▼
[ Async Fetch (JSON Payload via POST) ]
│
▼
[ Google Apps Script Web App (doPost) ]
├───> 📊 Log Data to Google Sheets (Timestamp, Names, Email)
└───> 📧 Send Notification Email via MailApp
│
▼
[ Return JSON Response { result: "success" } ]
│
▼
[ Frontend UI Feedback (Alert & Form Reset) ]

---

## 🔮 Future Roadmap (Backend Evolution)

While Google Apps Script provides a seamless and cost-effective Serverless setup, this portfolio is built with scalable patterns ready for future cloud backend migration:

- [ ] **Node.js & Express REST API**: Transitioning backend logic to a dedicated server environment.
- [ ] **Database Integration**: Migrating data storage to **SQL Server / PostgreSQL** or **MongoDB** for complex relation handling.
- [ ] **Nodemailer / SendGrid**: Implementing scalable third-party transactional email providers.
- [ ] **Advanced Security**: Adding CORS domain restrictions, rate limiting, and CAPTCHA validation.

---

## 🧑‍💻 Author

**[Abdelrahman Mostafa Eisa]**  
_Full-Stack Web Developer in the Making_

- **GitHub**: [https://github.com/ABO-EISA]
- **LinkedIn**: [www.linkedin.com/in/abdelrahman-eisa-13b662325]

---

\*Feel free to star ⭐️ this repository if you find it helpful!
