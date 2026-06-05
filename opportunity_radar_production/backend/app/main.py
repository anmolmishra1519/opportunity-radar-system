
from fastapi import FastAPI
from app.routes import auth, ai, opportunity
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Opportunity Radar Production")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth")
app.include_router(ai.router, prefix="/ai")
app.include_router(opportunity.router, prefix="/opportunity")

@app.get("/")
def home():
    return {"status": "production ready"}
