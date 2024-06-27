#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Person {
    int weight;
    int height;
    int rank;
};

int main() {
    int N;
    cin >> N;

    vector<Person> people(N);
    for (int i = 0; i < N; ++i) {
        cin >> people[i].weight >> people[i].height;
        people[i].rank = 1; 
    }

    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            if (i == j) continue; 
            if (people[i].weight < people[j].weight && people[i].height < people[j].height) {
                people[i].rank++;
            }
        }
    }

    for (int i = 0; i < N; ++i) {
        cout << people[i].rank << " ";
    }
    cout << endl;

    return 0;
}
