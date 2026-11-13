// Чекаємо, поки сторінка повністю завантажиться
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. ХОВАЄМО ЕКРАН ЗАВАНТАЖЕННЯ
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1200); // 1.2 секунди

  // 2. ЕФЕКТ ШАПКИ ПРИ СКРОЛІ
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. ОБРОБКА ФОРМИ БРОНЮВАННЯ
  const form = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Зупиняємо перезавантаження сторінки
      
      // Ховаємо форму і показуємо повідомлення про успіх
      form.style.display = "none";
      successMessage.style.display = "block";
      
      // Плавно прокручуємо до повідомлення
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

});
