#1181
n = int(input())
words = []
for i in range(n):
    word = input()  # 한 줄씩 입력을 받음
    if [word, len(word)] not in words:  # 이미 있는 단어는 추가하지 않음
        words.append([word, len(word)])  # 입력 값과 해당 값의 길이를 리스트에 추가

# 길이를 기준으로 먼저 정렬하고, 길이가 같은 경우에는 사전순으로 정렬
sorted_words = sorted(words, key=lambda x: (x[1], x[0]))

# 정렬된 결과 출력
for word in sorted_words:
    print(word[0])


