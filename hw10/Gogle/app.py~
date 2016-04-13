from flask import Flask, render_template, request, redirect, url_for

import gogle
import when

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def main():
    if request.method == "GET":
        return render_template("search.html")
    else:
        search = request.form["search"]
        answer = gogle.search(search)
        return render_template("answer.html", ANS=answer, SEARCH=search)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8000)
