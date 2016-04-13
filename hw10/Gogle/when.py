import re

def getDates(text, dic):
    """
    [A-Z][a-z]*: Handles if the first word starts with a capital letter
                         followed by lowercase

    [.,/, ]? ?:          Handles characters following the first word. Includes
                         slashes(/), periods(.), and spaces( ). It also handles
                         the case when there is a space following it.

    [0-9][0-9]*: Similar to above

    [,,/, ] ?:           Similar to above

    ?[0-9]{4}:         Handles the year, restricting it from 4 characters

    
    """
    exp="[A-Z][a-z]*[.,/, ]? ?[0-9][0-9]*[,,/, ] ?[0-9]{4}"
    result = re.findall(exp,text);
    for name in result:
        if name not in dic:
            dic[name]=0;
        dic[name]+=1;

    return dic

def when(namedict):
    test=[]
    for something in namedict:
        test+=[[namedict[something],something]]
    
    test.sort()
    print test
    return test[-1][1]

