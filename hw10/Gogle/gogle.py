import json,urllib2, google, bs4, re, when



##q=input();#prompts user

def isName(name):
    """
    Checks if the name is a name using a dictionary api

    Args:
         name: A list of size 1 ["<first>","<last>"]

    Returns:
         True if the first AND last name is not a valid word in 1
         the dictionary api.
         
         False otherwise
    """
    url="""
    http://dictionaryapi.net/api/definition/%s
    """
    url=url%(str(name[0]))
    request_url = urllib2.urlopen(url)
    result = request_url.read()
    r = json.loads(result)
    if r==[]:
        url="""
        http://dictionaryapi.net/api/definition/%s
        """
        url=url%(str(name[1]))
        request_url = urllib2.urlopen(url)
        result = request_url.read()
        r = json.loads(result)
        if r==[]:
            return True
    return False
    

def getNames(text, dic):
    """
    Uses regex to parse the text in this format:

    <1 uppercase followed by lowercase letters> <SPACE> <1 uppercase followed by lowercase letters>

    Args:
         text: A giant string from the url
         dic: an empty dictionary

    Returns:
         Returns a dictionary of regexed names and their frequencies. 
         Ex:
    
         {"Peter Parker":27, "Tobey Maguire":14}
    """
    exp = "[A-Z][a-z]+ [A-Z][a-z]+"
    result = re.findall(exp,text);
    for name in result:
        if name not in dic:
            dic[name]=0;
        dic[name]+=1;

    return dic

def who(namedict):
    """
    Traverses namedict and puts it into a sorted list.
    Traverses the list from highest frequencies to lowest
    and returns the name that is validified first.

    Args:
         namedict: A dictionary of regexed names and their frequencies.
                   (see getNames(text,dic))

    Returns:
         Returns a string of the name that has the highest frequency
         AND is not in the english dictionary
    """
    test=[]
    for something in namedict:
        test+=[[namedict[something],something]]
    
    test.sort()
    print test
    for name in test[::-1]:
        if isName(name[1].split(" ")):
            return name[1]
    return test[-1][1]

def getStuff(text,namedict,query):
    a = query.lower().split()[0]
    if a == 'who':
        return getNames(text,namedict)
    elif a == 'when':
        return when.getDates(text,namedict)
    else:
        return 'error'

def answer(namedict,query):
    a = query.lower().split()[0]
    if a == 'who':
        return who(namedict)
    elif a == 'when':
        return when.when(namedict)
    else:
        return 'error'
    
def search(query):
    """
    Uses the google module to search a query

    Args:
         query: A string from input()

    Returns:
         Returns a string of the answer to the query
    """
    r = google.search(query,num=10,start=0,stop=10)
    namedict={}
    webnum=0

    for result in r:
        print result
        try:
            u = urllib2.urlopen(result)
            page = u.read()
        except:
            print 'connection error, skipping'
            pass
        soup = bs4.BeautifulSoup(page,"html.parser")
        raw = soup.get_text()
        text = re.sub("[\t\n ]"," ",raw)
        namedict = getStuff(text,namedict,query)
        webnum+=1

    print 'number of websites used: '+str(webnum)
    return answer(namedict,query)


##print search(q)
#print isName(["peter","parker"])
#print search('when was justin beiber born') is march 1 1994 
