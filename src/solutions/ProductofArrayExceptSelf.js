const ProductofArrayExceptSelf = function (nums) {
//with division
//   let prod = 1;
//   let result = [];
//   let zeroCount = 0;
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     if (zeroCount > 1) {
//       return new Array(nums.length).fill(0);
//     }
//     if (nums[i] == 0) zeroCount = zeroCount + 1;
//     else prod = prod * nums[i];
//   }
//   if (zeroCount > 1) {
//     return new Array(nums.length).fill(0);
//   }

//   for (let i = 0; i < length; i++) {
//     if (zeroCount == 1) {
//       if (nums[i] == 0) result.push(prod);
//       else result.push(0);
//     } else result.push(prod / nums[i]);
//   }
//   return result;

//without divison;
let store = 1;
let prod = 1;
let arr1 = []
for (let i = 0; i < nums.length; i++) {
    let val = prod * store;
    arr1.push(val)
    prod = val;
    store = nums[i]
}
store = 1;
prod = 1;
for (let i = nums.length-1; i >=0; i--) {
    let val = prod * store;
    arr1[i]=arr1[i]*val
    prod = val;
    store = nums[i]

}
return arr1
};

export default ProductofArrayExceptSelf;
