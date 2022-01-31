/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let filthyRich = 0
    const totalFunds = (previousValue, currentValue) => previousValue + currentValue;
    for (let i = 0; i < accounts.length; i++) {
        let ya = accounts[i].reduce(totalFunds)
        if (ya > filthyRich) {
            filthyRich = ya
        }
    }
    return filthyRich
};

maximumWealth([[1,2,3],[3,2,1]])
maximumWealth([[1,5],[7,3],[3,5]])
maximumWealth([[2,8,7],[7,1,3],[1,9,5]])