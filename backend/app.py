from flask import Flask, request, jsonify #type: ignore
from flask_cors import CORS               #type: ignore

app = Flask(__name__)
CORS(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(f'Email: {email}, Password: {password}')
    # Further processing would be added here, such as storing the data in a database
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)