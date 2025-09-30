# Ejercicio de Clase: Implementación de Login

## Objetivo

Desarrollar el flujo de **Login (inicio de sesión)** para una aplicación web utilizando **Angular** para el frontend, **Python** para el backend y **MongoDB** como base de datos.

---

## Requerimientos

### 1. Frontend (Angular)

- Crear un formulario de login que solicite **correo electrónico** y **contraseña**.
- Validar los campos del formulario (requerido, formato de correo, longitud mínima de contraseña).
- Al enviar el formulario, realizar una petición HTTP al backend para autenticar al usuario.
- Mostrar mensajes de error claros si la autenticación falla (por ejemplo: "Credenciales incorrectas").
- Si el login es exitoso, mostrar una página de bienvenida o redirigir al usuario a un dashboard.

### 2. Backend (Python: Flask o FastAPI)

- Implementar una API REST con un endpoint `/login` que reciba **email** y **password**.
- Verificar que el usuario exista en la base de datos y que la contraseña coincida (usa hash para guardar/verificar contraseñas).
- Si la autenticación es correcta, retornar un **token JWT** y los datos básicos del usuario.
- Si la autenticación falla, retornar el error correspondiente con un mensaje claro.

### 3. Base de Datos (MongoDB)

- Crear una colección de usuarios con al menos los siguientes campos:  
  - `email` (único)
  - `password` (hash)
  - `nombre`
- Asegurarse de tener al menos un usuario de prueba en la base de datos para validar el login.

---

## Criterios de Evaluación

- **Funcionalidad**: El login debe funcionar correctamente y cumplir los requerimientos.
- **Seguridad**: Las contraseñas deben almacenarse de forma segura (usando hash, no texto plano).
- **Validaciones**: El frontend debe validar los campos antes de enviar la petición.
- **Manejo de Errores**: Debe mostrar mensajes claros en caso de error.

---

## Entregables

- Código fuente del frontend y backend.
- Script o instrucciones para poblar la base de datos con usuarios de prueba.

---

## Pistas y Recursos

- Puedes usar librerías como `bcrypt` para el hash de contraseñas en Python.
- Para el manejo de JWT, revisa librerías como `pyjwt` o `fastapi-jwt-auth`.
- En Angular, revisa el módulo `HttpClient` para hacer peticiones HTTP y `ReactiveForms` para formularios.

---

## Extensión (Opcional)

Agrega un sistema de **"Recordar sesión"** usando almacenamiento local y JWT en Angular.

