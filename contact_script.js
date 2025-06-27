/// ---- Menu ----
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  toggle.addEventListener("click", function () {
    menuList.classList.toggle("active");
  });
});

// Inicializar EmailJS con tu Public Key
emailjs.init('emwGBmm1eWAZoci89'); // Reemplaza con tu clave pública

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    
    // Opcional: mostrar estado de carga
    const submitBtn = document.getElementById('submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Enviar con EmailJS
    emailjs.sendForm('service_5pm21nn', 'template_i7yga1j', this)
        .then(function() {
            alert('¡Mensaje enviado exitosamente!');
            document.getElementById('contact-form').reset(); // Limpiar formulario
        })
        .catch(function(error) {
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
            console.error('Error:', error);
        })
        .finally(function() {
            // Restaurar botón
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});