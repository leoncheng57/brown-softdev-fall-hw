from flask import Flask, render_template, request, redirect, url_for

import gogle
import when
import time
import random

app = Flask(__name__)


def name_log(f):
    def inner( *arg ):
        print f.func_name + ": " + str(*arg)
        return f(*arg)
    return inner

def timer(f):
    def inner( *arg ):
        t = time.time()
        x = f(*arg)
        print 'execution time: ' + str(time.time() - t)
        return x
    return inner


@app.route("/", methods=["GET","POST"])
@timer
@name_log
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
