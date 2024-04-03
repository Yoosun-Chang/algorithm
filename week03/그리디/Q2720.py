#2720_세탁소 사장 동혁
    #쿼터(Quarter, $0.25)
    #다임(Dime, $0.10)
    #니켈(Nickel, $0.05)
    #페니(Penny, $0.01)

t = int(input())
quater = 25
dime = 10
nickel = 5
penny = 1
for _ in range(t):
    c = int(input())
    q = c // quater
    c %= quater
    d = c // dime
    c %= dime
    n = c // nickel
    c %= nickel
    p = c // penny
    c %= penny
    print(q, d, n, p)
