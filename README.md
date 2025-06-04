# HTMX + DataTables: Carga Dinámica de Tablas

Este proyecto demuestra cómo implementar una tabla dinámica usando HTMX y DataTables, con animaciones suaves y un sistema de loading elegante.

## 🚀 Características

- Carga dinámica de datos usando HTMX
- Tablas interactivas con DataTables
- Animaciones suaves de transición
- Sistema de loading con spinner
- Interfaz responsive con Bootstrap 5
- Soporte para idioma español en DataTables

## 🛠️ Tecnologías Utilizadas

- [HTMX](https://htmx.org/) - Para la carga dinámica de contenido
- [DataTables](https://datatables.net/) - Para la funcionalidad de tablas
- [Bootstrap 5](https://getbootstrap.com/) - Para el diseño y componentes
- [jQuery](https://jquery.com/) - Requerido por DataTables

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone [url-del-repositorio]
```

2. Abre el archivo `index.html` en tu navegador o configura un servidor local.

## 💻 Uso

1. El botón "Cargar datos" activará la carga dinámica de la tabla
2. Durante la carga, se mostrará un spinner
3. La tabla se cargará con animaciones suaves
4. La tabla incluye funcionalidades de:
   - Paginación
   - Búsqueda
   - Ordenamiento
   - Responsive design

## 🎨 Personalización

### Animaciones
Las animaciones pueden ser personalizadas modificando las clases CSS en el archivo `index.html`:
```css
.fade-out {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

### Configuración de DataTables
La configuración de DataTables puede ser modificada en el objeto `dataTableConfig`:
```javascript
const dataTableConfig = {
  pageLength: 10,
  language: {
    url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json",
  }
};
```

## 📝 Notas

- Asegúrate de que el archivo `datos.html` contenga la estructura correcta de la tabla
- La tabla debe tener el ID `tbl_empleados` para que DataTables funcione correctamente
- El contenedor de la tabla debe tener el ID `content-table`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.
