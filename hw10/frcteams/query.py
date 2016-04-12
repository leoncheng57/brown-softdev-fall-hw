import json, urllib2, httplib
domain = "www.thebluealliance.com"
api = "/api/v2/%s"
hdr = {"X-TBA-App-Id": "frc694:testing-app:v01"}

def getTeamData(teamNumber):
    """
    Gets teamNumber's team information formatted as follows:
        "website": Team's official website URL,
        "name": longform name of team",
        "nickname": Teams nickname or functional name,
        "locality": Team's city,
        "region": Team's state or region,
        "team_number": Team's number,
        "location": Longform locality address,
        "country_name": Name of team's country,
        "rookie_year": Team's rookie year"
    """
    conn = httplib.HTTPConnection(domain)
    path = "team/frc"+str(teamNumber)
    conn.request("GET",api % path ,headers = hdr)
    r = conn.getresponse()
    try:
        answer = json.loads(r.read().decode('utf-8'))
    except:
        return {"404": "FRC team not found"}
    return answer

def isExistingTeam(teamNumber):
    """
    Returns true if the team specified by teamNumber exists. False otherwise
    """
    data = getTeamData(teamNumber)
    return len(data) > 0 and not '404' in data

def isInactiveTeam(teamNumber):
    """
    Returns true if the team specified by teamNumber exists and is inactive.
    False otherwise
    """
    data = getTeamData(teamNumber)
    return '404' in data or data["name"] == None or data["rookie_year"] == None

def getVideoList(array):
    """
    Function to take a list of matches (as retrieved in getAllMatches())
    and converts them to URL strings
    """
    ans = []
    for x in array:
        if x["type"] == "youtube":
            ans += "www.youtube.com/watch?v="+x["key"]
    return ans

def getEventData(year, code):
    """
    Returns the requested event data from the requested year as follows:
        "name": name of event,
        "short_name": short name of event,
        "event_type_string": string defining event type,
        "event_district-string": string defining disctrict of event,
        "location": Longform address of city,
        "venue_address": Longform address of the venue,
        "website": event website string,
        "teams": dictionary of teams at event(formatted as above in getTeamData),
        "matches": dictionary of match data(formatted as below in getMatchData),
        "alliances": Json array of alliances:
            "picks": [captain,team2,team3]
            "declines": [team1,team2, team3]
    """
    conn = httplib.HTTPConnection(domain)
    path = "event/"+str(year)+code
    conn.request("GET",api % path ,headers = hdr)
    r = conn.getresponse()
    answer = r.read().decode('utf-8')
    final = json.loads(answer)
    return final
    
def getAllMatches(year, code):
    """
    Returns list of matches formatted as:
        "key": match key,
        "comp_level": level of competition ie qm,em,qf,sf,f,
        "alliances": {
            "blue": {
                "score": match score
                "teams": list of team keys ie [frc1, frc694, frc9999]
            }
            "red": {
                "score": match score
                "teams": list of team keys ie [frc1, frc694, frc9999]
            }
        "videos" JSON array of available match videos
        "time_string": string of time scheduled for match,
        "time": Unix time scheduled for match}
    """
    conn = httplib.HTTPConnection(domain)
    path = "event/"+str(year)+code+"/matches"
    conn.request("GET",api % path ,headers = hdr)
    r = conn.getresponse()
    answer = r.read().decode('utf-8')
    final = json.loads(answer)
    for x in final:
        x["videos"] = getVideoList(x["videos"])
    return final

def getMatchScore(match):
    """
    Takes an element of getAllMatches List and returns the match scores as follows:
        "blue": score for blue,
        "red: score for red}
    """
    return {
        "blue": match["score_breakdown"]["blue"]["total_points"],
        "red": match["score_breakdown"]["red"]["total_points"]
    }

def getEventList(year):
    """
    Returns list of events. each event is a dict as follows:
        "event_code": event code(can be used to pull event data in other functions),
        "short_name": short name of event,
        "event_type_string": string defining event type,
        "event_district-string": string defining disctrict of event,
        "location": Longform address of city,
        "venue_address": Longform address of the venue,
        "website": event website string,
        "teams": dictionary of teams at event(formatted as above in getTeamData),
        "matches": dictionary of match data(formatted as below in getMatchData),
        "alliances": Json array of alliances:
            "picks": [captain,team2,team3]
            "declines": [team1,team2, team3]
    """
    conn = httplib.HTTPConnection(domain)
    path = "events/"+str(year)
    conn.request("GET", api % (path), headers = hdr)
    r = conn.getresponse()
    answer = r.read().decode('utf-8')
    final = json.loads(answer)
    return final

def getTeamEventList(team, year):
    """
    Returns a list of events in the same format as getEventList(year), but
    only gives events that were attended by the team specified by the 'team'
    parameter
    """
    conn = httplib.HTTPConnection(domain)
    path = "team/frc%s/%s/events" % (str(team), str(year))
    conn.request("GET", api % (path), headers = hdr)
    r = conn.getresponse()
    answer = r.read().decode('utf-8')
    final = json.loads(answer)
    return final

def getAllTeamEvents(team):
    """
    Returns a dict of lists of events a team attended each year, with the
    key being an integer representation of the year
    """
    year = int(getTeamData(team)["rookie_year"])
    events = {}
    while(year<2016):
        events[year] = getTeamEventList(team, year)
        year+=1
    return events
