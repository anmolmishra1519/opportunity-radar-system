
from fastapi import APIRouter
from app.services.gpt import chat

router = APIRouter()

@router.post("/chat")
def ai_chat(data: dict):
    return {"reply": chat(data.get("message",""))}
