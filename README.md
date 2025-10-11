# PrograWeb2Clase

Este proyecto contiene una aplicación web full-stack con Angular en el frontend y FastAPI en el backend.

## Estructura del Proyecto

```
PrograWeb2Clase/
├── app-prograweb/          # Frontend Angular
└── prograwebbackend/       # Backend FastAPI
```

## Backend - prograwebbackend

El backend está desarrollado con FastAPI y proporciona una API REST para la gestión de usuarios.

### Estructura de Carpetas

```
prograwebbackend/
├── main.py                 # Archivo principal de la aplicación FastAPI
├── controllers/            # Lógica de negocio y operaciones de base de datos
│   └── usercontroller.py   # Controlador para operaciones de usuarios
├── models/                 # Modelos de datos con Pydantic
│   └── user.py            # Modelo de usuario
└── routers/               # Definición de rutas y endpoints
    └── userrouter.py      # Rutas para operaciones de usuarios
```

### Descripción de Componentes

- **main.py**: Punto de entrada de la aplicación. Configura FastAPI, middleware CORS y registra las rutas.
- **controllers/**: Contiene la lógica de negocio y las operaciones con la base de datos.
- **models/**: Define los esquemas de datos usando Pydantic para validación automática.
- **routers/**: Organiza los endpoints de la API por funcionalidad.

### Instalación y Configuración

#### Prerequisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)

#### Pasos de Instalación

1. **Navega a la carpeta del backend:**
   ```bash
   cd prograwebbackend
   ```

2. **Instala las dependencias necesarias:**
   ```bash
   pip install fastapi
   pip install uvicorn[standard]
   pip install bcrypt
   pip install pydantic
   pip install python-jose
   pip install passlib
   pip install python-dotenv
   pip install python-multipart
   ```

   O instala todas las dependencias de una vez:
   ```bash
   pip install fastapi uvicorn[standard] bcrypt pydantic python-jose passlib pithon-dotenv python-multipart
   ```

#### Ejecutar el Servidor

Para levantar el servidor de desarrollo de sFastAPI:

```bash
uvicorn main:app --reload
```

**Parámetros del comando:**
- `main:app`: Indica que debe importar la aplicación `app` del archivo `main.py`
- `--reload`: Reinicia automáticamente el servidor cuando detecta cambios en el código

El servidor estará disponible en: `http://localhost:8000`

#### Documentación de la API

FastAPI genera automáticamente documentación interactiva de la API:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

### Endpoints Disponibles

#### Usuarios
- `POST /users/users/`: Crea un nuevo usuario
  - Body: `{"id": int, "email": string, "name": string, "password": string}`
  - Respuesta: ID del usuario creado

### Características de Seguridad

- **Hash de contraseñas**: Las contraseñas se cifran usando bcrypt antes de almacenarse
- **CORS**: Configurado para permitir solicitudes desde el frontend Angular

---

## Frontend - app-prograweb

Ver la documentación específica en [`app-prograweb/README.md`](app-prograweb/README.md)

## Desarrollo

### Ejecutar el proyecto completo

1. **Backend** (Terminal 1):
   ```bash
   cd prograwebbackend
   uvicorn main:app --reload
   ```

2. **Frontend** (Terminal 2):
   ```bash
   cd app-prograweb
   ng serve
   ```

### URLs de desarrollo

- **Frontend**: `http://localhost:4200`
- **Backend API**: `http://localhost:8000`
- **Documentación API**: `http://localhost:8000/docs`