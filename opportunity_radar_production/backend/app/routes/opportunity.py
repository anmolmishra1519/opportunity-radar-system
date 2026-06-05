
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_opps():
    return [
        {"title":"AI Internship","match":92},
        {"title":"Web Dev Role","match":85}
    ]
