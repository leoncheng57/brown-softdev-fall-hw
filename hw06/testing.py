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

def task1(s):
    l = [1 if x in DIGITS
            else 2 if x in UC_LETTERS
            else 3 if x in LC_LETTERS
            else 0
            for x in s]
    return (1 in l) and (2 in l) and (3 in l)

print task1("Hello123")

# TASK 2
# password strength rating
# weak password - return low integer
# options: mixture of upper and lower, nums, non-alphanumeric chars, 
# also length

def task2(s):
    l = [1 if x in UC_LETTERS
         else 2 if x in LC_LETTERS
         else 3 if x in DIGITS
         else 4 if x in ".?!&#,;:-_*"
         else 0
         for x in s]
    #find how many unique chars types there are
    result = 0
    if 0 in l:
        result += 1
    if 1 in l:
        result += 1
    if 2 in l:
        result += 1
    if 3 in l:
        result += 1
    if 4 in l:
        result += 1
    result *= len(s)**3 #emphasize influence of pword length
    result = -1*(1.0/(0.00001*(result+10000)))+10 #this math formula is used to put numbers on a 0-10 scale
    return result
        
print task2("123")
print task2("password")
print task2("BetterPasswod!!")
print task2("Hello123!@@!##$!@$!%")
print task2("hellowhatishappeninghtereinlifehonesltythosnowwhatlonger")
