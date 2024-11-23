// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");

    // Обработка события отправки формы
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Получение значений полей
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        // Пример проверки (здесь можно реализовать свою логику)
        if (username === "admin" && password === "password") {
            alert("Login successful!");
            // Перенаправление на другую страницу
            window.location.href = "dashboard.html"; // Замените на нужный URL
        } else {
            alert("Invalid username or password.");
        }
    });

    // Пример для ссылки "Register"
    const registerLink = document.querySelector("#register-link");
    registerLink.addEventListener("click", (event) => {
        event.preventDefault();
        // Перенаправление на страницу регистрации
        window.location.href = "register.html"; // Замените на нужный URL
    });
});
