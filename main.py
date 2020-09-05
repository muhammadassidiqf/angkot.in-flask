from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('beranda.html')

@app.route('/tentang', methods=['GET','POST'])
def tentang():
    return render_template('tentang.html')

@app.route('/kontak', methods=['GET','POST'])
def kontak():
    return render_template('kontak.html')

@app.route('/sumber', methods=['GET','POST'])
def sumber():
    return render_template('sumber.html')

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)