#include <iostream>

using namespace std;

int main() {
    int X;
    cin >> X; 
    
    int diagonal = 1; 
    int count = 0; 

    while (count < X) {
        count += diagonal; 
        diagonal++; 
    }

    diagonal--; 
    count -= diagonal; 

    int position = X - count; 
    int numerator, denominator; 

    if (diagonal % 2 == 0) {
        numerator = position; 
        denominator = diagonal - position + 1;
    } else {
        numerator = diagonal - position + 1; 
        denominator = position;
    }

    cout << numerator << "/" << denominator << endl;
    
    return 0;
}
