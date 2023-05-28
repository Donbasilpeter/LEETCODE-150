var GroupAnagrams = function (strs) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const heetmap = {};
  let result = [];
  let arrayVar = 0;
  for (let i = 0; i < strs.length; i++) {
    let temp = {};
    letters.map((each) => {
      temp[each] = 0;
    });
    for (let j = 0; j < strs[i].length; j++) {
      temp[strs[i][j]] = temp[strs[i][j]] + 1;
    }
    temp = JSON.stringify(temp);
    if (heetmap.hasOwnProperty(temp)) {
      result[heetmap[temp]].push(strs[i]);
    } else {
      heetmap[temp] = arrayVar;
      result.push([strs[i]]);
      arrayVar = arrayVar + 1;
    }
  }
  return result;
};

export default GroupAnagrams;