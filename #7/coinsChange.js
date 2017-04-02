const coins = [5, 2, 1];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const getCoinsRecursively = (amount) => {
        if (amount === 0)
            return [];

        else {
            const change = coins.find(e => e <= amount);
            return [change, ...getCoinsRecursively(amount - change)];
        }
    };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const getCoinsIterative = (amount) => {
        let change = [];
        let currentCoinIndex = 0;

        while (amount > 0) {
            const currentCoin = coins[currentCoinIndex];

            if (amount - currentCoin >= 0) {
                change.push(currentCoin);
                amount -= currentCoin;
            }

            else {
                currentCoinIndex++;
            }
        }
        return change;
    };

const changedCoinsIteratively = getCoinsIterative(4); // for 123456789 heap out of memory
console.log(changedCoinsIteratively);

const changedCoinsRecursively = getCoinsRecursively(12345); // for 123456 maximum call stack exceeded
console.log(changedCoinsRecursively);


// conclusion:
//		- for big numbers recursive way overflows the stack, and the iterative way overloads the heap
//		    How can I overcome this problem? It's rather problem witch JS's maximum length
//          rather than bad algoritm, but not 100% sure
//      - najpierw myslec => potem robic
//		- ask Andrzej how float system works in JS
//		- not every problem can be solved pure functional <I mean decent solution>
//		- recursive way of achieving the solution wasn't elegant nor optimal
//          (ask Andrzej when to use it)
//		- low abstraction level isn't that bad as front-end devs say
//		- using generators (probably) has no sense for small arrays
// 			<firstly I wrote a generator for coins array, but it turned out that it has no sense,
// 			because task assumes, that this array will be small>
//
