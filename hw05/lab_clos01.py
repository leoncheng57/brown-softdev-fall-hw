'''
Software Development
LAB: List Comprehensions in Python
'''

#one way to generate a list of consecutive integers:
nums = []
for x in range(8):
    nums.append(x)

#print nums

#another:
#print range(8)


#now suppose you want a list of squares...

#one way:
squares = []
for x in range(8):
    squares.append(x**2)

#print squares


#ENTER LIST COMP!


'''
from 
https://docs.python.org/2/tutorial/datastructures.html
----
A list comprehension consists of brackets containing an expression
 followed by a for clause,
 then zero or more for or if clauses.

The result will be a new list resulting from evaluating the expression in the context of the for and if clauses which follow it. 
'''

#at its simplest:
#print [x for x in range(8)]


#print [x for x in range(8)]



    
#cooler:
#print [x*x for x in range(8)]

#a tuple (immutable list):
#print [ (x, x*x, x*x*x) for x in range(8) ]



#combine elements of two lists if they are not equal:

combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))

print combs

#OR

print [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]




p="myNoobPass1234"

#print [x for x in p]

#print [x for x in "1234"]

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

#print [ x for x in p if x in UC_LETTERS ]

#print [ 1 for x in p if x in UC_LETTERS ]

#print [ 1 if x in UC_LETTERS else 0 for x in p ]

'''
thoughts on TASKS:
write a function that uses list comprehension to
a) assess password strength (boolean return or strength rating?)
or
b) verify that a text entry is an email address
'''
