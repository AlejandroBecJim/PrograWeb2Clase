# Actividad en Clase: Registro de Usuario (Sign In) con Angular y FastAPI

## Objetivo

Desarrollar una aplicación web sencilla que permita a los usuarios registrarse. El frontend debe enviar la información al backend, el cual almacenará los datos del usuario en una base de datos MongoDB.

## Requerimientos

### Frontend (Angular)

- Crear un formulario de registro que solicite al menos:
  - Nombre de usuario
  - Correo
  - Contraseña
- Validar en el frontend que todos los campos sean obligatorios y el correo tenga formato válido.
- Consumir el endpoint de registro del backend enviando los datos del formulario.
- Mostrar mensajes claros en caso de éxito o error (por ejemplo, si el correo ya existe).

### Backend (FastAPI + MongoDB)

- Utilizar **FastAPI** para implementar la API.
- Conectar FastAPI a una base de datos **MongoDB** para almacenar los usuarios.
- Implementar el endpoint `/register` que reciba los datos del usuario, verifique que el correo no exista previamente, cifre la contraseña (pueden usar bcrypt), y guarde el nuevo usuario.
- Retornar un mensaje de éxito o el error correspondiente (por ejemplo, si el correo ya está registrado).

## Consideraciones

- La contraseña debe guardarse cifrada, no en texto plano.
- Documentar de manera breve cómo levantar backend y frontend en un archivo README.
- El codigo debe ser agregado a un repositorio de GitHub para ser considerado en la revision final del proyecto y debera ser enviado al finalizar la clase o actividads.
- (Opcional) Implementa validaciones adicionales como longitud mínima de contraseña.
-(Opcional) Implementar algun framework como Bootstrap para el diseño

---
**Tip:** Prioriza que el flujo de registro funcione correctamente, aunque la interfaz sea básica. 