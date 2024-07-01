#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool isGroupWord(const string& word) {
    bool visited[26] = { false }; // 알파벳 소문자 'a' ~ 'z'까지 체크용 배열
    
    char prev_char = '\0'; // 이전 문자 기록용 변수
    for (char ch : word) {
        if (prev_char != ch) { // 이전 문자와 현재 문자가 다를 때
            if (visited[ch - 'a']) { // 이미 이전에 나온 적 있는 문자인 경우
                return false; // 그룹 단어가 아님
            }
            visited[ch - 'a'] = true; // 방문 표시
            prev_char = ch; // 이전 문자 업데이트
        }
    }
    return true; // 모든 조건을 만족하면 그룹 단어임
}

int main() {
    int N;
    cin >> N; // 단어의 개수 N 입력

    int count_group_words = 0;
    for (int i = 0; i < N; ++i) {
        string word;
        cin >> word; // 단어 입력

        if (isGroupWord(word)) {
            count_group_words++;
        }
    }

    cout << count_group_words << endl; // 그룹 단어의 개수 출력

    return 0;
}
