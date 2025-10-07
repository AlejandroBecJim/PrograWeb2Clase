# Ejercicio de Clase: Guardar y Usar el Token JWT para Acceso a Endpoints Protegidos

## Objetivo

Aprender a **guardar el token JWT** generado en el proceso de login y usarlo para acceder a un **endpoint protegido** en el backend. El token debe ser guardado en el **sessionStorage** (Angular) y enviado en las peticiones posteriores.

---

## Requerimientos

### 1. Frontend (Angular)

- Al hacer login exitoso, **guardar el token JWT** recibido en el `sessionStorage`.
  - Ejemplo: `sessionStorage.setItem('token', jwt)`
- Crear un nuevo componente/página llamada **"Perfil"** o **"Usuario"**.
- Al acceder a esta página, realizar una petición HTTP al backend a un endpoint protegido (por ejemplo `/user/profile`).
- Enviar el token JWT como **Authorization header**:  
  - Ejemplo: `Authorization: Bearer <token>`
- Mostrar los datos del usuario si la autenticación es correcta.
- Si el token es inválido o ha expirado, mostrar un mensaje de error y redirigir al login.

### 2. Backend (Python: Flask o FastAPI)

- Implementar un endpoint protegido, por ejemplo `/user/profile`.
  - Este endpoint debe requerir el **token JWT** en la cabecera Authorization.
- **El token JWT debe expirar en 1 minuto** desde que se genera.  
  - Esto es para efectos prácticos y para validar el correcto manejo de expiración.
- Validar el token JWT:
  - Si es válido y no ha expirado, retornar los datos del usuario.
  - Si es inválido o ha expirado, retornar un error 401 (Unauthorized).
- Puedes reutilizar la lógica de login y la generación de tokens del ejercicio anterior.

### 3. Base de Datos (MongoDB)

- Utilizar la misma colección de usuarios del ejercicio anterior.

---

## Criterios de Evaluación

- **Funcionalidad**: El token debe guardarse correctamente y usarse para acceder al endpoint protegido.
- **Seguridad**: El token debe enviarse solo por el header Authorization.
- **Manejo de Errores**: Debe haber control de sesión y mostrar mensajes claros si el token es inválido, falta o ha expirado.
- **Expiración**: Debe verificarse que el token expire correctamente en 1 minuto.
- **Código Limpio**: El código debe ser ordenado y comentado.

---

## Pistas y Recursos
- En FastAPI, revisa cómo proteger endpoints con JWT y cómo definir la expiración del token.
- Documentación JWT en [jwt.io](https://jwt.io/).

---

## Extensión (Opcional)

- Implementa un botón de **Logout** que elimine el token y cierre la sesión.
- Haz que el frontend detecte automáticamente la expiración y redirija al login si el token ya no es válido.

