/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum=0;
    let hash={}
    for(let num of nums ){
        if(hash[num]){
            hash[num]=hash[num] +1
        }
        else{
            hash[num]=1
        }
    }
    for(key in hash){
        if(hash[key]==1){
            sum+=+key
        }
    }
    return sum
};
