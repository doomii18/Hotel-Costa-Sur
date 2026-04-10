// Datos de habitaciones según la lista proporcionada (25 habitaciones)
// SOLO las habitaciones 23, 24 y 25 tienen aire acondicionado (aire: true)
// El resto tienen ventilador automáticamente (aire: false)
const habitaciones = [
  { id: 1, nombre: "Habitación 1", tipo: "Dos camas", categoria: "estandar", precio: 500, caracteristicas: ["2 camas, Matrimonial e Individual", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 2, nombre: "Habitación 2", tipo: "Dos camas", categoria: "estandar", precio: 500, caracteristicas: ["2 camas, Matrimonial e Individual", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 3, nombre: "Habitación 3", tipo: "Matrimonial", categoria: "economicas", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 4, nombre: "Habitación 4", tipo: "Dos camas", categoria: "estandar", precio: 500, caracteristicas: ["2 camas Individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 5, nombre: "Habitación 5", tipo: "Matrimonial", categoria: "economicas", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 6, nombre: "Habitación 6", tipo: "Matrimonial", categoria: "economicas", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 7, nombre: "Habitación 7", tipo: "Dos camas con TV", categoria: "estandar", precio: 550, caracteristicas: ["2 camas Individuales", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 8, nombre: "Habitación 8", tipo: "Dos camas con TV", categoria: "estandar", precio: 550, caracteristicas: ["2 camas Individuales", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 9, nombre: "Habitación 9", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 10, nombre: "Habitación 10", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 11, nombre: "Habitación 11", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 12, nombre: "Habitación 12", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 13, nombre: "Habitación 13", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 14, nombre: "Habitación 14", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 15, nombre: "Habitación 15", tipo: "Matrimonial", categoria: "economicas", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 16, nombre: "Habitación 16", tipo: "Doble cama sin TV", categoria: "estandar", precio: 500, caracteristicas: ["2 camas Individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 17, nombre: "Habitación 17", tipo: "Matrimonial", categoria: "economicas", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 18, nombre: "Habitación 18", tipo: "Matrimonial", categoria: "economicas", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 19, nombre: "Habitación 19", tipo: "Dos camas matrimoniales", categoria: "familiares", precio: 700, caracteristicas: ["2 camas matrimoniales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 20, nombre: "Habitación 20", tipo: "Cuatro camas", categoria: "familiares", precio: 900, caracteristicas: ["4 camas individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 21, nombre: "Habitación 21", tipo: "Triple cama", categoria: "familiares", precio: 700, caracteristicas: ["3 camas individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 22, nombre: "Habitación 22", tipo: "Doble cama con TV", categoria: "estandar", precio: 550, caracteristicas: ["2 camas Individuales", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 23, nombre: "Habitación 23", tipo: "Con Aire Acondicionado", categoria: "premium", precio: 1100, caracteristicas: ["Cama King", "Baño privado", "Aire Acondicionado"], disponible: true, televisor: true, aire: true },
  { id: 24, nombre: "Habitación 24", tipo: "Con Aire Acondicionado", categoria: "premium", precio: 1100, caracteristicas: ["Cama King", "Baño privado", "Aire Acondicionado"], disponible: false, televisor: true, aire: true },
  { id: 25, nombre: "Habitación 25", tipo: "Con Aire Acondicionado", categoria: "premium", precio: 1100, caracteristicas: ["Cama King", "Baño privado", "Aire Acondicionado"], disponible: true, televisor: true, aire: true }
];

// Renderizar habitaciones en el grid
function renderRooms(filter = "all") {
  const container = document.getElementById('roomsContainer');
  if (!container) return;
  
  let filteredRooms = habitaciones;
  
  // Filtros mejorados
  if (filter === "economicas") {
    // Habitaciones económicas: precio 400 - 500
    filteredRooms = habitaciones.filter(room => room.precio >= 400 && room.precio <= 500);
  } else if (filter === "familiares") {
    // Habitaciones familiares: precio 550 - 900
    filteredRooms = habitaciones.filter(room => room.precio >= 550 && room.precio <= 900);
  } else if (filter === "premium") {
    // Habitaciones premium: solo las de 1100 (con aire acondicionado)
    filteredRooms = habitaciones.filter(room => room.precio === 1100);
  } else if (filter === "aire") {
    // Habitaciones con aire acondicionado (solo 23, 24, 25)
    filteredRooms = habitaciones.filter(room => room.aire === true);
  }
  
  if (filteredRooms.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 3rem;">🚫 No hay habitaciones en esta categoría</div>';
    return;
  }
  
  container.innerHTML = filteredRooms.map(room => {
    // Generar características adicionales según el tipo de habitación
    let extraFeatures = [];
    
    // Agregar TV si tiene
    if (room.televisor) extraFeatures.push("📺 TV");
    
    // Agregar Aire Acondicionado si tiene (solo habitaciones 23, 24, 25)
    if (room.aire) extraFeatures.push("❄️ Aire Acondicionado");
    
    // IMPORTANTE: Si NO tiene aire acondicionado, agregar ventilador
    if (!room.aire) extraFeatures.push("💨 Ventilador");
    
    // Unir todas las características
    const allFeatures = [...room.caracteristicas, ...extraFeatures];
    
    // Elegir imagen según el tipo de habitación
    let roomImage = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=200&fit=crop";
    if (room.aire) {
      roomImage = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=200&fit=crop";
    } else if (room.televisor) {
      roomImage = "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=200&fit=crop";
    }
    
    return `
      <div class="room-card" data-room-id="${room.id}">
        <img src="${roomImage}" alt="${room.nombre}" class="room-card__img">
        <div class="room-card__content">
          <h3 class="room-card__title">${room.nombre} - ${room.tipo}</h3>
          <div class="room-card__features">
            ${allFeatures.map(f => `<span class="feature-tag">${f}</span>`).join('')}
          </div>
          <div class="room-card__price">
            $${room.precio} <small>/ noche</small>
          </div>
          <div class="room-status ${room.disponible ? 'status--available' : 'status--booked'}">
            ${room.disponible ? '✓ Disponible' : '✗ Reservado'}
          </div>
          <button class="room-card__btn" onclick="reservarHabitacion(${room.id}, '${room.nombre} - ${room.tipo}')" ${!room.disponible ? 'disabled' : ''}>
            ${room.disponible ? 'Reservar ahora' : 'No disponible'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Función global para reservar desde tarjeta
window.reservarHabitacion = function(roomId, roomName) {
  const habitacion = habitaciones.find(r => r.id === roomId);
  if (!habitacion || !habitacion.disponible) {
    alert("❌ Lo sentimos, esta habitación ya está reservada.");
    return;
  }
  // Guardar habitación seleccionada en localStorage
  localStorage.setItem('habitacionReserva', JSON.stringify({ 
    id: roomId, 
    nombre: roomName, 
    precio: habitacion.precio 
  }));
  mostrarPopup();
};

// Funciones del popup
let popupTimer;
const popup = document.getElementById('reservaPopup');

function mostrarPopup() {
  if (popup) popup.style.display = 'flex';
}

function cerrarPopup() {
  if (popup) popup.style.display = 'none';
}

// Cerrar popup con botón X y cancelar
const closeBtn = document.getElementById('closePopupBtn');
const cancelBtn = document.getElementById('cancelPopupBtn');
if (closeBtn) closeBtn.onclick = cerrarPopup;
if (cancelBtn) cancelBtn.onclick = cerrarPopup;

// Enviar formulario del popup
const popupForm = document.getElementById('popupForm');
if (popupForm) {
  popupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('popupNombre').value.trim();
    const email = document.getElementById('popupEmail').value.trim();
    const telefono = document.getElementById('popupTelefono').value.trim();
    const ciudad = document.getElementById('popupCiudad').value.trim();
    
    if (!nombre || !email || !telefono || !ciudad) {
      alert("⚠️ Por favor, completa todos los campos para reservar.");
      return;
    }
    
    // Validar email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Por favor, ingresa un correo electrónico válido.");
      return;
    }
    
    // Verificar si hay habitación seleccionada
    let habitacionSeleccionada = localStorage.getItem('habitacionReserva');
    let mensajeHabitacion = "";
    if (habitacionSeleccionada) {
      const hab = JSON.parse(habitacionSeleccionada);
      mensajeHabitacion = `\n📌 Habitación: ${hab.nombre} - $${hab.precio}/noche`;
    } else {
      mensajeHabitacion = "\n📌 Habitación: Por definir (contactaremos)";
    }
    
    // Simular envío de datos
    alert(`✅ ¡Gracias ${nombre}! Tu solicitud de reserva ha sido recibida.\n\n📧 Te enviaremos un correo a ${email}\n📞 Nos pondremos en contacto al ${telefono}\n📍 Origen: ${ciudad}${mensajeHabitacion}\n\n🎉 Un asesor te responderá en máximo 15 minutos.`);
    
    // Limpiar localStorage y cerrar popup
    localStorage.removeItem('habitacionReserva');
    cerrarPopup();
    
    // Resetear formulario
    popupForm.reset();
  });
}

// Popup automático a los 2 minutos (120000 ms)
function iniciarPopupAutomatico() {
  popupTimer = setTimeout(() => {
    if (popup && popup.style.display !== 'flex') {
      mostrarPopup();
    }
  }, 120000);
}

// Botón hero
const heroBtn = document.getElementById('heroReservarBtn');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    mostrarPopup();
  });
}

// Configurar filtros
function setupFilters() {
  const filters = document.querySelectorAll('.filter-btn');
  if (filters.length > 0) {
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        // Actualizar clase activa
        filters.forEach(b => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');
        
        // Filtrar habitaciones
        const filterValue = btn.getAttribute('data-filter');
        renderRooms(filterValue);
      });
    });
  }
}

// Inicializar todo al cargar
document.addEventListener('DOMContentLoaded', () => {
  renderRooms("all");
  setupFilters();
  iniciarPopupAutomatico();
});

// Hacer clic fuera del popup para cerrar (opcional)
if (popup) {
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      cerrarPopup();
    }
  });
}