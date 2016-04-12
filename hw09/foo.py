import random
import time

# def wrapper(f):
#     def inner( *arg ):
#         return f(*arg)
#     return inner

# closure = wrapper(foo)
# closure(-2, 3, 'hello')

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

@timer
@name_log
def fib(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return fib(n-1)+fib(n-2)

print fib(3)

#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda: "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda: "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML

def randList(n, lower = -100, upper = 100):
    l = []
    for i in range(n):
        l.append(random.randrange(lower, upper))
    return l

print randList(20)

# QUICKSORT
@name_log
@timer
def qsort(L):
    if (len(L) == 1 or len(L) == 0):
        return L
    pivot = random.choice(L)
    lower = [x for x in L if x<pivot]
    upper = [x for x in L if x>pivot]
    return qsort(lower) + ([pivot] * L.count(pivot)) + qsort(upper)

x = randList(10, -10, 10)
print qsort(x)
