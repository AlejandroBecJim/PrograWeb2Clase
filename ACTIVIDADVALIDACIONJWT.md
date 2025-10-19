# Ejercicio de Clase: Consumir y Mostrar una Lista de Datos Protegida por JWT

## Objetivo

Extender la aplicación anterior para consumir un nuevo endpoint protegido que devuelve una colección de datos (un listado). El alumno aprenderá a realizar peticiones a endpoints que devuelven listas, manejar estos datos en el frontend y mostrarlos en una vista dedicada, todo mientras sigue utilizando el token JWT para la autenticación.

## Requerimientos

### 1. Base de Datos (MongoDB)

1.  **Crear una nueva colección:** Crea una colección llamada `products`.
2.  **Insertar datos de ejemplo:** Añade al menos 5 documentos a la colección `products`. Cada documento debe tener la siguiente estructura:
    ```json
    {
      "name": "Nombre del Producto",
      "description": "Descripción breve del producto.",
      "price": 99.99,
      "stock": 100
    }
    ```
    *Ejemplo de documento:*
    ```json
    {
      "name": "Laptop Pro 15",
      "description": "Potente laptop para profesionales y creativos.",
      "price": 1499.99,
      "stock": 50
    }
    ```

### 2. Backend (Python: Flask o FastAPI)

1.  **Crear un nuevo endpoint protegido:** Implementa un endpoint en la ruta `/products`.
2.  **Proteger el endpoint:** Este endpoint debe estar protegido y requerir un token JWT válido en la cabecera `Authorization`, al igual que el endpoint `/user/profile`.
3.  **Funcionalidad del endpoint:**
    *   Si el token JWT es válido y no ha expirado, el endpoint debe consultar la colección `products` en MongoDB y devolver la lista completa de todos los productos como un array de objetos JSON.
    *   El código de estado en caso de éxito debe ser `200 OK`.
    *   Si el token es inválido, falta o ha expirado, debe retornar un error `401 Unauthorized`.
4.  **Mantener la expiración del token:** Para este ejercicio, puedes mantener la expiración del token en 1 minuto para seguir probando el manejo de sesiones expiradas.

### 3. Frontend (Angular)

1.  **Crear un nuevo componente/página:** Genera un nuevo componente llamado `Products` o `Catalogo`.
    *   Añade un enlace en la navegación principal (por ejemplo, en `app.component.html`) para que el usuario pueda acceder a esta nueva página después de iniciar sesión.
2.  **Crear un servicio de datos:** Es una buena práctica tener un servicio para manejar las peticiones HTTP. Crea un `ProductService` que contenga un método `getProducts()`.
3.  **Implementar `getProducts()`:**
    *   Este método debe obtener el token JWT guardado en `sessionStorage`.
    *   Si no hay token, debe redirigir al usuario a la página de login.
    *   Si hay un token, debe realizar una petición `GET` al endpoint `/products` del backend, incluyendo el token en la cabecera `Authorization: Bearer <token>`.
4.  **Mostrar los datos en el componente:**
    *   En el componente `Products`, llama al método `getProducts()` del servicio cuando el componente se inicialice (en `ngOnInit`).
    *   Guarda la lista de productos recibida en una variable del componente.
    *   Utiliza la directiva `*ngFor` en la plantilla HTML para iterar sobre la lista de productos y mostrar los datos de cada uno de forma clara (por ejemplo, en una tabla o una lista de tarjetas).
5.  **Manejo de errores:**
    *   Si la petición al backend falla con un error `401` (token expirado o inválido), el servicio o el componente debe capturar este error, mostrar un mensaje al usuario (ej. "Tu sesión ha expirado, por favor inicia sesión de nuevo") y redirigirlo a la página de login.

## Criterios de Evaluación

-   **Funcionalidad Completa:** El usuario puede hacer login, navegar a la página de productos y ver el listado cargado desde el backend.
-   **Protección de Rutas:** El endpoint `/products` es inaccesible sin un token válido.
-   **Visualización de Datos:** La lista de productos se muestra correctamente en el frontend utilizando `*ngFor`.
-   **Separación de Lógicas:** El uso de un servicio en Angular para las peticiones HTTP es correcto.
-   **Manejo de Sesión Expirada:** La aplicación redirige al login de forma automática cuando el token expira y se intenta acceder a los datos.
-   **Código Limpio:** El código está bien estructurado, es legible y sigue las buenas prácticas de cada framework.

## Pistas y Recursos

-   **Angular:** Recuerda importar `HttpClientModule` en tu `app.module.ts`. Para el manejo de errores en peticiones HTTP, puedes usar el operador `catchError` de RxJS.
-   **FastAPI:** Asegúrate de que tu lógica de validación de JWT sea reutilizable para poder aplicarla fácilmente a nuevos endpoints.
