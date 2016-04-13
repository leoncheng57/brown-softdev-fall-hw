from flask import Flask, render_template, request, redirect, url_for

import data
import query
import time
import random

app = Flask(__name__)


def name_log(f):
    def inner( *arg ):
        print f.func_name + ": " + str(arg)
        return f(*arg)
    return inner

def timer(f):
    def inner( *arg ):
        t = time.time()
        x = f(*arg)
        print 'execution time: ' + str(time.time() - t)
        return x
    return inner

@app.route("/", methods=["GET", "POST"])
@app.route("/@<teamNum>", methods=["GET", "POST"])
@app.route("/@<teamNum>/", methods=["GET", "POST"])
@app.route("/@<teamNum>/@<year>/@<code>", methods=["GET","POST"])
@timer
@name_log
def main(teamNum=-1,year=-1, code=""):
    """
    This is the main method for the web app. If the teamNum variable is not set,
    or is not a valid team number, the web app will render a different page.
    Otherwise, it will render the page, providing a dictionary with basic team
    info and a dictionary of score results.
    """
    if request.method == "POST":
        return redirect("/@%s" % (str(request.form["team"])))
    if teamNum == -1:
        return render_template("start_page.html")
    if not teamNum.isdigit():
        return render_template("invalid_team.html", TEAM=teamNum)
    team = int(teamNum)
    if not query.isExistingTeam(team):
        return render_template("inexistent_team.html", TEAM=teamNum)
    if query.isInactiveTeam(team):
        return render_template("inactive_team.html", TEAM=teamNum)
    yearNum = int(year)
    if year!= -1 and code!= "":
        avgScore = data.getAverageScoreFromCode(team, yearNum, code)
        avgQual = data.getAverageQualScoreFromCode(team, yearNum, code)
        avgElim = data.getAverageElimScoreFromCode(team, yearNum, code)
        teamBasicData = query.getTeamData(team)
        eventData = query.getEventData(yearNum, code)
        return render_template("team_stats.html", BASIC=teamBasicData, EVENT=eventData, SCORE=avgScore, QUAL=avgQual, ELIM=avgElim, YEAR=year)
    teamBasicData = query.getTeamData(team)
    teamEventData = query.getAllTeamEvents(team)
    return render_template("team.html", BASIC=teamBasicData,EVENTS=teamEventData)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
