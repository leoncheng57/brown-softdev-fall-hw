def union(A, B):
    return [x for x in A if x not in B] + B

def set_difference(a, b):
    return [x for x in a if x not in b]

def cartesian_product(a, b):
    return [(x, y) for x in a for y in b]

def inter(a, b):
    return [x for x in a if x in b]

def sym_diff(A, B):
    return union(set_diff(a, b), set_diff(b, a))

print union([1,2,3,4,5],[5,6,7])

