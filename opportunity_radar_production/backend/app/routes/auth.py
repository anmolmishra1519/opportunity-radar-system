
from fastapi import APIRouter

router = APIRouter()

@router.post("/register")
def register():
    return {"msg":"user created"}

@router.post("/login")
def login():
    return {"token":"secure-token"}
