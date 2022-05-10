const maxProfit = (prices) => {
    // initialize minimum price
    let minPrice = Infinity;
    
    //initialize accumulated maximum profit to 0
    
    // iterate over array
        // if curr element is less than min price
            // reassign min price
    
    // store difference between current price and min price
    // if difference is greater than max profit
        // reassign max profit
    
    // return that max profit
    
    return prices.reduce((maxProfit, currPrice) => {
        if (currPrice < minPrice) minPrice = currPrice;
        
        const currentProfit = currPrice - minPrice;
        
        if (currentProfit > maxProfit) maxProfit = currentProfit;
        
        return maxProfit;
    }, 0)
};
