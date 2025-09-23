from db.dbconnection import MongoDB
from bson import ObjectId
import bcrypt

collection = MongoDB.get_database()["users"]

async def create_user(user_data):
    password_hash = bcrypt.hashpw(user_data["password"].encode('utf-8'), bcrypt.gensalt())
    user_data["password"] = password_hash.decode('utf-8')
    result = await collection.insert_one(user_data)
    return str(result.inserted_id)
