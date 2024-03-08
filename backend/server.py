# Initializing database connection
import sqlite3
con = sqlite3.connect("transactions.db")
# Database cursor to execute SQL statements and queries
cur = con.cursor()


from flask import Flask, redirect, render_template, request, session
from flask_session import Session
import imghdr
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename

from helpers import generate_filename, ngn#, apology, login_required, ngn


# Configure application
app = Flask(__name__)

app.jinja_env.filters["ngn"] = ngn

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


# Registration route
@app.route("/register", methods=["GET", "POST"])
def register():
    
    """Register user"""
    new_filename = "profilePhoto/profilePhoto.svg"

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Declare a list of existing emails
        rows = cur.execute(
            "SELECT * FROM users WHERE email = :email",
            email=request.form.get("email"),
        )
        if len(rows) > 0:
            return apology("email is already taken!")

        # Create email and password variables
        email = request.form.get("email")
        hashed_password = generate_password_hash(request.form.get("password"))

        # Insert new registrant into database
        cur.execute(
            "INSERT INTO users (email, hash, profilePhoto) VALUES(:email, :hashed_password, :new_filename)",
            email=email,
            hashed_password=hashed_password,
            new_filename=new_filename,
        )
        return render_template("LoginForm.jsx")

    else:
        return render_template("SignForm.jsx")
