def inc(x):
    return x + 1

f = inc

print inc(10)
print f(10)

def h(x):
    return lambda y: x-y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

b = h(1)
print b


def f(x):
    def g(y):
        return x - y
    return g #Note: remember to return g

print f(1)
print f(1)(2)

a = f(1)
b = h(1)
print a(123)
