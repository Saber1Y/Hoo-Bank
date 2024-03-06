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
        # Check if textbox is blank
        if not request.form.get("username"):
            return apology("must provide username", 400)
        # Check if password box is blank
        if not request.form.get("password"):
            return apology("must provide password", 400)
        # Check if password is cross-checked
        if not request.form.get("confirmation"):
            return apology("must retype password", 400)
        # Check if passwords match
        if not request.form.get("confirmation") == request.form.get("password"):
            return apology("passwords do not match", 400)

        # Declare a list of existing usernames
        rows = cur.execute(
            "SELECT * FROM users WHERE username = :username",
            username=request.form.get("username"),
        )
        if len(rows) > 0:
            return apology("username is already taken!")

        # Create username and password variables
        username = request.form.get("username")
        hashed_password = generate_password_hash(request.form.get("password"))

        # Check if image is uploaded
        #if request.files.get("profile_photo"):
        #    # Check image validity
        #    if imghdr.what(request.files.get("profile_photo")) is not None:
        #        # handle the image upload
        #        file = request.files["profile_photo"]
        #        # Fetching original filename
        #        original_filename = secure_filename(file.filename)
        #        file_data = file.read()
#
        #        new_filename = generate_filename(username, original_filename)
#
        #        with open(f"static/profilePhoto/{new_filename}", "wb") as f:
        #            f.write(file_data)
        #    else:
        #        return apology("Upload an image file", 415)

        # Insert new registrant into database
        cur.execute(
            "INSERT INTO users (username, hash, profilePhoto) VALUES(:username, :hashed_password, :new_filename)",
            username=username,
            hashed_password=hashed_password,
            new_filename=new_filename,
        )
        return render_template("login.html")

    else:
        return render_template("register.html")