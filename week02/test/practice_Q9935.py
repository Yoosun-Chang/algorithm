#9935_문자열 폭발
input_str = input().rstrip()
bomb_str = input().rstrip()

stack = []

for char in input_str:
    stack.append(char)
    if ''.join(stack[-len(bomb_str):]) == bomb_str:
        for _ in range(len(bomb_str)):
            stack.pop()

result = ''.join(stack)
if result:
    print(result)
else:
    print("FRULA")
