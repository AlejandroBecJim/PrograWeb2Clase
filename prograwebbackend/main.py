from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import userrouter
app = FastAPI(title="API PrograWeb ")

# Configuración CORS para permitir todos los orígenes
app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(userrouter.router, prefix="/users", tags=["Users"])