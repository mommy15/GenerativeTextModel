import requests
from datetime import datetime
import csv
import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

# Retrieve API key securely 
# Instead of downloading transformers locally, accessing through inference API from HUGGINGFACE via openRouter
API_KEY = os.getenv("BEARER")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

# Check if API key is set
def generate_text(prompt, user_email):
    try:
        if not API_KEY:
            return "Error: API key not found. Please set BEARER in your .env file."

        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "deepseek/deepseek-r1:free",  # The huggingface model name 
            "messages": [
                {"role": "system", "content": "You are a helpful and informative assistant."},
                {"role": "user", "content": prompt} # User's prompt
            ],
            "temperature": 0.7, # Temperature controls for randomness
            "top_p": 0.9 # Top-p for sampling
        }

        response = requests.post(API_URL, headers=headers, json=payload)

        if response.status_code == 200:
            result = response.json()['choices'][0]['message']['content'].strip()
            save_to_history(user_email, prompt, result)
            return result
        else:
            return f"API Error {response.status_code}: {response.text}"

    except Exception as e:
        return f"Exception occurred: {str(e)}"

# Function to save user history
def save_to_history(email, prompt, output):
    sanitized_email = email.replace('@', '_at_').replace('.', '_')
    filename = f"history_{sanitized_email}.csv"
    file_exists = os.path.exists(filename)

    with open(filename, mode='a', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['timestamp', 'prompt', 'output'])
        if not file_exists:
            writer.writeheader()
        writer.writerow({
            'timestamp': datetime.now().isoformat(),
            'prompt': prompt,
            'output': output
        })
# Function to retireve user history
def get_history(email):
    sanitized_email = email.replace('@', '_at_').replace('.', '_')
    filename = f"history_{sanitized_email}.csv"
    if not os.path.exists(filename):
        return []
    
    with open(filename, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        return list(reader)
