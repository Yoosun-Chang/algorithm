#2810_컵홀더
n = int(input())
seats = input()
l = seats.count('LL')
print(min(n+1-l,n))
