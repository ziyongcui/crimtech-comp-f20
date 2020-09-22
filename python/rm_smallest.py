def rm_smallest(d):
    if len(d) > 0:
        res = list(d.keys())[0]
        remove = d[res]
        index = res
        for key in d:
            if remove > d[key]:
                remove=d[key]
                index = key
        del d[index]
    return d

def test():
    assert 'a' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'b' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'a' in rm_smallest({'a':1,'b':5,'c':3}).keys()
    rm_smallest({})
    print("Success!")

if __name__ == "__main__":
    test()
