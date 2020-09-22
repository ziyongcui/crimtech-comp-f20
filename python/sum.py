def sum(lst, n):
    # Your code here!
    length = len(lst)
    i=0
    while i < length-1:
        j= i+1
        while j < length:
            if lst[i]+lst[j]==n:
                return True
            j = j+1
        i=i+1
    return False

def test():
    assert sum([-1, 1], 0)
    assert not sum([0,2,3], 4)
    assert sum([0,2,2], 4)
    print("Success!")

if __name__ == "__main__":
    test()
