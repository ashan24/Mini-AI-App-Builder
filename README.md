# mini-AI-App-Builder
A basic web portal where a user describes an app they want, and the portal generates a simple mock UI based on AI-extracted requirements.  
The frontend is built with **React**, the backend with **Node.js + Express**, and OpenAI's API is used to extract requirements. 

## features
- Capture app requirements from user input.
- Generate UI mockup for different roles:
  - **Forms** for features like "Add Course" or "Enroll Student".
  - **Tables** for features like "Manage Reports" with sample entries.
- Role-based dropdown to view the UI for different roles.
- Simple and clean UI layout with responsive cards and input fields.

## Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)
- OpenAI API Key

## setup instrunction
### 1. Clone the repository
```bash
git clone https://github.com/ashan24/Mini-AI-App-Builder.git
cd mini-ai-app-builder
```

### 2. Setup backend
```bash
cd backend
npm install
```

#### create .env file on backed and store your openAI api key
```bash
OPENAI_API_KEY=your_openai_api_key_here
```
#### start backend server
```bash
node server.js
```

### 3. setup frontend
```bash
cd frontend
npm install
npm start
```

It will launch an app in your browser and can give your app description to build an app.

