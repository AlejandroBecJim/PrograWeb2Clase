from fastapi import APIRouter, Depends, Body, HTTPException, status, Form
from fastapi.security import OAuth2PasswordRequestForm
from models.product import Product
from controllers.productcontroller import get_all_products
from utils.auth import get_current_user
router = APIRouter(prefix="/products", tags=["Products"])

@router.get("/", response_model=list[Product])
async def read_products(current_user: dict = Depends(get_current_user)):
    return await get_all_products()
