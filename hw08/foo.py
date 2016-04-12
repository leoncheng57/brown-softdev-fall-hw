def union(a, b):
    return [x for x in a if x not in b] + b

print union( [1, 2, 3],
             [2, 3, 4])

def inter(a, b):
    return [x for x in a if x in b]
    
print inter( [1, 2, 3],
             [2, 3, 4])

def set_diff(a, b):
    return [x for x in a if x not in b]

print set_diff( [1, 2, 3],
                [2, 3, 4])

print set_diff( [2, 3, 4],
                [1, 2, 3])

def sym_diff(a, b):
    return set_diff( union(a, b), inter(a, b) )

print sym_diff( [1, 2, 3],
                [2, 3, 4])

def cart_prod(a, b):
    return [(x, y) for x in a for y in b]

print cart_prod( [1, 2],
                 ["red","white"])
