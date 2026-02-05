MedPulse — AI-Assisted VR Surgical Training Platform

MedPulse is a Unity-powered VR training platform designed to give medical students safe, repeatable, and hands-on practice for surgical procedures. Built for the Israel–India Hackathon (Hack4Help), MedPulse puts immersive VR simulations at the center and pairs them with a companion web app and an AI Surgical Mentor for step-wise guidance, questions, and feedback.

Live Demos:

VIDEO DEMO - https://youtu.be/WxPbSelgTWY?si=HzvrkJzdvNcQ7JHr

🌐 Main Website: https://med-pulse-ai-training-platform.vercel.app

🤖 AI Chatbot: https://medimentor-two.vercel.app

🕶 VR Surgical Simulator: https://medical-vr.vercel.app

📖 Description

Modern medical students face a huge challenge — theory-heavy learning with minimal hands-on surgical exposure. Cadaver training is limited, expensive, and often unavailable. Students enter hospitals underprepared, impacting confidence and patient safety.

MedPulse bridges this gap by offering:

Unity-based VR simulator (core): immersive, step-wise surgical practice in a safe, repeatable environment.

AI Surgical Mentor: instant, specialist-informed answers and guidance alongside practice.

Structured WebApp: responsive interface for modules, checklists, and learning flows.

This ensures safe, repeatable, and cost-effective practice opportunities for students worldwide.

✨ Features

VR Simulation (Core) 🎮 — Unity 3D + WebGL with headset support (Meta Quest, HTC Vive, etc.) for immersive surgical training.

AI-powered Chatbot 🤖 — Specialist-informed Q&A and step-wise mentoring during practice.

Personalized Guidance 🧠 — Context-aware learning tailored to the student’s progress.

Full-stack Deployment 🚀 — Frontend on Vercel, Backend API on Render.

Responsive Design 📱💻 — Works seamlessly on mobile & desktop.

Future Haptics & Devices — Designed to plug in haptics and peripherals.

🛠 Tech Stack
VR / Simulation (Core)

Unity 3D + WebGL (PC/Standalone builds supported)

VR headset compatibility: Meta Quest, HTC Vive, etc.

Planned: Haptics & device integrations

Frontend (MedPulse_WebApp)

React 18 + Vite (fast dev/build)

Tailwind CSS (utility-first responsive UI)

Hosting: Vercel (edge network)

Backend (MedPulse_Bot)

Python (FastAPI) with async REST APIs

CORS + secure environment variables

Hosting: Render (auto-scaling)

AI Model

OpenAI GPT-4 for reasoning & conversational intelligence

Context persistence + prompt engineering for personalized responses

Roadmap: LangChain + Vector DB (RAG) for specialist datasets; pluggable fine-tuned healthcare LLMs

Other

GitHub Actions for CI/CD

Cloud-native deployment architecture

Git for version control & collaboration

🚀 How to Run Locally
1) Clone Repository
git clone https://github.com/likhithhhh/MedPulse---AI-Training-Platform.git
cd MedPulse

2) Run AI Bot (Backend)
cd MedPulse_Bot
pip install -r requirements.txt
uvicorn main:app --reload

3) Run WebApp (Frontend)
cd ../MedPulse_WebApp
npm install
npm run dev

4) Run Unity Simulation (VR / WebGL)
cd ../Vitals_Unity_Simulation

📦 Deployment

Frontend (MedPulse_WebApp): Vercel

Backend (MedPulse_Bot): Render

Simulation: Unity builds (WebGL / Standalone / Mobile VR)
