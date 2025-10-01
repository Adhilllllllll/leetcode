/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let TotalDrunk=numBottles ;
    while(numBottles >=numExchange){
        let newBottles=Math.floor(numBottles/numExchange);
        let remainingEmpty=numBottles % numExchange;
        TotalDrunk +=newBottles;
        numBottles =newBottles + remainingEmpty;
    }
  return TotalDrunk
};