from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
from . import models
from .database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow frontend connection (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[""],  # replace "" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic schemas
class AlumniCreate(BaseModel):
    name: str
    email: EmailStr
    department: str
    year: int


class AlumniOut(BaseModel):
    id: int
    name: str
    email: str
    department: str
    year: int

    class Config:
        orm_mode = True


# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/api/alumni", response_model=AlumniOut)
def create_alumni(alumni: AlumniCreate, db: Session = Depends(get_db)):
    db_alumni = models.Alumni(**alumni.dict())
    db.add(db_alumni)
    db.commit()
    db.refresh(db_alumni)
    return db_alumni


@app.get("/api/alumni", response_model=list[AlumniOut])
def get_alumni(db: Session = Depends(get_db)):
    return db.query(models.Alumni).order_by(models.Alumni.id.desc()).all()
