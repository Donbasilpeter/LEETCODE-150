const containsDuplicate = function (nums) {
  //solution 1
  // return reculse(nums[0],nums.slice(1,nums.length))

  //solution 2
  // for(let i=0; i < nums.length-1; i++){
  //     if(nums.slice(i+1,nums.length).includes(nums[i])) return true
  // }
  // return false

  //  solution 3
  const mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) return true;
    else mySet.add(nums[i]);
  }
  return false;

  //solution 5
  // const obj = {}
  // for(let i=0; i < nums.length; i++){
  //     if(obj[nums[i]] === true)   return true
  //     else obj[nums[i]]=true
  // }
  // return false

  //solution 4
  // const mySet = new Set();
  // nums.map(each=>mySet.add(eaczh))
  // if(mySet.size===nums.length) return false
  // else return true
};

//for solution 1
// const reculse = (num,arr = [])=>{
//     console.log(num,arr)
//     return arr.includes(num) ? true : arr.length > 1 ? reculse(arr[0],arr.slice(1,arr.length)) : false
// }

export default containsDuplicate;
