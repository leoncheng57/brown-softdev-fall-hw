import random

# INCORRECT
# def qsort(L):
#     if len(L) <= 1:
#         return L
#     pivot = random.choice(L)
#     lh = [x for x in L if x < pivot]
#     uh = [x for x in L if x > pivot]
#     return qsort[lh] + pivot + qsort[uh]


def qsort(L):
    if len(L) <= 1:
        return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    uh = [x for x in L if x > pivot]
    print L.count(pivot)
    return qsort(lh) + ([pivot] * L.count(pivot)) + qsort(uh)

print qsort([12, 321, 312, 4321, 52, 643, 121, 123, 52, 63, 76, 321, 543, 23, 6, 76, 32])

