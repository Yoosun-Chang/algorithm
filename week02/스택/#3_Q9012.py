# 9012
T = int(input())  # 입력 데이터의 수를 입력받습니다.

for _ in range(T):
    vps = input()  # 괄호 문자열을 입력받습니다.
    stack = []  # 스택을 초기화합니다.
    
    # 괄호 문자열을 순회하며 스택에 괄호를 추가하거나 제거합니다.
    for char in vps:
        if char == '(':
            stack.append(char)  # 여는 괄호일 경우 스택에 추가합니다.
        else:
            # 닫는 괄호일 경우 스택이 비어있지 않고, 맨 위의 괄호가 여는 괄호인지 확인합니다.
            if stack and stack[-1] == '(':
                stack.pop()  # 맨 위의 여는 괄호를 제거합니다.
            else:
                print("NO")  # 올바른 괄호 문자열이 아니므로 "NO"를 출력하고 반복을 종료합니다.
                break
    else:
        # 반복문이 정상적으로 종료되었을 때 스택이 비어있으면 올바른 괄호 문자열입니다.
        if not stack:
            print("YES")
        else:
            print("NO")
