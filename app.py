from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/menu')
def menu():
    return render_template("menu.html")

@app.route('/descargar-menu')
def descargar_menu():
    return send_from_directory("static/files", "menu.pdf", as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
