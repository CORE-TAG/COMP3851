from flask import Flask, request, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
@app.route('/<name>')
def index(name=None):
    if name == 'index.html' or name==None:
        return render_template('index.html', name=name)
    else:
        return render_template('pages/404.html', name=name)

@app.route('/pages/<name>')
def sport(name=None):
    dirs = 'templates/pages/%s' % name
    if not os.path.exists(dirs):
        return render_template('pages/404.html', name=name)
    else:
        return render_template('pages/%s' % name, name=name)

if __name__ == '__main__':
    app.run()