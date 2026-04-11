// ============================================
// DATOS DE HABITACIONES (25 habitaciones)
// ============================================
const habitaciones = [
  { id: 1, nombre: "Habitación 1", tipo: "Dos camas", categoria: "estandar", precio: 500, caracteristicas: ["2 camas, Matrimonial e Individual", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 2, nombre: "Habitación 2", tipo: "Dos camas", categoria: "estandar", precio: 500, caracteristicas: ["2 camas, Matrimonial e Individual", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 3, nombre: "Habitación 3", tipo: "Matrimonial", categoria: "estandar", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 4, nombre: "Habitación 4", tipo: "Dos camas", categoria: "estandar", precio: 500, caracteristicas: ["2 camas Individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 5, nombre: "Habitación 5", tipo: "Matrimonial", categoria: "estandar", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 6, nombre: "Habitación 6", tipo: "Matrimonial", categoria: "estandar", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 7, nombre: "Habitación 7", tipo: "Dos camas con TV", categoria: "familiares", precio: 550, caracteristicas: ["2 camas Individuales", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 8, nombre: "Habitación 8", tipo: "Dos camas con TV", categoria: "familiares", precio: 550, caracteristicas: ["2 camas Individuales", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 9, nombre: "Habitación 9", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 10, nombre: "Habitación 10", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 11, nombre: "Habitación 11", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 12, nombre: "Habitación 12", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 13, nombre: "Habitación 13", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 14, nombre: "Habitación 14", tipo: "Matrimonial con TV", categoria: "estandar", precio: 450, caracteristicas: ["Cama matrimonial", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 15, nombre: "Habitación 15", tipo: "Matrimonial", categoria: "estandar", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 16, nombre: "Habitación 16", tipo: "Doble cama sin TV", categoria: "estandar", precio: 500, caracteristicas: ["2 camas Individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 17, nombre: "Habitación 17", tipo: "Matrimonial", categoria: "estandar", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 18, nombre: "Habitación 18", tipo: "Matrimonial", categoria: "estandar", precio: 400, caracteristicas: ["Cama matrimonial", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 19, nombre: "Habitación 19", tipo: "Dos camas matrimoniales", categoria: "familiares", precio: 700, caracteristicas: ["2 camas matrimoniales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 20, nombre: "Habitación 20", tipo: "Cuatro camas", categoria: "familiares", precio: 900, caracteristicas: ["4 camas individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 21, nombre: "Habitación 21", tipo: "Triple cama", categoria: "familiares", precio: 700, caracteristicas: ["3 camas individuales", "Baño privado"], disponible: true, televisor: false, aire: false },
  { id: 22, nombre: "Habitación 22", tipo: "Doble cama con TV", categoria: "familiares", precio: 550, caracteristicas: ["2 camas Individuales", "Baño privado", "Televisor"], disponible: true, televisor: true, aire: false },
  { id: 23, nombre: "Habitación 23", tipo: "Cama Matrimonial", categoria: "premium", precio: 1100, caracteristicas: ["Cama Queen", "Baño privado", "Aire Acondicionado"], disponible: true, televisor: true, aire: true },
  { id: 24, nombre: "Habitación 24", tipo: "Cama Matrimonial", categoria: "premium", precio: 1100, caracteristicas: ["Cama Queen", "Baño privado", "Aire Acondicionado"], disponible: false, televisor: true, aire: true },
  { id: 25, nombre: "Habitación 25", tipo: "Cama Matrimonial", categoria: "premium", precio: 1100, caracteristicas: ["Cama Queen", "Baño privado", "Aire Acondicionado"], disponible: true, televisor: true, aire: true }
];

// ============================================
// SISTEMA DE USUARIOS Y RESERVAS (localStorage)
// ============================================

// Inicializar datos si no existen
function initData() {
  if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify([]));
  }
  if (!localStorage.getItem('reservas')) {
    localStorage.setItem('reservas', JSON.stringify([]));
  }
  if (!localStorage.getItem('usuarioActual')) {
    localStorage.setItem('usuarioActual', JSON.stringify(null));
  }
}

// Obtener usuario actual
function getUsuarioActual() {
  return JSON.parse(localStorage.getItem('usuarioActual'));
}

// Guardar usuario actual
function setUsuarioActual(usuario) {
  localStorage.setItem('usuarioActual', JSON.stringify(usuario));
}

// Obtener todos los usuarios
function getUsuarios() {
  return JSON.parse(localStorage.getItem('usuarios'));
}

// Guardar usuarios
function setUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Obtener reservas
function getReservas() {
  return JSON.parse(localStorage.getItem('reservas'));
}

// Guardar reservas
function setReservas(reservas) {
  localStorage.setItem('reservas', JSON.stringify(reservas));
}

// Registrar usuario
function registrarUsuario(datos) {
  const usuarios = getUsuarios();
  const existe = usuarios.find(u => u.email === datos.email);
  if (existe) {
    alert("⚠️ Este correo ya está registrado.");
    return false;
  }
  
  const nuevoUsuario = {
    id: Date.now(),
    ...datos,
    fechaRegistro: new Date().toISOString()
  };
  usuarios.push(nuevoUsuario);
  setUsuarios(usuarios);
  alert(" ¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.");
  return true;
}

// Iniciar sesión - Login con NOMBRE DE USUARIO
function loginUsuario(nombre, password) {
  const usuarios = getUsuarios();
  const usuario = usuarios.find(u => u.nombre === nombre && u.password === password);
  if (usuario) {
    setUsuarioActual(usuario);
    actualizarHeaderUsuario();
    alert(`¡Bienvenido ${usuario.nombre}!`);
    return true;
  } else {
    alert("❌ Usuario o contraseña incorrectos.");
    return false;
  }
}

// Cerrar sesión
function logoutUsuario() {
  setUsuarioActual(null);
  actualizarHeaderUsuario();
  alert("👋 Has cerrado sesión.");
}

// Actualizar header con nombre de usuario
function actualizarHeaderUsuario() {
  const usuario = getUsuarioActual();
  const userNameSpan = document.getElementById('userNameDisplay');
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (usuario) {
    if (userNameSpan) userNameSpan.textContent = `👤 ${usuario.nombre}`;
    if (logoutBtn) logoutBtn.style.display = 'block';
  } else {
    if (userNameSpan) userNameSpan.textContent = '';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

// Calcular días entre fechas
function calcularDias(fechaIngreso, fechaSalida) {
  const inicio = new Date(fechaIngreso);
  const fin = new Date(fechaSalida);
  const diffTime = Math.abs(fin - inicio);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Calcular total
function calcularTotal(precioPorNoche, dias, huespedes) {
  let total = precioPorNoche * dias;
  if (huespedes > 2) {
    total += (huespedes - 2) * 150;
  }
  return total;
}

// Actualizar total de pago automáticamente
function actualizarTotalPago() {
  const fechaIngreso = document.getElementById('fechaIngreso').value;
  const fechaSalida = document.getElementById('fechaSalida').value;
  const diasEstancia = document.getElementById('diasEstancia');
  const totalInput = document.getElementById('totalPago');
  
  if (fechaIngreso && fechaSalida && habitacionSeleccionada) {
    const dias = calcularDias(fechaIngreso, fechaSalida);
    if (diasEstancia) diasEstancia.value = dias > 0 ? dias : 0;
    
    if (dias > 0) {
      const total = habitacionSeleccionada.precio * dias;
      if (totalInput) totalInput.value = total.toFixed(2);
    } else {
      if (totalInput) totalInput.value = '';
    }
  }
}

// Crear reserva - ACTUALIZADA con todos los campos
function crearReserva(reservaData) {
  const usuario = getUsuarioActual();
  if (!usuario) {
    alert("⚠️ Debes iniciar sesión para reservar.");
    return false;
  }
  
  const reservas = getReservas();
  const nuevaReserva = {
    id: Date.now(),
    usuarioId: usuario.id,
    usuarioNombre: usuario.nombre,
    usuarioEmail: usuario.email,
    ...reservaData,
    fechaReserva: new Date().toISOString()
  };
  reservas.push(nuevaReserva);
  setReservas(reservas);
  
  // Marcar habitación como no disponible
  const habitacion = habitaciones.find(h => h.id === reservaData.habitacionId);
  if (habitacion) habitacion.disponible = false;
  
  alert(` ¡RESERVA CONFIRMADA ${usuario.nombre.toUpperCase()}!\n\nHabitación: ${reservaData.habitacionNombre}\n💰 Precio por noche: C$${reservaData.precioPorNoche}\n📅 Fecha ingreso: ${reservaData.fechaIngreso}\n📅 Fecha salida: ${reservaData.fechaSalida}\n📆 Días: ${reservaData.dias}\n👥 Huéspedes: ${reservaData.huespedes}\n💳 Método de pago: ${reservaData.metodoPago}\n💵 TOTAL: C$${reservaData.total}\n\n👤 Datos del huésped:\n📛 Nombre: ${reservaData.nombres} ${reservaData.apellidos}\n🆔 Cédula: ${reservaData.cedula}\n🎂 Fecha nacimiento: ${reservaData.fechaNacimiento}\n🌍 Nacionalidad: ${reservaData.nacionalidad}\n📍 Procedencia: ${reservaData.procedencia}\n⚥ Sexo: ${reservaData.sexo}\n\n¡Gracias por reservar en Hotel Costa Sur!`);
  return true;
}

// Obtener reservas del usuario actual
function getMisReservas() {
  const usuario = getUsuarioActual();
  if (!usuario) return [];
  const reservas = getReservas();
  return reservas.filter(r => r.usuarioId === usuario.id).sort((a, b) => new Date(b.fechaReserva) - new Date(a.fechaReserva));
}

// ============================================
// RENDERIZAR HABITACIONES
// ============================================
function renderRooms(filter = "all") {
  const container = document.getElementById('roomsContainer');
  if (!container) return;
  
  let filteredRooms = habitaciones;
  
  if (filter === "estandar") {
    filteredRooms = habitaciones.filter(room => room.precio >= 400 && room.precio <= 500);
  } else if (filter === "familiares") {
    filteredRooms = habitaciones.filter(room => room.precio >= 550 && room.precio <= 900);
  } else if (filter === "aire") {
    filteredRooms = habitaciones.filter(room => room.aire === true);
  }
  
  if (filteredRooms.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 3rem;">🚫 No hay habitaciones en esta categoría</div>';
    return;
  }
  
  container.innerHTML = filteredRooms.map(room => {
    let extraFeatures = [];
    if (room.televisor) extraFeatures.push("📺 TV");
    if (room.aire) extraFeatures.push("❄️ Aire Acondicionado");
    if (!room.aire) extraFeatures.push("💨 Ventilador");
    
    const allFeatures = [...room.caracteristicas, ...extraFeatures];
    
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
            C$${room.precio} 
          </div>
          <div class="room-status ${room.disponible ? 'status--available' : 'status--booked'}">
            ${room.disponible ? '✓ Disponible' : '✗ Reservado'}
          </div>
          <button class="room-card__btn" onclick="seleccionarHabitacion(${room.id}, '${room.nombre} - ${room.tipo}', ${room.precio})" ${!room.disponible ? 'disabled' : ''}>
            ${room.disponible ? 'Reservar ahora' : 'No disponible'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Variable global para la habitación seleccionada
let habitacionSeleccionada = null;

// Seleccionar habitación
window.seleccionarHabitacion = function(id, nombre, precio) {
  const usuario = getUsuarioActual();
  if (!usuario) {
    alert("⚠️ Debes iniciar sesión para reservar.");
    mostrarPopup('loginPopup');
    return;
  }
  
  habitacionSeleccionada = { id, nombre, precio };
  
  const reservaInfo = document.getElementById('reservaHabitacionInfo');
  if (reservaInfo) reservaInfo.textContent = ` ${nombre} - C$${precio} por noche`;
  mostrarPopup('reservaPopup');
};

// ============================================
// FUNCIONES DE POPUPS
// ============================================
function cerrarPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) popup.style.display = 'none';
}

function mostrarPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) popup.style.display = 'flex';
}

// ============================================
// CONFIGURAR FILTROS
// ============================================
function setupFilters() {
  const filters = document.querySelectorAll('.filter-btn');
  if (filters.length > 0) {
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');
        const filterValue = btn.getAttribute('data-filter');
        renderRooms(filterValue);
      });
    });
  }
}

// ============================================
// MOSTRAR MIS RESERVAS
// ============================================
function mostrarMisReservas() {
  const usuario = getUsuarioActual();
  if (!usuario) {
    alert("⚠️ Debes iniciar sesión para ver tus reservas.");
    mostrarPopup('loginPopup');
    return;
  }
  
  const misReservas = getMisReservas();
  const container = document.getElementById('misReservasContent');
  
  if (misReservas.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 2rem;"> No tienes reservas aún. ¡Reserva ahora!</p>';
  } else {
    container.innerHTML = misReservas.map(reserva => `
      <div class="reserva-item" onclick="verDetalleReserva(${reserva.id})">
        <div class="reserva-header">
          <span class="reserva-habitacion"> ${reserva.habitacionNombre}</span>
          <span class="reserva-fecha"> ${new Date(reserva.fechaReserva).toLocaleDateString()}</span>
        </div>
        <div class="reserva-info">
          <span> ${reserva.dias} días / ${reserva.noches} noches</span>
          <span> ${reserva.huespedes} huéspedes</span>
          <span class="reserva-precio"> C$${reserva.total}</span>
        </div>
        <button class="btn-ver-detalle" onclick="event.stopPropagation(); verDetalleReserva(${reserva.id})"> Ver detalle</button>
      </div>
    `).join('');
  }
  mostrarPopup('misReservasPopup');
}

// Ver detalle de reserva - ACTUALIZADA
window.verDetalleReserva = function(reservaId) {
  const reservas = getReservas();
  const reserva = reservas.find(r => r.id === reservaId);
  if (!reserva) return;
  
  const container = document.getElementById('detalleReservaContent');
  container.innerHTML = `
    <h4>INFORMACIÓN DE LA RESERVA</h4>
    <p><strong>Habitación:</strong> ${reserva.habitacionNombre}</p>
    <p><strong>Precio por noche:</strong> C$${reserva.precioPorNoche}</p>
    <p><strong>Fecha ingreso:</strong> ${reserva.fechaIngreso}</p>
    <p><strong>Fecha salida:</strong> ${reserva.fechaSalida}</p>
    <p><strong>Días:</strong> ${reserva.dias} días / ${reserva.noches} noches</p>
    <p><strong>Huéspedes:</strong> ${reserva.huespedes}</p>
    <p><strong>Método de pago:</strong> ${reserva.metodoPago}</p>
    <p><strong>Total:</strong> C$${reserva.total}</p>
    <hr>
    <h4>👤 DATOS DEL HUÉSPED</h4>
    <p><strong>Cédula:</strong> ${reserva.cedula || 'N/A'}</p>
    <p><strong>Nombre completo:</strong> ${reserva.nombres || ''} ${reserva.apellidos || ''}</p>
    <p><strong>Sexo:</strong> ${reserva.sexo || 'N/A'}</p>
    <p><strong>Fecha de nacimiento:</strong> ${reserva.fechaNacimiento || 'N/A'}</p>
    <p><strong>Nacionalidad:</strong> ${reserva.nacionalidad || 'N/A'}</p>
    <p><strong>Procedencia:</strong> ${reserva.procedencia || 'N/A'}</p>
    <hr>
    <p><strong> Reservado el:</strong> ${new Date(reserva.fechaReserva).toLocaleString()}</p>
  `;
  mostrarPopup('detalleReservaPopup');
};

// ============================================
// PANEL DE ADMIN (doble clic en el título)
// ============================================
function mostrarAdminPanel() {
  const usuarios = getUsuarios();
  const reservas = getReservas();
  const container = document.getElementById('adminContent');
  
  container.innerHTML = `
    <h4> Estadísticas</h4>
    <p> Total usuarios: ${usuarios.length}</p>
    <p> Total reservas: ${reservas.length}</p>
    <hr>
    <h4>👥 Usuarios Registrados</h4>
    ${usuarios.map(user => `
      <div class="admin-usuario">
        <h4>${user.nombre} (${user.email})</h4>
        <p> Registrado: ${new Date(user.fechaRegistro).toLocaleDateString()}</p>
        <div class="admin-reservas">
          <strong> Reservas (${reservas.filter(r => r.usuarioId === user.id).length}):</strong>
          ${reservas.filter(r => r.usuarioId === user.id).map(r => `
            <div class="admin-reserva-item">
              ${r.habitacionNombre} - ${r.dias} días - C$${r.total}
            </div>
          `).join('') || '<p>Sin reservas</p>'}
        </div>
      </div>
    `).join('')}
  `;
  mostrarPopup('adminPopup');
}

// ============================================
// EVENTOS DEL DOM
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderRooms("all");
  setupFilters();
  actualizarHeaderUsuario();
  
  // ========== EVENTOS DE REGISTRO ==========
  const registroForm = document.getElementById('registroForm');
  if (registroForm) {
    registroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const datos = {
        nombre: document.getElementById('regNombre').value.trim(),
        email: document.getElementById('regEmail').value.trim(),
        password: document.getElementById('regPassword').value.trim(),
      };
      
      if (!datos.nombre || !datos.email || !datos.password) {
        alert("⚠️ Por favor, completa todos los campos.");
        return;
      }
      
      if (registrarUsuario(datos)) {
        cerrarPopup('registroPopup');
        registroForm.reset();
      }
    });
  }
  
  // ========== EVENTOS DE LOGIN ==========
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usuario = document.getElementById('loginUsuario').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      
      if (!usuario || !password) {
        alert("⚠️ Completa todos los campos.");
        return;
      }
      
      if (loginUsuario(usuario, password)) {
        cerrarPopup('loginPopup');
        loginForm.reset();
      }
    });
  }
  
  // ========== EVENTOS DE RESERVA - CORREGIDO ==========
  const reservaForm = document.getElementById('popupForm');
  if (reservaForm) {
    // Configurar event listeners para fechas
    const fechaIngreso = document.getElementById('fechaIngreso');
    const fechaSalida = document.getElementById('fechaSalida');
    const diasEstancia = document.getElementById('diasEstancia');
    
    if (fechaIngreso && fechaSalida) {
      const actualizarDiasYTotal = () => {
        if (fechaIngreso.value && fechaSalida.value && habitacionSeleccionada) {
          const dias = calcularDias(fechaIngreso.value, fechaSalida.value);
          if (diasEstancia) diasEstancia.value = dias > 0 ? dias : 0;
          if (dias > 0) {
            const total = habitacionSeleccionada.precio * dias;
            const totalInput = document.getElementById('totalPago');
            if (totalInput) totalInput.value = total.toFixed(2);
          }
        }
      };
      fechaIngreso.addEventListener('change', actualizarDiasYTotal);
      fechaSalida.addEventListener('change', actualizarDiasYTotal);
    }
    
    reservaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!habitacionSeleccionada) {
        alert("⚠️ Por favor, selecciona una habitación primero.");
        return;
      }
      
      // Obtener todos los valores del formulario
      const cedula = document.getElementById('cedula')?.value.trim();
      const nombres = document.getElementById('nombres')?.value.trim();
      const apellidos = document.getElementById('apellidos')?.value.trim();
      const sexo = document.getElementById('sexo')?.value;
      const fechaNacimiento = document.getElementById('fechaNacimiento')?.value;
      const nacionalidad = document.getElementById('nacionalidad')?.value.trim();
      const procedencia = document.getElementById('procedencia')?.value.trim();
      const fechaIngresoVal = document.getElementById('fechaIngreso')?.value;
      const fechaSalidaVal = document.getElementById('fechaSalida')?.value;
      const huespedes = parseInt(document.getElementById('numHuespedes')?.value);
      const metodoPago = document.getElementById('metodoPago')?.value;
      
      // Validar todos los campos requeridos
      if (!cedula || !nombres || !apellidos || !sexo || !fechaNacimiento || 
          !nacionalidad || !procedencia || !fechaIngresoVal || !fechaSalidaVal || 
          !huespedes || !metodoPago) {
        alert("⚠️ Por favor, completa TODOS los campos del formulario.");
        return;
      }
      
      const dias = calcularDias(fechaIngresoVal, fechaSalidaVal);
      if (dias <= 0) {
        alert("⚠️ La fecha de salida debe ser posterior a la fecha de ingreso.");
        return;
      }
      
      const total = habitacionSeleccionada.precio * dias;
      
      const reservaData = {
        habitacionId: habitacionSeleccionada.id,
        habitacionNombre: habitacionSeleccionada.nombre,
        precioPorNoche: habitacionSeleccionada.precio,
        // Datos personales
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        sexo: sexo,
        fechaNacimiento: fechaNacimiento,
        nacionalidad: nacionalidad,
        procedencia: procedencia,
        // Datos de estadía
        fechaIngreso: fechaIngresoVal,
        fechaSalida: fechaSalidaVal,
        dias: dias,
        noches: dias,
        huespedes: huespedes,
        metodoPago: metodoPago,
        total: total
      };
      
      if (crearReserva(reservaData)) {
        cerrarPopup('reservaPopup');
        reservaForm.reset();
        if (diasEstancia) diasEstancia.value = '';
        const totalInput = document.getElementById('totalPago');
        if (totalInput) totalInput.value = '';
        habitacionSeleccionada = null;
        renderRooms(document.querySelector('.filter-btn--active')?.getAttribute('data-filter') || "all");
      }
    });
  }
  
  // ========== BOTONES DE CIERRE DE POPUPS ==========
  const closeButtons = [
    'closeRegistroPopupBtn', 'cancelRegistroBtn', 'irLoginLink',
    'closeLoginPopupBtn', 'cancelLoginBtn', 'irRegistroLink',
    'closePopupBtn', 'cancelPopupBtn',
    'closeDetallePopupBtn', 'cerrarDetalleBtn',
    'closeMisReservasBtn', 'closeAdminBtn'
  ];
  
  closeButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.onclick = () => {
        const popup = btn.closest('.popup');
        if (popup) popup.style.display = 'none';
      };
    }
  });
  
  // Navegación entre login/registro
  const irRegistroLink = document.getElementById('irRegistroLink');
  const irLoginLink = document.getElementById('irLoginLink');
  if (irRegistroLink) irRegistroLink.onclick = (e) => {
    e.preventDefault();
    cerrarPopup('loginPopup');
    mostrarPopup('registroPopup');
  };
  if (irLoginLink) irLoginLink.onclick = (e) => {
    e.preventDefault();
    cerrarPopup('registroPopup');
    mostrarPopup('loginPopup');
  };
  
  // Botón hero reservar
  const heroBtn = document.getElementById('heroReservarBtn');
  if (heroBtn) {
    heroBtn.onclick = () => {
      const usuario = getUsuarioActual();
      if (!usuario) {
        mostrarPopup('loginPopup');
      } else {
        alert("👋 " + usuario.nombre + ", selecciona una habitación para reservar.");
      }
    };
  }
  
  // Botón Mis Reservas
  const misReservasLink = document.getElementById('misReservasLink');
  if (misReservasLink) misReservasLink.onclick = (e) => {
    e.preventDefault();
    mostrarMisReservas();
  };
  
  // Botón cerrar sesión
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.onclick = () => logoutUsuario();
  
  // Admin: doble clic en el título del header
  const headerTitle = document.querySelector('.header__title');
  if (headerTitle) {
    headerTitle.addEventListener('dblclick', () => {
      mostrarAdminPanel();
    });
  }
  

  
  // Cerrar popups al hacer clic fuera
  document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) popup.style.display = 'none';
    });
  });

    // ========== POPUP AUTOMÁTICO A LOS 3 SEGUNDOS ==========
  setTimeout(() => {
    const usuario = getUsuarioActual();
    const loginPopup = document.getElementById('loginPopup');
    const registroPopup = document.getElementById('registroPopup');
    
    // Solo mostrar popup de login si no hay usuario logueado y ningún popup está visible
    if (!usuario && loginPopup && loginPopup.style.display !== 'flex' && 
        registroPopup && registroPopup.style.display !== 'flex') {
      mostrarPopup('loginPopup');
    }
  }, 3000); // 3000 milisegundos = 3 segundos

});