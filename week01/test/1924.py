# 2007년 1월 1일 월요일
# 2007년 x월 y일 ???
x, y = map(int,input().split())
cal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN']
sum = 0
for i in range(x-1):
    sum += cal[i]

sum += y
day_idx = sum % 7 -1
print(day[day_idx])