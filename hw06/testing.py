squares = []
for x in range(8):
    squares.append(x**2)

print squares

print [x for x in range(8)]
print [x*x for x in range(8)]

print [ (x, x*x, x*x*x) for x in range(8) ]

print [ (x, x*x, x**3) for x in range(8) ]

p = "myNoobPass1234"

print p

print [x for x in p]
print [x for x in "1234"]

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
DIGITS = "0123456789"

print [x for x in p if x in UC_LETTERS]

print [1 for x in p if x in UC_LETTERS ]
print [1 if x in UC_LETTERS else 0 for x in p]

print [1
       if x in UC_LETTERS
       else 0
       for x in p]

# TASK 1
# minimum threshold: at least one uppercase, lowercase, number

PWORD = "Hello123"

def task1(s):
    l = [1 if x in DIGITS
            else 2 if x in UC_LETTERS
            else 3 if x in LC_LETTERS
            else 0
            for x in s]
    return (1 in l) and (2 in l) and (3 in l)

print task1(PWORD)

# TASK 2
# password strength rating
# 
