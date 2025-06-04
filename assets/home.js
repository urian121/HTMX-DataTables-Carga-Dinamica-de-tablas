/**
 * htmx:beforeRequest
 * Se dispara ANTES de que htmx envíe la solicitud al servidor
 * Es el primer evento en la cadena de eventos de htmx
 * Ideal para:
 * - Mostrar spinners de carga
 * - Deshabilitar botones
 * - Aplicar animaciones de salida
 * - Preparar la UI para la nueva carga
 */
htmx.on("htmx:beforeRequest", (event) => {
  console.log("Antes de la petición");
  const el = event.detail.target;
  if (el) {
    el.classList.add("fade-out-animation");
  }
});

/**
 * htmx:beforeSwap
 * Se dispara DESPUÉS de recibir la respuesta del servidor
 * pero ANTES de insertar el nuevo contenido en el DOM
 * Ideal para:
 * - Limpiar animaciones anteriores
 * - Preparar el contenedor para el nuevo contenido
 * - Validar la respuesta antes de mostrarla
 */
htmx.on("htmx:beforeSwap", (event) => {
  const el = event.detail.target; // Elemento donde se hizo el swap
  if (!el) return; // Seguridad: salir si no hay elemento

  // Quitar la animación de entrada si está presente
  el.classList.remove("fade-in-animation");
});

/**
 * htmx:afterSwap
 * Se dispara DESPUÉS de que el nuevo contenido ha sido insertado en el DOM
 * Es el último evento en la cadena de eventos de htmx
 * Ideal para:
 * - Inicializar plugins (como DataTables)
 * - Aplicar animaciones de entrada
 * - Actualizar el estado de la UI
 * - Ejecutar código que necesita el nuevo contenido
 */
htmx.on("htmx:afterSwap", (event) => {
  const el = event.detail.target;

  // Inicializar DataTables si el contenedor es la tabla
  if (event.detail.target.id === "content-table") {
    $("#tbl_empleados").DataTable({
      pageLength: 10,
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json",
      },
    });
  }

  // Aplicar animación de entrada al nuevo contenido
  if (el) {
    el.classList.remove("fade-out-animation");
    // Usamos requestAnimationFrame para asegurar que la animación
    // se ejecute después de que el navegador haya renderizado el nuevo contenido
    requestAnimationFrame(() => {
      el.classList.add("fade-in-animation");
    });
  }
});
