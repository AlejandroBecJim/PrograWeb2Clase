from fastapi import APIRouter, HTTPException
from models.user import User
from controllers.usercontroller import create_user

router = APIRouter()

@router.post("/users/", response_model=str)
async def register_user(user: User):
    user_data = user.dict()
    user_id = await create_user(user_data)
    return user_id
