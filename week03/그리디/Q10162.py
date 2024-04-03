#10162_전자레인지
a = 5*60
b = 60
c = 10

t = int(input())
a_n = t // a
t %= a
b_n = t// b
t %= b
c_n = t//c

if t % c != 0:  # C 버튼으로 설정할 수 없는 경우
    print(-1)
else:
    print(a_n, b_n, c_n)
