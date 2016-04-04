def repeat(s):
    def r(n):
        return n*s #you can multiply a string
    return r

r1 = repeat("hello")

r2 = repeat("cool")

r3 = repeat("closures!")

print repeat("cool")(3)
print r1(2)
print r2(2)
print r3(3)
