from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    id: str | None = None
    email: str
    name: str
    password: str

class UserCredentials(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: str
    email: str
    name: str

class LoginResponse(BaseModel):
    user: UserResponse
    token: str

# Modelos para OAuth2 (documentación de FastAPI)
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
    
class UserProfileResponse(BaseModel):
    id: str
    email: str
    name: str
    
