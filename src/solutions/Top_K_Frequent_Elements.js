
var Top_K_Frequent_Elements = function(nums, k) {
    let result = []
    let large = 0
    const hashMap = {};
    nums.map(each=>{
        hashMap[each] = 0;
    })
    nums.map(each=>{
        hashMap[each] = hashMap[each] + 1;
    })
    for(let i=0;i<k;i++){
        large = Object.keys(hashMap)[0]
        for (const key in hashMap) {
            if(hashMap[key]>hashMap[large]){
                large = key
            }
        }
        result.push(large)
        delete hashMap[large];
    }
    return result

    
};

export default Top_K_Frequent_Elements;