#2631_줄세우기
import sys

input = sys.stdin.readline

lst = []
while input():
    lst.append(int(input()))
cnt = 0


lst_sorted = lst.sort()
if lst == lst_sorted:
    print(cnt)