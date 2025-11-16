// --- INTERACCIÓN PROFESIONAL PARA CAFETERÍA AURORA ---


const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});


const elementosAnimados = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elementosAnimados.forEach((el) => observer.observe(el));


const imgs = document.querySelectorAll(".img-galeria");
const modal = document.createElement("div");
modal.id = "modal-img";
document.body.appendChild(modal);



imgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    const imgGrande = document.createElement("img");
    imgGrande.src = img.src;
    imgGrande.classList.add("img-expandida");

    // Limpiar modal antes de agregar la nueva imagen
    modal.innerHTML = "";
    modal.appendChild(imgGrande);
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});


const downloadBtn = document.getElementById("download-menu");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const contenido = `CAFETERÍA AURORA\nMenú Premium\n\nBebidas Especiales:\n- Latte Aurora\n- Cappuccino Cremoso\n- Mocha Caramelo\n- Frappé de Vainilla\n\nPostres Artesanales:\n- Cheesecake de Fresa\n- Brownie Casero\n- Tarta de Limón\n- Muffins de Vainilla`;

    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Menu-Cafeteria-Aurora.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

// ⭐ Efecto suave de scroll
const enlaces = document.querySelectorAll("a[href^='#']");

enlaces.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});