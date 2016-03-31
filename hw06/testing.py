squares = []
for x in range(8):
    squares.append(x**2)

print squares

print [x for x in range(8)]
print [x*x for x in range(8)]

print [ (x, x*x, x*x*x) for x in range(8) ]
