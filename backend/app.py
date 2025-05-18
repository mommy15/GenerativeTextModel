from flask import Flask, request, jsonify
from flask_cors import CORS
from auth import register_user, login_user
from generate import generate_text, get_history

# Initialize Flask app and enable CORS


app = Flask(__name__)
CORS(app)

# Route of user data for demonstration purposes
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"success": False, "message": "Email and password are required."}), 400

    return jsonify(register_user(email, password))
# Route of user data for login demonstration purposes
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"success": False, "message": "Email and password are required."}), 400

    return jsonify(login_user(email, password))
# Route of  text generation endpoint
@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt')
    email = data.get('email')

    if not prompt or not email:
        return jsonify({"success": False, "message": "Email and prompt are required."}), 400

    result = generate_text(prompt, email)
    return jsonify({"output": result, "success": True})
# Route of history endpoint
@app.route('/history', methods=['POST'])
def history():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({"success": False, "message": "Email is required."}), 400

    history_data = get_history(email)
    return jsonify({"history": history_data, "success": True})

if __name__ == '__main__':
    app.run(debug=True)
