🩺 MedPulse_WebApp — AI Surgical Mentor & VR Simulator

Live Demos:

🌐 Main Website: https://final-med.vercel.app

🤖 AI Chatbot: https://medimentor-two.vercel.app

🕶 VR Surgical Simulator: https://medical-vr.vercel.app

📖 Overview

Full-stack platform for medical students combining:

AI-powered surgical guidance

Personalized learning & performance tracking

Unity-based VR surgical simulation for practical skills

Students can register/login, chat with a medical AI assistant, track performance metrics, and practice surgeries in an interactive VR environment.

✨ Features

🔐 Secure Login & Signup — Personalized dashboard per student

🤖 AI Surgical Chatbot — Context-aware answers to surgical & medical queries

📊 Performance Tracker — Maps strengths & improvement areas

🕹 Unity VR Surgery Simulator — Realistic, interactive surgery practice

📱 Responsive Design — Works on desktop, mobile, and VR

## 🛠 Tech Stack

- **Frontend (MedPulse_WebApp):**
  - React 18 + Vite ⚡ — Ultra-fast build & dev environment
  - Tailwind CSS 🎨 — Utility-first, responsive design for sleek UI
  - Responsive layout optimized for both desktop & mobile
  - Deployed on **Vercel** (global edge network, zero-config CI/CD)

- **Backend (MedPulse_AI_Bot):**
  - Python (FastAPI) 🚀 — Async-first, lightweight & high-performance APIs
  - RESTful endpoints for chatbot queries
  - Secure environment variables management
  - Cross-Origin Resource Sharing (CORS) enabled
  - Deployed on **Render** (auto-scaling, production-ready cloud hosting)

- **AI Model:**
  - OpenAI GPT-4 API 🤖 — Advanced reasoning & conversational intelligence
  - Prompt-engineered for **medical & surgical domains**
  - Context persistence for **personalized learning**
  - Extendable to **LangChain + Vector DB (RAG)** for knowledge grounding
  - Future-ready for **fine-tuned healthcare LLMs**

- **VR Simulation (MedPulse_Unity_Simulation — Planned):**
  - Unity 3D + WebGL 🌐 — Immersive, browser-ready simulations
  - VR headset compatibility (Meta Quest, HTC Vive, etc.)
  - Future haptics & device support for surgical realism
  - Potential cloud streaming for lightweight devices

- **Other Engineering Add-ons:**
  - CI/CD pipelines (GitHub Actions + Vercel/Render)
  - Version control & collaboration via Git/GitHub
  - Modular folder structure for scalability
  - Secure API key handling & deployment best practices


Deployment:

Vercel (Frontend & VR)

Render (Backend API)

🚀 Run Locally
1️⃣ Clone Repository
git clone https://github.com/Ishaan0709/Medimentor.git
cd Medimentor

2️⃣ Backend Setup
cd backend
pip install -r ../requirements.txt
uvicorn main:app --reload

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🌐 Deployment Links

Main Website: https://final-med.vercel.app

AI Chatbot: https://medimentor-two.vercel.app

VR Surgery Simulator: https://medical-vr.vercel.app
