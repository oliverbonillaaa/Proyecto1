// Animación al cargar cada tarjeta del menú
const cards = document.querySelectorAll('.menu-card');

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200 * index);
});

// Pequeño mensaje de bienvenida
console.log("Página de menú cargada correctamente.");
