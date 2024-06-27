#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string word;
    cin >> word;

    vector<string> croatianAlphabets = {"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};

    for (const string& alphabet : croatianAlphabets) {
        size_t pos = word.find(alphabet);
        while (pos != string::npos) {
            word.replace(pos, alphabet.length(), "#");
            pos = word.find(alphabet, pos + 1);
        }
    }

    cout << word.length() << endl;

    return 0;
}
