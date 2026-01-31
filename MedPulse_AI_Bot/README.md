# 🩺 MedPulse — AI Surgical Mentor

Live Demos:

🌐 Main Website: https://final-med.vercel.app

🤖 AI Chatbot: https://medimentor-two.vercel.app

🕶 VR Surgical Simulator: https://medical-vr.vercel.app

**Full-stack AI chatbot** built for **medical students**, especially those pursuing surgical training.  
It provides instant, personalized answers to medical and surgical queries using AI trained on inputs from multiple specialists.

---

## ✨ Features
- **AI-powered Chatbot** — Get answers to surgical & medical questions instantly.
- **Personalized Guidance** — Context-aware responses for better learning.
- **Full-stack Deployment** — Frontend on Vercel, Backend API on Render.
- **Responsive Design** — Works on both mobile and desktop.

---

## 🛠 Tech Stack

- **Frontend (MedPulse_WebApp):**
  - HTML, CSS, JavaScript
  - Responsive UI/UX for mobile & desktop
  - Deployed on **Vercel** (Global Edge Network for fast delivery)

- **Backend (MedPulse_AI_Bot):**
  - Python (FastAPI Framework)
  - RESTful APIs with async support
  - Deployed on **Render** (auto-scaling cloud platform)

- **AI Model:**
  - OpenAI GPT-4 API for natural language understanding
  - Context-aware conversation flow with **prompt engineering**
  - Domain-specific tuning for **surgical & medical queries**
  - Potential for integration with **LangChain / RAG (Retrieval-Augmented Generation)** for custom datasets
  - Scalable design → future plug-in for fine-tuned healthcare LLMs

- **Simulation (Planned: MedPulse_Unity_Simulation):**
  - Unity 3D with VR integration
  - Support for immersive training modules
  - Future haptics & device compatibility

- **Other:**
  - Secure environment variables (GitHub Secrets / .env)
  - CORS handling for safe cross-origin requests
  - Git & GitHub CI/CD for collaborative development
  - Scalable architecture for cloud-native deployment
---

---

 How to Run Locally

### 1. Clone Repository
```bash
git clone https://github.com/Ishaan0709/Medimentor.git
cd Medimentor

- Backend Setup
cd backend
pip install -r ../requirements.txt


- Start backend:

uvicorn main:app --reload



- Frontend Setup

Open frontend/index.html directly in browser
OR if using live server in VS Code, right-click and select Open with Live Server.


- Deployment

Frontend: Deployed on Vercel

Backend: Deployed on Render
