import re

def when(text):
    exp="[A-Z,0-9][a-z,0-9]*[.,/, ]? ?[0-9][0-9]?[,,/, ] ?[0-9]{2,4}"
    result=re.findall(exp,text)
    return result

print when("October 19, 14")
print when("11/10/14")
print when("Oct. 19 2014")
