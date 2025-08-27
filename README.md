# Multi-Tier To-Do Application with CI/CD  

A **cloud-based multi-tier To-Do app** built using **HTML, CSS, JavaScript, Node.js (Express), Firebase Firestore, and GitHub Actions**.  
This project demonstrates a **multi-tier architecture** with CI/CD pipelines for cloud deployment.  

---

## 🚀 Features  
- 📝 Add, view, and delete tasks  
- ☁️ Backend API using **Express + Firebase Firestore**  
- 🌐 Frontend UI with HTML, CSS, JavaScript  
- 🔄 Real-time persistence in Firestore  
- ⚡ Multi-Tier Architecture:  
  - **Frontend** → Static UI (Firebase Hosting)  
  - **Backend** → Node.js API (Render)  
  - **Database** → Firebase Firestore  
- 🤖 **CI/CD** → Automated deployment with GitHub Actions  

---

## 🛠️ Tech Stack  
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js + Express  
- **Database**: Firebase Firestore  
- **Hosting**:  
  - Frontend → Firebase Hosting  
  - Backend → Render  
- **CI/CD**: GitHub Actions  

---

## 📂 Project Structure

multi-tier-app/

├── .github/workflows/deploy.yml # GitHub Actions (CI/CD)

├── backend/

│ ├── server.js # Express backend

│ └── serviceAccountKey.json # Firebase service account key (ignored in Git)

└── frontend/

├── index.html # UI

├── style.css # Styling

└── app.js # Frontend logic

---

## ⚙️ Setup Instructions  

1. Firebase Setup
 - Go to Firebase Console.
 - Create a new project → enable Firestore Database.
 - Generate a Service Account Key (Project Settings → Service Accounts).
 - Save it in backend/serviceAccountKey.json.
 - Add to .gitignore: backend/serviceAccountKey.json

2. Run Backend Locally

- cd backend
- npm install express cors firebase-admin
- node server.js

- Backend runs on:
👉 http://localhost:5000/tasks

3. Run Frontend Locally

- In frontend/app.js, set: const API_BASE = "http://localhost:5000";
- Open frontend/index.html in a browser.
- Add tasks → they are saved in Firestore.

4. Deploy Backend (Render)

- Push code to GitHub.
- On Render
 → create new Web Service.
- Root folder → backend/
- Build Command: npm install
- Start Command: node server.js
- Copy the Render backend URL (e.g. https://todo-backend.onrender.com).
- Update frontend/app.js → const API_BASE = "https://todo-backend.onrender.com";

5. Deploy Frontend (Firebase Hosting)

cd frontend
firebase init hosting
firebase deploy

- Your app will be live at:
👉 https://your-frontend.web.app

6. CI/CD with GitHub Actions

- Configure .github/workflows/deploy.yml to:
- Deploy backend on Render
- Deploy frontend on Firebase Hosting
- Add Firebase token + Render API key in GitHub Secrets.
- Every git push → automatic deployment 🎉

---

📸 Screenshots

(Add your screenshots here)

🖥️ Backend running locally

🌐 Frontend To-Do App UI

☁️ Firebase Hosting live demo

🔄 GitHub Actions pipeline

---

👨‍💻 Author

Developed by Ansari Mohd Taki during internship at Codec Technology.
