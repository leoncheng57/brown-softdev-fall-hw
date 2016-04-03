def repeat(s):
    def r(n):
        i = 0
        result = ""
        while(i<n):
            result += s
            i+=1
        return result
    return r

def r1(n):
    return repeat("hello")(n)

def r2(n):
    return repeat("goodbye")(n)

def r3(n):
    return repeat("closures!")(n)

print repeat("cool")(3)
print r1(2)
print r2(2)
print r3(3)
