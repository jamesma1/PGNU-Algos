/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isAnagram = function(s, t) {
  var lengthA = s.length;
  var lengthB = t.length;
  var map = {};

  if (lengthA !== lengthB) return false;

  for (var i = 0; i < lengthA; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
  }

  for (var j = 0; j < lengthB; j++) {
    if (!map[t[j]]) return false;
    map[t[j]]--;
  }

  return true;
};
