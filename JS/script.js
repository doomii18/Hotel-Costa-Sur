// DATOS DE HABITACIONES (25 habitaciones reales)
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
  { id: 23, nombre: "Habitación 23", tipo: "Cama Matrimonial", categoria: "aire", precio: 1100, caracteristicas: ["Cama Queen", "Baño privado", "Aire Acondicionado"], disponible: true, televisor: true, aire: true },
  { id: 24, nombre: "Habitación 24", tipo: "Cama Matrimonial", categoria: "aire", precio: 1100, caracteristicas: ["Cama Queen", "Baño privado", "Aire Acondicionado"], disponible: false, televisor: true, aire: true },
  { id: 25, nombre: "Habitación 25", tipo: "Cama Matrimonial", categoria: "aire", precio: 1100, caracteristicas: ["Cama Queen", "Baño privado", "Aire Acondicionado"], disponible: true, televisor: true, aire: true }
];

// SISTEMA DE USUARIOS Y RESERVAS (localStorage)
function initData() {
  if (!localStorage.getItem('usuarios')) localStorage.setItem('usuarios', JSON.stringify([]));
  if (!localStorage.getItem('reservas')) localStorage.setItem('reservas', JSON.stringify([]));
  if (!localStorage.getItem('usuarioActual')) localStorage.setItem('usuarioActual', JSON.stringify(null));
}
function getUsuarioActual() { return JSON.parse(localStorage.getItem('usuarioActual')); }
function setUsuarioActual(usuario) { localStorage.setItem('usuarioActual', JSON.stringify(usuario)); }
function getUsuarios() { return JSON.parse(localStorage.getItem('usuarios')); }
function setUsuarios(usuarios) { localStorage.setItem('usuarios', JSON.stringify(usuarios)); }
function getReservas() { return JSON.parse(localStorage.getItem('reservas')); }
function setReservas(reservas) { localStorage.setItem('reservas', JSON.stringify(reservas)); }

function registrarUsuario(datos) {
  const usuarios = getUsuarios();
  if (usuarios.find(u => u.email === datos.email)) { alert("⚠️ Este correo ya está registrado."); return false; }
  const nuevoUsuario = { id: Date.now(), ...datos, fechaRegistro: new Date().toISOString() };
  usuarios.push(nuevoUsuario);
  setUsuarios(usuarios);
  alert("✅ ¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.");
  return true;
}

function loginUsuario(nombre, password) {
  const usuarios = getUsuarios();
  const usuario = usuarios.find(u => u.nombre === nombre && u.password === password);
  if (usuario) {
    setUsuarioActual(usuario);
    actualizarHeaderUsuario();
    alert(`¡Bienvenido ${usuario.nombre}!`);
    return true;
  } else { alert("❌ Usuario o contraseña incorrectos."); return false; }
}

function logoutUsuario() { setUsuarioActual(null); actualizarHeaderUsuario(); alert("👋 Has cerrado sesión."); }
function actualizarHeaderUsuario() {
  const usuario = getUsuarioActual();
  const userNameSpan = document.getElementById('userNameDisplay');
  const logoutBtn = document.getElementById('logoutBtn');
  if (usuario) { if (userNameSpan) userNameSpan.textContent = `👤 ${usuario.nombre}`; if (logoutBtn) logoutBtn.style.display = 'block'; }
  else { if (userNameSpan) userNameSpan.textContent = ''; if (logoutBtn) logoutBtn.style.display = 'none'; }
}

function calcularDias(fechaIngreso, fechaSalida) {
  const diff = new Date(fechaSalida) - new Date(fechaIngreso);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function crearReserva(reservaData) {
  const usuario = getUsuarioActual();
  if (!usuario) { alert("⚠️ Debes iniciar sesión para reservar."); return false; }
  const reservas = getReservas();
  const nuevaReserva = { id: Date.now(), usuarioId: usuario.id, usuarioNombre: usuario.nombre, ...reservaData, fechaReserva: new Date().toISOString() };
  reservas.push(nuevaReserva);
  setReservas(reservas);
  const habitacion = habitaciones.find(h => h.id === reservaData.habitacionId);
  if (habitacion) habitacion.disponible = false;
  alert(`✅ RESERVA CONFIRMADA ${usuario.nombre}!\n\nHabitación: ${reservaData.habitacionNombre}\n💰 Precio por noche: C$${reservaData.precioPorNoche}\n📅 Entrada: ${reservaData.fechaIngreso} | Salida: ${reservaData.fechaSalida}\n📆 Días: ${reservaData.dias}\n👥 Huéspedes: ${reservaData.huespedes}\n💳 Método de pago: ${reservaData.metodoPago}\n💵 TOTAL: C$${reservaData.total}\n\n👤 Datos del huésped:\n📛 ${reservaData.nombres} ${reservaData.apellidos}\n🆔 Cédula: ${reservaData.cedula}\n🎂 ${reservaData.fechaNacimiento} · ${reservaData.sexo}\n🌍 ${reservaData.nacionalidad} · 📍 ${reservaData.procedencia}\n\n¡Gracias por reservar en Hotel Costa Sur!`);
  return true;
}

// RENDERIZAR HABITACIONES
let habitacionSeleccionada = null;
let currentFilter = "all";

function renderRooms(filter = "all") {
  const container = document.getElementById('roomsContainer');
  if (!container) return;
  let filtered = habitaciones;
  if (filter === "estandar") filtered = habitaciones.filter(r => r.precio >= 400 && r.precio <= 500);
  else if (filter === "familiares") filtered = habitaciones.filter(r => r.precio >= 550 && r.precio <= 900);
  else if (filter === "aire") filtered = habitaciones.filter(r => r.aire === true);
  if (filtered.length === 0) { container.innerHTML = '<div style="text-align:center; padding:3rem;">🚫 No hay habitaciones en esta categoría</div>'; return; }
  container.innerHTML = filtered.map(room => {
    let extra = [];
    if (room.televisor) extra.push("📺 TV");
    if (room.aire) extra.push("❄️ Aire Acondicionado");
    else extra.push("💨 Ventilador");
    const allFeatures = [...room.caracteristicas, ...extra];
    let img = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=200&fit=crop";
    if (room.aire) img = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=200&fit=crop";
    else if (room.televisor) img = "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=200&fit=crop";
    return `<div class="room-card" data-room-id="${room.id}">
      <img src="${img}" class="room-card__img">
      <div class="room-card__content">
        <h3 class="room-card__title">${room.nombre} - ${room.tipo}</h3>
        <div class="room-card__features">${allFeatures.map(f => `<span class="feature-tag">${f}</span>`).join('')}</div>
        <div class="room-card__price">C$${room.precio}</div>
        <div class="room-status ${room.disponible ? 'status--available' : 'status--booked'}">${room.disponible ? '✓ Disponible' : '✗ Reservado'}</div>
        <button class="room-card__btn" onclick="seleccionarHabitacion(${room.id}, '${room.nombre} - ${room.tipo}', ${room.precio})" ${!room.disponible ? 'disabled' : ''}>${room.disponible ? 'Reservar ahora' : 'No disponible'}</button>
      </div>
    </div>`;
  }).join('');
}

window.seleccionarHabitacion = function(id, nombre, precio) {
  const usuario = getUsuarioActual();
  if (!usuario) { alert("⚠️ Debes iniciar sesión para reservar."); mostrarPopup('loginPopup'); return; }
  habitacionSeleccionada = { id, nombre, precio };
  document.getElementById('reservaHabitacionInfo').textContent = `${nombre} - C$${precio} por noche`;
  mostrarPopup('reservaPopup');
};

function setupFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');
    currentFilter = btn.dataset.filter;
    renderRooms(currentFilter);
  }));
}

// FUNCIONES DE POPUPS CON BLOQUEO DE SCROLL
function blockBodyScroll(block) {
  if (block) { document.body.classList.add('popup-open'); }
  else { document.body.classList.remove('popup-open'); }
}

function mostrarPopup(id) {
  const p = document.getElementById(id);
  if (p) { p.style.display = 'flex'; blockBodyScroll(true); }
}

function cerrarPopup(id) {
  const p = document.getElementById(id);
  if (p) p.style.display = 'none';
  const anyOpen = Array.from(document.querySelectorAll('.popup')).some(pop => pop.style.display === 'flex');
  if (!anyOpen) blockBodyScroll(false);
}

document.addEventListener('click', function(e) {
  if (e.target.classList && e.target.classList.contains('popup')) {
    e.target.style.display = 'none';
    const anyOpen = Array.from(document.querySelectorAll('.popup')).some(pop => pop.style.display === 'flex');
    if (!anyOpen) blockBodyScroll(false);
  }
});

function mostrarMisReservas() {
  const usuario = getUsuarioActual();
  if (!usuario) { alert("Debes iniciar sesión."); mostrarPopup('loginPopup'); return; }
  const reservas = getReservas().filter(r => r.usuarioId === usuario.id);
  const container = document.getElementById('misReservasContent');
  if (reservas.length === 0) container.innerHTML = '<p style="text-align:center; padding:2rem;">📭 No tienes reservas aún.</p>';
  else container.innerHTML = reservas.map(r => `<div style="border:1px solid #ddd; margin-bottom:1rem; padding:1rem; border-radius:12px;"><strong>${r.habitacionNombre}</strong><br>Entrada: ${r.fechaIngreso} | Salida: ${r.fechaSalida}<br>Días: ${r.dias} | Total: C$${r.total}<br>Huésped: ${r.nombres} ${r.apellidos}</div>`).join('');
  mostrarPopup('misReservasPopup');
}

function mostrarAdmin() {
  const reservas = getReservas();
  const users = getUsuarios();
  document.getElementById('adminContent').innerHTML = `<h4>📊 Estadísticas</h4><p>Usuarios: ${users.length}</p><p>Reservas: ${reservas.length}</p><hr><h4>👥 Usuarios</h4>${users.map(u => `<div>👤 ${u.nombre} (${u.email})</div>`).join('')}<hr><h4>📋 Reservas</h4>${reservas.map(r => `<div>${r.habitacionNombre} - ${r.usuarioNombre} - C$${r.total}</div>`).join('')}`;
  mostrarPopup('adminPopup');
}

// CHATBOT FAQ
function initChatbot() {
  const toggle = document.getElementById('chatbotToggle');
  const windowChat = document.getElementById('chatbotWindow');
  const closeChat = document.getElementById('chatbotClose');
  const faqBtns = document.querySelectorAll('.chatbot__faq-buttons button');
  const messagesDiv = document.getElementById('chatMessages');
  const respuestas = {
    horarios: "⏰ Check-in: desde las 2:00 PM. Check-out: antes de las 12:00 PM.",
    precios: "💰 Habitaciones económicas: C$350-500, familiares: C$550-900, con AA: C$1100 por noche.",
    servicios: "🍳 No incluimos desayuno, pero hay opciones cerca del hotel.",
    wifi: "📶 Sí, WiFi gratuito en todas las áreas del hotel.",
    mascotas: "🐾 Lo sentimos, no aceptamos mascotas.",
    reservas: "📅 Para reservar, inicia sesión y haz clic en 'Reservar ahora' en cualquier habitación."
  };
  toggle?.addEventListener('click', () => windowChat?.classList.toggle('active'));
  closeChat?.addEventListener('click', () => windowChat?.classList.remove('active'));
  faqBtns.forEach(btn => btn.addEventListener('click', () => {
    const key = btn.dataset.question;
    const respuesta = respuestas[key] || "❓ No tengo esa información. Llama al +505 8853 6728.";
    const msg = document.createElement('div'); msg.className = 'bot-msg'; msg.textContent = respuesta;
    messagesDiv.appendChild(msg); messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }));
}

// EVENTOS PRINCIPALES
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderRooms("all");
  setupFilters();
  actualizarHeaderUsuario();
  initChatbot();

  // Registro
  document.getElementById('registroForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = { nombre: document.getElementById('regNombre').value.trim(), email: document.getElementById('regEmail').value.trim(), password: document.getElementById('regPassword').value.trim() };
    if (!datos.nombre || !datos.email || !datos.password) { alert("Completa todos los campos."); return; }
    if (registrarUsuario(datos)) cerrarPopup('registroPopup');
  });
  // Login
  document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = document.getElementById('loginUsuario').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    if (loginUsuario(usuario, password)) cerrarPopup('loginPopup');
  });
  // Reserva
  const reservaForm = document.getElementById('popupForm');
  if (reservaForm) {
    const actualizarTotal = () => {
      const ingreso = document.getElementById('fechaIngreso').value;
      const salida = document.getElementById('fechaSalida').value;
      if (ingreso && salida && habitacionSeleccionada) {
        const dias = calcularDias(ingreso, salida);
        document.getElementById('diasEstancia').value = dias > 0 ? dias : 0;
        if (dias > 0) document.getElementById('totalPago').value = (habitacionSeleccionada.precio * dias).toFixed(2);
        else document.getElementById('totalPago').value = '';
      }
    };
    document.getElementById('fechaIngreso')?.addEventListener('change', actualizarTotal);
    document.getElementById('fechaSalida')?.addEventListener('change', actualizarTotal);
    reservaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!habitacionSeleccionada) { alert("Selecciona una habitación."); return; }
      const campos = ['cedula','nombres','apellidos','sexo','fechaNacimiento','nacionalidad','procedencia','fechaIngreso','fechaSalida','numHuespedes','metodoPago'];
      for (let id of campos) if (!document.getElementById(id).value) { alert("Completa todos los campos."); return; }
      const dias = calcularDias(document.getElementById('fechaIngreso').value, document.getElementById('fechaSalida').value);
      if (dias <= 0) { alert("La fecha de salida debe ser posterior."); return; }
      const total = habitacionSeleccionada.precio * dias;
      const reservaData = {
        habitacionId: habitacionSeleccionada.id,
        habitacionNombre: habitacionSeleccionada.nombre,
        precioPorNoche: habitacionSeleccionada.precio,
        cedula: document.getElementById('cedula').value,
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        sexo: document.getElementById('sexo').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        nacionalidad: document.getElementById('nacionalidad').value,
        procedencia: document.getElementById('procedencia').value,
        fechaIngreso: document.getElementById('fechaIngreso').value,
        fechaSalida: document.getElementById('fechaSalida').value,
        dias: dias,
        huespedes: parseInt(document.getElementById('numHuespedes').value),
        metodoPago: document.getElementById('metodoPago').value,
        total: total
      };
      if (crearReserva(reservaData)) {
        cerrarPopup('reservaPopup');
        reservaForm.reset();
        habitacionSeleccionada = null;
        renderRooms(currentFilter);
      }
    });
  }
  // Botones de cierre
  const closeIds = ['closeRegistroPopupBtn','cancelRegistroBtn','closeLoginPopupBtn','cancelLoginBtn','closePopupBtn','cancelPopupBtn','closeDetallePopupBtn','cerrarDetalleBtn','closeMisReservasBtn','closeAdminBtn'];
  closeIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        const popup = btn.closest('.popup');
        if (popup) cerrarPopup(popup.id);
      });
    }
  });
  document.getElementById('irRegistroLink')?.addEventListener('click', (e) => { e.preventDefault(); cerrarPopup('loginPopup'); mostrarPopup('registroPopup'); });
  document.getElementById('irLoginLink')?.addEventListener('click', (e) => { e.preventDefault(); cerrarPopup('registroPopup'); mostrarPopup('loginPopup'); });
  document.getElementById('heroReservarBtn')?.addEventListener('click', () => { if (!getUsuarioActual()) mostrarPopup('loginPopup'); else alert("Selecciona una habitación para reservar."); });
  document.getElementById('misReservasLink')?.addEventListener('click', (e) => { e.preventDefault(); mostrarMisReservas(); });
  document.getElementById('logoutBtn')?.addEventListener('click', logoutUsuario);
  document.querySelector('.header__title')?.addEventListener('dblclick', mostrarAdmin);
  setTimeout(() => { if (!getUsuarioActual()) mostrarPopup('loginPopup'); }, 3000);
});