from fastapi import APIRouter, Depends, Body, HTTPException, status, Form
from fastapi.security import OAuth2PasswordRequestForm
from models.user import User, UserCredentials, LoginResponse, Token, UserProfileResponse
from controllers.usercontroller import create_user, login_user, login_dev, get_user_by_email
from utils.auth import get_current_user
router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/create", response_model=str)
async def register_user(user: User):
    user_data = user.dict()
    user_id = await create_user(user_data)
    return user_id

@router.post("/login", response_model=LoginResponse)
async def login(credentials: UserCredentials):
    result = await login_user(credentials.dict())
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Correo electrónico o contraseña incorrectos",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return result

@router.get("/getprofile/{email}", response_model=UserProfileResponse)
async def get_profile(email: str, current_user: dict = Depends(get_current_user)):
    # Verificar que el usuario solo puede acceder a su propio perfil
    if current_user["email"] != email:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No tienes permiso para acceder a este perfil"
        )
        
    user = await get_user_by_email(email)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user

@router.get("/me", response_model=UserProfileResponse)
async def get_my_profile(current_user: dict = Depends(get_current_user)):
    user = await get_user_by_email(current_user["email"])
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    result = await login_dev(form_data.username, form_data.password)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Correo electrónico o contraseña incorrectos",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return result
