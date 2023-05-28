const Two_Sum = function (nums, target) {
  const mySet = new Set();
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      arr.push(i);
    }
    let temp = target - nums[i];
    mySet.add(temp);
  }
  arr.push(nums.indexOf(target - nums[arr[0]]));
  return arr;
};

export default Two_Sum;
