import _ from 'lodash';

const  ValidAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  const sObject = {};
  const tObject = {};
  for (let i = 0; i < s.length; i++) {
    sObject[s[i]] = 0;
    tObject[t[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    sObject[s[i]] = sObject[s[i]] + 1;
    tObject[t[i]] = tObject[t[i]] + 1;
  }
  if (_.isEqual(sObject, tObject)) return true;
  else return false;
};

export default ValidAnagram;

