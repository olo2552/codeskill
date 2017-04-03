// rewritten JavaScript's coinsChange implementation to see, why heap falls off

#include <iostream>
#include <vector>

vector <int> coins ();
coins[0] = 5;
coins[1] = 2;
coins[2] = 1;

vector <int> getCoinsIterative (unsigned long long int amount) {
    vector <int>  change = [];
    int currentCoinIndex = 0;

    while (amount > 0) {
        int currentCoin = coins[currentCoinIndex];

        if (amount - currentCoin >= 0) {
            change.push_back(currentCoin);
            amount -= currentCoin;
        }

        else {
            currentCoinIndex++;
        }
    }
    return change;
}

int main() {

    vector <int> coinsGotten = getCoinsIterative(12367890);

    return 0;
}
