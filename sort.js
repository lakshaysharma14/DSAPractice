// You can pass a custom comparison function to Array.prototype.sort(), like so:

var sortedArray = array.sort(function(a, b) { return a - b; });
//This would sort an array of integers in ascending order. The comparison function should return:

/*
* an integer that is less than 0 if you want a to appear before b
* an integer that is greater than 0 if you want b to appear before a
* 0 if a and b are the same
=> So, for this example you would want something like:
*/

var sortedArray = array.sort(function(a, b) {
  return b[0] - a[0];
});
// If you wanted to sort on both elements of each sub-array (ie. sort by the first element descending, then if they are the same then sort by the second element descending), you could do this:

var sortedArray = array.sort(function(a, b) {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return b[0] - a[0];
});