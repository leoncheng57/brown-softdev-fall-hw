import random
import time

#a simple example of applying multiple decorators 
def make_bold(fn): 
    return lambda : "<b>" + fn() + "</b>" 

def make_italic(fn): 
    return lambda : "<i>" + fn() + "</i>" 

@make_bold 
@make_italic 
def hello(): 
    return "hello world" 
 
helloHTML = hello() 
 
print helloHTML 


def name_log(f):
    def inner(*arg):
        #t = time.time()
        x = f(*arg)
        print f.func_name + ": " + str(arg)
        return x
    return inner

def timer(f):
    def inner(*arg):
        t = time.time()
        #x = f(*arg)
        print 'execution time: '+str(time.time() - t)
        return x
    return inner

def randList(n, lower = -100, upper = 100):
    l = []
    for i in range(n):
        l.append(random.randrange(lower, upper))
    return l

@timer
@name_log
def qsort(L):
    if len(L) <= 1:
        return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    uh = [x for x in L if x > pivot]
    print L.count(pivot)
    return qsort(lh) + ([pivot] * L.count(pivot)) + qsort(uh)

x = randList(10, -10, 10)
q = qsort(x)
name_log(qsort)

