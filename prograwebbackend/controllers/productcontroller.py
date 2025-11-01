from db.dbconnection import MongoDB
from bson import ObjectId
import bcrypt
from models.product import Product
from datetime import timedelta

collection = MongoDB.get_database()["products"]

async def get_all_products():
    products = []
    cursor = collection.find({})
    async for document in cursor:
        document["id"] = str(document["_id"])
        del document["_id"]
        products.append(Product(**document))
    return products
