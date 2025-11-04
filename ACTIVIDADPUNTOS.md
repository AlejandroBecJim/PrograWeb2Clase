```markdown
# Ejercicios: Mejorar la apariencia con Bootstrap

Descripción general  
Estos ejercicios están pensados para que los estudiantes apliquen Bootstrap (v5.x) en las páginas ya creadas: Login, Perfil/Usuario y Listado de Productos. Todos los ejercicios mantienen una dificultad similar y usan Angular 15.9 en el frontend y FastAPI (Python 3.12) en el backend. El foco es en la presentación (UI) y la experiencia de usuario (UX), sin cambiar la lógica de autenticación JWT ni los endpoints protegidos.

---

## Ejercicio 1 — Login responsive con validación y feedback visual

Objetivo  
Mejorar la página de login usando Bootstrap para hacerla responsiva, agradable y con retroalimentación visual clara.

Requerimientos
- Usar un formulario centrado en la página con una tarjeta (Bootstrap card).
- Campos: email y contraseña. Usar clases Bootstrap (form-floating o form-control).
- Mostrar validación en tiempo real (Angular Reactive Forms):
  - Campo requerido, email válido, contraseña mínima.
  - Mostrar mensajes con estilos de alerta o small text en rojo/verde.
- Añadir un spinner o indicador en el botón de "Ingresar" mientras se espera la respuesta del backend.
- Si el backend responde 401, mostrar un toast o alerta Bootstrap explicando "Credenciales inválidas".
- Incluir un enlace "¿Olvidaste tu contraseña?" estilizado y un botón secundario "Registrarse" (no necesita funcionalidad completa).

Criterios de evaluación
- Formulario es responsivo y se ve bien en móvil/desktop.
- Validaciones funcionan y muestran mensajes claros.
- Indicador de carga aparece durante la petición.
- Manejo de error 401 con un mensaje visible (toast/alert).

Pistas
- Importar ReactiveFormsModule y usar formGroup/formControl.
- Para toasts puedes usar el markup de Bootstrap y controlarlo desde TS con un booleano.
- Usa clases como d-flex, justify-content-center, align-items-center para centrar.

---

## Ejercicio 2 — Presentación del perfil de usuario en una tarjeta

Objetivo  
Presentar los datos del perfil en una tarjeta elegante usando Bootstrap; este ejercicio solo se enfoca en mostrar la información (sin edición).

Requerimientos
- Página "Perfil" muestra la foto (placeholder), nombre, email y rol en una card con diseño limpio y organizado.
- La card debe incluir:
  - Avatar circular (puede ser placeholder).
  - Nombre completo destacado (h4/h5).
  - Email en text-muted.
  - Rol o estado (badge Bootstrap).
  - Campo "Bio" o descripción corta en texto justificado o muted.
- Incluir un pequeño resumen de actividad (por ejemplo: "Miembros desde: fecha", "Último acceso: fecha") en la misma card o en un área lateral.
- Un botón "Cerrar sesión" visible y con estilo (btn-danger o btn-outline-danger) que borre el token de sessionStorage y redirija al login.
- Implementar manejo de carga/espera: mostrar un spinner mientras se obtienen los datos del endpoint protegido `/user/profile`.
- Si la petición devuelve 401 (token inválido/expirado), mostrar un alert de Bootstrap y redirigir a login.

Criterios de evaluación
- Presentación clara y profesional de la información del perfil.
- Avatar y badges bien integrados en la card.
- Manejo de estados (carga, datos, error 401) con feedback visual.
- Botón de logout funcional y con retroalimentación (confirmación visual o redirect).

Pistas
- Reutiliza el servicio de usuario para obtener datos (incluye header Authorization con JWT desde sessionStorage).
- Para la foto usa una imagen de perfil circular con class "rounded-circle" y tamaños responsivos.
- Usa utilidades de spacing (p-*, m-*) para separar secciones, y text-muted para detalles secundarios.

---

## Ejercicio 3 — Catálogo de productos en tarjetas responsivas con filtro (sin paginación)

Objetivo  
Mostrar el listado de productos protegido en una cuadrícula de tarjetas con un filtro simple; mejorar la experiencia con utilidades de Bootstrap. (Este ejercicio está simplificado: no requiere paginación.)

Requerimientos
- Página `Products` muestra los productos obtenidos desde `/products` (endpoint protegido).
- Cada producto se representa con una card que incluye nombre, descripción truncada, precio y stock. Incluir un botón "Ver" que abra un modal con detalles completos.
- Diseñar la cuadrícula con las clases de grid de Bootstrap (row + cols responsivas, p. ej. col-12 col-md-6 col-lg-4).
- Implementar un input de búsqueda (filtro por nombre) que filtre los productos ya cargados en memoria (no requiere nuevo endpoint).
- Mostrar al menos 6 productos por pantalla si existen; la cuadrícula simplemente se adapta al tamaño de la pantalla (sin paginación).
- Si la petición devuelve 401 (token expirado), mostrar un alert y redirigir a login.

Criterios de evaluación
- Cards responsivas y consistentes visualmente.
- Filtro por nombre filtra la lista actual y actualiza la vista en tiempo real.
- Modal de detalles muestra información completa.
- Manejo de error 401 con redirección al login.

Pistas
- Usa pipe (o método en TS) para truncar texto en la vista o utilidades CSS (text-truncate y un ancho fijo).
- Para el filtro, utiliza un campo input enlazado a un ngModel o Reactive Form y filtra el array con .filter(...) en el componente.
- Mantén accesibilidad en botones (aria-labels).

---

## Ejercicio 4 — Tabla de visualización con búsqueda y ordenamiento (sin acciones)

Objetivo  
Construir una vista tipo tabla para mostrar los productos con estilo Bootstrap, que permita búsqueda y ordenamiento por columnas. Este ejercicio NO incluye acciones de edición o eliminación.

Requerimientos
- Página "Admin Productos" muestra una tabla Bootstrap (table, table-striped, table-hover).
- Columnas: Nombre, Precio, Stock, Fecha de creación (o algún campo relevante).
- Campo de búsqueda que filtra por nombre/descripcion en tiempo real.
- Ordenamiento: al hacer clic en el encabezado de una columna, alternar asc/desc (indica con icono/chevron).
- No implementar acciones (editar/eliminar) ni modales en este ejercicio — solo visualización, búsqueda y ordenamiento.
- Al realizar búsquedas u ordenamientos, la tabla debe actualizarse en la vista inmediatamente.
- Manejo de errores 401: si el backend responde con 401, mostrar un alert Bootstrap y redirigir a login.

Criterios de evaluación
- Tabla clara y usable en desktop; en móvil, la tabla debe ser scrollable o adaptarse (usa table-responsive).
- Ordenamiento y búsqueda funcionan correctamente y de forma fluida.
- La vista es exclusivamente de lectura (no hay botones de editar/eliminar).
- Mantiene autorización JWT en las peticiones.

Pistas
- Para ordenamiento puedes usar una función que compare campos y cambie la dirección.
- table-responsive envuelve la tabla para permitir scroll en pantallas pequeñas.
- Puedes añadir pequeños badges o chips para destacar productos con bajo stock (ej. stock < 10).
- Desactiva interacciones que no estén implementadas (no mostrar botones de acción).

---

## Recursos y notas finales

- Bootstrap 5 (incluye CSS y JavaScript opcional para modals/toasts) — puedes usar la versión desde CDN o instalar via npm.
- Angular 15.9: recuerda importar HttpClientModule, ReactiveFormsModule y utilizar servicios inyectables para llamadas HTTP.
- FastAPI (Python 3.12): los endpoints protegidos siguen igual; solo necesitas asegurar que devuelvan correctamente los códigos de estado para que el frontend muestre la retroalimentación.
- JWT: sigue usando sessionStorage.setItem('token', jwt) y envía Authorization: Bearer <token> en headers.
- Accesibilidad: usa atributos aria-*, roles y etiquetas adecuadas en los modales y botones.
- Para toasts y modals considera controlar la visibilidad desde Angular (no depender únicamente del data-bs-* si quieres control programático).

---
```