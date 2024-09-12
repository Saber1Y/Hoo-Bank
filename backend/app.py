import sqlite3
from flask import Flask, request, jsonify        #type: ignore
from flask_cors import CORS                      #type: ignore

app = Flask(__name__)
CORS(app)

# Connect to the database located in the 'database' folder
conn = sqlite3.connect('database/users.db', check_same_thread=False)
cursor = conn.cursor()

# Create users table if it does not already exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
''')
conn.commit()

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Check if the email already exists
    cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({'status': 'error', 'message': 'User already exists'}), 400
    
    # Insert into the database if email doesn't exist
    cursor.execute('INSERT INTO users (email, password) VALUES (?, ?)', (email, password))
    conn.commit()

    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
