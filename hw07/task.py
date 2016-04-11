def repeat(string):
    return lambda n: n*string;

r1 = repeat("hello")

r2 = repeat("cool")

r3 = repeat("closures!")

print repeat("cool")(3)
print r1(2)
print r2(2)
print r3(3)
