# Generative Text Model Web Application

This is a full-stack web application that generates coherent paragraphs based on a given user prompt using Natural Language Processing (NLP). It is built as part of Task 4 for the **CodTech IT Solutions internship**.

## Features

- User registration and login system
- Input custom prompt to generate paragraphs
- Built using Flask (backend) and React.js + Bootstrap (frontend)
- Stores user credentials in a CSV file
- Uses a simple transformer-based model for text generation

## Tech Stack

**Frontend:**
- React.js
- Bootstrap
- Axios

**Backend:**
- Python
- Flask
- Flask-CORS
- Transformers (HuggingFace)
- Pandas
- CSV for user management

## 📁 Project Structure
generative_text_model/
│
├── backend/
│ ├── app.py # Flask backend logic
│ ├── auth.py # User registration & login functions
│ ├── generate.py # Text generation logic using transformers
│ ├── users.csv # Stores registered users
│ └── requirements.txt # Backend dependencies
│
└── frontend/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── GenerateText.js
│ │ ├── Login.js
│ │ ├── Register.js
│ │ └── Navbar.js
│ ├── App.js
│ ├── index.js
│ └── App.css
└── package.json # Frontend dependencies


**Example Usage**
 -Register or log in
 -Enter a short prompt like: The future of AI is
 -Click on Generate
 -The model returns a full paragraph based on your input

## Requirements
Python 3.7+
Node.js and npm
transformers, flask, flask-cors, pandas, etc.

###Notes
This is a basic prototype and can be extended using more advanced transformer models such as Deepseek R1.

Currently supports generation from one prompt per request.

**License**
This project is for educational purposes as part of the CodTech IT Solutions internship program.




