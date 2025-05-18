import csv
import os

USER_FILE = 'user.csv'

# Initialize user.csv with headers if it doesn't exist
if not os.path.exists(USER_FILE):
    with open(USER_FILE, mode='w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['email', 'password'])
        writer.writeheader()
# Initialize user.csv with headers if it doesn't exist
def register_user(email, password):
    # Check for existing user
    with open(USER_FILE, mode='r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['email'] == email:
                return {"success": False, "message": "Email already registered."}

    # Add new user
    with open(USER_FILE, mode='a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['email', 'password'])
        writer.writerow({'email': email, 'password': password})
    return {"success": True, "message": "User registered successfully."}

def login_user(email, password):
    with open(USER_FILE, mode='r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['email'] == email and row['password'] == password:
                return {"success": True, "message": "Login successful."}
    return {"success": False, "message": "Invalid credentials."}
