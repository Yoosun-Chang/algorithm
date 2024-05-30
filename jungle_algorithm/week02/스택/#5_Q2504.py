def close_bracket(st, bracket):
    open_bracket = "[" if bracket == "]" else "("  # 닫는 괄호에 대응하는 여는 괄호 결정
    mult = 3 if bracket == "]" else 2  # 괄호 안에 있는 숫자에 대한 배수 결정
    
    total = 0
    while st and st[-1] not in {"(", "["}:  # 스택이 비어있지 않고, 여는 괄호가 아닐 때까지 반복
        total += int(st.pop())  # 스택에서 값을 꺼내서 누적 합산
    
    if not st or st[-1] != open_bracket:  # 스택이 비어있거나, 일치하지 않는 여는 괄호가 맨 위에 있을 때
        print("0")  # 결과가 유효하지 않으므로 0을 출력
        return False
    
    st.pop()  # 여는 괄호를 스택에서 제거
    st.append(str(total * mult))  # 여는 괄호로 둘러싼 부분에 대한 결과를 스택에 추가
    return True

def get_answer(st):
    result = 0
    while st:
        if st[-1] in {"(", "["}:  # 스택의 맨 위에 여는 괄호가 있으면
            return 0  # 결과가 유효하지 않으므로 0을 반환
        result += int(st.pop())  # 스택에서 값을 꺼내서 결과에 누적 합산
    return result

def main():
    s = input().strip()  # 입력 문자열 받기
    st = []  # 스택 초기화
    
    i = 0
    while i < len(s):
        if s[i:i+2] == "()":  # 괄호 쌍이 ()인 경우
            st.append("2")  # 스택에 2 추가
            i += 2  # 다음 문자열로 이동
        elif s[i:i+2] == "[]":  # 괄호 쌍이 []인 경우
            st.append("3")  # 스택에 3 추가
            i += 2  # 다음 문자열로 이동
        elif s[i] == "(":  # 여는 소괄호인 경우
            st.append("(")  # 스택에 ( 추가
            i += 1  # 다음 문자열로 이동
        elif s[i] == "[":  # 여는 대괄호인 경우
            st.append("[")  # 스택에 [ 추가
            i += 1  # 다음 문자열로 이동
        elif s[i] in {"]", ")"}:  # 닫는 괄호인 경우
            if not close_bracket(st, s[i]):  # 닫는 괄호 처리 함수 호출하여 결과 확인
                return  # 결과가 유효하지 않으면 종료
            i += 1  # 다음 문자열로 이동
    
    print(get_answer(st))  # 결과 출력

if __name__ == "__main__":
    main()
