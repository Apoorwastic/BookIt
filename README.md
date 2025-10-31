\# 🛣️ Highway Delite

\*\*Highway Delite\*\* is a travel experience platform that helps users
discover and book exciting experiences along Indian highways. From local
adventures to hidden gems, it enables travelers to explore, plan, and
enjoy trips conveniently through a smooth, responsive web interface.

\-\--

\## 🚀 Summary

Highway Delite allows users to: - Explore curated travel experiences. -
Search by name, location, or category. - View detailed information and
images for each experience. - Seamlessly book an experience online.

This project is built with a full-stack architecture --- React for the
frontend, Express for the backend, and MongoDB for the database ---
designed for scalability and performance.

\-\--

\## 🧩 Tech Stack

\### \*\*Frontend\*\* - \*\*Framework:\*\* React + TypeScript + Vite  -
\*\*Styling:\*\* Tailwind CSS  - \*\*Hosting:\*\* Netlify  - \*\*Live
Link:\*\*
\[https://gilded-cranachan-f2455c.netlify.app/\](https://gilded-cranachan-f2455c.netlify.app/)

\### \*\*Backend\*\* - \*\*Framework:\*\* Node.js + Express  -
\*\*Database Connection:\*\* Mongoose  - \*\*Hosting:\*\* Render

\### \*\*Database\*\* - \*\*MongoDB Atlas\*\* (Cloud-hosted NoSQL
database)

\### \*\*Images\*\* - Experience images are served via Cloud storage
(Cloudinary/Static Assets on the backend).

\-\--

\## ✨ Features

✅ Browse curated highway experiences
✅ Search experiences by location or name 
✅ View detailed experience information (title, description,
price)
✅ Book an experience with a smooth, interactive form

\-\--

\## ⚙️ Setup and Run Locally

\### \*\*1. Clone the Repository\*\* \`\`\`bash git clone
https://github.com/yourusername/highway-delite.git cd highway-delite 2.
Frontend Setup bash Copy code cd frontend npm install Create a .env file
in the frontend directory:

ini Copy code VITE_API_URL=https://your-backend.onrender.com Run the
frontend:

bash Copy code npm run dev 3. Backend Setup bash Copy code cd backend
npm install Create a .env file in the backend directory:

ini Copy code PORT=5000 MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=https://gilded-cranachan-f2455c.netlify.app Run the
backend:

bash Copy code npm start ☁️ Deployment Frontend (Netlify) Go to Netlify.

Import your frontend GitHub repository.

Set the Build Command to:

bash Copy code npm run build and the Publish Directory to:

bash Copy code dist Set the environment variable:

ini Copy code VITE_API_URL=https://your-backend.onrender.com Backend
(Render) Go to Render.

Create a new Web Service.

Connect your backend GitHub repository.

Add the following Environment Variables:

ini Copy code PORT=5000 MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=https://gilded-cranachan-f2455c.netlify.app Click Deploy.

🔍 How to Use Search Experiences Use the search bar to find experiences
by name or location.

Filter and explore curated results.

View Experience Details Click on "View" to open an experience page with
full details (description, price, date and time to book activity).

Book an Experience Click "Book" on the experience page.

Fill in your name, mail and promo code(optional).

Confirm booking --- your experience is successfully reserved!

🌐 Live Demo Frontend: https://gilded-cranachan-f2455c.netlify.app/
Backend (API): Hosted on Render (connected automatically to frontend).

📸 Screenshots
<img width="1918" height="860" alt="home" src="https://github.com/user-attachments/assets/ce15a2b6-9a95-4d94-9eec-6d89850e812a" />
<img width="1918" height="702" alt="about" src="https://github.com/user-attachments/assets/bef06839-ab4f-419d-9bab-70deb25078b6" />
<img width="1918" height="848" alt="searchexp" src="https://github.com/user-attachments/assets/5b3fa186-75ad-46b8-b1f8-342b086df738" />
<img width="1916" height="862" alt="searchloc" src="https://github.com/user-attachments/assets/bc877e22-67fb-4f9f-a879-b35d60a2f34b" />
<img width="1918" height="846" alt="exp" src="https://github.com/user-attachments/assets/e12f1857-df06-4840-9a63-59a4b5cb103f" />
<img width="1918" height="760" alt="booking" src="https://github.com/user-attachments/assets/f60f3d95-05e5-4c7b-bbcc-357e2472f47f" />
<img width="1917" height="803" alt="confirm" src="https://github.com/user-attachments/assets/dbae3e64-aed3-4610-a9f6-e2b65518835c" />


👩‍💻 Author Apoorwa Priyam Full Stack Developer \| DevOps Enthusiast 🚀
Focused on building scalable and optimized web applications.
