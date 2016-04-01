def repeat(s):
    def r1(n):
        i = 0;
        result=""
        while(i<n):
            result+=s
            i+=1
        return result
    return r1

print repeat("cool")(3)

# def r1(n):
#     s = "hello"
#     i = 0;
#     result=""
#     while(i<n):
#         result+=s
#         i+=1
#     return result

# print r1(2)
