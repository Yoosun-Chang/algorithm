#include <iostream>
#include <vector>
#include <algorithm>
#include <stack>

using namespace std;

int main() {
    stack <int> zero;
    int a;
    cin >> a;
    while(a--){
        int k;
        cin >> k;
        if(k!=0) zero.push(k);
        if(k==0) zero.pop();
    }
    int sum = 0;
    int size = zero.size();
    for(int i = 0; i<size; i++){
        sum += zero.top();
        zero.pop();
    }
    cout << sum <<endl;
    return 0;
}