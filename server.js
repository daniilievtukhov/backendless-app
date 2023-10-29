const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000; // Порт, на якому буде працювати сервер

// Встановлюємо шлях до папки 'dist', де буде зберігатися збудований бандл
const distPath = path.join(__dirname, "dist");

// Встановлюємо шлях до папки 'build', яку ви раніше згадували
const buildPath = path.join(__dirname, "build");

// Встановлюємо папку 'dist' як статичну для обслуговування файлів
app.use(express.static(distPath));

// Обслуговуємо всі запити на даному сервері, перенаправляючи їх до 'dist/index.html'
app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

// Запускаємо сервер
app.listen(port, () => {
    console.log(`Сервер працює на порту ${port}`);
});
